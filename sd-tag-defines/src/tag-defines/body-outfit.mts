import { getKeys } from "../utility.mjs";

const allArmbandColorTags = [
  `aqua armband`,
  `black armband`,
  `blue armband`,
  `brown armband`,
  `green armband`,
  `grey armband`,
  `orange armband`,
  `pink armband`,
  `purple armband`,
  `red armband`,
  `white armband`,
  `yellow armband`,
] as const satisfies string[];

const allAscotColorTags = [
  `aqua ascot`,
  `black ascot`,
  `blue ascot`,
  `brown ascot`,
  `green ascot`,
  `grey ascot`,
  `orange ascot`,
  `pink ascot`,
  `purple ascot`,
  `red ascot`,
  `white ascot`,
  `yellow ascot`,
] as const satisfies string[];

const allBeltColorTags = [
  `black belt`,
  `blue belt`,
  `brown belt`,
  `green belt`,
  `grey belt`,
  `orange belt`,
  `pink belt`,
  `purple belt`,
  `red belt`,
  `white belt`,
  `yellow belt`,
] as const satisfies string[];

const allBikiniColorTags = [
  `aqua bikini`,
  `black bikini`,
  `blue bikini`,
  `brown bikini`,
  `gold bikini`,
  `green bikini`,
  `grey bikini`,
  `multicolored bikini`,
  `orange bikini`,
  `pink bikini`,
  `purple bikini`,
  `red bikini`,
  `silver bikini`,
  `white bikini`,
  `yellow bikini`,
] as const satisfies string[];

const allBodysuitColorTags = [
  `aqua bodysuit`,
  `black bodysuit`,
  `blue bodysuit`,
  `brown bodysuit`,
  `green bodysuit`,
  `grey bodysuit`,
  `orange bodysuit`,
  `pink bodysuit`,
  `purple bodysuit`,
  `red bodysuit`,
  `white bodysuit`,
  `yellow bodysuit`,
] as const satisfies string[];

const allBowtieColorTags = [
  `aqua bowtie`,
  `black bowtie`,
  `blue bowtie`,
  `brown bowtie`,
  `green bowtie`,
  `grey bowtie`,
  `orange bowtie`,
  `pink bowtie`,
  `purple bowtie`,
  `red bowtie`,
  `white bowtie`,
  `yellow bowtie`,
] as const satisfies string[];

const allBurumaColorTags = [
  `aqua buruma`,
  `black buruma`,
  `blue buruma`,
  `brown buruma`,
  `green buruma`,
  `grey buruma`,
  `orange buruma`,
  `pink buruma`,
  `purple buruma`,
  `red buruma`,
  `white buruma`,
  `yellow buruma`,
] as const satisfies string[];

const allCamisoleColorTags = [
  `aqua camisole`,
  `black camisole`,
  `blue camisole`,
  `brown camisole`,
  `green camisole`,
  `grey camisole`,
  `orange camisole`,
  `pink camisole`,
  `purple camisole`,
  `red camisole`,
  `white camisole`,
  `yellow camisole`,
] as const satisfies string[];

const allCapeColorTags = [
  `aqua cape`,
  `black cape`,
  `blue cape`,
  `brown cape`,
  `green cape`,
  `grey cape`,
  `orange cape`,
  `pink cape`,
  `purple cape`,
  `red cape`,
  `white cape`,
  `yellow cape`,
] as const satisfies string[];

const allCapeletColorTags = [
  `aqua capelet`,
  `black capelet`,
  `blue capelet`,
  `brown capelet`,
  `green capelet`,
  `grey capelet`,
  `orange capelet`,
  `pink capelet`,
  `purple capelet`,
  `red capelet`,
  `white capelet`,
  `yellow capelet`,
] as const satisfies string[];

const allChokerColorTags = [
  `aqua choker`,
  `black choker`,
  `blue choker`,
  `brown choker`,
  `green choker`,
  `grey choker`,
  `orange choker`,
  `pink choker`,
  `purple choker`,
  `red choker`,
  `white choker`,
  `yellow choker`,
] as const satisfies string[];

