"use client"
import useParallax from "@/hooks/use-parallax";
import Directory from "./Directory"
import { Footer, Header } from "@/layout";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";

const DirectoryMain = () => {
    useParallax();
    return (

        <div className="sticky-header">
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Directory" subtitle="Directory" />
                <Directory />
                <Footer style_2={"footer-dark bg-image footer-style-2"} />
            </div>
        </div>

    )
}

export default DirectoryMain