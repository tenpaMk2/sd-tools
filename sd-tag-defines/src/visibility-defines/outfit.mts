import { BodyOutfitTag } from "../tag-defines/body-outfit.mjs";
import { Visibility } from "../visibility.mjs";

const all = {
  frontHead: true,
  sideHead: true,
  backHead: true,
  frontBreast: true,
  sideBreast: true,
  backBreast: true,
  frontMidriff: true,
  sideMidriff: true,
  backMidriff: true,
  frontHipAndThigh: true,
  sideHipAndThigh: true,
  backHipAndThigh: true,
  foot: true,
  wristAndHand: true,
  aroundBody: true,
} as const satisfies Visibility;

const invisible = {
  frontHead: false,
  sideHead: false,
  backHead: false,
  frontBreast: false,
  sideBreast: false,
  backBreast: false,
  frontMidriff: false,
  sideMidriff: false,
  backMidriff: false,
  frontHipAndThigh: false,
  sideHipAndThigh: false,
  backHipAndThigh: false,
  foot: false,
  wristAndHand: false,
  aroundBody: false,
} as const satisfies Visibility;

const preset = {
  all,
  "armlet": {
    ...invisible,
    frontBreast: true,
    sideBreast: true,
    backBreast: true,
  },
  "bowtie": {
    ...invisible,
    frontBreast: true,
  },
  "bra": {
    ...invisible,
    frontBreast: true,
    sideBreast: true,
    backBreast: true,
  },
  "breasts skindentation": {
    ...invisible,
    frontBreast: true,
    sideBreast: true,
  },
  "cameltoe": {
    ...invisible,
    frontHipAndThigh: true,
  },
  "center frills": {
    ...invisible,
    frontBreast: true,
    frontMidriff: true,
  },
  "clothing cutout": {
    ...invisible,
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: true,
    frontMidriff: true,
    sideMidriff: true,
    backMidriff: true,
  },
  "collar": {
    ...invisible,
    frontBreast: true,
    sideBreast: true,
    backBreast: true,
  },
  "dress": {
    ...invisible,
    frontBreast: true,
    sideBreast: true,
    backBreast: true,
    frontMidriff: true,
    sideMidriff: true,
    backMidriff: true,
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: true,
  },
  "elbow gloves": {
    ...invisible,
    frontBreast: true,
    sideBreast: true,
    backBreast: true,
    wristAndHand: true,
  },
  "foot": {
    ...invisible,
    foot: true,
  },
  "hat": {
    ...invisible,
    frontHead: true,
    sideHead: true,
    backHead: true,
  },
  "high-waist skirt": {
    ...invisible,
    frontMidriff: true,
    sideMidriff: true,
    backMidriff: true,
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: true,
  },
  "hips": {
    ...invisible,
    backHipAndThigh: true,
  },
  "navel": {
    ...invisible,
    frontMidriff: true,
  },
  "panties": {
    ...invisible,
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: true,
  },
  "shirt": {
    ...invisible,
    frontBreast: true,
    sideBreast: true,
    backBreast: true,
    frontMidriff: true,
    sideMidriff: true,
    backMidriff: true,
  },
  "shortTail": {
    ...invisible,
    backHipAndThigh: true,
  },
  "shoulder": {
    ...invisible,
    frontBreast: true,
    sideBreast: true,
    backBreast: true,
  },
  "shoulder blades": {
    ...invisible,
    backBreast: true,
  },
  "side hip": {
    ...invisible,
    sideHipAndThigh: true,
  },
  "skirt": {
    ...invisible,
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: true,
  },
  "thighhighs": {
    ...invisible,
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: true,
    foot: true,
  },
  "thighs": {
    ...invisible,
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: true,
  },
  "underbust": {
    ...invisible,
    frontMidriff: true,
    sideMidriff: true,
    backMidriff: true,
  },
  "wrist cuffs": {
    ...invisible,
    wristAndHand: true,
  },
} as const satisfies { [k: string]: Visibility };

