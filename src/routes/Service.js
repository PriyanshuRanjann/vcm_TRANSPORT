import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assests/f7513845a61304b47a1097ba939b088d.jpg";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" url="/" />
      <Footer />
    </>
  );
}
export default Service;
