import Hero from "./Hero";
import NewsSection from "./NewsSample";
import PlacesToVisit from "./PlacesSample";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Hero />
      <Link to="/news" className="w-full text-right text-white px-16">Go to News Page</Link>
      <NewsSection />
      <Link to="/destinations" className="w-full text-right text-white px-16">Go to Destinations Page</Link>
      <PlacesToVisit />
    </>
  );
};
