// import Button from "@material-tailwind/react/Button";
import Image1 from "assets/img/019.png";
import Image2 from "assets/img/Untitled-1.png";
import Image3 from "assets/img/eth.png";
import Image4 from "assets/img/001.png";
import Image5 from "assets/img/000.png";
import Image6 from "assets/img/077.png";
import Image7 from "assets/img/092.png";
import Image8 from "assets/img/095.png";
import TeamCard1 from "components/landing/TeamCard1";
// import Icon from "@material-tailwind/react/Icon";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
export default function ContactSection() {
  return (
    <section
      id="key"
      className="relative block bg-gray-100"
      style={{ backgroundColor: "#370d4c" }}
    >
      <div className="container max-w-7xl mx-auto px-4 mb-14 pt-10">
        <div className="flex justify-center">
          <button className="btn-custom">Key Information</button>
        </div>

        <div
          className="grid  md:grid-cols-3
          md:justify-between mt-12 gap-20  lg:gap-x-40"
        >
          <div className="">
            <div
              className=" w-full mx-auto key-image"
              style={{
                border: "solid 1px #ffffff40",
                background: "linear-gradient(45deg, #793b992b, #ffffff40",
              }}
            >
              <img src={Image1} alt="" className="mx-auto" />
            </div>
            <p className="text-white  max-w-xs mx-auto w-full mt-6 text-center font-medium ">
              1888 KoiGuys with more than 8 million Combinations!
            </p>
          </div>
          <div className="">
            <div
              className=" w-full mx-auto key-image"
              style={{
                border: "solid 1px #ffffff40",
                background: "linear-gradient(45deg, #793b992b, #ffffff40",
              }}
            >
              <img src={Image2} alt="" className="mx-auto" />
            </div>
            <p className="text-white  max-w-xs mx-auto w-full mt-6 text-center font-medium ">
              Pricing: 0.08 ETH Flat price to give everyone a fair chance to
              join the club!
            </p>
          </div>
          <div className="">
            <div
              className=" w-full mx-auto py-5 key-image"
              style={{
                border: "solid 1px #ffffff40",
                background: "linear-gradient(45deg, #793b992b, #ffffff40",
              }}
            >
              <img src={Image3} alt="" className="mx-auto" />
            </div>
            <p className="text-white  max-w-xs mx-auto w-full mt-6 text-center font-medium ">
              Our ERC-721-KoiGuys come with full ownership & commercial usage
              rights.
            </p>
          </div>
        </div>
      </div>

      {/* ROADMAP */}
      <div className="flex justify-center" id="road">
        <button className="btn-custom">Road map</button>
      </div>
      {/* PHASE1 */}
      <div className="flex flex-wrap mt-12 justify-start">
        <div
          className="flex justify-between lg:justify-end items-start flex-1 text-right"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5) opacity:0.6",
            background:
              "linear-gradient(45deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image4} alt="" />
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className="mr-5 text-white">
              <p className=" text-xl  sm:text-2xl md:text-4xl font-bold">
                10% Sales
              </p>
            </div>
            <div className="mr-5 text-white">
              <p className="text-xs sm:text-base sm:pl-4">
                Koi Guys rarity will be listed on Rarity Sniper.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image4}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div className="hidden lg:block flex-1"></div>
      </div>
      {/* PHASE2 */}
      <div className="flex flex-wrap justify-start mt-10 lg:mt-0">
        <div className="hidden lg:block flex-1  pr-5 "></div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image5}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div
          className="flex justify-between lg:justify-start pl-5 items-start flex-1 text-left"
          style={{
            border: "1px solid rgba(243, 217, 217, 0.5) opacity:0.6",
            background:
              "linear-gradient(240deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="text-left h-full  flex flex-col justify-center">
            <div className=" text-white">
              <p className="text-xl  sm:text-2xl md:text-4xl font-bold">
                25% Sales
              </p>
            </div>
            <div className=" text-white">
              <p className="text-xs sm:text-base sm:pr-4">
              We will create 3D versions of ALL 1888 Original KoiGuy & 
              they will airdropped directly to current token holders.
              Do presale .06 & public .08 lil incentive to premint.
              </p>
            </div>
          </div>
          <div className="lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image5} alt="" />
          </div>
        </div>
      </div>
      {/* PHASE3 */}
      <div className="flex flex-wrap mt-12 lg:mt-0 justify-start">
        <div
          className="flex justify-between lg:justify-end items-start  w-full flex-1 text-right"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5) opacity:0.6",
            background:
              "linear-gradient(45deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image6} alt="" />
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className="mr-5 text-white ">
              <p className="text-xl  sm:text-2xl md:text-4xl font-bold">
                50% Sales
              </p>
            </div>
            <div className="mr-5 text-white">
              <p className="text-xs sm:text-base sm:pl-4">
              We will create the $KOIFISH Token. Stake your KoiGuy for future drops (breeding/babies and more).
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image6}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div className="hidden lg:block flex-1"></div>
      </div>
      {/* PHASE4 */}
      <div className="flex flex-wrap justify-start mt-10 lg:mt-0">
        <div className="hidden lg:block flex-1 pr-5"></div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image7}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div
          className="flex justify-between lg:justify-start pl-5 items-start  w-full flex-1 text-left"
          style={{
            border: "1px solid rgba(243, 217, 217, 0.5) opacity:0.6",
            background:
              "linear-gradient(240deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="text-left h-full flex flex-col justify-center">
            <div className=" text-white">
              <p className="text-xl  sm:text-2xl md:text-4xl font-bold">
                75% Sales
              </p>
            </div>
            <div className=" text-white">
              <p className="text-xs sm:text-base sm:pr-4">
                We will create a community wallet that is funded with 50% of
                secondary sales; this wallet will be used to add liquidity to
                the $KOIFISH Token.
              </p>
            </div>
          </div>
          <div className="lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image7} alt="" />
          </div>
        </div>
      </div>
      {/* PHASE5 */}
      <div className="flex flex-wrap mt-12 lg:mt-0 justify-start">
        <div
          className="flex justify-between lg:justify-end items-start  w-full flex-1 text-right"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5) opacity:0.6",
            background:
              "linear-gradient(45deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image8} alt="" />
          </div>
          <div className="h-full flex flex-col justify-center py-2">
            <div className="mr-5 text-white">
              <p className="text-xl  sm:text-2xl  md:text-4xl font-bold">
                100% Sales
              </p>
            </div>
            <div className="mr-5 text-white">
              <p className="text-xs sm:text-base sm:pl-4">
              Holders who have Staked their Koi & hold $KOIFISH will be able to redeem a 16x20” High-Res Canvas
               of your KoiGUY Shipped FREE Worldwide! We will also unlock our Roadmap 2.0 that Includes Breeding
                & Baby Koi.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image8}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div className="hidden lg:block flex-1"></div>
      </div>

      {/* FOOTER */}
      <div className="container mt-8 pb-8">
        <div className="flex flex-wrap mt-12 lg:mt-0 pb-8 justify-center">
          <p className="text-white">Copyright KoiGuys 2022</p>
        </div>
        <div className="grid grid-flow-col gap-4 mt-6  md:mb-0  justify-center">
          <a
            className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none text-xl"
            href="https://twitter.com/KoiGuysNFT"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none text-xl"
            href="https://discord.gg/MtudMRc4zd"
            target="_blank"
            rel="noreferrer"
          >
            <SiDiscord />
          </a>
        </div>
      </div>
    </section>
  );
}
