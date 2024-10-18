import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Home5 from "@/components/homes/home-5";
import Hero1 from "@/components/homes/home-5/heros/Hero1";
import Stickymodal from "@/components/Stickymodal";
import { elegantOnepage } from "@/data/menu";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title: "Desai-Homes",
  description: "Desai-Homes-Landing-Page",
};
export default function Home5MainDemoOnepage() {
  return (
    <>
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header5 links={elegantOnepage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
              style={{
                backgroundImage: "url(/assets/images/dd/dd-1.webp)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>

            <Home5 onePage />
          </main>
          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer5 />
            <Stickymodal />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
