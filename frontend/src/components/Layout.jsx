import ContactUs from "./ContactUs";
import Footer from "./Footer";
// import Gallery from "./Gallery";
import Hero from "./Hero";
import Navbar from "./Navbar";
import News from "./News";
import UsersTable from "./Users";
import Skeleton from "./SkeletonLoading";
import Departments from "./Departments"

export default () => {
  return (
    <>
      <Navbar />
      {/* <Skeleton /> */}
      <UsersTable />
      <Hero />
      <News />
      <Departments />
      {/* <Gallery /> */}
      <ContactUs />
      <Footer />
    </>
  );
};
