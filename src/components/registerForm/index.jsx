"use client";

import { Footer, Header } from "@/layout";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import ResistrationFormArea from "./resistrationFormArea";

const RegisterForm = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree title="Career Form" subtitle="Career Form" />
        <ResistrationFormArea />
        {/* <ContactUsArea />
          <ContactMap /> */}
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default RegisterForm;
