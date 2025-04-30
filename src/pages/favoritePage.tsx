import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Favorite Page</h1>
        <p className="mt-2 text-gray-600">
          This website provides a collection of fairy tale stories for children,
          perfect for bedtime and learning.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
