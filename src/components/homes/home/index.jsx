"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import AboutArea from "./about-area";
import AdBanner from "./ad-banner";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import CategoryArea from "./category-area";
import CounterUpArea from "./counter-up-area";
import CourseArea from "./course-area";
import CtaArea from "./cta-area";
import HeroArea from "./hero-area";
import TeamArea from "./team-area";
import TestimonialArea from "./testimonial-area";
import TopCategories from "./top-categories";
import useParallax from "@/hooks/use-parallax";
import HeaderBanner from "@/components/common/HeaderBanner";
import HealthCoachMain from "../health-coach";

const HomeOneMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <HeaderBanner />
        <Header />
        <HealthCoachMain />
        {/* <HeroArea />
        <CategoryArea />
        <TopCategories />
        <AboutArea />
        <CourseArea />
        <CounterUpArea />
        <TestimonialArea />
        <CtaArea />
        <TeamArea />
        <AdBanner />
        <BrandArea />
        <BlogArea /> */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeOneMain;
