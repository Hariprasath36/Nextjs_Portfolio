import React, { useRef, useEffect, useState } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && lastCardRef.current) {
      // Get the top of the container and the middle of the last card
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const lastCardMiddle = 
        lastCardRef.current.getBoundingClientRect().top + lastCardRef.current.offsetHeight / 2;

      // Set line height to stop at the last card's joining point
      setLineHeight(lastCardMiddle - containerTop);
    }
  }, [workExperience]);

  return (
    <div ref={containerRef} className="py-20 w-full flex flex-col items-center bg-dark">
      {/* Title Section */}
      <h1 className="heading text-center text-white text-3xl md:text-4xl font-bold mb-4">
        <span className="text-purple">Work Experience</span>
      </h1>

      {/* Centered vertical timeline line */}
      <div className="relative flex flex-col items-center w-full">
        {/* Dynamic vertical line for timeline */}
        <div
          className="absolute w-1 bg-gray-400 left-1/2 transform -translate-x-1/2 z-0"
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-20 w-full md:w-3/4 lg:w-2/3 mt-8">
          {workExperience.map((card, index) => (
            <div
              key={card.id}
              ref={index === workExperience.length - 1 ? lastCardRef : null} // Ref on the last card only
              className={`relative flex w-full items-start ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Circle on the vertical line */}
              <div className="absolute w-6 h-6 bg-purple-500 rounded-full left-1/2 transform -translate-x-1/2 z-10" />

              {/* Experience card */}
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  width: "450px",
                  maxWidth: "100%",
                }}
                className={`relative z-10 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg ${
                  index % 2 === 0 ? "mr-auto ml-0" : "ml-auto mr-0"
                }`}
              >
                <div className="flex flex-col p-5 gap-2">
                  {/* Heading */}
                  <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                  <h2 className="text-lg text-gray-400">{card.subTitle}</h2>
                  {/* Bullet Points */}
                  <ul className="text-white-100 mt-2 font-semibold list-disc list-inside">
                    {card.points?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  {/* Additional Image at the bottom */}
                  <img
                    src={card.thumbnail}
                    className="mt-4 w-full h-auto object-contain"
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
