import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import bgImage from "../assets/image.png"; // Ensure this image exists
import Footer from "../components/Footer";
import { StoryCard } from "../components/StoryCard";
import { StoryTypeOption } from "../components/SearchBar"; // Adjust the import based on your structure
import StoryGridSection from "../components/StoryGridSection";
import CallToActionVideoBlock from "../components/CallToActionVidioBlock";
import FAQSection from "../components/FAQSection";

const HomePage = () => {
  const [storyTypes, setStoryTypes] = useState([]);
  const [storiesByType, setStoriesByType] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch story types
  const fetchStoryTypes = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://62.72.46.248:1337/api/story-types");
      console.log("Story Types Response:", res.data); // Debug log
      const apiTypes = (res.data.data || []).map((item) => ({
        id: item.id,
        name: item.name || "Unknown",
      }));

      // Filter for Adventure, Classic, Animal
      const requiredTypes = [
        { id: 2, name: "Adventure" },
        { id: 4, name: "Classic" },
        { id: 6, name: "Animal" },
      ];

      const filteredTypes = apiTypes
        .filter((t) =>
          requiredTypes.some(
            (req) => req.name.toLowerCase() === t.name.toLowerCase()
          )
        )
        .map((t) => ({
          id: t.id,
          name: requiredTypes.find(
            (req) => req.name.toLowerCase() === t.name.toLowerCase()
          ).name,
        }));

      // Use requiredTypes if API doesn't provide all
      const finalTypes = requiredTypes.map((reqType) => {
        const foundType = filteredTypes.find(
          (t) => t.name.toLowerCase() === reqType.name.toLowerCase()
        );
        return foundType || reqType;
      });

      setStoryTypes(finalTypes);
    } catch (error) {
      console.error("Failed to fetch story types:", error);
      // Fallback to hardcoded types
      setStoryTypes([
        { id: 2, name: "Adventure" },
        { id: 4, name: "Classic" },
        { id: 6, name: "Animal" },
      ]);
      setError("Failed to load story types. Using default categories.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch stories for a given story type
  const fetchStories = useCallback(async (typeId) => {
    try {
      let url = "http://62.72.46.248:1337/api/stories?populate=*";
      if (typeId) {
        url += `&filters[story_type][id][$eq]=${typeId}`;
      }
      const res = await axios.get(url);
      console.log(`Stories Response for type ${typeId}:`, res.data); // Debug log
      return res.data.data || [];
    } catch (error) {
      console.error(`Failed to fetch stories for type ${typeId}:`, error);
      return [];
    }
  }, []);

  // Fetch stories for all story types
  const fetchAllStories = useCallback(async () => {
    setLoading(true);
    try {
      const newStoriesByType = {};
      for (const type of storyTypes) {
        const stories = await fetchStories(type.id);
        newStoriesByType[type.id] = stories;
      }
      console.log("Stories by Type:", newStoriesByType); // Debug log
      setStoriesByType(newStoriesByType);
    } catch (error) {
      console.error("Failed to fetch all stories:", error);
      setError("Failed to load stories. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [storyTypes, fetchStories]);

  // Initial fetch for story types
  useEffect(() => {
    fetchStoryTypes();
  }, [fetchStoryTypes]);

  // Fetch stories when story types are loaded
  useEffect(() => {
    if (storyTypes.length > 0) {
      fetchAllStories();
    }
  }, [storyTypes, fetchAllStories]);

  // Render a section for each story type
  const renderStorySection = (type) => (
    <div key={type.id} className="w-full max-w-6xl mb-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 font-BlackAndWhitePicture">
        {type.name} Stories
      </h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : !storiesByType[type.id] || storiesByType[type.id].length === 0 ? (
        <p className="text-center text-gray-600">No stories available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {storiesByType[type.id].slice(0, 6).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img src={bgImage} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-[80px] font-extrabold mb-4 drop-shadow-lg font-BlackAndWhitePicture">
            Making a little more{" "}
            <span className="text-yellow-400 text-7xl">magic</span>.
          </h1>
          <p className="max-w-2xl text-4xl font-bold font-BlackAndWhitePicture">
            Welcome to the world’s largest collection of Fairy Tales.
          </p>
        </div>
      </div>
      <div className=" mb-6">
        <p className="text-center font-bold mt-20 text-black text-6xl">
          TYPE OF AUDIOBOOKS
        </p>
      </div>

      {/* Story Categories */}
      <div className="flex flex-col items-center bg-gray-100 py-12">
        {storyTypes.length === 0 && !loading && !error ? (
          <p className="text-center text-gray-600">No story types available.</p>
        ) : (
          storyTypes.map((type) => renderStorySection(type))
        )}
      </div>
      <div>
        <div className="mb-10">
          <p className="text-center font-bold mt-10 text-black text-6xl">
            Make New Friends.
          </p>
        </div>
        <StoryGridSection />
      </div>
      <div>
        <CallToActionVideoBlock />
      </div>
      <div className=" mb-6">
        <p className="text-center font-bold mt-20 text-black text-6xl">
          THE NOT-SILLY THINGS PEOPLE ASK.
        </p>
      </div>
      <div>
        <FAQSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
