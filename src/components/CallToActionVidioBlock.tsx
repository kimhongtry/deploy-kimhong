import React from "react";

// Define props interface (currently empty)
interface CallToActionVideoBlockProps {}

const CallToActionVideoBlock: React.FC<CallToActionVideoBlockProps> = () => {
  return (
    <section
      className="bg-pink-600 call_to_action_video_block pb-[80px] md:pb-[140px] xl:pb-[120px] snap-start"
      style={{
        clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 98%)",
        margin: "-1px 0px -2%",
      }}
    >
      <div className="px-[20px] md:px-[40px] xl:px-[30px] flex flex-col items-center gap-[40px] text-white text-center">
        {/* Title */}
        <div className="max-w-5xl mt-10 order-1">
          <h1 className="text-center font-bold text-white text-6xl">
            Made With LOVE.
          </h1>
          <p className="text-white text-2xl mt-5">
            Charlene, Simon and their team of double Emmy® winning storytellers
            craft every story from scratch.
          </p>
        </div>

        {/* Image */}
        <div className="order-2 md:order-4">
          <img
            alt="Team crafting stories with love"
            loading="lazy"
            width={1098}
            height={668}
            decoding="async"
            className="bg-transparent aspect-[--ratio]"
            src="https://assets.sooperbooks.com/home-pics/8eb21ddb-7315-45a6-9f39-6175927fcaebteam.1098xauto.webp"
            style={
              {
                color: "transparent",
                "--ratio": "1098 / 668",
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CallToActionVideoBlock;