const allCollarColorTags = [
  `black collar`,
  `blue collar`,
  `brown collar`,
  `grey collar`,
  `orange collar`,
  `pink collar`,
  `purple collar`,
  `red collar`,
  `white collar`,
] as const satisfies string[];

const allDressColorTags = [
  `aqua dress`,
  `black dress`,
  `blue dress`,
  `brown dress`,
  `green dress`,
  `grey dress`,
  `orange dress`,
  `pink dress`,
  `purple dress`,
  `red dress`,
  `white dress`,
  `yellow dress`,
] as const satisfies string[];

const allFootwearColorTags = [
  `aqua footwear`,
  `black footwear`,
  `blue footwear`,
  `brown footwear`,
  `green footwear`,
  `grey footwear`,
  `orange footwear`,
  `pink footwear`,
  `purple footwear`,
  `red footwear`,
  `white footwear`,
  `yellow footwear`,
] as const satisfies string[];

const allGlovesColorTags = [
  `aqua gloves`,
  `black gloves`,
  `blue gloves`,
  `brown gloves`,
  `green gloves`,
  `grey gloves`,
  `multicolored gloves`,
  `orange gloves`,
  `pink gloves`,
  `purple gloves`,
  `red gloves`,
  `white gloves`,
  `yellow gloves`,
] as const satisfies string[];

const allJacketColorTags = [
  `aqua jacket`,
  `black jacket`,
  `blue jacket`,
  `brown jacket`,
  `green jacket`,
  `grey jacket`,
  `orange jacket`,
  `pink jacket`,
  `purple jacket`,
  `red jacket`,
  `white jacket`,
  `yellow jacket`,
] as const satisfies string[];

const allLeotardColorTags = [
  `aqua leotard`,
  `black leotard`,
  `blue leotard`,
  `brown leotard`,
  `green leotard`,
  `grey leotard`,
  `orange leotard`,
  `pink leotard`,
  `purple leotard`,
  `red leotard`,
  `white leotard`,
  `yellow leotard`,
] as const satisfies string[];
const allNeckerchiefColorTags = [
  `aqua neckerchief`,
  `black neckerchief`,
  `blue neckerchief`,
  `brown neckerchief`,
  `green neckerchief`,
  `grey neckerchief`,
  `orange neckerchief`,
  `pink neckerchief`,
  `purple neckerchief`,
  `red neckerchief`,
  `white neckerchief`,
  `yellow neckerchief`,
] as const satisfies string[];

const allNecktieColorTags = [
  `aqua necktie`,
  `black necktie`,
  `blue necktie`,
  `brown necktie`,
  `green necktie`,
  `grey necktie`,
  `orange necktie`,
  `pink necktie`,
  `purple necktie`,
  `red necktie`,
  `white necktie`,
  `yellow necktie`,
] as const satisfies string[];

const allOnePieceSwimsuitColorTags = [
  `aqua one-piece swimsuit`,
  `black one-piece swimsuit`,
  `blue one-piece swimsuit`,
  `brown one-piece swimsuit`,
  `gold one-piece swimsuit`,
  `green one-piece swimsuit`,
  `grey one-piece swimsuit`,
  `orange one-piece swimsuit`,
  `pink one-piece swimsuit`,
  `purple one-piece swimsuit`,
  `red one-piece swimsuit`,
  `silver one-piece swimsuit`,
  `white one-piece swimsuit`,
  `yellow one-piece swimsuit`,
] as const satisfies string[];

const allPantiesColorTags = [
  `aqua panties`,
  `black panties`,
  `blue panties`,
  `brown panties`,
  `green panties`,
  `grey panties`,
  `orange panties`,
  `pink panties`,
  `purple panties`,
  `red panties`,
  `white panties`,
  `yellow panties`,
] as const satisfies string[];

