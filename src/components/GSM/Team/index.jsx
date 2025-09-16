"use client";
import React from "react";
import Image from "next/image";
import { Footer, Header } from "../../../layout";
import useParallax from "@/hooks/use-parallax";
import { useRouter } from "next/navigation";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import TeamArea from "./team-area";

const TeamPage = () => {
  useParallax();

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree
          title="GSM Team"
          subtitle="OUR GRAMIN SWASTHYA MITRA COMMITTEE'S"
        />
        <TeamArea />
        {/* <ContactUsArea /> 
       <ContactMap /> */}

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default TeamPage;
