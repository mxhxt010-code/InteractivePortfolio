/* Generated from Figma node 166:2044. Layout markup is preserved verbatim from the design; interactive hooks are layered on top. */
import { scrollToSection } from "../lib/scroll";
import { WorkSlot } from "../components/WorkSlot";
import { Inventory } from "../components/Inventory";
import { ByeScreen, useByeSequence } from "../components/ByeScreen";

const assetPathPrefix = "/assets";
const imgDinkieIconsThreeNetworkedComputers = `${assetPathPrefix}/8f1dc.svg`;
const imgSolarBuildingsBold = `${assetPathPrefix}/34146.svg`;
const imgFontistoPersons = `${assetPathPrefix}/dc355.svg`;
const imgImage215 = `${assetPathPrefix}/f55b9.png`;
const imgImage200 = `${assetPathPrefix}/b48cd.png`;
const imgImage235 = `${assetPathPrefix}/7f7e3.png`;
const imgImage214 = `${assetPathPrefix}/076ec.png`;
const imgImage236 = `${assetPathPrefix}/34a11.png`;
const imgImage209 = `${assetPathPrefix}/01f00.png`;
const imgImage231 = `${assetPathPrefix}/c38c2.png`;
const imgImage210 = `${assetPathPrefix}/49805.png`;
const imgImage237 = `${assetPathPrefix}/ac302.png`;
const imgImage233 = `${assetPathPrefix}/f9bf8.png`;
const imgImage238 = `${assetPathPrefix}/c0264.png`;
const imgImage239 = `${assetPathPrefix}/78edf.png`;
const imgImage220 = `${assetPathPrefix}/57e51.png`;
const imgImage216 = `${assetPathPrefix}/2a284.png`;
const imgImage217 = `${assetPathPrefix}/51d85.png`;
const imgImage218 = `${assetPathPrefix}/42671.png`;
const imgImage221 = `${assetPathPrefix}/5e58e.png`;
const imgImage222 = `${assetPathPrefix}/c402f.png`;
const imgImage225 = `${assetPathPrefix}/799f4.png`;
const imgImage194 = `${assetPathPrefix}/3bfbd.png`;
const imgImage182 = `${assetPathPrefix}/f169b.png`;
const imgImage146 = `${assetPathPrefix}/b87ca.png`;
const imgImage188 = `${assetPathPrefix}/ba672.png`;
const imgImage168 = `${assetPathPrefix}/b8370.png`;
const imgImage181 = `${assetPathPrefix}/99a76.png`;
const imgImage147 = `${assetPathPrefix}/35dee.png`;
const imgImage190 = `${assetPathPrefix}/c459a.png`;
const imgImage189 = `${assetPathPrefix}/0c248.png`;
const imgImage193 = `${assetPathPrefix}/93835.png`;
const imgImage191 = `${assetPathPrefix}/5fc8b.png`;
const imgImage192 = `${assetPathPrefix}/4152c.png`;
const imgImage = `${assetPathPrefix}/c2a80.png`;
const imgImage5 = `${assetPathPrefix}/beebb.png`;
const imgImage1 = `${assetPathPrefix}/f7355.png`;
const imgIiitDwdPic1 = `${assetPathPrefix}/a42f4.png`;
const imgImageIiitDharwadAchieves96PlacementRateFor2024BatchHighestInInstituteHistory = `${assetPathPrefix}/cc1c5.png`;
const imgImageStudentsWinNationalHackathonAiPoweredHealthMonitoringProjectBagsTopPrize = `${assetPathPrefix}/2e36e.png`;
const imgImageTechFest2024AnnualTechnologyFestivalDraws5000ParticipantsFromAcrossIndia = `${assetPathPrefix}/4c9d8.png`;
const imgImage3 = `${assetPathPrefix}/150dc.png`;
const imgImage4 = `${assetPathPrefix}/712e9.png`;
const imgImageIiitDharwad = `${assetPathPrefix}/80326.png`;
const imgImage240 = `${assetPathPrefix}/7401b.png`;
const imgImage241 = `${assetPathPrefix}/42b47.png`;
const imgEllipse11 = `${assetPathPrefix}/023e3.svg`;
const imgCodiconCallOutgoing = `${assetPathPrefix}/2d889.svg`;
const imgEllipse10 = `${assetPathPrefix}/c0785.svg`;
const imgLine13 = `${assetPathPrefix}/6b766.svg`;
const imgLine14 = `${assetPathPrefix}/c2a2f.svg`;
const imgGroup83 = `${assetPathPrefix}/b548e.svg`;
const imgGroup78 = `${assetPathPrefix}/a554f.svg`;
const imgLine18 = `${assetPathPrefix}/c4771.svg`;
export const imgLogosAdobePhotoshop = `${assetPathPrefix}/2f830.svg`;
export const imgLogosCursorIcon = `${assetPathPrefix}/8d470.svg`;
const imgLine17 = `${assetPathPrefix}/d58aa.svg`;
const imgLine15 = `${assetPathPrefix}/ea49d.svg`;
const imgLine16 = `${assetPathPrefix}/cef4d.svg`;
const imgThesvgColorYoutubeMusic = `${assetPathPrefix}/079f9.svg`;
const imgVector453 = `${assetPathPrefix}/ee59c.svg`;
const imgVector454 = `${assetPathPrefix}/90413.svg`;
const imgLine19 = `${assetPathPrefix}/8fe89.svg`;
export const imgGroup = `${assetPathPrefix}/97227.svg`;
export const imgGroup1 = `${assetPathPrefix}/9cce2.svg`;
export const imgDeviconPython = `${assetPathPrefix}/daf30.svg`;
export const imgFluentMdl2GitHubLogo = `${assetPathPrefix}/2794e.svg`;
export const imgDeviconFigma = `${assetPathPrefix}/f7ac5.svg`;
export const imgLogosAdobeIllustrator = `${assetPathPrefix}/45c13.svg`;
export const imgMaterialIconThemePytorch = `${assetPathPrefix}/7d315.svg`;
const imgGroup2 = `${assetPathPrefix}/51525.svg`;
const imgEmojioneV1BridgeAtNight = `${assetPathPrefix}/d6ce3.svg`;
export const imgMdiMicrosoftVisualStudioCode = `${assetPathPrefix}/171c3.svg`;
const imgEllipse14 = `${assetPathPrefix}/dfdd8.svg`;
const imgEllipse15 = `${assetPathPrefix}/a96a7.svg`;
const imgEllipse12 = `${assetPathPrefix}/cab7a.svg`;
const imgVector467 = `${assetPathPrefix}/d9e71.svg`;
const imgVector465 = `${assetPathPrefix}/e512a.svg`;
const imgVector463 = `${assetPathPrefix}/b4970.svg`;
const imgVector461 = `${assetPathPrefix}/6612f.svg`;
const imgVector457 = `${assetPathPrefix}/4ff17.svg`;
const imgVector455 = `${assetPathPrefix}/3584e.svg`;
const imgEllipse5 = `${assetPathPrefix}/44359.svg`;
const imgGroup72 = `${assetPathPrefix}/6b58b.svg`;
const imgLine3 = `${assetPathPrefix}/61937.svg`;
const imgLine4 = `${assetPathPrefix}/751b3.svg`;
const imgImage219 = `${assetPathPrefix}/33677.svg`;
const imgVector55 = `${assetPathPrefix}/cfff8.svg`;
const imgVector56 = `${assetPathPrefix}/006df.svg`;
const imgVector120 = `${assetPathPrefix}/ec803.svg`;
const imgEllipse1 = `${assetPathPrefix}/5799e.svg`;
const imgBiologicalArchive = `${assetPathPrefix}/7ac3b.svg`;
const imgPolygon1 = `${assetPathPrefix}/deef3.svg`;
const imgStar2 = `${assetPathPrefix}/200fe.svg`;
const imgVector = `${assetPathPrefix}/9447b.svg`;
const imgVector4 = `${assetPathPrefix}/a5984.svg`;
const imgVector5 = `${assetPathPrefix}/76613.svg`;
const imgVector6 = `${assetPathPrefix}/d444f.svg`;
const imgGrommetIconsUserExpert = `${assetPathPrefix}/81c93.svg`;
const imgGrommetIconsWorkshop = `${assetPathPrefix}/524a7.svg`;
const imgGroup3 = `${assetPathPrefix}/710d5.svg`;
const imgVector1 = `${assetPathPrefix}/ef9d7.svg`;
const imgVector2 = `${assetPathPrefix}/a8014.svg`;
const imgVector3 = `${assetPathPrefix}/4f484.svg`;
const imgGroup4 = `${assetPathPrefix}/42102.svg`;
const imgThemeIcon = `${assetPathPrefix}/15f05.svg`;
const imgLine1 = `${assetPathPrefix}/a6e54.svg`;
const imgIxArrowUp = `${assetPathPrefix}/cc3d5.svg`;
const imgIcon = `${assetPathPrefix}/9c7d3.svg`;
const imgIcon1 = `${assetPathPrefix}/d0cae.svg`;
const imgIcon2 = `${assetPathPrefix}/a6380.svg`;
const imgIcon3 = `${assetPathPrefix}/49d58.svg`;
const imgLine2 = `${assetPathPrefix}/1343f.svg`;
const imgVector7 = `${assetPathPrefix}/1fb21.svg`;
const imgLine5 = `${assetPathPrefix}/2b81a.svg`;
const imgEllipse2 = `${assetPathPrefix}/62755.svg`;
const imgVector456 = `${assetPathPrefix}/4b5e1.svg`;
const imgVector458 = `${assetPathPrefix}/aab0e.svg`;
const imgVector466 = `${assetPathPrefix}/5870b.svg`;
const imgVector462 = `${assetPathPrefix}/1a76e.svg`;
const imgVector460 = `${assetPathPrefix}/5338f.svg`;
const imgEllipse20 = `${assetPathPrefix}/0ba41.svg`;
const imgEllipse21 = `${assetPathPrefix}/decf9.svg`;
const imgLine22 = `${assetPathPrefix}/9575a.svg`;
const imgLine23 = `${assetPathPrefix}/3948c.svg`;
const imgVector468 = `${assetPathPrefix}/c8cf8.svg`;
const imgEllipse16 = `${assetPathPrefix}/55a44.svg`;
const imgEllipse17 = `${assetPathPrefix}/572c7.svg`;
const imgEllipse18 = `${assetPathPrefix}/27c37.svg`;
const imgAkarIconsFlag = `${assetPathPrefix}/12bc0.svg`;
const imgAkarIconsFlag1 = `${assetPathPrefix}/eb3fa.svg`;
const imgLine24 = `${assetPathPrefix}/26ea0.svg`;
const imgLine25 = `${assetPathPrefix}/9a0f3.svg`;
const imgLine26 = `${assetPathPrefix}/63d04.svg`;
const imgVector469 = `${assetPathPrefix}/5eb4e.svg`;
const imgLine28 = `${assetPathPrefix}/f6e45.svg`;
const imgLine29 = `${assetPathPrefix}/e27a2.svg`;
const imgLine27 = `${assetPathPrefix}/eaca9.svg`;
const imgGroup5 = `${assetPathPrefix}/1acb5.svg`;
const imgGroup6 = `${assetPathPrefix}/fdb3d.svg`;
const imgDeviconLinkedinWordmark = `${assetPathPrefix}/17cee.svg`;
const imgSelfhstInstagram = `${assetPathPrefix}/7f04e.svg`;
const imgLine30 = `${assetPathPrefix}/69bb4.svg`;
const imgLogosGoogleGmail2020 = `${assetPathPrefix}/ff271.svg`;
const imgFlatColorIconsMissedCall = `${assetPathPrefix}/55d53.svg`;

function DinkieIconsThreeNetworkedComputers({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[13.92px]"} data-node-id="155:671" data-name="dinkie-icons:three-networked-computers">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDinkieIconsThreeNetworkedComputers} />
    </div>
  );
}

function SolarBuildingsBold({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[13.92px]"} data-node-id="155:666" data-name="solar:buildings-bold">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSolarBuildingsBold} />
    </div>
  );
}

function FontistoPersons({ className }: { className?: string }) {
  return (
    <div className={className || "h-[13.868px] relative w-[15.024px]"} data-node-id="155:661" data-name="fontisto:persons">
      <div className="absolute inset-[-0.11%_0_-0.32%_0]">
        <img alt="" className="block max-w-none size-full" src={imgFontistoPersons} />
      </div>
    </div>
  );
}

function MaterialSymbolsNewsOutlineSharp({ className }: { className?: string }) {
  return <div className={className || "relative rounded-[3.742px] size-[24.222px]"} data-node-id="155:655" data-name="material-symbols:news-outline-sharp" />;
}

export function HeroArt() {
  return (
    <>
      <div className="absolute left-[1109px] size-[152px] top-[761px]" data-node-id="166:1301">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse11} />
      </div>
      <div className="absolute bg-[#ff7e9d] h-[148px] left-[201px] top-[425px] w-[281px]" data-node-id="166:1302" />
      <div className="absolute bg-[#ff7e9d] h-[148px] left-[845px] top-[425px] w-[239px]" data-node-id="166:1303" />
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[76.02px] not-italic text-[215.125px] text-black top-[401px] whitespace-nowrap" data-node-id="166:1304">
        PORTFOLIO
      </p>
      <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[-11.14px]" data-node-id="166:1305">
        <div className="-translate-x-1/2 absolute bg-[#dfef00] h-[57.375px] left-[calc(50%-0.5px)] rounded-[28.688px] top-[7.03px] w-[1377px]" data-node-id="166:1306" />
        <div className="[word-break:break-word] absolute contents font-['Love_Ya_Like_A_Sister:Regular'] leading-[normal] left-[490px] not-italic text-[43.103px] text-black top-[7.98px] whitespace-nowrap" data-node-id="166:1307">
          <button type="button" onClick={() => scrollToSection("home")} className="absolute left-[490px] top-[7.98px]" data-node-id="166:1308" data-nav-link="">
            Home
          </button>
          <button type="button" onClick={() => scrollToSection("works")} className="absolute left-[634.39px] top-[7.98px]" data-node-id="166:1309" data-nav-link="">
            Works
          </button>
          <button type="button" onClick={() => scrollToSection("tools")} className="absolute left-[790.26px] top-[7.98px]" data-node-id="166:1310" data-nav-link="">
            Tools
          </button>
        </div>
        <p className="[word-break:break-word] absolute font-['Sacramento:Regular'] leading-[normal] left-[81.63px] not-italic text-[55.462px] text-black top-[calc(50%-523.14px)] whitespace-nowrap" data-node-id="166:1311">
          moityyy
        </p>
        <a href="tel:+918122904062" aria-label="Call Mohit" data-hover-pop="" className="-translate-y-1/2 absolute flex items-center justify-center left-[1217.71px] size-[68.433px] top-[calc(50%-476.49px)]" data-node-id="166:1312">
          <div className="flex-none rotate-[-13.93deg]">
            <div className="relative size-[56.496px]" data-name="codicon:call-outgoing">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCodiconCallOutgoing} />
            </div>
          </div>
        </a>
      </div>
      <div className="absolute flex items-center justify-center left-[253px] size-[849.194px] top-[401px]" data-node-id="166:1314">
        <div className="flex-none rotate-[3.13deg]">
          <div className="relative size-[806.415px]" data-name="image 215">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage215} />
          </div>
        </div>
      </div>
      <div className="absolute h-[497px] left-0 top-[728px] w-[1454px]" data-node-id="166:1315" data-name="image 200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.04%] max-w-none top-0 w-[99.92%]" src={imgImage200} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Love_Ya_Like_A_Sister:Regular'] leading-[0] left-[76px] lowercase not-italic text-[#7a1e2c] text-[50.4px] top-[355px] whitespace-nowrap" data-node-id="166:1316">
        <span className="leading-[normal] uppercase">G</span>
        <span className="leading-[normal]">raphic designer</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Love_Ya_Like_A_Sister:Regular'] leading-[0] left-[1006px] lowercase not-italic text-[#7f2831] text-[59.205px] top-[589.5px] whitespace-nowrap" data-node-id="166:1317">
        <span className="leading-[normal] uppercase">A</span>
        <span className="leading-[normal]">i/</span>
        <span className="leading-[normal] uppercase">m</span>
        <span className="leading-[normal]">l engineer</span>
      </p>
      <div className="absolute h-[71px] left-0 top-[57px] w-[419px]" data-node-id="166:1318" data-name="image 235">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[734.22%] left-0 max-w-none top-[-322.45%] w-full" src={imgImage235} />
        </div>
      </div>
      <div className="absolute left-[1152px] size-[66px] top-[728px]" data-node-id="166:1319">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse10} />
      </div>
      <div className="absolute flex items-center justify-center left-[1098px] size-[54px] top-[701px]" data-node-id="166:1320">
        <div className="-rotate-135 flex-none">
          <div className="h-0 relative w-[76.368px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1218px] size-[54px] top-[701px]" data-node-id="166:1321">
        <div className="-rotate-45 -scale-y-100 flex-none">
          <div className="h-0 relative w-[76.368px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine14} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[240.031px] items-center justify-center left-[744px] top-[57px] w-[301.929px]" data-node-id="166:1322">
        <div className="-scale-y-100 flex-none rotate-[-167.55deg]">
          <div className="h-[186.636px] relative w-[267.99px]" data-name="image 214">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[368.32%] left-[-44.29%] max-w-none top-[-0.06%] w-[144.29%]" src={imgImage214} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[240.031px] items-center justify-center left-[1001px] top-[147px] w-[301.929px]" data-node-id="167:2071">
        <div className="-scale-y-100 flex-none rotate-[-167.55deg]">
          <div className="h-[186.636px] relative w-[267.99px]" data-name="image 237">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[368.32%] left-[-44.29%] max-w-none top-[-0.06%] w-[144.29%]" src={imgImage214} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[1143px] size-[85px] top-[658px]" data-node-id="166:1323" data-name="image 236">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage236} />
      </div>
      <div className="absolute border-4 border-[#9b5af0] border-solid h-[190px] left-[603px] top-[400px] w-[669px]" data-node-id="166:1324" />
      <div className="absolute border-4 border-[#ffc567] border-solid h-[161px] left-[86px] top-[416px] w-[759px]" data-node-id="166:1325" />
    </>
  );
}

