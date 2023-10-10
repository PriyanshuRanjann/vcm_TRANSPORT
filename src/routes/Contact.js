import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assests/'.jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImg} title="Contact" url="/" />

      <Footer />
    </>
  );
}
export default Contact;
