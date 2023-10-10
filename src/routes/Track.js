import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrackImg from "../assests/gradient 1.jpg";
import Footer from "../components/Footer";

function Track() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={TrackImg} title="Service" url="/" />
      <Footer />
    </>
  );
}
export default Track;
