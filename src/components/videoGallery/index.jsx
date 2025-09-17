"use client";
import { Footer, Header } from "@/layout";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import useParallax from "@/hooks/use-parallax";
import VideoGallery from "./VideoGallery";
import style from "@/styles/BackgroundStyles.module.css"

const VideoGalleryMain = () => {
  useParallax();
  return (
 <div className="sticky-header">
      <div
        id="main-wrapper"
        className={`main-wrapper ${style["gradient-green"]}`}
      >
        <Header no_top_bar={true} />
        <BreadcrumbThree title="Gallery" subtitle="Video Gallery" />
        <VideoGallery />
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default VideoGalleryMain;
