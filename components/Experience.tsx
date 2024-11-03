import React, { useRef, useEffect, useState } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && lastCardRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const lastCardMiddle =
        lastCardRef.current.getBoundingClientRect().top + lastCardRef.current.offsetHeight / 2;
      setLineHeight(lastCardMiddle - containerTop);
    }
  }, [workExperience]);

  return (
    <div ref={containerRef} className="py-10 md:py-20 w-full flex flex-col items-center bg-dark overflow-hidden">
      {/* Title Section */}
      <h1 className="heading text-center text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        <span className="text-purple">Work Experience</span>
      </h1>

      {/* Centered vertical timeline line */}
      <div className="relative flex flex-col items-center w-full">
        {/* Dynamic vertical line for timeline */}
        <div
          className="absolute w-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2 z-0"
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-10 sm:gap-14 md:gap-20 w-full px-4 sm:px-8 md:w-3/4 lg:w-2/3 mt-8">
          {workExperience.map((card, index) => (
            <div
              key={card.id}
              ref={index === workExperience.length - 1 ? lastCardRef : null}
              className={`relative flex w-full items-start ${
                index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
              }`}
            >
              {/* Circle on the vertical line */}
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full left-1/2 transform -translate-x-1/2 z-10" />

              {/* Experience card */}
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.5rem"
                style={{
                  background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  width: "100%",
                  maxWidth: "400px",
                }}
                className={`relative z-10 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg mx-auto ${
                  index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                }`}
              >
                <div className="flex flex-col p-4 sm:p-5 gap-2 min-h-[300px] justify-between">
                  {/* Heading */}
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{card.title}</h1>
                  <h2 className="text-md sm:text-lg text-gray-400">{card.subTitle}</h2>
                  {/* Bullet Points */}
                  <ul className="mt-2 text-white-100 font-semibold list-disc list-inside pl-5 text-sm sm:text-base">
  {card.points?.map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>
                  {/* Additional Image at the bottom */}
                  <img
                    src={card.thumbnail}
                    className="mt-4 w-full h-auto object-contain rounded-lg"
                   
                  />
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
