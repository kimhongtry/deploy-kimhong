import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Story {
  id: number;
  title: string;
  description?: string;
  author?: string;
  documentId: string;
  createdAt: string;
  content: string;
  cover_image?: {
    url: string;
  };
}

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false); // Track favorite status

  const handleClick = () => {
    navigate(`/stories/${story.documentId}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card navigation when clicking favorite
    setIsFavorited((prev) => !prev); // Toggle favorite state
  };

  return (
    <figure
      onClick={handleClick}
      className="relative flex flex-col gap-y-5 shrink-0 grow-0 mx-auto max-w-[375px] cursor-pointer"
    >
      {/* Cover Image */}
      {story.cover_image && (
        <picture className="border border-white rounded-[10px] aspect-[3/4]">
          <img
            src={story.cover_image.url}
            alt={story.title}
            loading="lazy"
            decoding="async"
            className="rounded-[inherit] aspect-[3/4] object-cover"
          />
        </picture>
      )}

      {/* Content */}
      <figcaption className="relative text-lg pr-5 font-bold line-clamp-3 pb-[5px] -mb-[5px]">
        {story.title}
        {/* <span className="absolute top-[1.5px] md:top-0 right-0 border border-pink-500 bg-white rounded-full text-pink-500 font-bold w-7 h-7 flex justify-center items-center text-[14px] md:text-[16px] xl:text-[18px]">
          4+
        </span> */}
      </figcaption>
      {story.description && (
        <div className="text-[15px] md:text-base leading-[1.3em] xl:leading-[1.5em] xl:mb-[5px] line-clamp-3">
          <p>{story.description}</p>
        </div>
      )}
      {story.author && (
        <ul className="flex items-center font-medium text-[15px] leading-[1.25em] text-black/30">
          <li>By {story.author}</li>
        </ul>
      )}
      {/* Favorite Button */}
      <div
        onClick={handleFavoriteClick}
        className={`group flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full border p-2 px-3 font-extrabold transition-all ${
          isFavorited
            ? "border-pink-500 bg-pink-500 text-white fill-pink-500"
            : "border-pink-500 text-pink-500 fill-none"
        }`}
      >
        <span className="z-10 transition group-hover:translate-x-4">
          Favorite
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`size-6 transition duration-500 group-hover:scale-[1500%] group-hover:-translate-x-10 ${
            isFavorited ? "fill-pink-500" : "fill-none"
          }`}
        >
          <path
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.563.563 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </figure>
  );
};
