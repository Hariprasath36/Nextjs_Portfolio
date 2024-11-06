import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center px-4">
        <h1 className="heading lg:max-w-[45vw] text-center text-3xl sm:text-4xl md:text-5xl">
          Contact <span className="text-purple">Me</span>
        </h1>
        <p className="text-white-200 my-5 text-center text-sm sm:text-base md:text-lg">
          Let&apos;s bring your ideas to life – get in touch today!
        </p>
        <a href="mailto:hariprasa36@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16 md:mt-20 px-4">
        <p className="text-sm sm:text-base text-center md:text-left md:font-normal font-light">
          Copyright © 2024 Hariprasath R
        </p>

        <div className="flex justify-center md:justify-start items-center mt-6 md:mt-0 gap-4 sm:gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