const allPantyhoseColorTags = [
  `aqua pantyhose`,
  `black pantyhose`,
  `blue pantyhose`,
  `brown pantyhose`,
  `green pantyhose`,
  `grey pantyhose`,
  `orange pantyhose`,
  `pink pantyhose`,
  `purple pantyhose`,
  `red pantyhose`,
  `white pantyhose`,
  `yellow pantyhose`,
] as const satisfies string[];

const allSailorCollarColorTags = [
  `aqua sailor collar`,
  `black sailor collar`,
  `blue sailor collar`,
  `brown sailor collar`,
  `green sailor collar`,
  `grey sailor collar`,
  `orange sailor collar`,
  `pink sailor collar`,
  `purple sailor collar`,
  `red sailor collar`,
  `white sailor collar`,
  `yellow sailor collar`,
] as const satisfies string[];

const allSerafukuColorTags = [
  `aqua serafuku`,
  `black serafuku`,
  `blue serafuku`,
  `brown serafuku`,
  `green serafuku`,
  `grey serafuku`,
  `orange serafuku`,
  `pink serafuku`,
  `purple serafuku`,
  `red serafuku`,
  `white serafuku`,
  `yellow serafuku`,
] as const satisfies string[];

const allShirtColorTags = [
  `aqua shirt`,
  `black shirt`,
  `blue shirt`,
  `brown shirt`,
  `green shirt`,
  `grey shirt`,
  `orange shirt`,
  `pink shirt`,
  `purple shirt`,
  `red shirt`,
  `white shirt`,
  `yellow shirt`,
] as const satisfies string[];

const allShortsColorTags = [
  `aqua shorts`,
  `black shorts`,
  `blue shorts`,
  `brown shorts`,
  `green shorts`,
  `grey shorts`,
  `multicolored shorts`,
  `orange shorts`,
  `pink shorts`,
  `purple shorts`,
  `red shorts`,
  `white shorts`,
  `yellow shorts`,
] as const satisfies string[];

const allSkirtColorTags = [
  `aqua skirt`,
  `black skirt`,
  `blue skirt`,
  `brown skirt`,
  `green skirt`,
  `grey skirt`,
  `orange skirt`,
  `pink skirt`,
  `purple skirt`,
  `red skirt`,
  `white skirt`,
  `yellow skirt`,
] as const satisfies string[];

const allSleevesColorTags = [
  `aqua sleeves`,
  `black sleeves`,
  `blue sleeves`,
  `brown sleeves`,
  `green sleeves`,
  `grey sleeves`,
  `orange sleeves`,
  `pink sleeves`,
  `purple sleeves`,
  `red sleeves`,
  `white sleeves`,
  `yellow sleeves`,
] as const satisfies string[];

const allSocksColorTags = [
  `black socks`,
  `blue socks`,
  `brown socks`,
  `green socks`,
  `grey socks`,
  `orange socks`,
  `pink socks`,
  `purple socks`,
  `red socks`,
  `white socks`,
  `yellow socks`,
] as const satisfies string[];

const allSweaterColorTags = [
  `aqua sweater`,
  `beige sweater`,
  `black sweater`,
  `blue sweater`,
  `brown sweater`,
  `green sweater`,
  `grey sweater`,
  `orange sweater`,
  `pink sweater`,
  `purple sweater`,
  `red sweater`,
  `white sweater`,
  `yellow sweater`,
] as const satisfies string[];

const allSweaterVestColorTags = [
  `aqua sweater vest`,
  `black sweater vest`,
  `blue sweater vest`,
  `brown sweater vest`,
  `green sweater vest`,
  `grey sweater vest`,
  `orange sweater vest`,
  `pink sweater vest`,
  `purple sweater vest`,
  `red sweater vest`,
  `white sweater vest`,
  `yellow sweater vest`,
] as const satisfies string[];

