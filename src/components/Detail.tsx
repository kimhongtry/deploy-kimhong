import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  interface Story {
    title: string;
    content: string; // HTML string
    audio: {
      url: string;
    };
    cover_image: {
      url: string;
    };
  }

  const { documentId } = useParams<{ documentId: string }>();
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(
          `http://62.72.46.248:1337/api/stories/${documentId}?populate=*`
        );
        setStory(res.data.data);
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false);
      }
    };

    if (documentId) {
      fetchStory();
    }
  }, [documentId]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!story) {
    return (
      <div className="text-center mt-10 text-red-600">
        Failed to load story.
      </div>
    );
  }

  console.log(story.cover_image.url, "story");
  console.log(story.audio.url, "story");
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-4xl mt-4 font-bold mb-2 text-center">
        {story.title}
      </h2>
      <div className="flex flex-col items-center my-4">
        <img
          className="w-96 mb-4 mt-4"
          src={story?.cover_image?.url}
          alt={story.title}
        />
        <h2 className="text-lg font-bold mb-2">{story.title}</h2> /
        <audio className="w-96 mb-4" controls>
          <source src={story?.audio?.url} type="audio/mpeg" />
        </audio>
      </div>

      <div
        className="prose prose-lg max-w-none mt-4"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />
    </div>
  );
};

export default Detail;
