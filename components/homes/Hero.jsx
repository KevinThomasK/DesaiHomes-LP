import dynamic from "next/dynamic";
import Hero1 from "@/components/homes/home-5/heros/Hero1";

// Import the BackgroundSlider as a client-side component
const BackgroundSlider = dynamic(
  () => import("@/components/homes/home-5/BackgroundSlider"),
  {
    ssr: false, // Disable server-side rendering
  }
);

const Hero = () => {
  return (
    <BackgroundSlider
      className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
      id="home"
    >
      <Hero1 />
    </BackgroundSlider>
  );
};

export default Hero;
