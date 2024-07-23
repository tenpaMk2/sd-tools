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

const allArmorColorTags = [
  `aqua armor`,
  `black armor`,
  `blue armor`,
  `brown armor`,
  `green armor`,
  `grey armor`,
  `orange armor`,
  `pink armor`,
  `purple armor`,
  `red armor`,
  `white armor`,
  `yellow armor`,
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

const allCloakColorTags = [
  `aqua cloak`,
  `black cloak`,
  `blue cloak`,
  `brown cloak`,
  `green cloak`,
  `grey cloak`,
  `orange cloak`,
  `pink cloak`,
  `purple cloak`,
  `red cloak`,
  `white cloak`,
  `yellow cloak`,
] as const satisfies string[];

const allCoatColorTags = [
  `aqua coat`,
  `black coat`,
  `blue coat`,
  `brown coat`,
  `green coat`,
  `grey coat`,
  `orange coat`,
  `pink coat`,
  `purple coat`,
  `red coat`,
  `white coat`,
  `yellow coat`,
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

const allLeggingsColorTags = [
  `aqua leggings`,
  `black leggings`,
  `blue leggings`,
  `brown leggings`,
  `green leggings`,
  `grey leggings`,
  `orange leggings`,
  `pink leggings`,
  `purple leggings`,
  `red leggings`,
  `white leggings`,
  `yellow leggings`,
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

const allPantsColorTags = [
  `aqua pants`,
  `black pants`,
  `blue pants`,
  `brown pants`,
  `green pants`,
  `grey pants`,
  `orange pants`,
  `pink pants`,
  `purple pants`,
  `red pants`,
  `white pants`,
  `yellow pants`,
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

const allScarfColorTags = [
  `aqua scarf`,
  `black scarf`,
  `blue scarf`,
  `brown scarf`,
  `green scarf`,
  `grey scarf`,
  `orange scarf`,
  `pink scarf`,
  `purple scarf`,
  `red scarf`,
  `white scarf`,
  `yellow scarf`,
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

const allSneakersColorTags = [
  `aqua sneakers`,
  `black sneakers`,
  `blue sneakers`,
  `brown sneakers`,
  `green sneakers`,
  `grey sneakers`,
  `orange sneakers`,
  `pink sneakers`,
  `purple sneakers`,
  `red sneakers`,
  `white sneakers`,
  `yellow sneakers`,
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

const allSportsBraColorTags = [
  `aqua sports bra`,
  `beige sports bra`,
  `black sports bra`,
  `blue sports bra`,
  `brown sports bra`,
  `green sports bra`,
  `grey sports bra`,
  `orange sports bra`,
  `pink sports bra`,
  `purple sports bra`,
  `red sports bra`,
  `white sports bra`,
  `yellow sports bra`,
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

const allTankTopColorTags = [
  `aqua tank top`,
  `black tank top`,
  `blue tank top`,
  `brown tank top`,
  `green tank top`,
  `grey tank top`,
  `orange tank top`,
  `pink tank top`,
  `purple tank top`,
  `red tank top`,
  `white tank top`,
  `yellow tank top`,
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
  "breasts skindentation -> skindentation": `skindentation`,
  "thighs skindentation -> skindentation": `skindentation`,
  "front neck star tattoo -> star tattoo": `star tattoo`,
  "gold trim shirt -> gold trim": `gold trim`,
  "gold trim skirt -> gold trim": `gold trim`,
  "gold trim bodysuit -> gold trim": `gold trim`,
  "red trim shirt -> red trim": `red trim`,
  "red trim skirt -> red trim": `red trim`,
  "pinstripe pattern shirt -> pinstripe pattern": `pinstripe pattern`,
  "pinstripe pattern skirt -> pinstripe pattern": `pinstripe pattern`,
  "navel o-ring -> o-ring": `o-ring`,
  "neck jingle bell -> jingle bell": `jingle bell`,
  "aqua neck ribbon -> aqua ribbon": `aqua ribbon`,
  "black neck ribbon -> black ribbon": `black ribbon`,
  "blue neck ribbon -> blue ribbon": `blue ribbon`,
  "brown neck ribbon -> brown ribbon": `brown ribbon`,
  "green neck ribbon -> green ribbon": `green ribbon`,
  "grey neck ribbon -> grey ribbon": `grey ribbon`,
  "orange neck ribbon -> orange ribbon": `orange ribbon`,
  "pink neck ribbon -> pink ribbon": `pink ribbon`,
  "purple neck ribbon -> purple ribbon": `purple ribbon`,
  "red neck ribbon -> red ribbon": `red ribbon`,
  "white neck ribbon -> white ribbon": `white ribbon`,
  "yellow neck ribbon -> yellow ribbon": `yellow ribbon`,
  "worn cardigan -> cardigan": `cardigan`,
  "aqua worn cardigan -> aqua cardigan": `aqua cardigan`,
  "black worn cardigan -> black cardigan": `black cardigan`,
  "blue worn cardigan -> blue cardigan": `blue cardigan`,
  "brown worn cardigan -> brown cardigan": `brown cardigan`,
  "green worn cardigan -> green cardigan": `green cardigan`,
  "grey worn cardigan -> grey cardigan": `grey cardigan`,
  "orange worn cardigan -> orange cardigan": `orange cardigan`,
  "pink worn cardigan -> pink cardigan": `pink cardigan`,
  "purple worn cardigan -> purple cardigan": `purple cardigan`,
  "red worn cardigan -> red cardigan": `red cardigan`,
  "white worn cardigan -> white cardigan": `white cardigan`,
  "yellow worn cardigan -> yellow cardigan": `yellow cardigan`,
  "around waist cardigan -> cardigan": `cardigan`,
  "aqua around waist cardigan -> aqua cardigan": `aqua cardigan`,
  "black around waist cardigan -> black cardigan": `black cardigan`,
  "blue around waist cardigan -> blue cardigan": `blue cardigan`,
  "brown around waist cardigan -> brown cardigan": `brown cardigan`,
  "green around waist cardigan -> green cardigan": `green cardigan`,
  "grey around waist cardigan -> grey cardigan": `grey cardigan`,
  "orange around waist cardigan -> orange cardigan": `orange cardigan`,
  "pink around waist cardigan -> pink cardigan": `pink cardigan`,
  "purple around waist cardigan -> purple cardigan": `purple cardigan`,
  "red around waist cardigan -> red cardigan": `red cardigan`,
  "white around waist cardigan -> white cardigan": `white cardigan`,
  "yellow around waist cardigan -> yellow cardigan": `yellow cardigan`,
  "chest gem -> gem": `gem`,
  "aqua chest gemstone -> aqua gemstone": `aqua gemstone`,
  "black chest gemstone -> black gemstone": `black gemstone`,
  "blue chest gemstone -> blue gemstone": `blue gemstone`,
  "brown chest gemstone -> brown gemstone": `brown gemstone`,
  "green chest gemstone -> green gemstone": `green gemstone`,
  "grey chest gemstone -> grey gemstone": `grey gemstone`,
  "orange chest gemstone -> orange gemstone": `orange gemstone`,
  "pink chest gemstone -> pink gemstone": `pink gemstone`,
  "purple chest gemstone -> purple gemstone": `purple gemstone`,
  "red chest gemstone -> red gemstone": `red gemstone`,
  "white chest gemstone -> white gemstone": `white gemstone`,
  "yellow chest gemstone -> yellow gemstone": `yellow gemstone`,
  "cable knit sweater -> cable knit": `cable knit`,
  "school swimsuit under serafuku -> swimsuit under clothes": `swimsuit under clothes`,
  "body apron -> apron": `apron`,
  "waist apron -> apron": `apron`,
  "frilled body apron -> frilled apron": `frilled apron`,
  "frilled waist apron -> frilled apron": `frilled apron`,
  "aqua body apron -> aqua apron": `aqua apron`,
  "black body apron -> black apron": `black apron`,
  "blue body apron -> blue apron": `blue apron`,
  "brown body apron -> brown apron": `brown apron`,
  "green body apron -> green apron": `green apron`,
  "grey body apron -> grey apron": `grey apron`,
  "orange body apron -> orange apron": `orange apron`,
  "pink body apron -> pink apron": `pink apron`,
  "purple body apron -> purple apron": `purple apron`,
  "red body apron -> red apron": `red apron`,
  "white body apron -> white apron": `white apron`,
  "yellow body apron -> yellow apron": `yellow apron`,
  "aqua waist apron -> aqua apron": `aqua apron`,
  "black waist apron -> black apron": `black apron`,
  "blue waist apron -> blue apron": `blue apron`,
  "brown waist apron -> brown apron": `brown apron`,
  "green waist apron -> green apron": `green apron`,
  "grey waist apron -> grey apron": `grey apron`,
  "orange waist apron -> orange apron": `orange apron`,
  "pink waist apron -> pink apron": `pink apron`,
  "purple waist apron -> purple apron": `purple apron`,
  "red waist apron -> red apron": `red apron`,
  "white waist apron -> white apron": `white apron`,
  "yellow waist apron -> yellow apron": `yellow apron`,
  "shoulder cutout -> clothing cutout": `clothing cutout`,
  "armpit cutout -> clothing cutout": `clothing cutout`,
  "cleavage cutout -> clothing cutout": `clothing cutout`,
  "underboob cutout -> clothing cutout": `clothing cutout`,
  "stomach cutout -> clothing cutout": `clothing cutout`,
  "navel cutout -> clothing cutout": `clothing cutout`,
  "side cutout -> clothing cutout": `clothing cutout`,
  "back cutout -> clothing cutout": `clothing cutout`,
  "o-ring bikini -> o-ring": `o-ring`,
  "frilled bikini -> frills": `frills`,
  "cross-laced dress -> cross-laced clothes": `cross-laced clothes`,
  "cross-laced top -> cross-laced clothes": `cross-laced clothes`,
  "cross-laced skirt -> cross-laced clothes": `cross-laced clothes`,
} as const satisfies Record<string, string>;

export const allBodyOutfitTags = [
  ...allArmbandColorTags,
  ...allArmorColorTags,
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
  ...allCloakColorTags,
  ...allCoatColorTags,
  ...allCollarColorTags,
  ...allDressColorTags,
  ...allFootwearColorTags,
  ...allGlovesColorTags,
  ...allJacketColorTags,
  ...allLeggingsColorTags,
  ...allLeotardColorTags,
  ...allNeckerchiefColorTags,
  ...allNecktieColorTags,
  ...allOnePieceSwimsuitColorTags,
  ...allPantiesColorTags,
  ...allPantsColorTags,
  ...allPantyhoseColorTags,
  ...allSailorCollarColorTags,
  ...allScarfColorTags,
  ...allSerafukuColorTags,
  ...allShirtColorTags,
  ...allShortsColorTags,
  ...allSkirtColorTags,
  ...allSleevesColorTags,
  ...allSneakersColorTags,
  ...allSocksColorTags,
  ...allSportsBraColorTags,
  ...allSweaterColorTags,
  ...allSweaterVestColorTags,
  ...allTankTopColorTags,
  ...allThighhighsColorTags,
  ...allVestColorTags,
  ...getKeys(allDistinguishableOutfitTags),
  `aiguillette`,
  `angel wings`,
  `angel`,
  `animal collar`,
  `animal hands`,
  `ankle boots`,
  `ankle lace-up`,
  `aran sweater`,
  `argyle bikini`,
  `argyle pantyhose`,
  `argyle sweater vest`,
  `argyle sweater`,
  `armband`,
  `armlet`,
  `armor`,
  `armored boots`,
  `armpit cutout`,
  `ascot`,
  `ass`,
  `asymmetrical clothes`,
  `asymmetrical legwear`,
  `babydoll`,
  `back cutout`,
  `bandaged leg`,
  `bandeau`,
  `bare arms`,
  `bare legs`,
  `bare shoulders`,
  `barefoot`,
  `belt buckle`,
  `belt`,
  `bike shorts`,
  `bikini skirt`,
  `bikini top only`,
  `bikini`,
  `black spaghetti straps`, // For `mushoku-tensei-pajamas-roxy-ibukimakisiko` .
  `blazer`,
  `bobby socks`,
  `bodystocking`,
  `bodysuit`,
  `boots`,
  `bottomless`,
  `bowtie`,
  `bra`,
  `bracelet`,
  `breast pocket`,
  `breastplate`,
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
  `cat cutout`,
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
  `clothes writing`,
  `coat`,
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
  `crisis management form \\(machimazo\\)`,
  `criss-cross halter`,
  `crop top overhang`,
  `crop top`,
  `cropped jacket`,
  `cropped shirt`,
  `cross tie`,
  `cross-laced dress`,
  `cross-laced footwear`,
  `crotch seam`,
  `cutoffs`,
  `denim shorts`,
  `denim`,
  `detached collar`,
  `detached sleeves`,
  `dirndl`,
  `dolphin shorts`,
  `dragon print`,
  `dress shirt`,
  `dress`,
  `duffel coat`,
  `elbow gloves`,
  `elbow pads`,
  `epaulettes`,
  `fingerless gloves`,
  `first high school uniform`,
  `floral print`,
  `formal`,
  `frilled bikini`,
  `frilled dress`,
  `frilled shirt`,
  `frilled skirt`,
  `frilled sleeves`,
  `frills`,
  `front-tie bikini top`,
  `front-tie top`,
  `fur coat`,
  `fur collar`,
  `fur-trimmed bikini`,
  `fur-trimmed collar`,
  `fur-trimmed gloves`,
  `fur-trimmed skirt`,
  `garter belt`,
  `garter straps`,
  `german clothes`,
  `gloves`,
  `gym shirt`,
  `gym uniform`,
  `habit`,
  `hakama skirt`,
  `hakama`,
  `half gloves`,
  `halterneck`,
  `harem outfit`,
  `harem pants`,
  `heart cutout`,
  `high-low skirt`,
  `high-waist skirt`,
  `hip vent`,
  `hood up`,
  `hood`,
  `hooded cloak`,
  `hoodie`,
  `id card`,
  `infinite stratos academy school uniform`,
  `jacket`,
  `jersey`, // Don't confuse with `track jacket`.
  `jewelry`,
  `juliet sleeves`,
  `knee boots`,
  `knee pads`,
  `lab coat`,
  `lace panties`,
  `lace-trimmed bra`,
  `lace-up boots`,
  `latex bandeau`,
  `latex bikini`,
  `latex leotard`,
  `latex shorts`,
  `layered bikini`,
  `leggings`,
  `leotard`,
  `lingerie`,
  `loafers`,
  `long skirt`,
  `long sleeves`,
  `loose socks`,
  `lycoris uniform`,
  `magical girl`,
  `maid apron`,
  `maid bikini`,
  `maid`,
  `mary janes`,
  `micro bikini`,
  `midriff`,
  `miko`,
  `military jacket`,
  `military uniform`,
  `military`,
  `miniskirt`,
  `mouth veil`,
  `multicolored clothes`,
  `multicolored dress`,
  `naked shirt`,
  `naked towel`,
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
  `nun`,
  `o-ring bikini`,
  `o-ring bottom`,
  `o-ring top`,
  `off shoulder`,
  `off-shoulder dress`,
  `off-shoulder sweater`,
  `office lady`,
  `official alternate costume`,
  `open clothes`,
  `open coat`,
  `open jacket`,
  `open shirt`,
  `open-chest sweater`,
  `overalls`,
  `oversized clothes`,
  `oversized shirt`,
  `panties under pantyhose`,
  `panties`,
  `pants`,
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
  `plaid bowtie`,
  `plaid skirt`,
  `plaid sweater`,
  `playboy bunny`,
  `pleated dress`,
  `pleated skirt`,
  `pointy footwear`,
  `polka dot bikini`,
  `polka dot sweater`,
  `priestess`,
  `print bikini`,
  `print dress`,
  `print gloves`,
  `print thighhighs`,
  `puffy sleeves`,
  `pumps`,
  `rabbit tail`,
  `race queen`,
  `rei no himo`,
  `revealing clothes`,
  `ribbed dress`,
  `ribbed sleeves`,
  `ribbed sweater`,
  `ribbon choker`,
  `robe`,
  `sailor collar`,
  `sainan high school uniform`,
  `sandals`,
  `santa bikini`,
  `santa costume`,
  `sarong`,
  `scarf`,
  `school swimsuit`,
  `school uniform`,
  `serafuku`,
  `shiny clothes`,
  `shiny skin`, // Treat it as body outfit.
  `shiny`,
  `shirt`,
  `shoes`,
  `short dress`,
  `short necktie`,
  `short over long sleeves`,
  `short shorts`,
  `short sleeves`,
  `shorts`,
  `shoulder blades`,
  `shoulder cutout`,
  `showgirl skirt`,
  `shuuchiin academy school uniform`,
  `side cutout`,
  `side slit`,
  `side-tie bikini bottom`,
  `single glove`,
  `single wrist cuff`,
  `skin tight`,
  `skirt suit`,
  `skirt`,
  `sleeveless dress`,
  `sleeveless jacket`,
  `sleeveless shirt`,
  `sleeveless`,
  `sleeves past wrists`,
  `sneakers`,
  `socks`,
  `spaghetti strap`,
  `sports bikini`,
  `sports bra`,
  `sportswear`,
  `stomach cutout`,
  `strap`,
  `striped bikini`,
  `striped necktie`,
  `striped sweater`,
  `suit`,
  `sundress`,
  `suspenders`,
  `sweater around waist`,
  `sweater dress`,
  `sweater vest`,
  `sweater`,
  `swimsuit`,
  `t-shirt`,
  `tank top`,
  `teacher`,
  `tennis uniform`,
  `thigh boots`,
  `thigh strap`,
  `thighhighs`,
  `tight clothes`,
  `tokiwadai school uniform`,
  `track jacket`,
  `trench coat`,
  `turtleneck bodysuit`,
  `turtleneck sweater`,
  `turtleneck`,
  `two-tone dress`,
  `two-tone shirt`,
  `unbuttoned`,
  `underboob cutout`,
  `underbust`,
  `undersized clothes`,
  `underwear only`,
  `underwear`,
  `uniform`,
  `vest`,
  `volleyball uniform`,
  `waist apron`,
  `waist cape`,
  `waitress`,
  `wedding dress`,
  `white boots`, // For `mushoku-tensei-outfit-roxy-ibukimakisiko` .
  `white spaghetti straps`, // For `mushoku-tensei-pajamas-roxy-ibukimakisiko` .
  `white towel`,
  `wide sleeves`,
  `wrist cuffs`,
] as const satisfies readonly string[];
export type BodyOutfitTag = (typeof allBodyOutfitTags)[number];
