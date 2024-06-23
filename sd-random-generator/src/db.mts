import {
  BackgroundTable,
  BackgroundsPreset,
  CharacterTable,
  CharactersPreset,
  CheckpointAndVaePreset,
  CheckpointTable,
  DistinguishableTagTable,
  EmotionProbabilitiesAtEmotionType,
  EmotionTable,
  ImageResolutionPreset,
  LoraTable,
  OutfitTable,
  OutfitsPreset,
  PoseTable,
  PosesPreset,
  SamplerTable,
  Setting,
  TagVisibilityTable,
  UpscalerTable,
  VaeTable,
} from "@tenpamk2/sd-db-generator";
import { readFileSync } from "fs";
import { join } from "path";
import { parse as parseYaml } from "yaml";

export class Database {
  static instance: Database;
  static dbDir: string;
  readonly characterTable: CharacterTable;
  readonly outfitTable: OutfitTable;
  readonly backgroundTable: BackgroundTable;
  readonly poseTable: PoseTable;
  readonly emotionTable: EmotionTable;
  readonly emotionProbabilitiesAtEmotionType: EmotionProbabilitiesAtEmotionType;
  readonly distinguishableTagTable: DistinguishableTagTable;
  readonly tagVisibilityTable: TagVisibilityTable;
  readonly checkpointAndVaePreset: CheckpointAndVaePreset;
  readonly imageResolutionPreset: ImageResolutionPreset;
  readonly charactersPreset: CharactersPreset;
  readonly outfitsPreset: OutfitsPreset;
  readonly backgroundsPreset: BackgroundsPreset;
  readonly posesPreset: PosesPreset;
  readonly checkpointTable: CheckpointTable;
  readonly loraTable: LoraTable;
  readonly samplerTable: SamplerTable;
  readonly upscalerTable: UpscalerTable;
  readonly vaeTable: VaeTable;
  readonly defaultSetting: Setting;

  static setDbDir(dbDir: string) {
    Database.dbDir = dbDir;
  }

  static singleton() {
    if (Database.dbDir === undefined) {
      throw new Error(
        `\`Database.dbDir\` is not set!! Call \`Database.setDbDir\` before using \`Database.singleton\`!!`,
      );
    }
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private loadYaml(yamlBasename: string): any {
    const content = readFileSync(join(Database.dbDir, yamlBasename), `utf8`);
    return parseYaml(content, { maxAliasCount: -1 });
  }

  constructor() {
    this.characterTable = this.loadYaml(`character.yaml`);
    this.outfitTable = this.loadYaml(`outfit.yaml`);
    this.backgroundTable = this.loadYaml(`background.yaml`);
    this.poseTable = this.loadYaml(`pose.yaml`);
    this.emotionTable = this.loadYaml(`emotion.yaml`);
    this.emotionProbabilitiesAtEmotionType = this.loadYaml(
      `emotion-probabilities-at-emotion-type.yaml`,
    );

    this.distinguishableTagTable = this.loadYaml(`distinguishable-tag.yaml`);
    this.tagVisibilityTable = this.loadYaml(`tag-visibility.yaml`);

    this.checkpointAndVaePreset = this.loadYaml(
      `checkpoint-and-vae-preset.yaml`,
    );
    this.imageResolutionPreset = this.loadYaml(`image-resolution-preset.yaml`);
    this.charactersPreset = this.loadYaml(`characters-preset.yaml`);
    this.outfitsPreset = this.loadYaml(`outfits-preset.yaml`);
    this.backgroundsPreset = this.loadYaml(`backgrounds-preset.yaml`);
    this.posesPreset = this.loadYaml(`poses-preset.yaml`);

    this.checkpointTable = this.loadYaml(`checkpoint.yaml`);
    this.loraTable = this.loadYaml(`lora.yaml`);
    this.samplerTable = this.loadYaml(`sampler.yaml`);
    this.upscalerTable = this.loadYaml(`upscaler.yaml`);
    this.vaeTable = this.loadYaml(`vae.yaml`);

    this.defaultSetting = this.loadYaml(`default-setting.yaml`);
  }
}
