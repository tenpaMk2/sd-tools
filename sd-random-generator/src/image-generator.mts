import { OptionCollectedData, RootCollectedData } from "./collector.mjs";
import { OptionSetting, Setting } from "./setting-define.mjs";
import { Txt2ImgBodyJson, Txt2imgGenerator } from "./txt2img-generator.mjs";

const displayProgress = async (progress: number, eta: number) => {
  const etaSecond = `${Math.floor(eta)}`.padStart(4, ` `);
  const barPole = `=`.repeat(Math.floor(progress * 20));
  const barContent = `${barPole}>`.padEnd(20, ` `);
  const bar = `[${barContent}]`;
  const percentage = `${Math.floor(progress * 100)}`.padStart(3, ` `);
  console.log(`${etaSecond} s: ${bar} ${percentage}%`);
};

const startStatusPolling = ({ ip, port }: Setting["machine"]) =>
  setInterval(async () => {
    const response = await fetch(`http://${ip}:${port}/sdapi/v1/progress`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    displayProgress(json.progress, json.eta_relative);
  }, 10000);

const batchGenerate = async (
  batchCount: number,
  optionsBodyJson: GenerationData["options"][number]["optionsBodyJson"],
  txt2imgGenerator: Txt2imgGenerator,
  machine: Setting["machine"],
) => {
  for (let i = 0; i < batchCount; i++) {
    await postOption(optionsBodyJson, machine);

    const txt2imgBodyJson = txt2imgGenerator.generate();
    await postTxt2img(txt2imgBodyJson, machine);
  }
};

const postOption = async (
  optionsBodyJson: OptionSetting["optionsBodyJson"],
  { ip, port }: Setting["machine"],
) => {
  const json = {
    outdir_txt2img_samples: "outputs/",
    do_not_show_images: true,
    live_previews_enable: false,
    ...optionsBodyJson,
  };

  const optionsResponse = await fetch(`http://${ip}:${port}/sdapi/v1/options`, {
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
    alwayson_scripts: {
      // cutoff: {
      //   args: [
      //     true,
      //     "red,pink,orange,yellow,green,blue,purple,black,white,brown,grey,blonde",
      //     1.5,
      //     false,
      //     false,
      //     "",
      //     "Lerp",
      //     true,
      //   ],
      // },
    },
    ...txt2imgBodyJson,
  };

  const txt2imgResponse = await fetch(`http://${ip}:${port}/sdapi/v1/txt2img`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
  const resultJson = await txt2imgResponse.json();
  const infoJson = JSON.parse(resultJson.info);
  console.log(infoJson.infotexts);
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
  console.log("Generating images...");

  const intervalID = startStatusPolling(generationData.machine);

  do {
    for (const option of generationData.options) {
      console.log(`Option \`${option.key}\`: Start.`);
      await batchGenerate(
        option.batchGeneration,
        option.optionsBodyJson,
        option.txt2imgGenerator,
        generationData.machine,
      );
      console.log(`Option \`${option.key}\`: Done.`);
    }
  } while (generationData.generateForever);
  clearInterval(intervalID);
};