const allThighhighsColorTags = [
  `black thighhighs`,
  `blue thighhighs`,
  `brown thighhighs`,
  `green thighhighs`,
  `grey thighhighs`,
  `orange thighhighs`,
  `pink thighhighs`,
  `purple thighhighs`,
  `red thighhighs`,
  `white thighhighs`,
  `yellow thighhighs`,
] as const satisfies string[];

const allVestColorTags = [
  `aqua vest`,
  `black vest`,
  `blue vest`,
  `brown vest`,
  `green vest`,
  `grey vest`,
  `orange vest`,
  `pink vest`,
  `purple vest`,
  `red vest`,
  `white vest`,
  `yellow vest`,
] as const satisfies string[];

export const allDistinguishableOutfitTags = {
  "breasts skindentation": `skindentation`,
  "thighs skindentation": `skindentation`,
  "front neck star tattoo": `star tattoo`,
  "gold trim shirt": `gold trim`,
  "gold trim skirt": `gold trim`,
  "gold trim bodysuit": `gold trim`,
  "red trim shirt": `red trim`,
  "red trim skirt": `red trim`,
  "pinstripe pattern shirt": `pinstripe pattern`,
  "pinstripe pattern skirt": `pinstripe pattern`,
  "navel o-ring": `o-ring`,
  "neck jingle bell": `jingle bell`,
  "aqua neck ribbon": `aqua ribbon`,
  "black neck ribbon": `black ribbon`,
  "blue neck ribbon": `blue ribbon`,
  "brown neck ribbon": `brown ribbon`,
  "green neck ribbon": `green ribbon`,
  "grey neck ribbon": `grey ribbon`,
  "orange neck ribbon": `orange ribbon`,
  "pink neck ribbon": `pink ribbon`,
  "purple neck ribbon": `purple ribbon`,
  "red neck ribbon": `red ribbon`,
  "white neck ribbon": `white ribbon`,
  "yellow neck ribbon": `yellow ribbon`,
  "worn cardigan": `cardigan`,
  "aqua worn cardigan": `aqua cardigan`,
  "black worn cardigan": `black cardigan`,
  "blue worn cardigan": `blue cardigan`,
  "brown worn cardigan": `brown cardigan`,
  "green worn cardigan": `green cardigan`,
  "grey worn cardigan": `grey cardigan`,
  "orange worn cardigan": `orange cardigan`,
  "pink worn cardigan": `pink cardigan`,
  "purple worn cardigan": `purple cardigan`,
  "red worn cardigan": `red cardigan`,
  "white worn cardigan": `white cardigan`,
  "yellow worn cardigan": `yellow cardigan`,
  "around waist cardigan": `cardigan`,
  "aqua around waist cardigan": `aqua cardigan`,
  "black around waist cardigan": `black cardigan`,
  "blue around waist cardigan": `blue cardigan`,
  "brown around waist cardigan": `brown cardigan`,
  "green around waist cardigan": `green cardigan`,
  "grey around waist cardigan": `grey cardigan`,
  "orange around waist cardigan": `orange cardigan`,
  "pink around waist cardigan": `pink cardigan`,
  "purple around waist cardigan": `purple cardigan`,
  "red around waist cardigan": `red cardigan`,
  "white around waist cardigan": `white cardigan`,
  "yellow around waist cardigan": `yellow cardigan`,
  "chest gem": `gem`,
  "aqua chest gemstone": `aqua gemstone`,
  "black chest gemstone": `black gemstone`,
  "blue chest gemstone": `blue gemstone`,
  "brown chest gemstone": `brown gemstone`,
  "green chest gemstone": `green gemstone`,
  "grey chest gemstone": `grey gemstone`,
  "orange chest gemstone": `orange gemstone`,
  "pink chest gemstone": `pink gemstone`,
  "purple chest gemstone": `purple gemstone`,
  "red chest gemstone": `red gemstone`,
  "white chest gemstone": `white gemstone`,
  "yellow chest gemstone": `yellow gemstone`,
  "cable knit sweater": `cable knit`,
} as const satisfies { [k in string]: string };