export function AboutArt() {
  return (
    <>
      <div className="about-stars absolute left-[631.96px] size-[938.206px] top-[126.54px]" data-node-id="167:2087">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup83} />
      </div>
      <div className="absolute h-[1283px] left-[-122px] top-0 w-[1711px]" data-node-id="166:1329">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup78} />
      </div>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[0.02px] not-italic text-[149.778px] text-black top-[29.47px] whitespace-nowrap" data-node-id="166:1339">
        <span className="relative inline-block align-top">
          About
          <span aria-hidden="true" className="about-underline absolute bg-[#9b5bf0] h-[15px] left-[0.05em] right-[0.05em] top-[119.53px]" data-node-id="166:1340" />
        </span>{" "}
        me
      </p>
      <div className="absolute h-[1070px] left-[663px] top-[-46px] w-[803px]" data-node-id="166:1344" data-name="image 209">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage209} />
      </div>
      <div className="[word-break:break-word] absolute font-['Margarine:Regular'] leading-[0] left-[7px] lowercase not-italic text-[36.333px] text-black top-[227px] w-[694.875px] whitespace-pre-wrap" data-node-id="166:1345">
        <p className="font-['Questa_Sans:Regular','Questrial',sans-serif] mb-0">
          <span className="leading-[normal] uppercase">A</span>
          <span className="leading-[normal]">spiring AI/ML Engineer and Data Science enthusiast, exploring the world of intelligent systems while pursuing research-driven projects.</span>
          <span aria-hidden="true" className="ml-[3px] inline-block size-[15px] bg-[#9b5bf0] align-baseline" data-node-id="166:1341" />
        </p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="font-['Questa_Sans:Regular','Questrial',sans-serif] mb-0">
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] uppercase">a</span>
          <span className="leading-[normal]">{` Graphic Designer and UI/UX Designer passionate about creating meaningful digital experiences, currently contributing to my college website revamp and designing visual identities that blend creativity with functionality.`}</span>
          <span aria-hidden="true" className="ml-[3px] inline-block size-[15px] bg-[#b7ef00] align-baseline" data-node-id="166:1342" />
        </p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="font-['Questa_Sans:Regular','Questrial',sans-serif] leading-[normal]">
          {`When I’m not coding, designing, or working on research papers, you’ll probably find me watching football and cheering for FC Barcelona.`}
          <span aria-hidden="true" className="ml-[3px] inline-block size-[15px] bg-[#ff7e9d] align-baseline" data-node-id="166:1343" />
        </p>
      </div>
      <div className="absolute contents left-[738px] top-[70px]" data-node-id="167:2078">
        <div className="absolute h-[1033px] left-[738px] top-[70px] w-[729px]" data-node-id="166:1346" data-name="image 231">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage231} />
        </div>
        <div className="absolute bg-white h-[41px] left-[850px] top-[172px] w-[144px]" data-node-id="166:1347" />
        <a href="https://www.instagram.com/sehnsuchtae" target="_blank" rel="noreferrer" className="[word-break:break-word] absolute font-['Questa_Sans:Regular','Questrial',sans-serif] leading-[normal] left-[862px] lowercase not-italic text-[36.333px] text-black top-[168px] whitespace-nowrap" data-node-id="166:1348" data-underline-link="">
          sehnsuchtae
        </a>
        <div className="absolute bg-white h-[67px] left-[788px] top-[957px] w-[574px]" data-node-id="166:1349" />
      </div>
      <div className="absolute flex h-[810.355px] items-center justify-center left-[979px] top-[70px] w-[609.769px]" data-node-id="166:1350">
        <div className="flex-none rotate-[18.23deg]">
          <div className="h-[719.816px] relative w-[404.896px]" data-name="image 209">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage210} />
          </div>
        </div>
      </div>
    </>
  );
}

export function ToolsArt() {
  return (
    <>
      <div className="absolute h-0 left-[981px] top-[381px] w-[567px]" data-node-id="166:1352">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine18} />
        </div>
      </div>
      <div className="absolute h-[690px] left-[352px] top-[193px] w-[736px]" data-node-id="166:1353" data-name="image 237">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage237} />
      </div>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[calc(50%-539.11px)] not-italic text-[149.778px] text-black top-[19px] whitespace-nowrap" data-node-id="166:1354">
        <span className="leading-[normal]">{`Tools i `}</span>
        <span className="know-word relative inline-block align-top leading-[normal] text-[#ffc567]">
          know
          <span aria-hidden="true" className="absolute bg-[#b7ef00] h-[30px] left-[0.05em] right-[0.05em] top-[133px]" data-node-id="166:1378" />
        </span>
      </p>
      <div className="absolute flex h-[353.077px] items-center justify-center left-[461px] top-[161.58px] w-[237.648px]" data-node-id="166:1360">
        <div className="flex-none rotate-[-89.31deg]">
          <div className="h-[233.428px] relative w-[350.279px]" data-name="image 233">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage233} />
          </div>
        </div>
      </div>
      <div className="absolute h-[381px] left-[448px] top-[231px] w-[214px]" data-node-id="166:1361" data-name="image 238">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage238} />
      </div>
      <div className="absolute flex h-[939px] items-center justify-center left-[1177px] top-[273px] w-0" data-node-id="166:1362">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[939px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine17} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[860px] items-center justify-center left-[258px] top-[182px] w-0" data-node-id="166:1363">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[860px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine15} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[-12px] top-[901px] w-[1464px]" data-node-id="166:1364">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1464px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine16} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[1224px] not-italic text-[26.984px] text-black top-[357px] whitespace-nowrap" data-node-id="166:1365">
        What i do ?
      </p>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[728px] not-italic text-[17.401px] text-white top-[327px] whitespace-nowrap" data-node-id="166:1366">
        Ai/ML
      </p>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[795px] not-italic text-[17.401px] text-white top-[327px] whitespace-nowrap" data-node-id="166:1367">
        Design
      </p>
      <div className="absolute left-[740px] size-[31px] top-[396px]" data-node-id="166:1368" data-tool="YouTube Music" tabIndex={0} data-name="thesvg-color:youtube-music">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgThesvgColorYoutubeMusic} />
      </div>
      <div className="absolute h-[128px] left-0 top-[902px] w-[192px]" data-node-id="166:1373">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector453} />
      </div>
      <div className="absolute flex h-[128px] items-center justify-center left-[1248px] top-[902px] w-[192px]" data-node-id="166:1374">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[128px] relative w-[192px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector454} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[-10px] top-[420px] w-[362px]" data-node-id="166:1375">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[362px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine19} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[-79px] top-[690px] w-[362px]" data-node-id="166:1376">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[362px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine19} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[-104px] top-[273px] w-[362px]" data-node-id="166:1377">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[362px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine19} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[6px] not-italic text-[18.642px] text-black top-[483px] w-[262.341px]" data-node-id="166:1409">
        Things I love? A good anime, especially The Fragrant Flower Blooms with Dignity, football (Visca Barça!), and movies that stay with you — Dead Poets Society being a favourite.
      </p>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[6px] not-italic text-[17.41px] text-black top-[747px] w-[245px]" data-node-id="166:1410">{`When it comes to music, I don't discriminate. Every genre has its own magic.`}</p>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[6px] not-italic text-[18.689px] text-black top-[343px] whitespace-nowrap" data-node-id="166:1411">
        <span className="leading-[normal]">{`Things i `}</span>
        <span className="leading-[normal] text-[#552cb8]">like</span>
        <span className="leading-[normal]">{` to do`}</span>
      </p>
      <div className="absolute left-[958px] overflow-clip size-[47px] top-[349px]" data-node-id="166:1412" data-tool="Done & dusted" tabIndex={0} data-name="coolicons:circle-check-bulk-sharp">
        <div className="absolute inset-[8.33%]" data-node-id="166:1413" data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
        </div>
      </div>
      <div className="absolute left-[807px] size-[42px] top-[390px]" data-node-id="166:1416" data-tool="Night walks" tabIndex={0} data-name="emojione-v1:bridge-at-night">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEmojioneV1BridgeAtNight} />
      </div>
      <div className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[1186px] not-italic text-[17.401px] text-black top-[441px] w-[255px] whitespace-pre-wrap" data-node-id="166:1434">
        <p className="leading-[normal] mb-0">{`I'm a graphic designer passionate about branding, visual identities, typography, and UI/UX.`}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0 text-[#ff7e9d]">I create digital experiences through web design, creative direction, and visual storytelling.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">I work with Figma, Photoshop, Illustrator, video editing, motion graphics, and animation.</p>
        <p className="leading-[normal] mb-0">Beyond design, I build webSITES.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] text-[#b52527]">{`I'm also diving into AI/ML, Data Science, and intelligent systems — blending creativity with technology.`}</p>
      </div>
      <Inventory />
    </>
  );
}

export function WorksArt() {
  return (
    <>
      <div className="absolute left-[152px] size-[292px] top-[259px]" data-node-id="166:1438">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse14} />
      </div>
      <div className="absolute left-[94px] size-[357px] top-[-212px]" data-node-id="166:1439">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse15} />
      </div>
      <div className="absolute left-[208px] size-[129px] top-[606px]" data-node-id="166:1440">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse12} />
      </div>
      <div className="absolute left-[1358px] size-[129px] top-[162px]" data-node-id="166:1441">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse12} />
      </div>
      <div className="absolute flex h-[39.932px] items-center justify-center left-[1063px] top-[778px] w-[30.956px]" data-node-id="166:1442">
        <div className="flex-none rotate-[149.96deg]">
          <div className="h-[38.24px] relative w-[13.643px]">
            <div className="absolute inset-[-1.31%_-2.75%_-0.47%_-3.5%]">
              <img alt="" className="block max-w-none size-full" src={imgVector467} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[77.16px] items-center justify-center left-[522px] top-[771px] w-[40.829px]" data-node-id="166:1443">
        <div className="flex-none rotate-[-166.22deg]">
          <div className="h-[73.561px] relative w-[24px]">
            <div className="absolute inset-[-0.68%_-2.08%_-0.22%_-2%]">
              <img alt="" className="block max-w-none size-full" src={imgVector465} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[91.124px] items-center justify-center left-[1121px] top-[334px] w-[78.306px]" data-node-id="166:1444">
        <div className="flex-none rotate-[146.44deg]">
          <div className="h-[83.961px] relative w-[38.274px]">
            <div className="absolute inset-[-0.6%_-1.31%_-0.26%_-1.21%]">
              <img alt="" className="block max-w-none size-full" src={imgVector463} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[32.642px] items-center justify-center left-[906px] top-[344px] w-[17.773px]" data-node-id="166:1445">
        <div className="-scale-y-100 flex-none rotate-[-8.21deg]">
          <div className="h-[31.036px] relative w-[13.479px]">
            <div className="absolute inset-[-1.61%_-2.47%_-0.68%_-3.47%]">
              <img alt="" className="block max-w-none size-full" src={imgVector461} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[44.5px] items-center justify-center left-[281px] top-[314px] w-[22.832px]" data-node-id="166:1446">
        <div className="flex-none rotate-180">
          <div className="h-[44.5px] relative w-[22.832px]">
            <div className="absolute inset-[-1.12%_-1.27%_-0.54%_-2%]">
              <img alt="" className="block max-w-none size-full" src={imgVector457} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[calc(50%-272px)] not-italic text-[113.235px] text-black top-[14px] whitespace-nowrap" data-node-id="166:1447">
        <span className="leading-[normal]">{`MY `}</span>
        <span className="leading-[normal] text-[#ff7e9d]">works</span>
      </p>
      <div className="absolute contents left-[4px] top-[80px]" data-node-id="166:1448">
        <div className="absolute h-[135.114px] left-[4px] top-[212px] w-[1221px]" data-node-id="166:1449">
          <div className="absolute inset-[0_0_-0.29%_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector455} />
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[1133px] size-[303.582px] top-[80px]" data-node-id="166:1450">
          <div className="flex-none rotate-[29.85deg]">
            <div className="relative size-[222.394px]" data-name="image 239">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage239} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[252px] top-[524px]" data-node-id="166:1451">
        <div className="absolute flex h-[135.114px] items-center justify-center left-[463.58px] top-[656px] w-[1221px]" data-node-id="166:1452">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[135.114px] relative w-[1221px]">
              <div className="absolute inset-[0_0_-0.29%_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector455} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[252px] size-[303.582px] top-[524px]" data-node-id="166:1453">
          <div className="-scale-y-100 flex-none rotate-[150.15deg]">
            <div className="relative size-[222.394px]" data-name="image 239">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage239} />
            </div>
          </div>
        </div>
      </div>
      <WorkSlot index={0} left={204} top={343}>
          <WorkSawako />
        </WorkSlot>
      <div className="absolute flex h-[77.16px] items-center justify-center left-[594px] top-[342px] w-[40.829px]" data-node-id="166:1480">
        <div className="flex-none rotate-[-166.22deg]">
          <div className="h-[73.561px] relative w-[24px]">
            <div className="absolute inset-[-0.68%_-2.08%_-0.22%_-2%]">
              <img alt="" className="block max-w-none size-full" src={imgVector465} />
            </div>
          </div>
        </div>
      </div>
      <WorkSlot index={1} left={539} top={394}>
          <WorkBiologicalArchives />
        </WorkSlot>
      <WorkSlot index={2} left={827} top={362}>
          <WorkKanye />
        </WorkSlot>
      <WorkSlot index={3} left={1104} top={389}>
          <WorkCyberEvent />
        </WorkSlot>
      <WorkSlot index={4} left={418} top={812}>
          <WorkPakkam />
        </WorkSlot>
      <WorkSlot index={5} left={966} top={803}>
          <WorkIiitWebsite />
        </WorkSlot>
      <div className="absolute h-[44.5px] left-[292px] top-[306px] w-[22.832px]" data-node-id="166:1960">
        <div className="absolute inset-[-1.12%_-1.27%_-0.54%_-2%]">
          <img alt="" className="block max-w-none size-full" src={imgVector456} />
        </div>
      </div>
      <div className="absolute flex h-[77.16px] items-center justify-center left-[614.68px] top-[322px] w-[40.829px]" data-node-id="166:1961">
        <div className="flex-none rotate-[13.78deg]">
          <div className="h-[73.561px] relative w-[24px]">
            <div className="absolute inset-[-0.68%_-2.08%_-0.22%_-2%]">
              <img alt="" className="block max-w-none size-full" src={imgVector458} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[77.16px] items-center justify-center left-[536px] top-[763px] w-[40.829px]" data-node-id="166:1962">
        <div className="flex-none rotate-[13.78deg]">
          <div className="h-[73.561px] relative w-[24px]">
            <div className="absolute inset-[-0.68%_-2.08%_-0.22%_-2%]">
              <img alt="" className="block max-w-none size-full" src={imgVector458} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[39.932px] items-center justify-center left-[1065px] top-[771px] w-[30.956px]" data-node-id="166:1963">
        <div className="flex-none rotate-[-30.04deg]">
          <div className="h-[38.24px] relative w-[13.643px]">
            <div className="absolute inset-[-1.31%_-2.75%_-0.47%_-3.5%]">
              <img alt="" className="block max-w-none size-full" src={imgVector466} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[91.124px] items-center justify-center left-[1126px] top-[301px] w-[78.306px]" data-node-id="166:1964">
        <div className="flex-none rotate-[-33.56deg]">
          <div className="h-[83.961px] relative w-[38.274px]">
            <div className="absolute inset-[-0.6%_-1.31%_-0.26%_-1.21%]">
              <img alt="" className="block max-w-none size-full" src={imgVector462} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[32.642px] items-center justify-center left-[897px] top-[336px] w-[17.773px]" data-node-id="166:1965">
        <div className="-scale-y-100 flex-none rotate-[171.79deg]">
          <div className="h-[31.036px] relative w-[13.479px]">
            <div className="absolute inset-[-1.61%_-2.47%_-0.68%_-3.47%]">
              <img alt="" className="block max-w-none size-full" src={imgVector460} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#ff7e9d] h-[17px] left-[445px] top-[116px] w-[212px]" data-node-id="166:1966" />
      <div className="absolute bg-[#b7ef00] h-[17px] left-[652px] top-[145px] w-[340px]" data-node-id="166:1967" />
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-0 not-italic text-[24.624px] text-black top-[743px] w-[385px]" data-node-id="166:1968">{`My design journey has only just begun, and I'm slowly carving out my own space in the creative world. My collection may be small for now, but with my DESIgnjourney ahead, there's so much more to learn, create, and explore.`}</p>
    </>
  );
}

