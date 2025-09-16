import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "../../../layout";
import OurVision from "@/components/mission/ourVission/OurVision";
import OurMission from "@/components/mission/ourMission";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";

const AboutPage = () => {
  return (
    <>
      <Header />
      <BreadcrumbThree title="GSM" subtitle="SGM" />

      <section
        className="py-5"
        style={{
          background: "linear-gradient(120deg, #e0f7fa, #fff3e0)",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          {/* Heading */}
          <h1 className="text-center fw-bold display-4 mb-3 text-primary">
            हमारे बारे में
          </h1>
          <p className="text-center text-muted fs-5 mb-5">
            GSM Project – Transforming Rural Healthcare
          </p>

          {/* Hero Card */}
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-5">
            <div className="row g-0 align-items-center">
              {/* Image */}
              <div className="col-md-5 p-3 bg-light d-flex justify-content-center">
                <Image
                  src="/assets/images/logo.jpg"
                  alt="GSM Project"
                  width={320}
                  height={400}
                  className="rounded-4 shadow"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="col-md-7">
                <div className="card-body p-4">
                  <h3 className="fw-bold text-success mb-3">
                    ग्रामीण स्वास्थ्य मित्र परियोजना
                  </h3>
                  <p className="fs-5 text-muted mb-3">
                    GSM is dedicated to providing modern, accessible healthcare
                    to every village and district in India. We aim to ensure
                    that every citizen has the right to a healthy and safe life.
                  </p>

                  {/* Our Vision */}
                  <div
                    className="p-3 rounded-3 mb-3"
                    style={{ background: "#e8f5e9" }}
                  >
                    <h5 className="text-success mb-2">हमारा दृष्टिकोण</h5>
                    <p className="mb-0 fs-6">
                      तकनीक और मानव सेवा के माध्यम से ग्रामीण भारत में स्वास्थ्य
                      सेवाओं को सशक्त और व्यापक बनाना।
                    </p>
                  </div>

                  {/* Our Mission */}
                  <div
                    className="p-3 rounded-3 mb-3"
                    style={{ background: "#fff3e0" }}
                  >
                    <h5 className="text-warning mb-2">हमारा मिशन</h5>
                    <p className="mb-0 fs-6">
                      सभी नागरिकों तक बिना भेदभाव स्वास्थ्य सेवाओं की पहुँच,
                      डिजिटल हेल्थ रिकॉर्ड और आपातकालीन सेवाएँ उपलब्ध कराना।
                    </p>
                  </div>

                  <ul className="fs-6 mb-3">
                    <li>मोबाइल एप्लिकेशन और डिजिटल स्वास्थ्य रिकॉर्ड।</li>
                    <li>सुलभ आपातकालीन सेवाएँ और स्वास्थ्य केंद्र।</li>
                    <li>सभी गाँव और जिलों में जागरूकता अभियान।</li>
                  </ul>

                  <div className="text-end mt-4">
                    <p className="fw-bold mb-0">सादर,</p>
                    <p className="mb-0">(टीम GSM)</p>
                    <p className="fw-bold text-success">
                      ग्रामीण स्वास्थ्य मित्र परियोजना
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-white shadow rounded-4">
                <h2 className="text-primary">500+</h2>
                <p className="mb-0">गाँवों में सेवाएँ</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-white shadow rounded-4">
                <h2 className="text-success">1M+</h2>
                <p className="mb-0">लोगों तक स्वास्थ्य पहुँच</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-4 bg-white shadow rounded-4">
                <h2 className="text-warning">100+</h2>
                <p className="mb-0">चैरिटेबल अस्पताल</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurVision />
      <OurMission />
      <Footer />
    </>
  );
};

export default AboutPage;
