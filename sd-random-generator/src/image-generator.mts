import type { OptionSetting, Setting } from "@tenpamk2/sd-db-generator";
import type { OptionCollectedData, RootCollectedData } from "./collector.mjs";
import { ProgressBar, log } from "./logger.mjs";
import {
  Txt2imgGenerator,
  type Txt2ImgBodyJson,
} from "./txt2img-generator.mjs";

class StatusPoller {
  readonly progressBar: ProgressBar;
  readonly intervalID: NodeJS.Timeout;

  constructor({ ip, port }: Setting["machine"]) {
    this.progressBar = new ProgressBar();

    this.intervalID = setInterval(async () => {
      const response = await fetch(`http://${ip}:${port}/sdapi/v1/progress`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      this.progressBar.update(json.progress, json.eta_relative);
    }, 10000);
  }

  stop() {
    this.progressBar.stop();
    clearInterval(this.intervalID);
  }

  complete() {
    this.progressBar.update(this.progressBar.maxProgress, 0);
    this.stop();
  }
}

const batchGenerate = async (
  option: GenerationData["options"][number],
  machine: Setting["machine"],
) => {
  log(`Generating option \`${option.key}\` batch...`);

  await postOption(option.optionsBodyJson, machine);

  for (let i = 0; i < option.batchGeneration; i++) {
    const txt2imgBodyJson = option.txt2imgGenerator.generate();

    log(`Generating batch No. ${i} with the following keys...`);
    log(`  character : \`${txt2imgBodyJson._key.character}\``);
    log(`  outfit    : \`${txt2imgBodyJson._key.outfit}\``);
    log(`  background: \`${txt2imgBodyJson._key.background}\``);
    log(`  pose      : \`${txt2imgBodyJson._key.pose}\``);

    const statusPoller = new StatusPoller(machine);
    await postTxt2img(txt2imgBodyJson, machine);
    statusPoller.complete();
  }
};

const postOption = async (
  optionsBodyJson: OptionSetting["optionsBodyJson"],
  { ip, port }: Setting["machine"],
) => {
  log(`Posting options...`);
  log(`  \`sd_model_checkpoint\`: \`${optionsBodyJson.sd_model_checkpoint}\``);
  log(`  \`sd_vae\`             : \`${optionsBodyJson.sd_vae}\``);

  const json = {
    outdir_txt2img_samples: "outputs/",
    do_not_show_images: true,
    live_previews_enable: false,
    ...optionsBodyJson,
  };

  await fetch(`http://${ip}:${port}/sdapi/v1/options`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
};

const postTxt2img = async (
  txt2imgBodyJson: Txt2ImgBodyJson,
  { ip, port }: Setting["machine"],
) => {
  const json = {
    seed: -1,
    batch_size: 1,
    send_images: false,
    save_images: true,
    alwayson_scripts: {},
    ...txt2imgBodyJson,
  };

  await fetch(`http://${ip}:${port}/sdapi/v1/txt2img`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
};

type OptionCollectedDataWithBuilder = Omit<OptionCollectedData, "txt2imgs"> & {
  txt2imgGenerator: Txt2imgGenerator;
};

export type GenerationData = Omit<
  RootCollectedData,
  "export" | "optionSettings"
> & {
  options: OptionCollectedDataWithBuilder[];
};

export const generate = async (generationData: GenerationData) => {
  log("Generating images...");

  do {
    for (const option of generationData.options) {
      await batchGenerate(option, generationData.machine);
    }
  } while (generationData.generateForever);
};