const allArmbandColorVisibilities = {
  "aqua armband": preset.armlet,
  "black armband": preset.armlet,
  "blue armband": preset.armlet,
  "brown armband": preset.armlet,
  "green armband": preset.armlet,
  "grey armband": preset.armlet,
  "orange armband": preset.armlet,
  "pink armband": preset.armlet,
  "purple armband": preset.armlet,
  "red armband": preset.armlet,
  "white armband": preset.armlet,
  "yellow armband": preset.armlet,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

// TODO: `color waist apron`
const allApronColorVisibilities = {
  "aqua apron": preset.skirt,
  "black apron": preset.skirt,
  "blue apron": preset.skirt,
  "brown apron": preset.skirt,
  "green apron": preset.skirt,
  "grey apron": preset.skirt,
  "orange apron": preset.skirt,
  "pink apron": preset.skirt,
  "purple apron": preset.skirt,
  "red apron": preset.skirt,
  "white apron": preset.skirt,
  "yellow apron": preset.skirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allAscotColorVisibilities = {
  "aqua ascot": preset.bowtie,
  "black ascot": preset.bowtie,
  "blue ascot": preset.bowtie,
  "brown ascot": preset.bowtie,
  "green ascot": preset.bowtie,
  "grey ascot": preset.bowtie,
  "orange ascot": preset.bowtie,
  "pink ascot": preset.bowtie,
  "purple ascot": preset.bowtie,
  "red ascot": preset.bowtie,
  "white ascot": preset.bowtie,
  "yellow ascot": preset.bowtie,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allBeltColorVisibilities = {
  "black belt": preset.skirt,
  "blue belt": preset.skirt,
  "brown belt": preset.skirt,
  "green belt": preset.skirt,
  "grey belt": preset.skirt,
  "orange belt": preset.skirt,
  "pink belt": preset.skirt,
  "purple belt": preset.skirt,
  "red belt": preset.skirt,
  "white belt": preset.skirt,
  "yellow belt": preset.skirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allBikiniColorVisibilities = {
  "multicolored bikini": preset.dress,
  "aqua bikini": preset.dress,
  "black bikini": preset.dress,
  "blue bikini": preset.dress,
  "brown bikini": preset.dress,
  "gold bikini": preset.dress,
  "green bikini": preset.dress,
  "grey bikini": preset.dress,
  "orange bikini": preset.dress,
  "pink bikini": preset.dress,
  "purple bikini": preset.dress,
  "red bikini": preset.dress,
  "silver bikini": preset.dress,
  "white bikini": preset.dress,
  "yellow bikini": preset.dress,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allBodysuitColorVisibilities = {
  "aqua bodysuit": preset.all,
  "black bodysuit": preset.all,
  "blue bodysuit": preset.all,
  "brown bodysuit": preset.all,
  "green bodysuit": preset.all,
  "grey bodysuit": preset.all,
  "orange bodysuit": preset.all,
  "pink bodysuit": preset.all,
  "purple bodysuit": preset.all,
  "red bodysuit": preset.all,
  "white bodysuit": preset.all,
  "yellow bodysuit": preset.all,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allBowtieColorVisibilities = {
  "aqua bowtie": preset.bowtie,
  "black bowtie": preset.bowtie,
  "blue bowtie": preset.bowtie,
  "brown bowtie": preset.bowtie,
  "green bowtie": preset.bowtie,
  "grey bowtie": preset.bowtie,
  "orange bowtie": preset.bowtie,
  "pink bowtie": preset.bowtie,
  "purple bowtie": preset.bowtie,
  "red bowtie": preset.bowtie,
  "white bowtie": preset.bowtie,
  "yellow bowtie": preset.bowtie,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allBurumaColorVisibilities = {
  "aqua buruma": preset.skirt,
  "black buruma": preset.skirt,
  "blue buruma": preset.skirt,
  "brown buruma": preset.skirt,
  "green buruma": preset.skirt,
  "grey buruma": preset.skirt,
  "orange buruma": preset.skirt,
  "pink buruma": preset.skirt,
  "purple buruma": preset.skirt,
  "red buruma": preset.skirt,
  "white buruma": preset.skirt,
  "yellow buruma": preset.skirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allCamisoleColorVisibilities = {
  "aqua camisole": preset.shirt,
  "black camisole": preset.shirt,
  "blue camisole": preset.shirt,
  "brown camisole": preset.shirt,
  "green camisole": preset.shirt,
  "grey camisole": preset.shirt,
  "orange camisole": preset.shirt,
  "pink camisole": preset.shirt,
  "purple camisole": preset.shirt,
  "red camisole": preset.shirt,
  "white camisole": preset.shirt,
  "yellow camisole": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allCapeColorVisibilities = {
  "aqua cape": preset.shirt,
  "black cape": preset.shirt,
  "blue cape": preset.shirt,
  "brown cape": preset.shirt,
  "green cape": preset.shirt,
  "grey cape": preset.shirt,
  "orange cape": preset.shirt,
  "pink cape": preset.shirt,
  "purple cape": preset.shirt,
  "red cape": preset.shirt,
  "white cape": preset.shirt,
  "yellow cape": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allCapeletColorVisibilities = {
  "aqua capelet": preset.shirt,
  "black capelet": preset.shirt,
  "blue capelet": preset.shirt,
  "brown capelet": preset.shirt,
  "green capelet": preset.shirt,
  "grey capelet": preset.shirt,
  "orange capelet": preset.shirt,
  "pink capelet": preset.shirt,
  "purple capelet": preset.shirt,
  "red capelet": preset.shirt,
  "white capelet": preset.shirt,
  "yellow capelet": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allChokerColorVisibilities = {
  "aqua choker": preset.collar,
  "black choker": preset.collar,
  "blue choker": preset.collar,
  "brown choker": preset.collar,
  "green choker": preset.collar,
  "grey choker": preset.collar,
  "orange choker": preset.collar,
  "pink choker": preset.collar,
  "purple choker": preset.collar,
  "red choker": preset.collar,
  "white choker": preset.collar,
  "yellow choker": preset.collar,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allCollarColorVisibilities = {
  "black collar": preset.collar,
  "blue collar": preset.collar,
  "brown collar": preset.collar,
  "grey collar": preset.collar,
  "orange collar": preset.collar,
  "pink collar": preset.collar,
  "purple collar": preset.collar,
  "red collar": preset.collar,
  "white collar": preset.collar,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allDressColorVisibilities = {
  "aqua dress": preset.dress,
  "black dress": preset.dress,
  "blue dress": preset.dress,
  "brown dress": preset.dress,
  "green dress": preset.dress,
  "grey dress": preset.dress,
  "orange dress": preset.dress,
  "pink dress": preset.dress,
  "purple dress": preset.dress,
  "red dress": preset.dress,
  "white dress": preset.dress,
  "yellow dress": preset.dress,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

// TODO: Separate color thigh boots from following defines.
const allFootwearColorVisibilities = {
  "aqua footwear": preset.foot,
  "black footwear": preset.foot,
  "blue footwear": preset.foot,
  "brown footwear": preset.foot,
  "green footwear": preset.foot,
  "grey footwear": preset.foot,
  "orange footwear": preset.foot,
  "pink footwear": preset.foot,
  "purple footwear": preset.foot,
  "red footwear": preset.foot,
  "white footwear": preset.foot,
  "yellow footwear": preset.foot,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allGlovesColorVisibilities = {
  "multicolored gloves": preset["wrist cuffs"],
  "aqua gloves": preset["wrist cuffs"],
  "black gloves": preset["wrist cuffs"],
  "blue gloves": preset["wrist cuffs"],
  "brown gloves": preset["wrist cuffs"],
  "green gloves": preset["wrist cuffs"],
  "grey gloves": preset["wrist cuffs"],
  "orange gloves": preset["wrist cuffs"],
  "pink gloves": preset["wrist cuffs"],
  "purple gloves": preset["wrist cuffs"],
  "red gloves": preset["wrist cuffs"],
  "white gloves": preset["wrist cuffs"],
  "yellow gloves": preset["wrist cuffs"],
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allJacketColorVisibilities = {
  "aqua jacket": preset.shirt,
  "black jacket": preset.shirt,
  "blue jacket": preset.shirt,
  "brown jacket": preset.shirt,
  "green jacket": preset.shirt,
  "grey jacket": preset.shirt,
  "orange jacket": preset.shirt,
  "pink jacket": preset.shirt,
  "purple jacket": preset.shirt,
  "red jacket": preset.shirt,
  "white jacket": preset.shirt,
  "yellow jacket": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allLeotardColorVisibilities = {
  "aqua leotard": preset.dress,
  "black leotard": preset.dress,
  "blue leotard": preset.dress,
  "brown leotard": preset.dress,
  "green leotard": preset.dress,
  "grey leotard": preset.dress,
  "orange leotard": preset.dress,
  "pink leotard": preset.dress,
  "purple leotard": preset.dress,
  "red leotard": preset.dress,
  "white leotard": preset.dress,
  "yellow leotard": preset.dress,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allNeckerchiefColorVisibilities = {
  "aqua neckerchief": preset.bowtie,
  "black neckerchief": preset.bowtie,
  "blue neckerchief": preset.bowtie,
  "brown neckerchief": preset.bowtie,
  "green neckerchief": preset.bowtie,
  "grey neckerchief": preset.bowtie,
  "orange neckerchief": preset.bowtie,
  "pink neckerchief": preset.bowtie,
  "purple neckerchief": preset.bowtie,
  "red neckerchief": preset.bowtie,
  "white neckerchief": preset.bowtie,
  "yellow neckerchief": preset.bowtie,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allNecktieColorVisibilities = {
  "aqua necktie": preset.bowtie,
  "black necktie": preset.bowtie,
  "blue necktie": preset.bowtie,
  "brown necktie": preset.bowtie,
  "green necktie": preset.bowtie,
  "grey necktie": preset.bowtie,
  "orange necktie": preset.bowtie,
  "pink necktie": preset.bowtie,
  "purple necktie": preset.bowtie,
  "red necktie": preset.bowtie,
  "white necktie": preset.bowtie,
  "yellow necktie": preset.bowtie,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allOnePieceSwimsuitColorVisibilities = {
  "aqua one-piece swimsuit": preset.dress,
  "black one-piece swimsuit": preset.dress,
  "blue one-piece swimsuit": preset.dress,
  "brown one-piece swimsuit": preset.dress,
  "gold one-piece swimsuit": preset.dress,
  "green one-piece swimsuit": preset.dress,
  "grey one-piece swimsuit": preset.dress,
  "orange one-piece swimsuit": preset.dress,
  "pink one-piece swimsuit": preset.dress,
  "purple one-piece swimsuit": preset.dress,
  "red one-piece swimsuit": preset.dress,
  "silver one-piece swimsuit": preset.dress,
  "white one-piece swimsuit": preset.dress,
  "yellow one-piece swimsuit": preset.dress,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allPantiesColorVisibilities = {
  "aqua panties": preset.panties,
  "black panties": preset.panties,
  "blue panties": preset.panties,
  "brown panties": preset.panties,
  "green panties": preset.panties,
  "grey panties": preset.panties,
  "orange panties": preset.panties,
  "pink panties": preset.panties,
  "purple panties": preset.panties,
  "red panties": preset.panties,
  "white panties": preset.panties,
  "yellow panties": preset.panties,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allPantsColorVisibilities = {
  "aqua pants": preset.thighs,
  "black pants": preset.thighs,
  "blue pants": preset.thighs,
  "brown pants": preset.thighs,
  "green pants": preset.thighs,
  "grey pants": preset.thighs,
  "orange pants": preset.thighs,
  "pink pants": preset.thighs,
  "purple pants": preset.thighs,
  "red pants": preset.thighs,
  "white pants": preset.thighs,
  "yellow pants": preset.thighs,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allPantyhoseColorVisibilities = {
  "aqua pantyhose": preset.thighhighs,
  "black pantyhose": preset.thighhighs,
  "blue pantyhose": preset.thighhighs,
  "brown pantyhose": preset.thighhighs,
  "green pantyhose": preset.thighhighs,
  "grey pantyhose": preset.thighhighs,
  "orange pantyhose": preset.thighhighs,
  "pink pantyhose": preset.thighhighs,
  "purple pantyhose": preset.thighhighs,
  "red pantyhose": preset.thighhighs,
  "white pantyhose": preset.thighhighs,
  "yellow pantyhose": preset.thighhighs,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allSailorCollarColorVisibilities = {
  "aqua sailor collar": preset.collar,
  "black sailor collar": preset.collar,
  "blue sailor collar": preset.collar,
  "brown sailor collar": preset.collar,
  "green sailor collar": preset.collar,
  "grey sailor collar": preset.collar,
  "orange sailor collar": preset.collar,
  "pink sailor collar": preset.collar,
  "purple sailor collar": preset.collar,
  "red sailor collar": preset.collar,
  "white sailor collar": preset.collar,
  "yellow sailor collar": preset.collar,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allSerafukuColorVisibilities = {
  "aqua serafuku": preset.shirt,
  "black serafuku": preset.shirt,
  "blue serafuku": preset.shirt,
  "brown serafuku": preset.shirt,
  "green serafuku": preset.shirt,
  "grey serafuku": preset.shirt,
  "orange serafuku": preset.shirt,
  "pink serafuku": preset.shirt,
  "purple serafuku": preset.shirt,
  "red serafuku": preset.shirt,
  "white serafuku": preset.shirt,
  "yellow serafuku": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allShirtColorVisibilities = {
  "aqua shirt": preset.shirt,
  "black shirt": preset.shirt,
  "blue shirt": preset.shirt,
  "brown shirt": preset.shirt,
  "green shirt": preset.shirt,
  "grey shirt": preset.shirt,
  "orange shirt": preset.shirt,
  "pink shirt": preset.shirt,
  "purple shirt": preset.shirt,
  "red shirt": preset.shirt,
  "white shirt": preset.shirt,
  "yellow shirt": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allShortsColorVisibilities = {
  "multicolored shorts": preset.skirt,
  "aqua shorts": preset.skirt,
  "black shorts": preset.skirt,
  "blue shorts": preset.skirt,
  "brown shorts": preset.skirt,
  "green shorts": preset.skirt,
  "grey shorts": preset.skirt,
  "orange shorts": preset.skirt,
  "pink shorts": preset.skirt,
  "purple shorts": preset.skirt,
  "red shorts": preset.skirt,
  "white shorts": preset.skirt,
  "yellow shorts": preset.skirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allSkirtColorVisibilities = {
  "aqua skirt": preset.skirt,
  "black skirt": preset.skirt,
  "blue skirt": preset.skirt,
  "brown skirt": preset.skirt,
  "green skirt": preset.skirt,
  "grey skirt": preset.skirt,
  "orange skirt": preset.skirt,
  "pink skirt": preset.skirt,
  "purple skirt": preset.skirt,
  "red skirt": preset.skirt,
  "white skirt": preset.skirt,
  "yellow skirt": preset.skirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allSleevesColorVisibilities = {
  "aqua sleeves": preset.shoulder,
  "black sleeves": preset.shoulder,
  "blue sleeves": preset.shoulder,
  "brown sleeves": preset.shoulder,
  "green sleeves": preset.shoulder,
  "grey sleeves": preset.shoulder,
  "orange sleeves": preset.shoulder,
  "pink sleeves": preset.shoulder,
  "purple sleeves": preset.shoulder,
  "red sleeves": preset.shoulder,
  "white sleeves": preset.shoulder,
  "yellow sleeves": preset.shoulder,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allSocksColorVisibilities = {
  "black socks": preset.foot,
  "blue socks": preset.foot,
  "brown socks": preset.foot,
  "green socks": preset.foot,
  "grey socks": preset.foot,
  "orange socks": preset.foot,
  "pink socks": preset.foot,
  "purple socks": preset.foot,
  "red socks": preset.foot,
  "white socks": preset.foot,
  "yellow socks": preset.foot,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allSweaterColorVisibilities = {
  "aqua sweater": preset.shirt,
  "beige sweater": preset.shirt,
  "black sweater": preset.shirt,
  "brown sweater": preset.shirt,
  "blue sweater": preset.shirt,
  "green sweater": preset.shirt,
  "grey sweater": preset.shirt,
  "orange sweater": preset.shirt,
  "pink sweater": preset.shirt,
  "purple sweater": preset.shirt,
  "red sweater": preset.shirt,
  "yellow sweater": preset.shirt,
  "white sweater": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allSweaterVestColorVisibilities = {
  "aqua sweater vest": preset.shirt,
  "black sweater vest": preset.shirt,
  "blue sweater vest": preset.shirt,
  "brown sweater vest": preset.shirt,
  "green sweater vest": preset.shirt,
  "grey sweater vest": preset.shirt,
  "orange sweater vest": preset.shirt,
  "pink sweater vest": preset.shirt,
  "purple sweater vest": preset.shirt,
  "red sweater vest": preset.shirt,
  "white sweater vest": preset.shirt,
  "yellow sweater vest": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allThighhighsColorVisibilities = {
  "black thighhighs": preset.thighhighs,
  "blue thighhighs": preset.thighhighs,
  "brown thighhighs": preset.thighhighs,
  "green thighhighs": preset.thighhighs,
  "grey thighhighs": preset.thighhighs,
  "orange thighhighs": preset.thighhighs,
  "pink thighhighs": preset.thighhighs,
  "purple thighhighs": preset.thighhighs,
  "red thighhighs": preset.thighhighs,
  "white thighhighs": preset.thighhighs,
  "yellow thighhighs": preset.thighhighs,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allVestColorVisibilities = {
  "aqua vest": preset.shirt,
  "black vest": preset.shirt,
  "blue vest": preset.shirt,
  "brown vest": preset.shirt,
  "green vest": preset.shirt,
  "grey vest": preset.shirt,
  "orange vest": preset.shirt,
  "pink vest": preset.shirt,
  "purple vest": preset.shirt,
  "red vest": preset.shirt,
  "white vest": preset.shirt,
  "yellow vest": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

const allDistinguishableOutfitVisibilities = {
  "breasts skindentation": preset["breasts skindentation"],
  "thighs skindentation": preset.thighs,
  "front neck star tattoo": preset.bowtie,
  "gold trim shirt": preset.shirt,
  "gold trim skirt": preset.skirt,
  "gold trim bodysuit": preset.all,
  "red trim shirt": preset.shirt,
  "red trim skirt": preset.skirt,
  "pinstripe pattern shirt": preset.shirt,
  "pinstripe pattern skirt": preset.skirt,
  "navel o-ring": preset.navel,
  "neck jingle bell": preset.bowtie,
  "aqua neck ribbon": preset.bowtie,
  "black neck ribbon": preset.bowtie,
  "blue neck ribbon": preset.bowtie,
  "brown neck ribbon": preset.bowtie,
  "green neck ribbon": preset.bowtie,
  "grey neck ribbon": preset.bowtie,
  "orange neck ribbon": preset.bowtie,
  "pink neck ribbon": preset.bowtie,
  "purple neck ribbon": preset.bowtie,
  "red neck ribbon": preset.bowtie,
  "white neck ribbon": preset.bowtie,
  "yellow neck ribbon": preset.bowtie,
  "worn cardigan": preset.shirt,
  "aqua worn cardigan": preset.shirt,
  "black worn cardigan": preset.shirt,
  "blue worn cardigan": preset.shirt,
  "brown worn cardigan": preset.shirt,
  "green worn cardigan": preset.shirt,
  "grey worn cardigan": preset.shirt,
  "orange worn cardigan": preset.shirt,
  "pink worn cardigan": preset.shirt,
  "purple worn cardigan": preset.shirt,
  "red worn cardigan": preset.shirt,
  "white worn cardigan": preset.shirt,
  "yellow worn cardigan": preset.shirt,
  "around waist cardigan": preset.skirt,
  "aqua around waist cardigan": preset.skirt,
  "black around waist cardigan": preset.skirt,
  "blue around waist cardigan": preset.skirt,
  "brown around waist cardigan": preset.skirt,
  "green around waist cardigan": preset.skirt,
  "grey around waist cardigan": preset.skirt,
  "orange around waist cardigan": preset.skirt,
  "pink around waist cardigan": preset.skirt,
  "purple around waist cardigan": preset.skirt,
  "red around waist cardigan": preset.skirt,
  "white around waist cardigan": preset.skirt,
  "yellow around waist cardigan": preset.skirt,
  "chest gem": preset.bowtie,
  "aqua chest gemstone": preset.bowtie,
  "black chest gemstone": preset.bowtie,
  "blue chest gemstone": preset.bowtie,
  "brown chest gemstone": preset.bowtie,
  "green chest gemstone": preset.bowtie,
  "grey chest gemstone": preset.bowtie,
  "orange chest gemstone": preset.bowtie,
  "pink chest gemstone": preset.bowtie,
  "purple chest gemstone": preset.bowtie,
  "red chest gemstone": preset.bowtie,
  "white chest gemstone": preset.bowtie,
  "yellow chest gemstone": preset.bowtie,
  "cable knit sweater": preset.shirt,
} as const satisfies { [key in BodyOutfitTag]?: Visibility };

export const allOutfitVisibilities = {
  ...allApronColorVisibilities,
  ...allArmbandColorVisibilities,
  ...allAscotColorVisibilities,
  ...allBeltColorVisibilities,
  ...allBikiniColorVisibilities,
  ...allBodysuitColorVisibilities,
  ...allBowtieColorVisibilities,
  ...allBurumaColorVisibilities,
  ...allCamisoleColorVisibilities,
  ...allCapeColorVisibilities,
  ...allCapeletColorVisibilities,
  ...allChokerColorVisibilities,
  ...allCollarColorVisibilities,
  ...allDistinguishableOutfitVisibilities,
  ...allDressColorVisibilities,
  ...allFootwearColorVisibilities,
  ...allGlovesColorVisibilities,
  ...allJacketColorVisibilities,
  ...allLeotardColorVisibilities,
  ...allNeckerchiefColorVisibilities,
  ...allNecktieColorVisibilities,
  ...allOnePieceSwimsuitColorVisibilities,
  ...allPantiesColorVisibilities,
  ...allPantsColorVisibilities,
  ...allPantyhoseColorVisibilities,
  ...allSailorCollarColorVisibilities,
  ...allSerafukuColorVisibilities,
  ...allShirtColorVisibilities,
  ...allShortsColorVisibilities,
  ...allSkirtColorVisibilities,
  ...allSleevesColorVisibilities,
  ...allSocksColorVisibilities,
  ...allSweaterColorVisibilities,
  ...allSweaterVestColorVisibilities,
  ...allThighhighsColorVisibilities,
  ...allVestColorVisibilities,
  "aiguillette": preset.bowtie,
  "animal collar": preset.collar,
  "animal hands": preset["wrist cuffs"],
  "apron": preset.dress,
  "aran sweater": preset.shirt,
  "argyle bikini": preset.dress,
  "argyle sweater vest": preset.shirt,
  "argyle sweater": preset.shirt,
  "armband": preset.armlet,
  "armlet": preset.armlet,
  "armor": preset.dress,
  "ascot": preset.bowtie,
  "ass": preset.hips,
  "asymmetrical clothes": preset.dress,
  "asymmetrical legwear": preset.thighhighs,
  "babydoll": preset.dress,
  "bandaged leg": preset.thighhighs,
  "bare arms": preset.shoulder,
  "bare legs": preset.thighs,
  "bare shoulders": preset.shoulder,
  "barefoot": preset.foot,
  "belt": preset.skirt,
  "bike shorts": preset.skirt,
  "bikini skirt": preset.skirt,
  "bikini top only": preset.shirt,
  "bikini": preset.dress,
  "black footwear": preset.foot,
  "blazer": preset.shirt,
  "bodystocking": preset.all,
  "bodysuit": preset.all,
  "boots": preset.foot,
  "bottomless": preset.skirt,
  "bowtie": preset.bowtie,
  "bra": preset.bra,
  "bracelet": preset["wrist cuffs"],
  "breast pocket": preset.bowtie,
  "bridal garter": preset.skirt,
  "bridal gauntlets": preset.shoulder,
  "bridal lingerie": preset.dress,
  "bride": preset.all,
  "buruma": preset.skirt,
  "business suit": preset.shirt,
  "butt crack": preset.hips,
  "buttons": preset.dress,
  "cameltoe": preset.cameltoe,
  "camisole": preset.shirt,
  "cape": preset.shirt,
  "capelet": preset.shirt,
  "cardigan around waist": preset["high-waist skirt"],
  "casual": preset.dress,
  "center frills": preset["center frills"],
  "center opening": preset["center frills"],
  "checkered bikini": preset.dress,
  "cheerleader": preset.dress,
  "cherry blossom print": preset.dress,
  "chest jewel": preset.bowtie,
  "china dress": preset.dress,
  "chinese clothes": preset.dress,
  "choker": preset.collar,
  "cleavage cutout": preset.bowtie,
  "cloak": preset.dress,
  "clothes around waist": preset["high-waist skirt"],
  "clothes writing": preset["center frills"],
  "clothing cutout": preset["clothing cutout"], // TODO: `cleavage clothing cutout`
  "collar": preset.collar,
  "collarbone": preset.bowtie,
  "collared dress": preset.dress,
  "collared shirt": preset.shirt,
  "corset": preset.underbust,
  "covered navel": preset.navel,
  "covered niples": preset.bowtie,
  "cow print bikini": preset.dress,
  "cow print gloves": preset["wrist cuffs"],
  "cow print thighhighs": preset.thighhighs,
  "cow print": preset.dress,
  "crop top overhang": preset.bowtie,
  "crop top": preset.shirt,
  "cropped jacket": preset.shirt,
  "cropped shirt": preset.shirt,
  "cross-laced footwear": preset.foot,
  "crotch seam": preset.cameltoe,
  "cutoffs": preset.skirt,
  "denim shorts": preset.skirt,
  "denim": preset.skirt,
  "detached collar": preset.collar,
  "detached sleeves": preset["wrist cuffs"],
  "dragon print": preset.dress,
  "dress shirt": preset.shirt,
  "dress": preset.dress,
  "elbow gloves": preset["elbow gloves"],
  "elbow pads": preset["elbow gloves"],
  "epaulettes": preset.shoulder,
  "fingerless gloves": preset["wrist cuffs"],
  "first high school uniform": preset.dress,
  "floral print": preset.dress,
  "formal": preset.all,
  "frilled apron": preset.dress,
  "frilled bikini": preset.dress,
  "frilled skirt": preset.skirt,
  "frilled sleeves": preset.shoulder, // `wrist cuffs` ?
  "frills": preset.all,
  "front-tie bikini top": preset.bowtie,
  "front-tie top": preset.bowtie,
  "fur collar": preset.collar,
  "fur-trimmed bikini": preset.dress,
  "fur-trimmed collar": preset.collar,
  "fur-trimmed gloves": preset["elbow gloves"],
  "fur-trimmed skirt": preset.skirt,
  "garter belt": preset.skirt,
  "garter straps": preset.skirt,
  "gloves": preset["wrist cuffs"],
  "gym shirt": preset.shirt,
  "gym uniform": preset.dress,
  "hakama skirt": preset.skirt,
  "hakama": preset.shirt,
  "halterneck": preset.collar,
  "high-low skirt": preset.skirt,
  "high-waist skirt": preset["high-waist skirt"],
  "hip vent": preset["side hip"],
  "hood up": preset.hat,
  "hood": preset.hat,
  "hooded cloak": preset.dress,
  "infinite stratos academy school uniform": preset.all,
  "jacket": preset.shirt,
  "jersey": preset.shirt,
  "jewelry": preset.all, // TODO: Move to distinguishables.
  "juliet sleeves": preset.shoulder,
  "knee boots": preset.foot,
  "knee pads": preset.thighs,
  "lace panties": preset.panties,
  "lace-trimmed bra": preset.bra,
  "latex bikini": preset.dress,
  "latex leotard": preset.dress,
  "latex shorts": preset.skirt,
  "leotard": preset.dress,
  "lingerie": preset.dress,
  "loafers": preset.foot,
  "long skirt": preset.skirt,
  "long sleeves": preset.shoulder,
  "loose socks": preset.foot,
  "lycoris uniform": preset.all,
  "magical girl": preset.dress,
  "maid apron": preset.dress,
  "maid bikini": preset.dress,
  "maid": preset.all,
  "micro bikini": preset.dress,
  "midriff": preset.navel,
  "miko": preset.dress,
  "military jacket": preset.shirt,
  "military uniform": preset.all,
  "miniskirt": preset.skirt,
  "naked shirt": preset.shirt,
  "naked towel": preset.dress,
  "navel cutout": preset.navel,
  "navel": preset.navel,
  "neck bell": preset.bowtie,
  "neck ribbon": preset.bowtie,
  "neckerchief": preset.bowtie,
  "necklace": preset.bowtie,
  "necktie": preset.bowtie,
  "nipples": preset.bowtie,
  "no bra": preset.bra,
  "no pants": preset.panties,
  "no shoes": preset.foot,
  "nontraditional miko": preset.dress,
  "nontraditional wedding dress": preset.dress,
  "number print": preset.shirt, // Assume front and back of shirt.
  "o-ring bikini": preset.dress,
  "o-ring bottom": preset.panties,
  "o-ring top": preset.bowtie,
  "off shoulder": preset.shirt,
  "off-shoulder dress": preset.dress,
  "off-shoulder sweater": preset.shirt,
  "office lady": preset.all,
  "official alternate costume": preset.all,
  "open clothes": preset.shirt, // Visible from back. Assume when all fours.
  "open jacket": preset.shirt, // Visible from back. Assume when all fours.
  "open shirt": preset.shirt,
  "open-chest sweater": preset.shirt,
  "panties under pantyhose": preset.panties,
  "panties": preset.panties,
  "pants": preset.thighs,
  "pantyhose": preset.thighhighs,
  "partially unbuttoned": preset.bowtie,
  "partially undressed": preset.dress,
  "paw gloves": preset["wrist cuffs"],
  "paw shoes": preset.foot,
  "pelvic curtain": preset.skirt,
  "pencil dress": preset.dress,
  "pencil skirt": preset.skirt,
  "pendant": preset.bowtie,
  "pilot suit": preset.dress,
  "pirate": preset.all,
  "plaid bikini": preset.dress,
  "plaid bowtie": preset.bowtie,
  "plaid skirt": preset.skirt,
  "plaid sweater": preset.shirt,
  "playboy bunny": preset.dress,
  "pleated dress": preset.dress,
  "pleated skirt": preset.skirt,
  "polka dot bikini": preset.dress,
  "polka dot sweater": preset.shirt,
  "print bikini": preset.dress,
  "print dress": preset.dress,
  "print gloves": preset["wrist cuffs"],
  "print thighhighs": preset.thighhighs,
  "puffy sleeves": preset.shoulder,
  "pumps": preset.foot,
  "rabbit tail": preset.shortTail,
  "race queen": preset.all,
  "rei no himo": preset.bra,
  "revealing clothes": preset.all,
  "ribbed sweater": preset.shirt,
  "ribbon choker": preset.collar,
  "sailor collar": preset.collar,
  "sainan high school uniform": preset.dress,
  "santa bikini": preset.dress,
  "santa costume": preset.all,
  "sarong": preset.skirt,
  "school swimsuit": preset.dress,
  "school uniform": preset.dress,
  "serafuku": preset.shirt,
  "shiny clothes": preset.all,
  "shiny": preset.all,
  "shirt": preset.shirt,
  "shoes": preset.foot,
  "short dress": preset.dress,
  "short necktie": preset.bowtie,
  "short shorts": preset.skirt,
  "short sleeves": preset.shoulder,
  "shorts": preset.skirt,
  "shoulder blades": preset["shoulder blades"],
  "shuuchiin academy school uniform": preset.dress,
  "side slit": preset["side hip"],
  "side-tie bikini bottom": preset["side hip"],
  "single glove": preset["wrist cuffs"],
  "single wrist cuff": preset["wrist cuffs"],
  "skin tight": preset.dress,
  "skirt suit": preset.dress,
  "skirt": preset.skirt,
  "sleeveless dress": preset.dress,
  "sleeveless jacket": preset.shirt,
  "sleeveless shirt": preset.shirt,
  "sleeveless": preset.shoulder,
  "sneakers": preset.foot,
  "socks": preset.foot,
  "sportswear": preset.all,
  "strap": preset.all,
  "striped bikini": preset.dress,
  "striped sweater": preset.shirt,
  "suit": preset.shirt,
  "sweater around waist": preset["high-waist skirt"],
  "sweater dress": preset.dress,
  "sweater vest": preset.shirt,
  "sweater": preset.shirt,
  "swimsuit": preset.dress,
  "t-shirt": preset.shirt,
  "teacher": preset.all,
  "thigh boots": preset.thighhighs,
  "thigh strap": preset.thighhighs,
  "thighhighs": preset.thighhighs,
  "tight clothes": preset.shirt,
  "tokiwadai school uniform": preset.all,
  "turtleneck bodysuit": preset.collar,
  "turtleneck sweater": preset.collar,
  "turtleneck": preset.collar,
  "two-tone dress": preset.dress,
  "unbuttoned": preset.bowtie,
  "underbust": preset.underbust,
  "underwear only": preset.dress,
  "underwear": preset.dress,
  "uniform": preset.all,
  "vest": preset.shirt,
  "volleyball uniform": preset.all,
  "waist apron": preset.skirt,
  "waitress": preset.all,
  "wedding dress": preset.dress,
  "white cloak": preset.dress,
  "white towel": preset.dress,
  "wide sleeves": preset.shoulder,
  "wrist cuffs": preset["wrist cuffs"],
} as const satisfies {
  [key in BodyOutfitTag]: Visibility;
};
