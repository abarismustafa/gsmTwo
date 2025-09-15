"use client";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import useParallax from "@/hooks/use-parallax";
import { Footer, Header } from "@/layout";
import OurMission from "./OurVision";
import OurVision from "./OurVision";

const OurVission = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree title="Mission" subtitle="Our Vision" />
        {/* <ContactUsArea /> efrgdrgrdg
       <ContactMap /> */}
        <OurVision />
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default OurVission;