export const allBodyOutfitTags = [
  ...allArmbandColorTags,
  ...allAscotColorTags,
  ...allBeltColorTags,
  ...allBikiniColorTags,
  ...allBodysuitColorTags,
  ...allBowtieColorTags,
  ...allBurumaColorTags,
  ...allCamisoleColorTags,
  ...allCapeColorTags,
  ...allCapeletColorTags,
  ...allChokerColorTags,
  ...allCollarColorTags,
  ...allDressColorTags,
  ...allFootwearColorTags,
  ...allGlovesColorTags,
  ...allJacketColorTags,
  ...allLeotardColorTags,
  ...allNeckerchiefColorTags,
  ...allNecktieColorTags,
  ...allOnePieceSwimsuitColorTags,
  ...allPantiesColorTags,
  ...allPantyhoseColorTags,
  ...allSailorCollarColorTags,
  ...allSerafukuColorTags,
  ...allShirtColorTags,
  ...allShortsColorTags,
  ...allSkirtColorTags,
  ...allSleevesColorTags,
  ...allSocksColorTags,
  ...allSweaterColorTags,
  ...allSweaterVestColorTags,
  ...allThighhighsColorTags,
  ...allVestColorTags,
  ...getKeys(allDistinguishableOutfitTags),
  `aiguillette`,
  `animal collar`,
  `animal hands`,
  `apron`,
  `aran sweater`,
  `argyle bikini`,
  `argyle sweater vest`,
  `argyle sweater`,
  `armband`,
  `armlet`,
  `armor`,
  `ascot`,
  `ass`,
  `asymmetrical legwear`,
  `babydoll`,
  `bandaged leg`,
  `bare arms`,
  `bare legs`,
  `bare shoulders`,
  `barefoot`,
  `belt`,
  `bike shorts`,
  `bikini skirt`,
  `bikini top only`,
  `bikini`,
  `blazer`,
  `bodystocking`,
  `bodysuit`,
  `boots`,
  `bottomless`,
  `bowtie`,
  `bra`,
  `breast pocket`,
  `bridal garter`,
  `bridal gauntlets`,
  `bridal lingerie`,
  `bride`,
  `buruma`,
  `business suit`,
  `butt crack`,
  `buttons`,
  `cameltoe`,
  `camisole`,
  `cape`,
  `capelet`,
  `cardigan around waist`,
  `casual`,
  `center frills`,
  `center opening`,
  `checkered bikini`,
  `cheerleader`,
  `cherry blossom print`,
  `chest jewel`,
  `china dress`,
  `chinese clothes`,
  `choker`,
  `cleavage cutout`,
  `cloak`,
  `clothes around waist`,
  `clothing cutout`,
  `collar`,
  `collarbone`,
  `collared dress`,
  `collared shirt`,
  `corset`,
  `covered navel`,
  `covered niples`,
  `cow print bikini`,
  `cow print gloves`,
  `cow print thighhighs`,
  `cow print`,
  `crop top overhang`,
  `crop top`,
  `cropped jacket`,
  `cropped shirt`,
  `cross-laced footwear`,
  `crotch seam`,
  `denim shorts`,
  `denim`,
  `detached collar`,
  `detached sleeves`,
  `dragon print`,
  `dress shirt`,
  `dress`,
  `elbow gloves`,
  `elbow pads`,
  `epaulettes`,
  `fingerless gloves`,
  `first high school uniform`,
  `floral print`,
  `frilled apron`,
  `frilled bikini`,
  `frilled skirt`,
  `frills`,
  `front-tie bikini top`,
  `fur collar`,
  `fur-trimmed bikini`,
  `fur-trimmed collar`,
  `fur-trimmed gloves`,
  `fur-trimmed skirt`,
  `garter belt`,
  `garter straps`,
  `gloves`,
  `gym shirt`,
  `gym uniform`,
  `hakama skirt`,
  `hakama`,
  `halterneck`,
  `high-low skirt`,
  `high-waist skirt`,
  `hip vent`,
  `hood up`,
  `hood`,
  `hooded cloak`,
  `infinite stratos academy school uniform`,
  `jacket`,
  `jersey`, // Don't confuse with `track jacket`.
  `jewelry`,
  `juliet sleeves`,
  `knee boots`,
  `knee pads`,
  `lace panties`,
  `lace-trimmed bra`,
  `latex leotard`,
  `leotard`,
  `lingerie`,
  `loafers`,
  `long skirt`,
  `long sleeves`,
  `lycoris uniform`,
  `magical girl`,
  `maid apron`,
  `maid bikini`,
  `maid`,
  `micro bikini`,
  `midriff`,
  `miko`,
  `military jacket`,
  `military uniform`,
  `miniskirt`,
  `naked shirt`,
  `navel cutout`,
  `navel`,
  `neck bell`,
  `neck ribbon`,
  `neckerchief`,
  `necklace`,
  `necktie`,
  `nipples`,
  `no bra`,
  `no pants`,
  `no shoes`,
  `nontraditional miko`,
  `nontraditional wedding dress`,
  `number print`,
  `o-ring bikini`,
  `o-ring bottom`,
  `o-ring top`,
  `off shoulder`,
  `off-shoulder dress`,
  `off-shoulder sweater`,
  `office lady`,
  `official alternate costume`,
  `open clothes`,
  `open jacket`,
  `open shirt`,
  `open-chest sweater`,
  `panties under pantyhose`,
  `panties`,
  `pantyhose`,
  `partially unbuttoned`,
  `partially undressed`,
  `paw gloves`,
  `paw shoes`,
  `pelvic curtain`,
  `pencil dress`,
  `pencil skirt`,
  `pendant`,
  `pilot suit`,
  `pirate`,
  `plaid bikini`,
  `plaid skirt`,
  `plaid sweater`,
  `playboy bunny`,
  `pleated dress`,
  `pleated skirt`,
  `polka dot bikini`,
  `polka dot sweater`,
  `print bikini`,
  `print dress`,
  `print gloves`,
  `print thighhighs`,
  `puffy sleeves`,
  `pumps`,
  `rabbit tail`,
  `rei no himo`,
  `revealing clothes`,
  `ribbed sweater`,
  `ribbon choker`,
  `sailor collar`,
  `sainan high school uniform`,
  `santa bikini`,
  `santa costume`,
  `sarong`,
  `school swimsuit`,
  `school uniform`,
  `serafuku`,
  `shiny clothes`,
  `shiny`,
  `shirt`,
  `shoes`,
  `short dress`,
  `short necktie`,
  `short shorts`,
  `short sleeves`,
  `shorts`,
  `shoulder blades`,
  `shuuchiin academy school uniform`,
  `side slit`,
  `side-tie bikini bottom`,
  `skin tight`,
  `skirt`,
  `sleeveless dress`,
  `sleeveless jacket`,
  `sleeveless shirt`,
  `sleeveless`,
  `sneakers`,
  `socks`,
  `sportswear`,
  `strap`,
  `striped bikini`,
  `striped sweater`,
  `suit`,
  `sweater around waist`,
  `sweater dress`,
  `sweater vest`,
  `sweater`,
  `t-shirt`,
  `thigh boots`,
  `thigh strap`,
  `thighhighs`,
  `tight clothes`,
  `tokiwadai school uniform`,
  `turtleneck bodysuit`,
  `turtleneck sweater`,
  `turtleneck`,
  `two-tone dress`,
  `unbuttoned`,
  `underbust`,
  `underwear only`,
  `underwear`,
  `uniform`,
  `vest`,
  `volleyball uniform`,
  `waist apron`,
  `wedding dress`,
  `white cloak`,
  `wide sleeves`,
  `wrist cuffs`,
  `swimsuit`,
  `bracelet`,
  `cutoffs`,
] as const satisfies readonly string[];
export type BodyOutfitTag = (typeof allBodyOutfitTags)[number];
