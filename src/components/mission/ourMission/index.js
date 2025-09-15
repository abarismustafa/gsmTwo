import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3"
import { Footer, Header } from "@/layout"
import OurMissionset from "./OurMission"



const OurMission = () => {
    return (
        <div className="sticky-header">
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Mission" subtitle="Our Mission" />
                {/* <ContactUsArea /> efrgdrgrdg
       <ContactMap /> */}
                <OurMissionset />
                <Footer style_2={"footer-dark bg-image footer-style-2"} />
            </div>
        </div>
    )
}

export default OurMission