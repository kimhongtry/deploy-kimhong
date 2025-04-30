import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { SearchBar } from "../components/SearchBar";
import { StoryCard } from "../components/StoryCard";
import Footer from "../components/Footer";

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
  audio?: {
    url: string;
  };
}

export default function StoryPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 8; // Number of stories per page

  const fetchStories = useCallback(
    async (query: string, typeId: number | null, ageRangeId: number | null) => {
      setLoading(true);
      try {
        let url = "http://62.72.46.248:1337/api/stories?populate=*";
        const filters: string[] = [];

        if (query) {
          filters.push(
            `filters[title][$containsi]=${encodeURIComponent(query)}`
          );
        }
        if (typeId) {
          filters.push(`filters[story_type][id][$eq]=${typeId}`);
        }
        if (ageRangeId) {
          filters.push(`filters[age_range][id][$eq]=${ageRangeId}`);
        }

        if (filters.length > 0) {
          url += "&" + filters.join("&");
        }

        const res = await axios.get(url);
        setStories(res.data.data || []);
        setCurrentPage(1); // Reset to first page on new fetch
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchStories("", null, null);
  }, [fetchStories]);

  const totalPages = Math.ceil(stories.length / storiesPerPage);
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="p-6">
        <SearchBar onSearch={fetchStories} />
        <p className="text-center font-bold mt-10 text-black text-6xl">
          FAIRY TALE AUDIOBOOKS
        </p>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 mt-20 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {currentStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>

            {stories.length > storiesPerPage && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
                      currentPage === index + 1
                        ? "bg-pink-600"
                        : "bg-pink-400 hover:bg-pink-600"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