export function ExperienceArt() {
  return (
    <>
      <div className="absolute left-[1194px] size-[497px] top-[863px]" data-node-id="166:1970">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} />
      </div>
      <div className="absolute left-[562px] size-[497px] top-[901px]" data-node-id="166:1971">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse21} />
      </div>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[calc(50%-634px)] not-italic text-[84.518px] text-black top-[30px] whitespace-nowrap" data-node-id="166:1972">
        <span className="leading-[normal]">{`EXPERIENCE `}</span>
        <span className="leading-[normal] text-[#ff7e9d]">{`&`}</span>
        <span className="leading-[normal]">{` ACHIEVEMENTS`}</span>
      </p>
      <div className="absolute content-stretch flex items-center left-0 top-[215px]" data-node-id="166:1973">
        <p className="[word-break:break-word] font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] not-italic relative shrink-0 text-[71.191px] text-black whitespace-nowrap" data-node-id="166:1974">{`WHERE I'VE BEEN`}</p>
        <div className="flex h-[64px] items-center justify-center relative shrink-0 w-0" data-node-id="166:1975">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[64px]">
              <div className="absolute inset-[-13px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine22} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[12px] items-center left-[936px] top-[272px]" data-node-id="166:1976">
        <div className="flex h-[122px] items-center justify-center relative shrink-0 w-0" data-node-id="166:1977">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[122px]">
              <div className="absolute inset-[-13px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine23} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] not-italic relative shrink-0 text-[68.257px] text-black whitespace-nowrap" data-node-id="166:1978">
          <p className="leading-[normal] mb-0 whitespace-pre">{`THINGS I'VE `}</p>
          <p className="leading-[normal] whitespace-pre">ACCOMPLISHED</p>
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[18px] not-italic text-[20.254px] text-black top-[333px] w-[350px] whitespace-pre-wrap" data-node-id="166:1979">
        <p className="leading-[normal] mb-0">Design Lead — DaB (Present):</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal] mb-0">{`Design & Branding Club, IIIT Dharwad`}</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal]">Leading creative initiatives, managing designers, coordinating digital branding and building a creative community.</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[368px] not-italic text-[19.279px] text-black top-[525px] w-[455px] whitespace-pre-wrap" data-node-id="166:1980">
        <p className="leading-[normal] mb-0">Techno-Cultural Initiatives — Aetheria:</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal]">Working towards combining technology, creativity and international cultures through collaborative activities.</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[18px] not-italic text-[20.254px] text-black top-[669px] whitespace-nowrap" data-node-id="166:1981">
        <p className="leading-[normal] mb-0 whitespace-pre">{`Event management experience:`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre">​</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal] mb-0 whitespace-pre">Experienced in event management — led</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal] mb-0 whitespace-pre">the month-long induction program</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal] mb-0 whitespace-pre">for freshers, and worked in the</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal] mb-0 whitespace-pre">organizing team for the college’s</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal] whitespace-pre">flagship hackathon.</p>
      </div>
      <div className="absolute h-[512px] left-[206px] top-[349px] w-[354.714px]" data-node-id="166:1982">
        <div className="absolute inset-[0_-0.56%]">
          <img alt="" className="block max-w-none size-full" src={imgVector468} />
        </div>
      </div>
      <div className="absolute left-[522px] size-[50px] top-[333px]" data-node-id="166:1983">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse16} />
      </div>
      <div className="absolute left-[185px] size-[43px] top-[548px]" data-node-id="166:1984">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} />
      </div>
      <div className="absolute left-[497px] size-[38px] top-[666px]" data-node-id="166:1985">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse18} />
      </div>
      <div className="absolute flex items-center justify-center left-[549px] size-[65.762px] top-[816px]" data-node-id="166:1986">
        <div className="flex-none rotate-[25.16deg]">
          <div className="relative size-[49.436px]" data-name="akar-icons:flag">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsFlag} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[993px] size-[65.762px] top-[855px]" data-node-id="166:1988">
        <div className="-scale-y-100 flex-none rotate-[154.84deg]">
          <div className="relative size-[49.436px]" data-name="akar-icons:flag">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsFlag1} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[0] left-[1225px] not-italic text-[20.254px] text-black top-[417px] w-[191px] whitespace-pre-wrap" data-node-id="166:1990">
        <p className="mb-0">
          <span className="[word-break:break-word] font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] not-italic">Hackathons</span>
          <span className="leading-[normal]">:</span>
        </p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">SIH, Gnani AI Hackathon, Barça Hackathon and FIGBUILD 2025.</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[0] left-[875px] not-italic text-[20.254px] text-black top-[607px] w-[319px] whitespace-pre-wrap" data-node-id="166:1991">
        <p className="font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] mb-0">Project milestones:</p>
        <p className="font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] mb-0">{` `}</p>
        <p className="leading-[normal]">BookMyTurf, Pakkam and the Federated Learning Visualizer — currently also working on a research paper in Federated Learning (FL).</p>
      </div>
      <div className="absolute flex h-[882px] items-center justify-center left-[836px] top-[168px] w-0" data-node-id="166:1992">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[882px]">
            <div className="absolute inset-[-0.22px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine24} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[641px] top-[405px] w-[845px]" data-node-id="166:1993">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine25} />
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-0 top-[286px] w-[911px]" data-node-id="166:1994">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[911px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine26} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#b7ef00] h-[17px] left-[504px] top-[106px] w-[340px]" data-node-id="166:1995" />
      <div className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] left-[1155px] not-italic text-[20.254px] text-black top-[770px] w-[281px] whitespace-pre-wrap" data-node-id="166:1996">
        <p className="leading-[normal] mb-0">{`Creative milestones:`}</p>
        <p className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal]">College website revamp, branding for AVINYA (the university’s flagship techno-cultural fest) and DaB initiatives.</p>
      </div>
      <div className="absolute h-[460px] left-[994.9px] top-[440px] w-[287.535px]" data-node-id="166:1997">
        <div className="absolute inset-[0_-0.69%_0_-0.7%]">
          <img alt="" className="block max-w-none size-full" src={imgVector469} />
        </div>
      </div>
      <div className="absolute bg-[#9b5af0] left-[982px] size-[27px] top-[426px]" data-node-id="166:1998" />
      <div className="absolute bg-[#ff7e9d] left-[1255px] size-[27px] top-[595px]" data-node-id="166:1999" />
      <div className="absolute bg-[#b7ef00] left-[1056px] size-[27px] top-[759px]" data-node-id="166:2000" />
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[660px] not-italic text-[38.294px] text-black top-[967px] whitespace-nowrap" data-node-id="166:2001">
        MORE TO COME...
      </p>
    </>
  );
}

export function EndArt() {
  const bye = useByeSequence();
  return (
    <>
      <div className="absolute flex h-[693px] items-center justify-center left-[1285px] top-[5px] w-0" data-node-id="166:2003">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[693px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine28} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[488px] items-center justify-center left-[102px] top-[206px] w-0" data-node-id="166:2004">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[488px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine29} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[562px] size-[497px] top-[-123px]" data-node-id="166:2005">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse21} />
      </div>
      <div className="absolute bg-[#f3ebdd] h-[28px] left-[520px] top-[141px] w-[603px]" data-node-id="166:2006" />
      <div className="absolute bg-[#f3ebdd] h-[22px] left-[520px] top-[194px] w-[603px]" data-node-id="166:2007" />
      <div className="absolute bg-[#f3ebdd] h-[15px] left-[520px] top-[232px] w-[603px]" data-node-id="166:2008" />
      <div className="absolute bg-[#f3ebdd] h-[14px] left-[520px] top-[262px] w-[603px]" data-node-id="166:2009" />
      <div className="absolute bg-[#f3ebdd] h-[12px] left-[520px] top-[288px] w-[603px]" data-node-id="166:2010" />
      <div className="absolute bg-[#f3ebdd] h-[8px] left-[520px] top-[314px] w-[603px]" data-node-id="166:2011" />
      <div className="absolute bg-[#f3ebdd] h-[6px] left-[520px] top-[334px] w-[603px]" data-node-id="166:2012" />
      <div className="absolute bg-[#f3ebdd] h-[4px] left-[520px] top-[352px] w-[603px]" data-node-id="166:2013" />
      <div className="absolute bg-[#f3ebdd] h-[3px] left-[520px] top-[362px] w-[603px]" data-node-id="166:2014" />
      <div className="absolute bg-[#f3ebdd] h-[3px] left-[518px] top-[371px] w-[603px]" data-node-id="166:2015" />
      <div className="absolute left-[-262px] size-[497px] top-[-241px]" data-node-id="166:2016">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse20} />
      </div>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[calc(50%-283px)] not-italic text-[177.572px] text-black top-[calc(50%-386px)] whitespace-nowrap" data-node-id="166:2017">
        THE END
      </p>
      <button type="button" ref={bye.ref} aria-label="Replay the goodbye animation" onClick={bye.replay} data-bye="" className="-translate-x-1/2 absolute left-[calc(50%-282.5px)] size-[499px] top-[241px]" data-node-id="166:2018" data-name="image 240">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage240} />
        <ByeScreen phase={bye.phase} typed={bye.typed} progress={bye.progress} />
      </button>
      <button type="button" onClick={() => scrollToSection("home")} data-underline-link="" className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[621px] not-italic text-[39.547px] text-black top-[415px] whitespace-nowrap" data-node-id="166:2019">
        OR MAYBE JUST THE BEGINNING?
      </button>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[22px] not-italic text-[39.547px] text-black top-[731px] whitespace-nowrap" data-node-id="166:2020">{`LET'S CONNECT!`}</p>
      <div className="absolute h-0 left-0 top-[693px] w-[1440px]" data-node-id="166:2021">
        <div className="absolute inset-[-2px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine27} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[normal] left-[102px] not-italic text-[20.755px] text-black top-[782px] whitespace-nowrap" data-node-id="166:2022">
        Got an idea, a project, or just want to talk about something interesting?
      </p>
      <div className="bye-pop absolute h-[130px] left-[495px] top-[377px] w-[70px] pointer-events-none" data-pop={bye.phase === "done" ? "in" : "out"} data-node-id="166:2023" data-name="image 241">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-94.96%] max-w-none top-0 w-[194.96%]" src={imgImage241} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[90px] items-center left-[calc(50%-190px)] top-[789px]" data-node-id="167:2051">
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="167:2046">
          <div className="overflow-clip relative shrink-0 size-[70px]" data-node-id="166:2024" data-name="akar-icons:github-fill">
            <div className="absolute contents inset-0" data-node-id="166:2025" data-name="Group">
              <div className="absolute contents inset-0" data-node-id="166:2026" data-name="Clip path group">
                <div className="absolute inset-[0_0_2.47%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[70px_70px]" data-node-id="166:2029" style={{ maskImage: `url("${imgGroup5}")` }} data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
                </div>
              </div>
            </div>
          </div>
          <a className="[word-break:break-word] block font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] not-italic relative shrink-0 text-[24.624px] text-black whitespace-nowrap" href="https://github.com/mxhxt010-code" data-node-id="167:2045" rel="noreferrer" data-underline-link="" target="_blank">
            <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">Github</p>
          </a>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="167:2048">
          <div className="relative shrink-0 size-[141px]" data-node-id="166:2031" data-name="devicon:linkedin-wordmark">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDeviconLinkedinWordmark} />
          </div>
          <a className="[word-break:break-word] block font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] not-italic relative shrink-0 text-[24.624px] text-black whitespace-nowrap" href="https://www.linkedin.com/in/mohit-k-575947371/" data-node-id="167:2047" rel="noreferrer" data-underline-link="" target="_blank">
            <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">Linkedin</p>
          </a>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="167:2050">
          <div className="relative shrink-0 size-[62px]" data-node-id="166:2036" data-name="selfhst:instagram">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSelfhstInstagram} />
          </div>
          <a className="[word-break:break-word] block font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] not-italic relative shrink-0 text-[24.624px] text-black whitespace-nowrap" href="https://www.instagram.com/sehnsuchtae?dlrf=MTVkbHljOGxvYjFheg==" data-node-id="167:2049" rel="noreferrer" data-underline-link="" target="_blank">
            <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">Instagram</p>
          </a>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[928px] w-[1440px]" data-node-id="167:2052">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine30} />
        </div>
      </div>
      <a href="mailto:mxhxt010@gmail.com" data-contact="" className="absolute content-stretch flex gap-[9px] items-start right-[12px] top-[808px]" data-node-id="167:2065">
        <div className="h-[29px] relative shrink-0 w-[39px]" data-node-id="167:2053" data-name="logos:google-gmail-2020">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogosGoogleGmail2020} />
        </div>
        <p className="[word-break:break-word] font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] not-italic relative shrink-0 text-[24.624px] text-black whitespace-nowrap" data-node-id="167:2064">
          <span className="leading-[normal]">{`MAil : `}</span>
          <span className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal]">mxhxt010@gmail.com</span>
        </p>
      </a>
      <a href="tel:+918122904062" data-contact="" className="absolute content-stretch flex gap-[9px] items-center right-[12px] top-[860px]" data-node-id="167:2067">
        <div className="relative shrink-0 size-[40px]" data-node-id="167:2059" data-name="flat-color-icons:missed-call">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFlatColorIconsMissedCall} />
        </div>
        <p className="[word-break:break-word] font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] leading-[0] not-italic relative shrink-0 text-[24.624px] text-black whitespace-nowrap" data-node-id="167:2066">
          <span className="leading-[normal]">contact : (+91)</span>
          <span className="font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arimo,Arial,sans-serif] [font-weight:300] leading-[normal]">8122904062</span>
        </p>
      </a>
    </>
  );
}

