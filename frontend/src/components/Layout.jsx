import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Navbar from "./Navbar";
import News from "./News";
import UsersTable from "./Users";
import Skeleton from "./SkeletonLoading";
import Departments from "./Departments";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import NewsForm from "./NewsForm";
import NotFoundPage from "./NotFound";
import PlacesToVisit from "./PlacesToVisit";

export default () => {
  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <PlacesToVisit />
      <Departments />
      <ContactUs />
      <Footer />
    </>
  );
};
