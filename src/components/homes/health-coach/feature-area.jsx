import React from "react";
import LatestNews from "./latestNews";
import { FileText, Award, Users, Lightbulb } from "lucide-react";
import styles from "../../../styles/BackgroundStyles.module.css";
import { color } from "framer-motion";

// feature item
function FeatureItem({ delay, icon, clr, title }) {
  return (
    <div
      className="col-lg-4"
      // data-sal-delay={delay}
      // data-sal="slide-up"
      // data-sal-duration="800"
    >
      <div className={`features-box color-${clr} edublink-svg-animate`}>
        <div className="icon">
          <img
            src={`/assets/images/svg-icons/h-8-shape-${icon}.svg`}
            alt="images svg"
          />
        </div>
        <div className="content">
          <h5 className="title">{title}</h5>
          {/* <p>
            Lorem ipsum dolor consec tur elit adicing sed umod tempor enim minim
            veniam quis.
          </p> */}
        </div>
      </div>
    </div>
  );
}

const FeatureArea = () => {
  return (
    <>
      <div className="py-5 bg-light mb-4">
        <div className="container">
          <div className="row g-5 justify-content-center">
            {/* Apply Online */}
            <div className="col-lg-3 col-md-6">
              <a
                href="/carrier"
                className="text-decoration-none"
              >
                <div className="card h-100 text-black border-0 shadow-lg rounded-3 feature-card apply-card">
                  <div className="card-body d-flex flex-column align-items-start">
                    <div className="icon-box bg-black bg-opacity-25 p-3 rounded mb-3">
                      <Users size={36} />
                    </div>
                    <h4 className="fw-bold text-white">APPLY ONLINE</h4>
                    <p className=" fw-bold text-black">
                     <i> Apply to our Courses through the online application</i>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Prospectus */}
            <div className="col-lg-3 col-md-6">
              <a
                href="assets/pdfs/Prospectus_Book.pdf"
                className="text-decoration-none"
              >
                <div className="card h-100 text-black border-0 shadow-lg rounded-3 feature-card prospectus-card">
                  <div className="card-body d-flex flex-column align-items-start">
                    <div className="icon-box bg-white bg-opacity-25 p-3 rounded mb-3">
                      <FileText size={36} />
                    </div>
                    <h4 className="fw-bold text-white">PROSPECTUS</h4>
                    <p className="fw-bold  text-black"><i>Download our Programme Prospectus</i></p>
                  </div>
                </div>
              </a>
            </div>

            {/* Certification */}
            <div className="col-lg-3 col-md-6">
              <a href="#" className="text-decoration-none">
                <div className="card h-100 text-black border-0 shadow-lg rounded-3 feature-card certification-card">
                  <div className="card-body d-flex flex-column align-items-start">
                    <div className="icon-box bg-white bg-opacity-25 p-3 rounded mb-3">
                      <Award size={36} />
                    </div>
                    <h4 className="fw-bold text-white">CERTIFICATION</h4>
                    <p className=" fw-bold  text-black"><i>All Certificate Download from here</i></p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }
        .apply-card {
  background: linear-gradient(orange, skyblue, black);
        }
        .prospectus-card {
  background: linear-gradient(beige, blueviolet, lightskyblue);        }
        .certification-card {
          background: linear-gradient(#e66465, #9198e5);
        }

        .icon-box svg {
          color: #fff;
        }
      `}</style>

      <div className="features-area-5 gap-bottom-equal">
        <div className="container">
          <div
            className="section-title section-center"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <span className="pre-title">
              (सामुदायिक स्वास्थ्य सेवाओं की एक नई पहल )
            </span>
            <h2 className="title">
              Patient Screening Points – Gramin Swasthya Mitra (GSM)
            </h2>
            <span className="shape-line">
              <i className="icon-19"></i>
            </span>
          </div>
          <div className="row g-5">
            <FeatureItem
              delay="50"
              clr="primary-style"
              icon="34"
              title="सामान्य स्वास्थ्य संबंधी जानकारी संग्रह"
            />
            <FeatureItem
              delay="100"
              clr="secondary-style"
              icon="35"
              title="जीवनशैली एवं आदतें"
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="36"
              title="महत्वपूर्ण शारीरिक माप (Vital Signs)"
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="37"
              title="सामान्य रोगों की स्रीननिंग"
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="34"
              title="सिंरामक रोगों की स्रीननिंग"
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="35"
              title=" महिला स्वास्थ्य तथा मातृत्व स्क्रीनिंग सेवाएँ"
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="36"
              title="बाल स्वास्थ्य एवं टीकाकरण सेवाएँ"
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="37"
              title="वृद्ध स्वास्थ्य (Geriatric Screening) "
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="34"
              title="मानसिक स्वास्थ्य सेवाएं एवं नशा मुक्ति कार्यक्रम"
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="36"
              title=" स्वच्छता एवं पर्यावरण स्वास्थ्य"
            />
            <FeatureItem
              delay="150"
              clr="extra06-style"
              icon="35"
              title="सामुदायिक स्वास्थ्य योजनाओं की जानकारी"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