export function WorkSawako() {
  return (
    <div className="relative bg-[#f8e996] h-[234px] overflow-clip w-[187.252px]" data-node-id="166:1454" data-name="Instagram post - 4">
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.13px)] size-[163.618px] top-[24.67px]" data-node-id="166:1455">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
      </div>
      <p className="[word-break:break-word] absolute font-['Londrina_Solid:Regular'] h-[59.632px] leading-[normal] left-[calc(50%-86.35px)] not-italic text-[63.458px] text-white top-[25.19px] uppercase w-[172.708px]" data-node-id="166:1456">
        SAWAKO
      </p>
      <p className="[word-break:break-word] absolute font-['Londrina_Solid:Regular'] h-[59.632px] leading-[normal] left-[calc(50%-86.35px)] not-italic text-[63.458px] text-white top-[71.06px] uppercase w-[172.708px]" data-node-id="166:1457">
        SAWAKO
      </p>
      <div className="absolute h-[128.769px] left-[64.67px] top-[106.48px] w-[124.968px]" data-node-id="166:1458" data-name="image 220">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage220} />
      </div>
      <p className="[word-break:break-word] absolute font-['Londrina_Solid:Regular'] h-[59.632px] leading-[normal] left-[calc(50%-86.35px)] not-italic text-[63.458px] text-white top-[116.93px] uppercase w-[172.708px]" data-node-id="166:1459">
        SAWAKO
      </p>
      <div className="absolute left-[9.09px] size-[169.851px] top-[64.15px]" data-node-id="166:1460" data-name="image 216">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage216} />
      </div>
      <div className="absolute flex h-[26.201px] items-center justify-center left-[147.78px] top-[53.24px] w-[29.209px]" data-node-id="166:1461">
        <div className="flex-none rotate-[-9.2deg]">
          <div className="h-[22.335px] relative shadow-[0px_1.039px_1.039px_0px_rgba(0,0,0,0.25)] w-[25.971px]" data-name="image 217">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[116.28%] left-0 max-w-none top-0 w-full" src={imgImage217} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[93.496px] left-[-25.45px] top-[167px] w-[255.037px]" data-node-id="166:1462">
        <div className="absolute inset-[-67.28%_-24.66%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup72} />
        </div>
      </div>
      <div className="absolute flex h-[109.789px] items-center justify-center left-[-6.3px] top-[141.8px] w-[106.549px]" data-node-id="166:1466">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[109.789px] relative w-[106.549px]" data-name="image 221">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage220} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[234px] items-center justify-center left-[176.86px] top-0 w-0" data-node-id="166:1467">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[234px]">
            <div className="absolute inset-[-0.26px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine3} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[234px] items-center justify-center left-[7.27px] top-0 w-0" data-node-id="166:1468">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[234px]">
            <div className="absolute inset-[-0.26px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine3} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[-20.26px] top-[8.57px] w-[234px]" data-node-id="166:1469">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[234px]">
            <div className="absolute inset-[-0.26px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine4} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[26.479px] items-center justify-center left-[150.11px] top-[101.29px] w-[25.376px]" data-node-id="166:1470">
        <div className="flex-none rotate-[-4.78deg]">
          <div className="h-[24.616px] relative shadow-[-0.779px_0px_1.039px_0px_rgba(0,0,0,0.25)] w-[23.407px]" data-name="image 218">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage218} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[153.75px] top-[148.04px]" data-node-id="166:1471" data-name="Mask group">
        <div className="absolute left-[153.75px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-5.454px] mask-size-[17.92px_22.854px] size-[17.401px] top-[153.49px]" data-node-id="166:1473" style={{ maskImage: `url("${imgImage219}")` }} data-name="image 219">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage221} />
        </div>
      </div>
      <div className="absolute flex h-[54.089px] items-center justify-center left-[16.85px] top-[5.79px] w-[46.011px]" data-node-id="166:1474">
        <div className="flex-none rotate-[-36.49deg]">
          <div className="h-[55.086px] relative w-[16.483px]" data-name="image 222">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[334.2%]" src={imgImage222} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[40.363px] items-center justify-center left-[49.6px] top-[8.57px] w-[30.045px]" data-node-id="166:1475">
        <div className="-rotate-24 flex-none">
          <div className="h-[36.844px] relative w-[16.483px]" data-name="image 224">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[149.51%] left-0 max-w-none top-[-49.51%] w-[334.2%]" src={imgImage222} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[56.822px] items-center justify-center left-[110.64px] top-[-1.82px] w-[41.976px]" data-node-id="166:1476">
        <div className="flex-none rotate-[-2.6deg]">
          <div className="h-[55.086px] relative w-[39.519px]" data-name="image 223">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-39.39%] max-w-none top-0 w-[139.39%]" src={imgImage222} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Londrina_Solid:Regular'] leading-[normal] left-[calc(50%-70.25px)] not-italic text-[6.918px] text-balance text-black top-[1.56px] uppercase whitespace-nowrap" data-node-id="166:1477">{`I'll be careful not to scare anyone on my way home`}</p>
      <div className="absolute h-[10.452px] left-[176.86px] top-[-0.52px] w-[10.326px]" data-node-id="166:1478" data-name="image 225">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage225} />
      </div>
      <div className="absolute flex h-[10.452px] items-center justify-center left-[-1.5px] top-[-0.52px] w-[10.326px]" data-node-id="166:1479">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[10.452px] relative w-[10.326px]" data-name="image 225">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage225} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkBiologicalArchives() {
  return (
    <div className="relative bg-[#df1216] h-[211px] overflow-clip w-[149.103px]" data-node-id="166:1481" data-name="Biological Archives 2">
      <div className="absolute flex h-[142.502px] items-center justify-center left-[-13.53px] top-[44.25px] w-[120.918px]" data-node-id="166:1482">
        <div className="flex-none rotate-[-35.44deg]">
          <div className="bg-[#ffd400] h-[140.395px] relative rounded-[33.329px] w-[48.494px]" />
        </div>
      </div>
      <div className="absolute flex h-[115.703px] items-center justify-center left-[37.84px] top-[25.34px] w-[98.577px]" data-node-id="166:1483">
        <div className="flex-none rotate-[-35.44deg]">
          <div className="bg-[#ffd400] h-[113.285px] relative rounded-[33.329px] w-[40.367px]" />
        </div>
      </div>
      <div className="absolute flex h-[78.288px] items-center justify-center left-[80.94px] top-[19.55px] w-[63.954px]" data-node-id="166:1484">
        <div className="flex-none rotate-[-33.19deg]">
          <div className="bg-[#ffd400] h-[76.135px] relative rounded-[33.329px] w-[26.621px]" />
        </div>
      </div>
      <div className="absolute flex h-[47.915px] items-center justify-center left-[113.77px] top-[18.29px] w-[39.141px]" data-node-id="166:1485">
        <div className="flex-none rotate-[-33.19deg]">
          <div className="bg-[#ffd400] h-[46.597px] relative rounded-[33.329px] w-[16.293px]" />
        </div>
      </div>
      <div className="absolute flex h-[45.391px] items-center justify-center left-[133.32px] top-[9.27px] w-[37.49px]" data-node-id="166:1486">
        <div className="flex-none rotate-[-33.19deg]">
          <div className="bg-[#ffd400] h-[43.581px] relative rounded-[33.329px] w-[16.293px]" />
        </div>
      </div>
      <div className="absolute h-[196.705px] left-0 top-[15.28px] w-[149.111px]" data-node-id="166:1487" data-name="image 194">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-5.65%] max-w-none top-0 w-[105.69%]" src={imgImage194} />
        </div>
      </div>
      <div className="absolute h-[41.756px] left-[98.48px] top-[36.59px] w-[29.319px]" data-node-id="166:1488">
        <div className="absolute inset-[0_-3.42%_-4.8%_-3.42%]">
          <img alt="" className="block max-w-none size-full" src={imgVector55} />
        </div>
      </div>
      <div className="absolute flex h-[46.503px] items-center justify-center left-[23.92px] top-[43.62px] w-[49.076px]" data-node-id="166:1489">
        <div className="flex-none rotate-[3.79deg]">
          <div className="h-[43.535px] relative w-[46.297px]">
            <div className="absolute inset-[0_-2.17%_-4.6%_-2.17%]">
              <img alt="" className="block max-w-none size-full" src={imgVector56} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[2.506px] left-[94.6px] top-[12.78px] w-[2.255px]" data-node-id="166:1490">
        <div className="absolute inset-[-40%_-44.44%]">
          <img alt="" className="block max-w-none size-full" src={imgVector120} />
        </div>
      </div>
      <div className="absolute left-[4.26px] size-[4.511px] top-[13.28px]" data-node-id="166:1491">
        <div className="absolute inset-[-96.67%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular'] leading-[0] left-[64.65px] not-italic text-[4.49px] text-black top-[135.82px] whitespace-nowrap" data-node-id="166:1492">
        <span className="leading-[normal] text-[#df1216]">SPECIES:</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="leading-[normal] text-[#ffd400]">UNIDENTIFIED</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Dela_Gothic_One:Regular'] leading-[0] left-[70.92px] not-italic text-[4.49px] text-black top-[142.09px] whitespace-nowrap" data-node-id="166:1493">
        <span className="leading-[normal] text-[#df1216]">STATUS:</span>
        <span className="leading-[normal] text-white">{` `}</span>
        <span className="leading-[normal] text-[#ffd400]">ACTIVE</span>
      </p>
      <div className="absolute h-[12.273px] left-[4.26px] top-[3.26px] w-[140.118px]" data-node-id="166:1494" data-name="BIOLOGICAL ARCHIVE">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBiologicalArchive} />
      </div>
    </div>
  );
}

export function WorkKanye() {
  return (
    <div className="relative bg-white h-[233.496px] overflow-clip w-[165px]" data-node-id="166:1512" data-name="A4 - 7">
      <div className="absolute h-[362.723px] left-[-17.47px] top-[-21.08px] w-[204.101px]" data-node-id="166:1513" data-name="image 182">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage182} />
      </div>
      <div className="absolute h-[233.48px] left-0 top-0 w-[207.998px]" data-node-id="166:1514" data-name="image 146">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage146} />
      </div>
      <div className="-translate-x-1/2 absolute flex h-[41.728px] items-center justify-center left-[calc(50%+51.3px)] top-[127.84px] w-[45.748px]" data-node-id="166:1515">
        <div className="-scale-y-100 flex-none rotate-[153.17deg]">
          <div className="h-[27.992px] relative w-[37.109px]" data-name="image 188">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage188} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[41.728px] items-center justify-center left-[calc(50%-68.78px)] top-[125.07px] w-[45.748px]" data-node-id="166:1516">
        <div className="flex-none rotate-[26.83deg]">
          <div className="h-[27.992px] relative w-[37.109px]" data-name="image 187">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage188} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['CHINTARON:Regular','CHINTARON','Bungee',sans-serif] leading-[normal] left-[calc(50%-76.12px)] not-italic text-[48.915px] text-white top-[91.24px] whitespace-nowrap" data-node-id="166:1517">
        KANYE
      </p>
      <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.14px)] top-[-3.61px]" data-node-id="166:1518">
        <div className="absolute flex h-[88.277px] items-center justify-center left-[33.56px] top-[89.57px] w-[103.148px]" data-node-id="166:1519">
          <div className="flex-none rotate-[-119.49deg]">
            <div className="h-[89.9px] relative w-[50.571px]">
              <div className="absolute inset-[-18.51%_-26.2%_6.49%_-26.2%]">
                <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute h-[274.2px] left-[calc(50%+0.14px)] top-[-3.6px] w-[138.101px]" data-node-id="166:1520" data-name="image 168">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage168} />
        </div>
      </div>
      <div className="absolute left-[112.59px] size-[3.05px] top-[157.24px]" data-node-id="166:1521" data-name="image 181">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage181} />
      </div>
      <p className="[word-break:break-word] absolute font-['CHINTARON:Regular','CHINTARON','Bungee',sans-serif] leading-[normal] left-[calc(50%-51.72px)] not-italic text-[48.915px] text-white top-[91.24px] whitespace-nowrap" data-node-id="166:1522">
        A
      </p>
      <p className="[word-break:break-word] absolute font-['CHINTARON:Regular','CHINTARON','Bungee',sans-serif] leading-[normal] left-[calc(50%-14.84px)] not-italic text-[48.915px] text-white top-[91.24px] whitespace-nowrap" data-node-id="166:1523">
        N
      </p>
      <div className="absolute flex items-center justify-center left-[63.07px] size-[70.641px] top-[113.26px]" data-node-id="166:1524">
        <div className="flex-none rotate-[29.35deg]">
          <div className="relative size-[51.874px]">
            <div className="absolute inset-[0_2.45%_9.55%_2.45%]">
              <img alt="" className="block max-w-none size-full" src={imgStar2} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[234.743px] left-1/2 top-[-1.25px] w-[161.672px]" data-node-id="166:1525" data-name="Vector">
        <div className="absolute inset-[-0.22%_-1.72%_-0.95%_-0.69%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="absolute h-[54.153px] left-[2.5px] top-[41.87px] w-[30.461px]" data-node-id="166:1526" data-name="image 147">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage147} />
      </div>
      <div className="absolute flex h-[54.153px] items-center justify-center left-[132.04px] top-[41.87px] w-[30.461px]" data-node-id="166:1527">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[54.153px] relative w-[30.461px]" data-name="image 189">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage147} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Sacramento:Regular'] leading-[normal] left-[142.82px] not-italic text-[8.874px] text-white top-[-1.39px] whitespace-nowrap" data-node-id="166:1528">
        moityyy
      </p>
    </div>
  );
}

