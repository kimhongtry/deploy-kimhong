import React from "react";

interface Story {
  alt: string;
  src: string;
}

const stories: Story[] = [
  {
    alt: "Weirdlife Episode 1 The Curdmonkey Animated Cover",
    src: "https://assets.sooperbooks.com/story-pics/7e6e3a1c-705b-44e8-9c2c-d4b79206a7cfweirdlife-ep1-bedtime-story-animated-cover.375x500.webp",
  },
  {
    alt: "Animated Candy King bedtime story rhyme poem for kids cover",
    src: "https://assets.sooperbooks.com/story-pics/9daaad88-486c-4a81-a837-010e0ec88295candy-king-bedtime-story-animated-cover.375x500.webp",
  },
  {
    alt: "Dumpling Episode 1 Mopping Budgemallows",
    src: "https://assets.sooperbooks.com/story-pics/681dd8fa-460b-44b6-85b0-5bb4c7fc18dbdumpling-ep1-bedtime-story-animated-cover.375x500.webp",
  },
  {
    alt: "Animated Rapunzel bedtime story children's book cover",
    src: "https://assets.sooperbooks.com/story-pics/cb9bcb21-80c5-4a87-8dc1-5d13eb7fda22rapunzel-bedtime-story-animated-cover.375x500.webp",
  },
  {
    alt: "Animated The Hare And The Tortoise Cover",
    src: "https://assets.sooperbooks.com/story-pics/5277d8ec-1663-4d78-b6a6-bca8f158ae3dthe-hare-and-the-tortoise-bedtime-story-animated-cover.375x500.webp",
  },
  {
    alt: "Rocco, Blobbo, Coco, Oddo and Beepo are all smiling and Rocco is waving.",
    src: "https://assets.sooperbooks.com/story-pics/bc4e89f2-10b1-4132-8682-0b5fa55349afthe-ogglebogs-ep1-bedtime-story-animated-cover.375x500.webp",
  },
  {
    alt: "Monty Episode 1 The Flomble Traps Animated Cover",
    src: "https://assets.sooperbooks.com/story-pics/9829bf22-7323-47ea-9d6a-9e1f74b94c18monty-ep1-bedtime-story-animated-cover.375x500.webp",
  },
  {
    alt: "Posh Rat Episode 1 A Rat of Many Colours Portait Cover",
    src: "https://assets.sooperbooks.com/story-pics/zxdk4of3nbkbxqqoposh-rat-ep1-bedtime-story-animated-cover-updated.375x500.webp",
  },
  {
    alt: "Schnitzel Animated Cover",
    src: "https://assets.sooperbooks.com/story-pics/769934ac-0d2f-4bac-84b7-b6e5b43ba71aschnitzel-bedtime-story-animated-cover.375x500.webp",
  },
];

const StoryGridSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-y-[60px] pb-[60px] md:pb-[80px] relative after:absolute after:inset-x-0 after:bottom-0 after:h-[30px] after:md:h-[40px] after:bg-primary snap-start">
      <div className="overflow-hidden relative w-[100vw] max-w-full">
        {/* Horizontal Scroll Animation */}
        <div
          className="whitespace-nowrap will-change-transform flex flex-nowrap animate-scroll"
          style={{ columnGap: 30 }}
        >
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-nowrap shrink-0 grow-0 cols-2 md:cols-4"
              style={{ "--gap": "30px", columnGap: 30 }}
            >
              {stories.map((story, index) => (
                <figure
                  key={`${rowIndex}-${index}`}
                  className="relative story-grid basis-calc shrink-0 grow-0 flex flex-col gap-y-[20px] max-w-[--mw] max-w-[227px] md:max-w-[287px]"
                  style={{
                    "--mw": "var(--maxwidth, 375px)",
                    "--corner": "var(--corners, 10px)",
                  }}
                >
                  <picture
                    className="border border-white rounded-[--corner] md:rounded-md aspect-[--ratio]"
                    style={{ "--ratio": "375/500" }}
                  >
                    <img
                      alt={story.alt}
                      loading="lazy"
                      width={375}
                      height={500}
                      decoding="async"
                      className="rounded-inherit md:rounded-md aspect-[--ratio]"
                      src={story.src}
                      style={{ color: "transparent", "--ratio": "375 / 500" }}
                    />
                  </picture>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryGridSection;
