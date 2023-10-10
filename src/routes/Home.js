import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeComponent from "../components/HomeComponent";
import Navbar from "../components/Navbar";
import homepage from "../assests/edited_home.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homepage}
        title="We Bridge Distances"
        text="Your delivery our responsibility"
        buttonText="Services"
        url="/"
        btnClass="show"
      />
      <HomeComponent />
      <Footer />
    </>
  );
}

export default Home;