export function WorkCyberEvent() {
  return (
    <div className="relative bg-gradient-to-b from-[#060318] h-[195px] overflow-clip to-[#0a0621] w-[156px]" data-node-id="166:1529" data-name="Instagram post - 1">
      <div className="absolute h-[194.779px] left-[-26.65px] top-[11.03px] w-[209.48px]" data-node-id="166:1530" data-name="image 190">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.98%] left-0 max-w-none top-[0.02%] w-full" src={imgImage190} />
        </div>
      </div>
      <div className="absolute h-[10.566px] left-[0.92px] top-[48.7px] w-[41.142px]" data-node-id="166:1531">
        <div className="absolute inset-[-85.22%_-21.88%]">
          <img alt="" className="block max-w-none size-full" src={imgVector4} />
        </div>
      </div>
      <div className="absolute h-[11.025px] left-[50.53px] top-[56.04px] w-[48.695px]" data-node-id="166:1532">
        <div className="absolute inset-[-81.67%_-18.49%]">
          <img alt="" className="block max-w-none size-full" src={imgVector5} />
        </div>
      </div>
      <div className="absolute h-[11.025px] left-[109.34px] top-[50.53px] w-[38.588px]" data-node-id="166:1533">
        <div className="absolute inset-[-81.67%_-23.33%]">
          <img alt="" className="block max-w-none size-full" src={imgVector6} />
        </div>
      </div>
      <div className="absolute h-[21.021px] left-0 top-[-0.92px] w-[20.557px]" data-node-id="166:1534" data-name="image 188">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage189} />
      </div>
      <div className="absolute left-[135.98px] size-[15.619px] top-[1.84px]" data-node-id="166:1535" data-name="image 193">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage193} />
      </div>
      <p className="[word-break:break-word] absolute font-['Rubik_Glitch:Regular'] leading-[0] left-[calc(50%-54.11px)] not-italic text-[14.663px] text-white top-[11.94px] whitespace-nowrap" data-node-id="166:1536">
        <span className="leading-[normal]">{`PATIENT `}</span>
        <span className="leading-[normal] text-[#a55008]">ZERO</span>
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['ROG_Fonts_STRIX_SCAR:Regular','Orbitron',sans-serif] leading-[5.854px] left-[calc(50%+0.73px)] not-italic text-[3.216px] text-center text-white top-[27.56px] tracking-[0.8041px] whitespace-nowrap" data-node-id="166:1537">
        A CYBERSECURITY AWARENESS EVENT
      </p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['ROG_Fonts_STRIX_SCAR:Regular','Orbitron',sans-serif] leading-[0] left-[26.19px] not-italic text-[0px] text-center text-white top-[48.7px] tracking-[0.0283px] w-[45.02px]" data-node-id="166:1538">
        <p className="leading-[5.143px] mb-0 text-[#a55008] text-[3.675px]">EXPERT TALK</p>
        <p className="leading-[5.143px] text-[2.826px]">Real-world cyber threats, critical vulnerabilities, and incident response.</p>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['ROG_Fonts_STRIX_SCAR:Regular','Orbitron',sans-serif] leading-[0] left-[133.22px] not-italic text-[0px] text-center text-white top-[48.7px] tracking-[0.0283px] w-[42.263px]" data-node-id="166:1539">
        <p className="leading-[5.143px] mb-0 text-[#a55008] text-[3.675px]">TEAM COMPETITION</p>
        <p className="leading-[5.143px] text-[2.826px]">Investigate the incident, prioritize security fixes, and protect NovaCorp.</p>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['ROG_Fonts_STRIX_SCAR:Regular','Orbitron',sans-serif] leading-[0] left-[calc(50%+0.18px)] not-italic text-[0px] text-center text-white top-[56.04px] tracking-[0.0274px] w-[55.288px]" data-node-id="166:1540">
        <p className="leading-[4.991px] mb-0 text-[#a55008] text-[3.675px]">HANDS-ON WORKSHOP</p>
        <p className="leading-[4.991px] text-[2.742px]">Explore PHP security, analyze simulated logs, identify vulnerable systems, and plan remediation.</p>
      </div>
      <div className="absolute h-[131.155px] left-[-11.94px] top-[120.36px] w-[104.924px]" data-node-id="166:1541" data-name="image 191">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage191} />
      </div>
      <div className="-translate-x-1/2 absolute flex h-[11.689px] items-center justify-center left-[22.78px] top-[167.16px] w-[19.832px]" data-node-id="166:1542">
        <div className="flex-none rotate-[-5.23deg]">
          <p className="[word-break:break-word] font-['ROG_Fonts_STRIX_SCAR:Regular','Orbitron',sans-serif] leading-[0] not-italic relative text-[0px] text-center text-white tracking-[0.0238px] whitespace-nowrap">
            <span className="leading-[4.324px] text-[3.675px]">DATE</span>
            <span className="leading-[4.324px] text-[2.376px]">
              <br aria-hidden />
              30-10-2026
            </span>
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[10.961px] items-center justify-center left-[63.21px] top-[161.64px] w-[19.846px]" data-node-id="166:1543">
        <div className="flex-none rotate-[-6.08deg]">
          <p className="[word-break:break-word] font-['ROG_Fonts_STRIX_SCAR:Regular','Orbitron',sans-serif] leading-[0] not-italic relative text-[0px] text-center text-white tracking-[0.0213px] whitespace-nowrap">
            <span className="leading-[3.875px] text-[3.675px]">VENUE</span>
            <span className="leading-[3.875px] text-[2.129px]">
              <br aria-hidden />
              IIIT Dharwad
            </span>
          </p>
        </div>
      </div>
      <div className="absolute flex h-[51.61px] items-center justify-center left-[114.85px] top-[110.25px] w-[50.278px]" data-node-id="166:1544">
        <div className="flex-none rotate-[38.29deg]">
          <div className="h-[40.302px] relative w-[32.241px]" data-name="image 192">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage192} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Rubik_Glitch:Regular'] leading-[normal] left-[calc(50%-39.41px)] not-italic text-[3.415px] text-white top-[7.35px] w-[78.096px]" data-node-id="166:1545">
        MSA × IEEE STUDENT BRANCH IIIT DHARWAD
      </p>
      <div className="absolute left-[21.13px] size-[9.188px] top-[41.34px]" data-node-id="166:1546" data-name="grommet-icons:user-expert">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGrommetIconsUserExpert} />
      </div>
      <div className="absolute left-[72.58px] size-[11.025px] top-[45.02px]" data-node-id="166:1548" data-name="grommet-icons:workshop">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGrommetIconsWorkshop} />
      </div>
      <div className="absolute left-[128.63px] overflow-clip size-[11.025px] top-[40.43px]" data-node-id="166:1550" data-name="andrsrxn:team">
        <div className="absolute inset-[16.72%_6.53%_16.87%_6.47%]" data-node-id="166:1551" data-name="Group">
          <div className="absolute inset-[-4.5%_-3.6%_-4.7%_-3.59%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkPakkam() {
  return (
    <div className="relative bg-white content-stretch flex flex-col h-[155.174px] items-start w-[218px]" data-node-id="166:1557" data-name="Pakkam Government Services - /">
      <div className="content-stretch flex flex-col items-start min-h-[155.15695190429688px] min-w-[48.44443893432617px] relative shrink-0 w-full" data-node-id="166:1558" data-name="Body">
        <div className="h-[155.157px] min-h-[155.15695190429688px] overflow-clip relative shrink-0 w-full" data-node-id="166:1559" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 218 155.16' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -22.226 -22.226 0 10.9 74.475)'><stop stop-color='rgba(3,190,189,0.28)' offset='0'/><stop stop-color='rgba(3,190,189,0)' offset='0.4'/></radialGradient></defs></svg>\"), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 218 155.16' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -21.291 -21.291 0 183.12 46.547)'><stop stop-color='rgba(128,79,163,0.22)' offset='0'/><stop stop-color='rgba(128,79,163,0)' offset='0.42'/></radialGradient></defs></svg>\"), linear-gradient(134.53246851547715deg, rgb(245, 255, 255) 6.1733%, rgb(234, 245, 248) 50%, rgb(238, 232, 245) 93.827%)" }} data-name="App">
          <div className="absolute bg-[rgba(5,220,210,0.13)] blur-[12.111px] left-[74.12px] rounded-[36.333px] size-[72.667px] top-[27.93px]" data-node-id="166:1560" data-name="Container" />
          <div className="absolute bg-[rgba(153,51,207,0.12)] blur-[12.111px] left-[142.19px] rounded-[30.278px] size-[60.556px] top-[15.52px]" data-node-id="166:1561" data-name="Container" />
          <div className="absolute h-[52.986px] left-[118.08px] top-[103.68px] w-[102.944px]" data-node-id="166:1562" data-name="Container">
            <div className="absolute h-[51.472px] left-0 opacity-76 top-[1.51px] w-[102.944px]" data-node-id="166:1563" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
            </div>
            <div className="absolute h-[56.014px] left-[-12.35px] opacity-50 overflow-clip top-[24.98px] w-[102.944px]" data-node-id="166:1564" data-name="Image">
              <div className="absolute inset-[27.89%_14.82%]" data-node-id="166:1565">
                <div className="absolute inset-[-62.32%_-21.32%_-62.33%_-21.32%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[56.014px] items-center justify-center left-[24.71px] top-[24.98px] w-[102.944px]" data-node-id="166:1567">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[56.014px] opacity-50 overflow-clip relative w-[102.944px]" data-name="Image">
                  <div className="absolute inset-[27.89%_14.82%]" data-node-id="166:1568">
                    <div className="absolute inset-[-62.32%_-21.32%_-62.33%_-21.32%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-[19.68px] min-h-[124.13887786865234px] top-[13.47px] w-[178.639px]" data-node-id="166:1570" data-name="Section">
            <div className="h-0 relative shrink-0 w-full" data-node-id="166:1571" data-name="Container">
              <div className="absolute content-stretch flex gap-[1.696px] items-center left-[57.53px] max-w-[63.58332824707031px] top-[5.46px] w-[63.583px]" data-node-id="166:1572" data-name="Container">
                <div className="backdrop-blur-[1.817px] bg-[rgba(255,255,255,0)] border-[0.135px] border-[rgba(20,55,75,0.18)] border-solid grid grid-cols-[_4.58px] grid-rows-[_4.58px] relative rounded-[2.422px] shrink-0 size-[4.844px]" data-node-id="166:1573" data-name="Text">
                  <p className="[word-break:break-word] col-1 font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] justify-self-center leading-[1.918px] not-italic relative row-1 self-center shrink-0 text-[#008f99] text-[1.599px] text-center tracking-[0.0959px] whitespace-nowrap" data-node-id="166:1574">
                    01
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] gap-[0.291px] items-center leading-[3.139px] not-italic relative shrink-0 text-[2.616px] text-center" data-node-id="166:1575" data-name="Container">
                  <p className="relative shrink-0 text-[#152942] whitespace-nowrap" data-node-id="166:1576">
                    Understand Documents
                  </p>
                  <p className="relative shrink-0 text-[#314c60] w-[57.074px]" data-node-id="166:1577">
                    Turn complex government PDFs into simple explanations.
                  </p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[1.696px] items-start left-0 max-w-[52.986106872558594px] top-[27.25px] w-[40.118px]" data-node-id="166:1578" data-name="Container">
                <div className="backdrop-blur-[1.817px] bg-[rgba(255,255,255,0)] border-[0.135px] border-[rgba(20,55,75,0.18)] border-solid grid grid-cols-[_4.58px] grid-rows-[_4.58px] relative rounded-[2.422px] shrink-0 size-[4.844px]" data-node-id="166:1579" data-name="Text">
                  <p className="[word-break:break-word] col-1 font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] justify-self-center leading-[1.918px] not-italic relative row-1 self-center shrink-0 text-[#008f99] text-[1.599px] tracking-[0.0959px] whitespace-nowrap" data-node-id="166:1580">
                    02
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[0.291px] items-start relative shrink-0" data-node-id="166:1581" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="166:1582" data-name="Bold Text">
                    <p className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[3.139px] not-italic relative shrink-0 text-[#152942] text-[2.616px] whitespace-nowrap" data-node-id="166:1583">
                      Speak Naturally
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="166:1584" data-name="Text">
                    <p className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[3.139px] not-italic relative shrink-0 text-[#314c60] text-[2.616px] w-[33.608px]" data-node-id="166:1585">
                      Ask questions in Tamil, Hindi or English.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[46.931px] left-[21.19px] top-[19.08px] w-[136.25px]" data-node-id="166:1586" data-name="Container">
              <div className="absolute content-stretch flex flex-col h-[34.819px] items-start left-0 opacity-90 top-[16.05px] w-[59.647px]" data-node-id="166:1587" data-name="Container">
                <div className="h-[34.819px] overflow-clip relative shrink-0 w-full" data-node-id="166:1588" data-name="Image">
                  <div className="absolute contents inset-[12.5%]" data-node-id="166:1589" data-name="hugeicons:audio-wave-01">
                    <div className="absolute inset-[12.5%]" data-node-id="166:1590" data-name="Vector">
                      <div className="absolute inset-[-4.76%_-2.78%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[34.819px] items-center justify-center left-[76.6px] top-[16.05px] w-[59.647px]" data-node-id="166:1591">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="content-stretch flex flex-col h-[34.819px] items-start opacity-86 relative w-[59.647px]" data-name="Container">
                    <div className="h-[34.819px] overflow-clip relative shrink-0 w-full" data-node-id="166:1592" data-name="Image">
                      <div className="absolute contents inset-[12.5%]" data-node-id="166:1593" data-name="hugeicons:audio-wave-01">
                        <div className="absolute inset-[12.5%]" data-node-id="166:1594" data-name="Vector">
                          <div className="absolute inset-[-4.76%_-2.78%]">
                            <img alt="" className="block max-w-none size-full" src={imgVector3} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[66.644px] left-[calc(50%+0.05px)] opacity-86 top-[calc(50%+4.86px)] w-[118.479px]" data-node-id="166:1595" data-name="image 5">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[31.79px] top-[75.71px] w-[115.056px]" data-node-id="166:1596" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="166:1597" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[2.834px] not-italic relative shrink-0 text-[#008f99] text-[1.889px] text-center tracking-[0.2834px] uppercase whitespace-nowrap" data-node-id="166:1598">
                  Official services. Clear answers.
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[21.558px] items-center pt-[1.574px] relative shrink-0 w-[115.056px]" data-node-id="166:1599" data-name="Heading 1">
                <div className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[0] not-italic relative shrink-0 text-[#152942] text-[9.689px] text-center tracking-[-0.3391px] whitespace-nowrap" data-node-id="166:1600">
                  <p className="leading-[9.98px] mb-0">Government services,</p>
                  <p>
                    <span className="leading-[9.98px]">{`simplified for `}</span>
                    <span className="leading-[9.98px] text-[#008f99]">everyone.</span>
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[12.565px] items-center pb-[4.239px] pt-[1.211px] relative shrink-0 w-[115.056px]" data-node-id="166:1601" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[7.012px] not-italic relative shrink-0 text-[#314c60] text-[4.675px] text-center whitespace-nowrap" data-node-id="166:1602">
                  Your language. Your rights. Your access.
                </p>
              </div>
              <div className="h-[10.299px] relative shrink-0 w-full" data-node-id="166:1603" data-name="Container">
                <div className="absolute border-[0.135px] border-[rgba(255,255,255,0.25)] border-solid content-stretch flex gap-[1.817px] h-[10.294px] items-center justify-center left-[37.77px] min-h-[10.29444408416748px] min-w-[39.361106872558594px] px-[4.118px] rounded-[151.238px] shadow-[0px_0px_0.151px_0px_#ffc0ff,0px_0px_2.271px_0px_rgba(124,33,203,0.85),0px_0px_5.147px_0px_rgba(124,33,203,0.68)] top-[0.02px]" data-node-id="166:1604" style={{ backgroundImage: "linear-gradient(165.6777732101694deg, rgb(113, 33, 207) 0%, rgb(163, 18, 235) 100%)" }} data-name="Button">
                  <p className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[4.651px] not-italic relative shrink-0 text-[3.1px] text-center text-white tracking-[0.0465px] uppercase whitespace-nowrap" data-node-id="166:1605">
                    Ask Pakkam AI
                  </p>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="166:1606" data-name="Text">
                    <p className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[5.813px] not-italic relative shrink-0 text-[3.876px] text-center text-white tracking-[0.0465px] uppercase whitespace-nowrap" data-node-id="166:1607">
                      →
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[1.696px] items-start left-[130.19px] max-w-[52.986106872558594px] top-[27.25px] w-[48.444px]" data-node-id="166:1608" data-name="Container">
              <div className="backdrop-blur-[1.817px] bg-[rgba(255,255,255,0)] border-[0.135px] border-[rgba(20,55,75,0.18)] border-solid grid grid-cols-[_4.58px] grid-rows-[_4.58px] relative rounded-[2.422px] shrink-0 size-[4.844px]" data-node-id="166:1609" data-name="Text">
                <p className="[word-break:break-word] col-1 font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] justify-self-center leading-[1.918px] not-italic relative row-1 self-center shrink-0 text-[#008f99] text-[1.599px] tracking-[0.0959px] whitespace-nowrap" data-node-id="166:1610">
                  03
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[0.291px] items-start relative shrink-0" data-node-id="166:1611" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="166:1612" data-name="Bold Text">
                  <p className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[3.139px] not-italic relative shrink-0 text-[#152942] text-[2.616px] whitespace-nowrap" data-node-id="166:1613">
                    Trust Your Information
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="166:1614" data-name="Text">
                  <p className="[word-break:break-word] font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[3.139px] not-italic relative shrink-0 text-[#314c60] text-[2.616px] w-[41.935px]" data-node-id="166:1615">
                    Explore answers supported by official documents and references.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute backdrop-blur-[3.331px] bg-[rgba(0,0,0,0.2)] border-[0.135px] border-[rgba(255,255,255,0.25)] border-solid grid grid-cols-[___74.82px_50.80px_74.82px] grid-rows-[_9.39px] h-[11.354px] left-[calc(50%+0.08px)] max-w-[208.46249389648438px] min-h-[11.354166030883789px] pl-[4.844px] pr-[2.907px] py-[0.848px] rounded-[151.238px] shadow-[0px_2.119px_6.661px_0px_rgba(10,16,48,0.12)] top-[1.51px] w-[208.462px]" data-node-id="166:1616" data-name="Header - Primary navigation">
            <div className="h-[10.749px] justify-self-start relative self-center shrink-0 w-[29.672px]" data-node-id="166:1617" data-name="Button - AKKAM home">
              <div className="absolute h-[11.96px] left-[1.3px] top-[-1.06px] w-[15.442px]" data-node-id="166:1618" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
              </div>
              <div className="absolute h-[9.155px] left-[13.17px] top-[0.8px] w-[20.286px]" data-node-id="166:1619" data-name="Text:margin">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Arial:Bold',Arial,Helvetica,Arimo,sans-serif] [font-weight:700] leading-[9.156px] left-[9.64px] not-italic text-[6.104px] text-black text-center top-0 tracking-[-0.2442px] whitespace-nowrap" data-node-id="166:1620">
                  AKKAM
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8.72px] items-center justify-self-stretch relative self-center shrink-0" data-node-id="166:1621" data-name="Navigation">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="166:1622" data-name="Button">
                <p className="[word-break:break-word] font-['Arial:Regular',Arial,Helvetica,Arimo,sans-serif] leading-[5.559px] not-italic relative shrink-0 text-[#e90a28] text-[3.706px] text-center whitespace-nowrap" data-node-id="166:1623">
                  Home
                </p>
                <div className="absolute bg-[#e90a28] h-[0.303px] left-0 rounded-[0.303px] top-[6.47px] w-[9.887px]" data-node-id="166:1624" data-name="Text" />
              </div>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="166:1625" data-name="Button">
                <p className="[word-break:break-word] font-['Arial:Regular',Arial,Helvetica,Arimo,sans-serif] leading-[5.559px] not-italic relative shrink-0 text-[3.706px] text-black text-center whitespace-nowrap" data-node-id="166:1626">
                  About
                </p>
              </div>
              <div className="content-stretch flex gap-[1.453px] h-[5.559px] items-center relative shrink-0" data-node-id="166:1627" data-name="Button">
                <p className="[word-break:break-word] font-['Arial:Regular',Arial,Helvetica,Arimo,sans-serif] leading-[5.559px] not-italic relative shrink-0 text-[3.706px] text-black text-center whitespace-nowrap" data-node-id="166:1628">
                  English
                </p>
                <div className="content-stretch flex flex-col items-start relative shrink-0 size-[1.211px]" data-node-id="166:1629" data-name="Text:transform">
                  <div className="absolute flex items-center justify-center left-[-0.04px] size-[1.713px] top-[-0.46px]" data-node-id="166:1630">
                    <div className="flex-none rotate-45">
                      <div className="border-b-[0.269px] border-black border-r-[0.269px] border-solid relative size-[1.211px]" data-name="Text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8.781px] items-start justify-end justify-self-end relative self-center shrink-0 w-[32.549px]" data-node-id="166:1631" data-name="Container">
              <div className="relative rounded-[3.331px] shrink-0 size-[6.661px]" data-node-id="166:1632" data-name="Button - Start voice input">
                <div className="absolute left-[1.13px] overflow-clip size-[4.39px] top-[1.14px]" data-node-id="166:1633" data-name="Image">
                  <div className="absolute inset-[0.01%_0_-0.02%_0]" data-node-id="166:1634" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[_6.66px] grid-rows-[_6.66px] relative rounded-[3.331px] shrink-0 size-[6.661px]" data-node-id="166:1637" data-name="Button - Switch to light mode">
                <div className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[3.482px]" data-node-id="166:1638" data-name="ThemeIcon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgThemeIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkIiitWebsite() {
  return (
    <div className="relative bg-white h-[203px] overflow-clip w-[215.581px]" data-node-id="166:1641" data-name="Desktop - 17">
      <div className="absolute h-[118.392px] left-[-0.15px] top-0 w-[215.68px]" data-node-id="166:1642" data-name="IIIT DWD PIC 1">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgIiitDwdPic1} />
      </div>
      <div className="absolute h-[15.267px] left-0 overflow-clip top-0 w-[215.531px]" data-node-id="166:1643">
        <div className="absolute bg-[#d9d9d9] h-[15.267px] left-[1.5px] rounded-[5.089px] top-[544.07px] w-[52.985px]" data-node-id="166:1644" />
        <div className="absolute bg-white h-[15.267px] left-0 top-0 w-[215.531px]" data-node-id="166:1645" />
        <div className="-translate-y-1/2 absolute contents left-[62.26px] top-[calc(50%-0.07px)]" data-node-id="166:1646">
          <div className="absolute contents left-[62.26px] top-[5.69px]" data-node-id="166:1647">
            <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[2.993px] leading-[normal] left-[62.26px] not-italic text-[2.993px] text-black top-[5.69px] w-[8.531px]" data-node-id="166:1648">
              Home
            </p>
            <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[2.993px] leading-[normal] left-[74.39px] not-italic text-[2.737px] text-black top-[5.69px] w-[10.926px]" data-node-id="166:1649">
              Institute
            </p>
            <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[2.395px] leading-[normal] left-[88.31px] not-italic text-[2.694px] text-black top-[5.84px] w-[15.865px]" data-node-id="166:1650">
              Academics
            </p>
            <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[2.245px] leading-[normal] left-[107.02px] not-italic text-[2.694px] text-black top-[5.84px] w-[14.967px]" data-node-id="166:1651">
              Student life
            </p>
            <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[2.544px] leading-[normal] left-[calc(100%-89.96px)] not-italic text-[2.694px] text-black top-[5.84px] w-[12.273px]" data-node-id="166:1652">
              Research
            </p>
            <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[2.993px] leading-[normal] left-[calc(100%-74.09px)] not-italic text-[2.694px] text-black top-[5.84px] w-[23.948px]" data-node-id="166:1653">{`Careers & Tenders`}</p>
            <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium h-[2.993px] leading-[normal] left-[calc(100%-42.96px)] not-italic text-[2.737px] text-black top-[5.84px] w-[8.382px]" data-node-id="166:1654">
              Online
            </p>
            <div className="-translate-y-1/2 absolute bg-[#365a7e] h-[3.742px] left-[calc(100%-23.35px)] rounded-[6.735px] top-[calc(50%-0.07px)] w-[16.015px]" data-node-id="166:1655" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[6.735px] items-center justify-center left-[107.77px] top-[108.21px] w-0" data-node-id="166:1656">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[6.735px]">
            <div className="absolute inset-[-0.15px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Playfair_Display:Regular'] font-normal leading-[normal] left-[calc(100%-110.96px)] text-[#cdcdcd] text-[2.473px] top-[104.92px] whitespace-nowrap" data-node-id="166:1657">
        scroll
      </p>
      <div className="absolute h-[7.035px] left-[11.82px] overflow-clip top-[93.55px] w-[33.377px]" data-node-id="166:1658">
        <div className="absolute bg-[#7a1e2c] h-[7.035px] left-0 rounded-[1.946px] top-0 w-[33.377px]" data-node-id="166:1659" />
        <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[calc(50%-12.8px)] not-italic text-[2.968px] text-white top-[calc(50%-1.72px)] whitespace-nowrap" data-node-id="166:1660">
          Explore Programs
        </p>
      </div>
      <div className="absolute h-[7.035px] left-[48.94px] top-[93.55px] w-[33.377px]" data-node-id="166:1661">
        <div className="absolute bg-[#dbd6d6] border-[0.449px] border-black border-solid h-[7.035px] left-0 opacity-34 rounded-[1.946px] top-0 w-[33.377px]" data-node-id="166:1662" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2" data-node-id="166:1663">
          <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[calc(50%-7.41px)] not-italic text-[2.968px] text-white top-[calc(50%-1.72px)] whitespace-nowrap" data-node-id="166:1664">
            IDRP
          </p>
          <div className="absolute flex items-center justify-center left-[16.17px] size-[7.933px] top-[-0.45px]" data-node-id="166:1665">
            <div className="flex-none rotate-90">
              <div className="relative size-[7.933px]" data-name="ix:arrow-up">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIxArrowUp} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Playfair_Display:Bold'] font-bold leading-[0] left-[11.67px] text-[#cdcdcd] text-[2.473px] top-[81.42px] whitespace-nowrap" data-node-id="166:1666">
        <p className="leading-[normal] mb-0">{`Indian Institute of Information Technology Dharwad - shaping tomorrow's`}</p>
        <p className="leading-[normal]">innovators since 2015.</p>
      </div>
      <div className="-translate-x-1/2 absolute contents left-[107.77px] top-[160px]" data-node-id="166:1667">
        <div className="-translate-x-1/2 absolute h-[42.92px] left-[calc(100%-107.79px)] top-[160px] w-[185.648px]" data-node-id="166:1668" data-name="Container">
          <div className="absolute border-black border-r-[0.132px] border-solid h-[42.92px] left-0 top-0 w-[46.267px]" data-node-id="166:1669" data-name="Container">
            <div className="absolute bg-[#7a1e2c] h-[0.331px] left-[20.49px] top-[6.61px] w-[5.291px]" data-node-id="166:1670" data-name="Container" />
            <div className="absolute h-[6.614px] left-[3.97px] top-[10.91px] w-[38.33px]" data-node-id="166:1671" data-name="Container">
              <div className="absolute bg-[rgba(11,31,58,0.05)] left-[15.86px] rounded-[4438739.5px] size-[6.614px] top-0" data-node-id="166:1672" data-name="Container">
                <div className="absolute left-[1.82px] size-[2.976px] top-[1.82px]" data-node-id="166:1673" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                </div>
                <div className="absolute bg-[#05df72] left-[5.95px] opacity-98 rounded-[4438739.5px] shadow-[0px_0px_0px_0px_rgba(74,222,128,0.56),0px_0px_1.029px_0px_rgba(74,222,128,0.39)] size-[0.992px] top-[-0.33px]" data-node-id="166:1676" data-name="Text" />
              </div>
            </div>
            <div className="absolute h-[7.947px] left-[3.97px] top-[20.17px] w-[38.33px]" data-node-id="166:1677" data-name="Container">
              <div className="absolute h-[3.975px] left-[8.79px] top-[1.19px] w-[2.028px]" data-node-id="166:1678" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Bold',Consolas,ui-monospace,monospace] [font-weight:700] leading-[3.974px] left-[1.33px] not-italic text-[3.974px] text-[rgba(122,30,44,0.4)] text-center top-[-0.07px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1679">
                  [
                </p>
              </div>
              <div className="absolute h-[7.947px] left-[11.48px] top-0 w-[15.372px]" data-node-id="166:1680" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Space_Grotesk:Bold'] font-bold leading-[0] left-[7.84px] text-[#0b1f3a] text-[7.948px] text-center top-[-0.2px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1681">
                  <span className="leading-[7.948px]">96</span>
                  <span className="leading-[7.948px] text-[#7a1e2c]">%</span>
                </p>
              </div>
              <div className="absolute h-[3.975px] left-[27.51px] top-[3.38px] w-[2.028px]" data-node-id="166:1682" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Bold',Consolas,ui-monospace,monospace] [font-weight:700] leading-[3.974px] left-[1.33px] not-italic text-[3.974px] text-[rgba(122,30,44,0.4)] text-center top-[-0.07px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1683">
                  ]
                </p>
              </div>
            </div>
            <div className="absolute h-[3.721px] left-[3.97px] top-[29.44px] w-[38.33px]" data-node-id="166:1684" data-name="Container">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.721px] left-[19.17px] not-italic text-[#0b1f3a] text-[2.48px] text-center top-[-0.23px] whitespace-nowrap" data-node-id="166:1685">
                Placement Rate
              </p>
            </div>
            <div className="absolute h-[2.48px] left-[3.97px] top-[33.83px] w-[38.33px]" data-node-id="166:1686" data-name="Container">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Regular',Consolas,ui-monospace,monospace] leading-[2.48px] left-[19.33px] not-italic text-[1.654px] text-[rgba(11,31,58,0.35)] text-center top-[-0.07px] tracking-[0.1323px] whitespace-nowrap" data-node-id="166:1687">{`// Batch of 2024`}</p>
            </div>
          </div>
          <div className="absolute border-black border-r-[0.132px] border-solid h-[42.92px] left-[46.41px] top-0 w-[46.267px]" data-node-id="166:1688" data-name="Container">
            <div className="absolute bg-[#7a1e2c] h-[0.331px] left-[20.49px] top-[6.61px] w-[5.291px]" data-node-id="166:1689" data-name="Container" />
            <div className="absolute h-[6.614px] left-[3.97px] top-[10.91px] w-[38.33px]" data-node-id="166:1690" data-name="Container">
              <div className="absolute bg-[rgba(11,31,58,0.05)] left-[15.86px] rounded-[4438739.5px] size-[6.614px] top-0" data-node-id="166:1691" data-name="Container">
                <div className="absolute left-[1.82px] size-[2.976px] top-[1.82px]" data-node-id="166:1692" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                </div>
                <div className="absolute bg-[#05df72] left-[5.95px] opacity-98 rounded-[4438739.5px] shadow-[0px_0px_0px_0px_rgba(74,222,128,0.56),0px_0px_1.029px_0px_rgba(74,222,128,0.39)] size-[0.992px] top-[-0.33px]" data-node-id="166:1695" data-name="Text" />
              </div>
            </div>
            <div className="absolute h-[7.947px] left-[3.97px] top-[20.17px] w-[38.33px]" data-node-id="166:1696" data-name="Container">
              <div className="absolute h-[3.975px] left-[2.11px] top-[1.19px] w-[2.028px]" data-node-id="166:1697" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Bold',Consolas,ui-monospace,monospace] [font-weight:700] leading-[3.974px] left-[1.33px] not-italic text-[3.974px] text-[rgba(122,30,44,0.4)] text-center top-[-0.07px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1698">
                  [
                </p>
              </div>
              <div className="absolute h-[7.947px] left-[4.79px] top-0 w-[28.741px]" data-node-id="166:1699" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Space_Grotesk:Bold'] font-bold leading-[0] left-[14.5px] text-[#0b1f3a] text-[7.948px] text-center top-[-0.2px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1700">
                  <span className="leading-[7.948px]">₹78</span>
                  <span className="leading-[7.948px] text-[#7a1e2c]">{` LPA`}</span>
                </p>
              </div>
              <div className="absolute h-[3.975px] left-[34.2px] top-[3.38px] w-[2.028px]" data-node-id="166:1701" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Bold',Consolas,ui-monospace,monospace] [font-weight:700] leading-[3.974px] left-[1.33px] not-italic text-[3.974px] text-[rgba(122,30,44,0.4)] text-center top-[-0.07px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1702">
                  ]
                </p>
              </div>
            </div>
            <div className="absolute h-[3.721px] left-[3.97px] top-[29.44px] w-[38.33px]" data-node-id="166:1703" data-name="Container">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.721px] left-[19.56px] not-italic text-[#0b1f3a] text-[2.48px] text-center top-[-0.23px] whitespace-nowrap" data-node-id="166:1704">
                Highest Package
              </p>
            </div>
            <div className="absolute h-[2.48px] left-[3.97px] top-[33.83px] w-[38.33px]" data-node-id="166:1705" data-name="Container">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Regular',Consolas,ui-monospace,monospace] leading-[2.48px] left-[19.37px] not-italic text-[1.654px] text-[rgba(11,31,58,0.35)] text-center top-[-0.07px] tracking-[0.1323px] whitespace-nowrap" data-node-id="166:1706">{`// CTC Offered`}</p>
            </div>
          </div>
          <div className="absolute border-black border-r-[0.132px] border-solid h-[42.92px] left-[92.83px] top-0 w-[46.267px]" data-node-id="166:1707" data-name="Container">
            <div className="absolute bg-[#7a1e2c] h-[0.331px] left-[20.49px] top-[6.61px] w-[5.291px]" data-node-id="166:1708" data-name="Container" />
            <div className="absolute h-[6.614px] left-[3.97px] top-[10.91px] w-[38.33px]" data-node-id="166:1709" data-name="Container">
              <div className="absolute bg-[rgba(11,31,58,0.05)] left-[15.86px] rounded-[4438739.5px] size-[6.614px] top-0" data-node-id="166:1710" data-name="Container">
                <div className="absolute left-[1.82px] size-[2.976px] top-[1.82px]" data-node-id="166:1711" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                </div>
                <div className="absolute bg-[#05df72] left-[5.95px] opacity-98 rounded-[4438739.5px] shadow-[0px_0px_0px_0px_rgba(74,222,128,0.56),0px_0px_1.029px_0px_rgba(74,222,128,0.39)] size-[0.992px] top-[-0.33px]" data-node-id="166:1719" data-name="Text" />
              </div>
            </div>
            <div className="absolute h-[7.947px] left-[3.97px] top-[20.17px] w-[38.33px]" data-node-id="166:1720" data-name="Container">
              <div className="absolute h-[3.975px] left-[9.41px] top-[1.19px] w-[2.028px]" data-node-id="166:1721" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Bold',Consolas,ui-monospace,monospace] [font-weight:700] leading-[3.974px] left-[1.34px] not-italic text-[3.974px] text-[rgba(122,30,44,0.4)] text-center top-[-0.07px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1722">
                  [
                </p>
              </div>
              <div className="absolute h-[7.947px] left-[12.1px] top-0 w-[14.134px]" data-node-id="166:1723" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Space_Grotesk:Bold'] font-bold leading-[0] left-[7.5px] text-[#0b1f3a] text-[7.948px] text-center top-[-0.2px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1724">
                  <span className="leading-[7.948px]">95</span>
                  <span className="leading-[7.948px] text-[#7a1e2c]">+</span>
                </p>
              </div>
              <div className="absolute h-[3.975px] left-[26.9px] top-[3.38px] w-[2.028px]" data-node-id="166:1725" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Bold',Consolas,ui-monospace,monospace] [font-weight:700] leading-[3.974px] left-[1.33px] not-italic text-[3.974px] text-[rgba(122,30,44,0.4)] text-center top-[-0.07px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1726">
                  ]
                </p>
              </div>
            </div>
            <div className="absolute h-[3.721px] left-[3.97px] top-[29.44px] w-[38.33px]" data-node-id="166:1727" data-name="Container">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.721px] left-[19.41px] not-italic text-[#0b1f3a] text-[2.48px] text-center top-[-0.23px] whitespace-nowrap" data-node-id="166:1728">
                Companies Visited
              </p>
            </div>
            <div className="absolute h-[2.48px] left-[3.97px] top-[33.83px] w-[38.33px]" data-node-id="166:1729" data-name="Container">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Regular',Consolas,ui-monospace,monospace] leading-[2.48px] left-[19.25px] not-italic text-[1.654px] text-[rgba(11,31,58,0.35)] text-center top-[-0.07px] tracking-[0.1323px] whitespace-nowrap" data-node-id="166:1730">{`// Campus Recruiters`}</p>
            </div>
          </div>
          <div className="absolute h-[42.92px] left-[139.25px] top-0 w-[46.399px]" data-node-id="166:1731" data-name="Container">
            <div className="absolute bg-[#7a1e2c] h-[0.331px] left-[20.55px] top-[6.61px] w-[5.291px]" data-node-id="166:1732" data-name="Container" />
            <div className="absolute h-[6.614px] left-[3.97px] top-[10.91px] w-[38.462px]" data-node-id="166:1733" data-name="Container">
              <div className="absolute bg-[rgba(11,31,58,0.05)] left-[15.92px] rounded-[4438739.5px] size-[6.614px] top-0" data-node-id="166:1734" data-name="Container">
                <div className="absolute left-[1.82px] size-[2.976px] top-[1.82px]" data-node-id="166:1735" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                </div>
                <div className="absolute bg-[#05df72] left-[5.95px] opacity-98 rounded-[4438739.5px] shadow-[0px_0px_0px_0px_rgba(74,222,128,0.56),0px_0px_1.029px_0px_rgba(74,222,128,0.39)] size-[0.992px] top-[-0.33px]" data-node-id="166:1741" data-name="Text" />
              </div>
            </div>
            <div className="absolute h-[7.947px] left-[3.97px] top-[20.17px] w-[38.462px]" data-node-id="166:1742" data-name="Container">
              <div className="absolute h-[3.975px] left-[4.39px] top-[1.19px] w-[2.028px]" data-node-id="166:1743" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Bold',Consolas,ui-monospace,monospace] [font-weight:700] leading-[3.974px] left-[1.33px] not-italic text-[3.974px] text-[rgba(122,30,44,0.4)] text-center top-[-0.07px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1744">
                  [
                </p>
              </div>
              <div className="absolute h-[7.947px] left-[7.08px] top-0 w-[24.307px]" data-node-id="166:1745" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Space_Grotesk:Bold'] font-bold leading-[0] left-[12.11px] text-[#0b1f3a] text-[7.948px] text-center top-[-0.2px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1746">
                  <span className="leading-[7.948px]">1500</span>
                  <span className="leading-[7.948px] text-[#7a1e2c]">+</span>
                </p>
              </div>
              <div className="absolute h-[3.975px] left-[32.05px] top-[3.38px] w-[2.028px]" data-node-id="166:1747" data-name="Text">
                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Bold',Consolas,ui-monospace,monospace] [font-weight:700] leading-[3.974px] left-[1.33px] not-italic text-[3.974px] text-[rgba(122,30,44,0.4)] text-center top-[-0.07px] tracking-[-0.159px] whitespace-nowrap" data-node-id="166:1748">
                  ]
                </p>
              </div>
            </div>
            <div className="absolute h-[3.721px] left-[3.97px] top-[29.44px] w-[38.462px]" data-node-id="166:1749" data-name="Container">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.721px] left-[19.44px] not-italic text-[#0b1f3a] text-[2.48px] text-center top-[-0.23px] whitespace-nowrap" data-node-id="166:1750">{`Students `}</p>
            </div>
            <div className="absolute h-[2.48px] left-[3.97px] top-[33.83px] w-[38.462px]" data-node-id="166:1751" data-name="Container">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Consolas:Regular',Consolas,ui-monospace,monospace] leading-[2.48px] left-[19.27px] not-italic text-[1.654px] text-[rgba(11,31,58,0.35)] text-center top-[-0.07px] tracking-[0.1323px] whitespace-nowrap" data-node-id="166:1752">{`// Across All Programs`}</p>
            </div>
          </div>
          <div className="absolute contents left-[144.11px] top-[-31.87px]" data-node-id="166:1753">
            <MaterialSymbolsNewsOutlineSharp className="absolute left-[144.1px] rounded-[3.742px] size-[24.222px] top-[-31.87px]" />
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[202.81px] w-[215.531px]" data-node-id="166:1755">
          <div className="absolute inset-[-0.13px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[160px] w-[215.531px]" data-node-id="166:1756">
          <div className="absolute inset-[-0.13px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
      </div>
      <div className="absolute h-[34.125px] left-[23.65px] top-[123.18px] w-[168.826px]" data-node-id="166:1757">
        <div className="absolute h-[34.125px] left-0 top-0 w-[41.466px]" data-node-id="166:1758">
          <div className="absolute bg-[rgba(11,31,58,0.1)] border-0 border-[#0b1f3a] border-solid h-[34.125px] left-0 rounded-[3.742px] top-0 w-[41.466px]" data-node-id="166:1759" />
          <FontistoPersons className="-translate-x-1/2 absolute h-[13.868px] left-[calc(50%+0.1px)] top-[6.29px] w-[15.024px]" />
          <p className="[word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[calc(50%-7.11px)] not-italic text-[4.087px] text-black top-[20.21px] tracking-[0.1635px] whitespace-nowrap" data-node-id="166:1761">
            People
          </p>
        </div>
        <div className="absolute h-[34.125px] left-[42.81px] top-0 w-[41.304px]" data-node-id="166:1762">
          <div className="absolute bg-[rgba(11,31,58,0.1)] border-0 border-[#7a1e2c] border-solid h-[34.125px] left-0 rounded-[3.742px] top-0 w-[41.304px]" data-node-id="166:1763" />
          <SolarBuildingsBold className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.07px)] size-[13.92px] top-[calc(50%-3.22px)]" />
          <p className="[word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[calc(50%-13.32px)] not-italic text-[4.087px] text-black top-[20.8px] tracking-[0.1635px] whitespace-nowrap" data-node-id="166:1765">
            Departments
          </p>
        </div>
        <div className="absolute h-[34.125px] left-[84.86px] top-0 w-[41.466px]" data-node-id="166:1766">
          <div className="absolute bg-[rgba(11,31,58,0.1)] h-[34.125px] left-0 rounded-[3.742px] top-0 w-[41.466px]" data-node-id="166:1767" />
          <DinkieIconsThreeNetworkedComputers className="-translate-x-1/2 absolute left-1/2 size-[13.92px] top-[4.94px]" />
          <p className="[word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[calc(50%-9.51px)] not-italic text-[4.087px] text-black top-[21.1px] tracking-[0.1635px] whitespace-nowrap" data-node-id="166:1769">
            Facilities
          </p>
        </div>
        <div className="absolute h-[34.125px] left-[127.37px] top-0 w-[41.304px]" data-node-id="166:1770">
          <div className="absolute h-[34.125px] left-0 top-0 w-[41.304px]" data-node-id="166:1771">
            <div className="absolute bg-[rgba(11,31,58,0.1)] border-0 border-[#7a1e2c] border-solid h-[34.125px] left-0 rounded-[3.742px] top-0 w-[41.304px]" data-node-id="166:1772" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.08px)] size-[13.92px] top-[calc(50%-3.37px)]" data-node-id="166:1773" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
            </div>
            <p className="[word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[calc(50%-5.69px)] not-italic text-[4.087px] text-black top-[21.4px] tracking-[0.1635px] whitespace-nowrap" data-node-id="166:1774">
              News
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[70.846px] left-[12.12px] top-[341.56px] w-[191.583px]" data-node-id="166:1775">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[41.85px] not-italic text-[7.184px] text-black text-center top-0 tracking-[0.1437px] whitespace-nowrap" data-node-id="166:1776">{`Latest News & Events`}</p>
        <div className="absolute border-[#e5e7eb] border-[0.135px] border-solid content-stretch flex flex-col h-[59.171px] items-start left-0 overflow-clip p-[0.135px] top-[11.67px] w-[61.168px]" data-node-id="166:1777" data-name="Article">
          <div className="h-[32.312px] overflow-clip relative shrink-0 w-full" data-node-id="166:1778" data-name="Container">
            <div className="absolute h-[32.312px] left-0 top-0 w-[60.898px]" data-node-id="166:1779" data-name="Image (IIIT Dharwad achieves 96% placement rate for 2024 batch — highest in institute history)">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIiitDharwadAchieves96PlacementRateFor2024BatchHighestInInstituteHistory} />
            </div>
            <div className="absolute bg-[#7a1e2c] content-stretch flex h-[3.029px] items-start left-[2.02px] px-[1.346px] py-[0.505px] top-[2.86px] w-[15.878px]" data-node-id="166:1780" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[2.524px] not-italic relative shrink-0 text-[1.683px] text-white tracking-[0.1683px] uppercase whitespace-nowrap" data-node-id="166:1781">
                Placements
              </p>
            </div>
          </div>
          <div className="h-[23.056px] relative shrink-0 w-full" data-node-id="166:1782" data-name="Container">
            <div className="absolute h-[2.524px] left-[3.37px] top-[3.37px] w-[54.167px]" data-node-id="166:1783" data-name="Paragraph">
              <p className="[word-break:break-word] absolute font-['Consolas:Regular',Consolas,ui-monospace,monospace] leading-[2.524px] left-0 not-italic text-[1.683px] text-[rgba(11,31,58,0.4)] top-[-0.07px] tracking-[0.1346px] whitespace-nowrap" data-node-id="166:1784">
                Jan 15, 2025
              </p>
            </div>
            <div className="absolute h-[7.068px] left-[3.37px] top-[7.24px] w-[54.167px]" data-node-id="166:1785" data-name="Heading 3">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.534px] left-0 not-italic text-[#0b1f3a] text-[2.356px] top-[-0.07px] w-[52.675px]" data-node-id="166:1786">
                IIIT Dharwad achieves 96% placement rate for 2024 batch — highest in institute history
              </p>
            </div>
            <div className="absolute h-[3.029px] left-[3.37px] top-[16.66px] w-[54.167px]" data-node-id="166:1787" data-name="Container">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.029px] left-0 not-italic text-[#7a1e2c] text-[2.019px] top-[-0.03px] whitespace-nowrap" data-node-id="166:1788">{`Read More `}</p>
              <div className="absolute h-[3.029px] left-[11.15px] top-0 w-[2.019px]" data-node-id="166:1789" data-name="Text">
                <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.029px] left-0 not-italic text-[#7a1e2c] text-[2.019px] top-[-0.03px] whitespace-nowrap" data-node-id="166:1790">
                  →
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-[#e5e7eb] border-[0.135px] border-solid content-stretch flex flex-col h-[59.171px] items-start left-[65.21px] overflow-clip p-[0.135px] top-[11.67px] w-[61.168px]" data-node-id="166:1791" data-name="Article">
          <div className="h-[32.312px] overflow-clip relative shrink-0 w-full" data-node-id="166:1792" data-name="Container">
            <div className="absolute h-[32.312px] left-0 top-0 w-[60.898px]" data-node-id="166:1793" data-name="Image (Students win National Hackathon — AI-powered health monitoring project bags top prize)">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStudentsWinNationalHackathonAiPoweredHealthMonitoringProjectBagsTopPrize} />
            </div>
            <div className="absolute bg-[#7a1e2c] content-stretch flex h-[3.029px] items-start left-[2.02px] px-[1.346px] py-[0.505px] top-[2.86px] w-[13.087px]" data-node-id="166:1794" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[2.524px] not-italic relative shrink-0 text-[1.683px] text-white tracking-[0.1683px] uppercase whitespace-nowrap" data-node-id="166:1795">
                Research
              </p>
            </div>
          </div>
          <div className="h-[26.59px] relative shrink-0 w-full" data-node-id="166:1796" data-name="Container">
            <div className="absolute h-[2.524px] left-[3.37px] top-[3.37px] w-[54.167px]" data-node-id="166:1797" data-name="Paragraph">
              <p className="[word-break:break-word] absolute font-['Consolas:Regular',Consolas,ui-monospace,monospace] leading-[2.524px] left-0 not-italic text-[1.683px] text-[rgba(11,31,58,0.4)] top-[-0.07px] tracking-[0.1346px] whitespace-nowrap" data-node-id="166:1798">
                Dec 20, 2024
              </p>
            </div>
            <div className="absolute h-[10.602px] left-[3.37px] top-[7.24px] w-[54.167px]" data-node-id="166:1799" data-name="Heading 3">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.534px] left-0 not-italic text-[#0b1f3a] text-[2.356px] top-[-0.07px] w-[49.814px]" data-node-id="166:1800">
                Students win National Hackathon — AI-powered health monitoring project bags top prize
              </p>
            </div>
            <div className="absolute h-[3.029px] left-[3.37px] top-[20.19px] w-[54.167px]" data-node-id="166:1801" data-name="Container">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.029px] left-0 not-italic text-[#7a1e2c] text-[2.019px] top-[-0.03px] whitespace-nowrap" data-node-id="166:1802">{`Read More `}</p>
              <div className="absolute h-[3.029px] left-[11.15px] top-0 w-[2.019px]" data-node-id="166:1803" data-name="Text">
                <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.029px] left-0 not-italic text-[#7a1e2c] text-[2.019px] top-[-0.03px] whitespace-nowrap" data-node-id="166:1804">
                  →
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-[#e5e7eb] border-[0.135px] border-solid content-stretch flex flex-col h-[59.171px] items-start left-[130.41px] overflow-clip p-[0.135px] top-[11.67px] w-[61.17px]" data-node-id="166:1805" data-name="Article">
          <div className="h-[32.312px] overflow-clip relative shrink-0 w-full" data-node-id="166:1806" data-name="Container">
            <div className="absolute h-[32.312px] left-0 top-0 w-[60.9px]" data-node-id="166:1807" data-name="Image (TechFest 2024: Annual technology festival draws 5000+ participants from across India)">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTechFest2024AnnualTechnologyFestivalDraws5000ParticipantsFromAcrossIndia} />
            </div>
            <div className="absolute bg-[#7a1e2c] content-stretch flex h-[3.029px] items-start left-[2.02px] px-[1.346px] py-[0.505px] top-[2.86px] w-[10.442px]" data-node-id="166:1808" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[2.524px] not-italic relative shrink-0 text-[1.683px] text-white tracking-[0.1683px] uppercase whitespace-nowrap" data-node-id="166:1809">
                Events
              </p>
            </div>
          </div>
          <div className="h-[23.056px] relative shrink-0 w-full" data-node-id="166:1810" data-name="Container">
            <div className="absolute h-[2.524px] left-[3.36px] top-[3.37px] w-[54.169px]" data-node-id="166:1811" data-name="Paragraph">
              <p className="[word-break:break-word] absolute font-['Consolas:Regular',Consolas,ui-monospace,monospace] leading-[2.524px] left-0 not-italic text-[1.683px] text-[rgba(11,31,58,0.4)] top-[-0.07px] tracking-[0.1346px] whitespace-nowrap" data-node-id="166:1812">
                Nov 28, 2024
              </p>
            </div>
            <div className="absolute h-[7.068px] left-[3.36px] top-[7.24px] w-[54.169px]" data-node-id="166:1813" data-name="Heading 3">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.534px] left-0 not-italic text-[#0b1f3a] text-[2.356px] top-[-0.07px] w-[49.983px]" data-node-id="166:1814">
                TechFest 2024: Annual technology festival draws 5000+ participants from across India
              </p>
            </div>
            <div className="absolute h-[3.029px] left-[3.36px] top-[16.66px] w-[54.169px]" data-node-id="166:1815" data-name="Container">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.029px] left-0 not-italic text-[#7a1e2c] text-[2.019px] top-[-0.03px] whitespace-nowrap" data-node-id="166:1816">{`Read More `}</p>
              <div className="absolute h-[3.029px] left-[11.15px] top-0 w-[2.019px]" data-node-id="166:1817" data-name="Text">
                <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[3.029px] left-0 not-italic text-[#7a1e2c] text-[2.019px] top-[-0.03px] whitespace-nowrap" data-node-id="166:1818">
                  →
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[7.484px] items-center justify-center left-[0.15px] top-[0.75px] w-0" data-node-id="166:1819">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[7.484px]">
              <div className="absolute inset-[-0.3px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[7.484px] items-center justify-center left-[11.97px] top-[421.93px] w-0" data-node-id="166:1820">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[7.484px]">
            <div className="absolute inset-[-0.3px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine5} />
            </div>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[40.97px] not-italic text-[5.388px] text-black text-center top-[212.99px] tracking-[0.1078px] whitespace-nowrap" data-node-id="166:1821">
        Director’s Message
      </p>
      <div className="absolute h-[111.965px] left-[12.12px] top-[220.62px] w-[93.539px]" data-node-id="166:1822" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[118.991px] left-[calc(100%-106.92px)] top-[212.99px] w-[98.935px]" data-node-id="166:1823" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute flex h-[7.484px] items-center justify-center left-[12.27px] top-[212.39px] w-0" data-node-id="166:1824">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[7.484px]">
            <div className="absolute inset-[-0.3px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine5} />
            </div>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[53.57px] not-italic text-[5.388px] text-black text-center top-[421.93px] tracking-[0.1078px] whitespace-nowrap" data-node-id="166:1825">
        Departments in IIIT Dharwad
      </p>
      <div className="absolute h-[71.095px] left-[11.97px] top-[441.09px] w-[61.366px]" data-node-id="166:1826">
        <div className="absolute bg-[#d9d9d9] left-0 size-[61.366px] top-0" data-node-id="166:1827" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[calc(50%+0.31px)] not-italic text-[5.388px] text-black text-center top-[64.96px] tracking-[0.1078px] whitespace-nowrap" data-node-id="166:1828">
          CSE
        </p>
      </div>
      <div className="absolute h-[71.095px] left-[76.93px] top-[441.09px] w-[61.366px]" data-node-id="166:1829">
        <div className="absolute bg-[#d9d9d9] left-0 size-[61.366px] top-0" data-node-id="166:1830" />
        <div className="-translate-x-1/2 absolute h-[6.137px] left-[calc(50%+0.07px)] top-[64.96px] w-[13.321px]" data-node-id="166:1831">
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[7px] not-italic text-[5.388px] text-black text-center top-0 tracking-[0.1078px] whitespace-nowrap" data-node-id="166:1832">
            DSAI
          </p>
        </div>
      </div>
      <div className="absolute h-[71.095px] left-[calc(100%-73.69px)] top-[441.09px] w-[61.366px]" data-node-id="166:1833">
        <div className="absolute bg-[#d9d9d9] left-0 size-[61.366px] top-0" data-node-id="166:1834" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[calc(50%+0.31px)] not-italic text-[5.388px] text-black text-center top-[64.96px] tracking-[0.1078px] whitespace-nowrap" data-node-id="166:1835">
          ECE
        </p>
      </div>
      <div className="absolute flex h-[7.484px] items-center justify-center left-[12.27px] top-[520.57px] w-0" data-node-id="166:1836">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[7.484px]">
            <div className="absolute inset-[-0.3px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine5} />
            </div>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[normal] left-[37.07px] not-italic text-[5.388px] text-black text-center top-[521.17px] tracking-[0.1078px] whitespace-nowrap" data-node-id="166:1837">
        Campus Gallery
      </p>
      <div className="absolute h-[86.661px] left-[11.97px] top-[537.18px] w-[191.283px]" data-node-id="166:1838">
        <div className="absolute bg-[#d9d9d9] h-[86.661px] left-0 top-0 w-[191.283px]" data-node-id="166:1839" />
        <div className="absolute contents left-[46.85px] top-[11.67px]" data-node-id="166:1840">
          <div className="absolute bg-[#fffdfd] h-[29.935px] left-[46.85px] rounded-[2.993px] top-[11.67px] w-[59.87px]" data-node-id="166:1841" />
          <div className="absolute bg-[#fffdfd] left-[114.65px] rounded-[2.993px] size-[29.935px] top-[11.67px]" data-node-id="166:1842" />
          <div className="absolute bg-[#fffdfd] h-[29.935px] left-[84.71px] rounded-[2.993px] top-[47.74px] w-[59.87px]" data-node-id="166:1843" />
          <div className="absolute bg-[#fffdfd] left-[46.85px] rounded-[2.993px] size-[29.935px] top-[47.74px]" data-node-id="166:1844" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#0b1f3a] h-[65.258px] left-[107.77px] top-[672.78px] w-[215.531px]" data-node-id="166:1845" data-name="Footer">
        <div className="-translate-x-1/2 absolute h-[33.677px] left-[calc(50%+0.03px)] top-[9.58px] w-[170.389px]" data-node-id="166:1846" data-name="Container">
          <div className="absolute h-[33.677px] left-0 top-0 w-[23.409px]" data-node-id="166:1847" data-name="Container">
            <div className="absolute h-[9.579px] left-0 top-0 w-[9.504px]" data-node-id="166:1848" data-name="Image (IIIT Dharwad)">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageIiitDharwad} />
            </div>
            <div className="absolute h-[8.082px] left-0 top-[11.97px] w-[23.409px]" data-node-id="166:1849" data-name="Paragraph">
              <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans:Regular'] font-normal leading-[2.694px] left-0 text-[1.796px] text-[rgba(255,255,255,0.5)] top-[-0.03px] w-[19.308px]" data-node-id="166:1850" style={{ fontVariationSettings: '"wdth" 100' }}>
                Indian Institute of Information Technology Dharwad
              </p>
            </div>
            <div className="absolute h-[4.939px] left-0 top-[20.95px] w-[23.409px]" data-node-id="166:1851" data-name="Paragraph">
              <p className="[word-break:break-word] absolute font-['Consolas:Regular',Consolas,ui-monospace,monospace] leading-[2.47px] left-0 not-italic text-[1.646px] text-[rgba(255,255,255,0.3)] top-[-0.06px] w-[18.111px]" data-node-id="166:1852">
                Est. 2015 · Dharwad, Karnataka
              </p>
            </div>
            <div className="absolute content-stretch flex gap-[1.796px] h-[4.79px] items-start left-0 top-[28.89px] w-[23.409px]" data-node-id="166:1853" data-name="Container">
              <div className="border-[0.12px] border-[rgba(255,255,255,0.2)] border-solid h-[4.79px] relative shrink-0 w-[4.505px]" data-node-id="166:1854" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.12px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[2.245px] not-italic relative shrink-0 text-[1.497px] text-[rgba(255,255,255,0.4)] whitespace-nowrap" data-node-id="166:1855">
                    FB
                  </p>
                </div>
              </div>
              <div className="border-[0.12px] border-[rgba(255,255,255,0.2)] border-solid h-[4.79px] relative shrink-0 w-[4.505px]" data-node-id="166:1856" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.12px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[2.245px] not-italic relative shrink-0 text-[1.497px] text-[rgba(255,255,255,0.4)] whitespace-nowrap" data-node-id="166:1857">
                    TW
                  </p>
                </div>
              </div>
              <div className="border-[0.12px] border-[rgba(255,255,255,0.2)] border-solid h-[4.79px] relative shrink-0 w-[4.505px]" data-node-id="166:1858" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.12px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[2.245px] not-italic relative shrink-0 text-[1.497px] text-[rgba(255,255,255,0.4)] whitespace-nowrap" data-node-id="166:1859">
                    LI
                  </p>
                </div>
              </div>
              <div className="border-[0.12px] border-[rgba(255,255,255,0.2)] border-solid h-[4.79px] relative shrink-0 w-[4.505px]" data-node-id="166:1860" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.12px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[2.245px] not-italic relative shrink-0 text-[1.497px] text-[rgba(255,255,255,0.4)] whitespace-nowrap" data-node-id="166:1861">
                    YT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[2.095px] h-[33.677px] items-start left-[29.4px] top-0 w-[23.409px]" data-node-id="166:1862" data-name="Container">
            <div className="h-[2.47px] relative shrink-0 w-full" data-node-id="166:1863" data-name="Heading 4">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[2.47px] left-0 not-italic text-[1.646px] text-[rgba(255,255,255,0.7)] top-[0.09px] tracking-[0.1497px] uppercase whitespace-nowrap" data-node-id="166:1864">
                Institute
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[1.197px] h-[27.54px] items-start relative shrink-0 w-full" data-node-id="166:1865" data-name="List">
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1866" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1867">
                    About Us
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1868" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1869">
                    Administration
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1870" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1871">
                    Governance
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1872" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1873">
                    Committees
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1874" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1875">
                    RTI
                  </p>
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px relative w-[23.409px]" data-node-id="166:1876" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1877">
                    Mandatory Disclosures
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[2.095px] h-[33.677px] items-start left-[58.79px] top-0 w-[23.409px]" data-node-id="166:1878" data-name="Container">
            <div className="h-[2.47px] relative shrink-0 w-full" data-node-id="166:1879" data-name="Heading 4">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[2.47px] left-0 not-italic text-[1.646px] text-[rgba(255,255,255,0.7)] top-[0.09px] tracking-[0.1497px] uppercase whitespace-nowrap" data-node-id="166:1880">
                Academics
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[1.197px] h-[27.54px] items-start relative shrink-0 w-full" data-node-id="166:1881" data-name="List">
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1882" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1883">
                    B.Tech Programs
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1884" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1885">
                    M.Tech Programs
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1886" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1887">
                    MBA
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1888" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1889">
                    Ph.D. Programs
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1890" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1891">
                    Academic Calendar
                  </p>
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px relative w-[23.409px]" data-node-id="166:1892" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1893">
                    Results
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[2.095px] h-[33.677px] items-start left-[88.19px] top-0 w-[23.409px]" data-node-id="166:1894" data-name="Container">
            <div className="h-[2.47px] relative shrink-0 w-full" data-node-id="166:1895" data-name="Heading 4">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[2.47px] left-0 not-italic text-[1.646px] text-[rgba(255,255,255,0.7)] top-[0.09px] tracking-[0.1497px] uppercase whitespace-nowrap" data-node-id="166:1896">
                Research
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[1.197px] h-[22.75px] items-start relative shrink-0 w-full" data-node-id="166:1897" data-name="List">
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1898" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1899">
                    Research Centers
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1900" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1901">
                    Publications
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1902" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1903">
                    Projects
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1904" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1905">
                    Consultancy
                  </p>
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px relative w-[23.409px]" data-node-id="166:1906" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1907">{`IPR & Patents`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[2.095px] h-[33.677px] items-start left-[117.59px] top-0 w-[23.409px]" data-node-id="166:1908" data-name="Container">
            <div className="h-[2.47px] relative shrink-0 w-full" data-node-id="166:1909" data-name="Heading 4">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[2.47px] left-0 not-italic text-[1.646px] text-[rgba(255,255,255,0.7)] top-[0.09px] tracking-[0.1497px] uppercase whitespace-nowrap" data-node-id="166:1910">
                Student Life
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[1.197px] h-[27.54px] items-start relative shrink-0 w-full" data-node-id="166:1911" data-name="List">
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1912" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1913">
                    Student Clubs
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1914" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1915">
                    Sports
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1916" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1917">
                    Cultural Events
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1918" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1919">
                    Hostels
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1920" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1921">
                    Scholarships
                  </p>
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px relative w-[23.409px]" data-node-id="166:1922" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1923">
                    Grievance
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[2.095px] h-[33.677px] items-start left-[146.98px] top-0 w-[23.409px]" data-node-id="166:1924" data-name="Container">
            <div className="h-[2.47px] relative shrink-0 w-full" data-node-id="166:1925" data-name="Heading 4">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[2.47px] left-0 not-italic text-[1.646px] text-[rgba(255,255,255,0.7)] top-[0.09px] tracking-[0.1497px] uppercase whitespace-nowrap" data-node-id="166:1926">
                Connect
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[1.197px] h-[27.54px] items-start relative shrink-0 w-full" data-node-id="166:1927" data-name="List">
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1928" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1929">
                    Contact Us
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1930" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1931">
                    Careers
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1932" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1933">
                    Tenders
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1934" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1935">
                    Placements
                  </p>
                </div>
              </div>
              <div className="h-[3.592px] relative shrink-0 w-[23.409px]" data-node-id="166:1936" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1937">
                    Alumni
                  </p>
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px relative w-[23.409px]" data-node-id="166:1938" data-name="List Item">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.4)] top-[0.39px] whitespace-nowrap" data-node-id="166:1939">
                    Media
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute border-black border-solid border-t-[0.12px] content-stretch flex h-[8.681px] items-center justify-between left-[calc(50%+0.03px)] pt-[0.12px] px-[3.592px] top-[52.96px] w-[177.573px]" data-node-id="166:1940" data-name="Container">
          <div className="h-[2.694px] relative shrink-0 w-[72.689px]" data-node-id="166:1941" data-name="Paragraph">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.3)] top-[-0.03px] whitespace-nowrap" data-node-id="166:1942">
                © 2025 IIIT Dharwad. All rights reserved. | Ministry of Education, Government of India
              </p>
            </div>
          </div>
          <div className="h-[2.694px] relative shrink-0 w-[32.434px]" data-node-id="166:1943" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.395px] items-start relative size-full">
              <div className="h-[2.694px] relative shrink-0 w-[11.877px]" data-node-id="166:1944" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.3)] top-[-0.03px] whitespace-nowrap" data-node-id="166:1945">
                    Privacy Policy
                  </p>
                </div>
              </div>
              <div className="h-[2.694px] relative shrink-0 w-[8.881px]" data-node-id="166:1946" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.3)] top-[-0.03px] whitespace-nowrap" data-node-id="166:1947">
                    Disclaimer
                  </p>
                </div>
              </div>
              <div className="h-[2.694px] relative shrink-0 w-[6.887px]" data-node-id="166:1948" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[2.694px] left-0 not-italic text-[1.796px] text-[rgba(255,255,255,0.3)] top-[-0.03px] whitespace-nowrap" data-node-id="166:1949">
                    Sitemap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[7.484px] items-center justify-center left-[12.27px] top-[633.42px] w-0" data-node-id="166:1950">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[7.484px]">
            <div className="absolute inset-[-0.3px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine5} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[2.694px] left-[15.57px] not-italic text-[5.388px] text-black top-[635.82px] whitespace-nowrap" data-node-id="166:1951">
        Connect With Us
      </p>
      <div className="absolute h-[32.03px] left-[3.59px] top-[49.39px] w-[94.444px]" data-node-id="166:1952">
        <div className="absolute inset-[-186.92%_-63.39%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Helvetica:Bold',Helvetica,Arimo,Arial,sans-serif] [font-weight:700] leading-[0] left-[11.82px] not-italic text-[8.81px] text-white top-[40.86px] whitespace-nowrap" data-node-id="166:1953">
        <p className="font-['Playfair_Display:Bold'] font-bold leading-[normal] mb-0">Creating thinkers and</p>
        <p className="font-['Playfair_Display:Bold'] font-bold leading-[normal] mb-0">leaders in technology to</p>
        <p>
          <span className="font-['Playfair_Display:Italic'] font-normal italic leading-[normal] text-[#c8a882]">positively impact</span>
          <span className="font-['Playfair_Display:Bold'] font-bold leading-[normal]">{` society`}</span>
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['Helvetica:Regular',Helvetica,Arimo,Arial,sans-serif] leading-[2.694px] left-[35.17px] not-italic text-[3.592px] text-black top-[654.52px] whitespace-nowrap" data-node-id="166:1954">
        Stay updated with the latest news, events, and innovations from IIIT Dharwad.
      </p>
      <div className="absolute contents left-[7.48px] top-[2.69px]" data-node-id="166:1955">
        <div className="absolute contents left-[7.48px] top-[2.69px]" data-node-id="166:1956">
          <div className="absolute bg-white h-[0.801px] left-[7.7px] top-[9.03px] w-[8.228px]" data-node-id="166:1957" />
          <div className="absolute h-[8.811px] left-[7.48px] top-[2.69px] w-[8.743px]" data-node-id="166:1958" data-name="IIIT DHARWAD Logo 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIiitDharwad} />
          </div>
        </div>
        <div className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[0] left-[16.46px] not-italic text-[#102241] text-[1.548px] top-[2.69px] w-[44.123px] whitespace-pre-wrap" data-node-id="166:1959">
          <p className="leading-[normal] mb-0">{`ಭಾರತೀಯ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆ, ಧಾರವಾಡ `}</p>
          <p className="leading-[normal] mb-0">{`भारतीय सूचना प्रौद्योगिकी संस्थान, धारवाड़ `}</p>
          <p className="font-['Inter:Bold'] font-bold leading-[normal] mb-0">Indian Institute of Information Technology, Dharwad</p>
          <p className="leading-[normal]">[Institute of National Importance by An Act of Parliament]</p>
        </div>
      </div>
    </div>
  );
}
