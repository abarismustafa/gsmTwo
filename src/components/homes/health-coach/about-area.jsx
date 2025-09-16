import React from "react";

const AboutArea = () => {
  return (
    <>
      <div className="gap-bottom-equal edu-about-area about-style-9">
        <div className="container edublink-animated-shape">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-gallery">
                <img
                  className="main-img-1"
                  src="/assets/newimage/imag2.jpeg"
                  alt="About Image"
                  style={{ width: "400px" }}
                />
                <div className="author-box">
                  <img
                    src="/assets/newimage/imag1.jpeg"
                    alt="About Images"
                    style={{ width: "400px" }}
                  />
                </div>
                <ul className="shape-group">
                  <li
                    className="shape-1 scene"
                    data-sal-delay="500"
                    data-sal="fade"
                    data-sal-duration="200"
                  >
                    <img
                      data-depth="1.5"
                      src="/assets/images/about/shape-36.png"
                      alt="Shape"
                    />
                  </li>
                  <li
                    className="shape-2 scene"
                    data-sal-delay="500"
                    data-sal="fade"
                    data-sal-duration="200"
                  >
                    <img
                      data-depth="-1.2"
                      src="/assets/images/others/shape-34.png"
                      alt="Shape"
                    />
                  </li>
                  <li
                    className="shape-3 circle"
                    data-sal-delay="500"
                    data-sal="fade"
                    data-sal-duration="200"
                  >
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div
                  className="section-title section-left"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <span className="pre-title">About Us</span>
                  <h2 className="title">
                    गरामीण स्वास्य,
                    <span className="color-secondary">
                      {" "}
                      ममत्र (GSM) &{" "}
                    </span>{" "}
                    परियोजना.
                  </h2>
                  <span className="shape-line">
                    <i className="icon-19"></i>
                  </span>
                  <p>
                    ग्रामीण स्वास्थ्य ममता (GSM) परियोजना एक बहुआयामी और
                    दीर्घकालिक स्वास्थ्य पहल है, जो भारत के ग्रामीण, अर्ध-शहरी
                    और पिछड़े क्षेत्रों में समग्र, सुलभ तथा गुणवत्तापूर्ण
                    प्राथमिक स्वास्थ्य सेवाओं को स्थायी रूप से पहुँचाने के लिए
                    डिजाइन की गई है।
                  </p>
                </div>
                <ul
                  className="features-list"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <li>डिजजटल सशजतिकिण</li>
                  <li>आपात व प्राथमिक पहुँच</li>
                  <li>जिला-स्तरीय उपचार क्षमता</li>
                  <li>साम दाययक साक्षििा</li>
                  <li>निगरानी एवं सुधार</li>
                </ul>
                <a href="#" className="edu-btn">
                  Get Start Today <i className="icon-4"></i>
                </a>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <li
              className="shape-4 scene"
              data-sal-delay="500"
              data-sal="fade"
              data-sal-duration="200"
            >
              <img
                data-depth="-2"
                src="/assets/images/others/shape-33.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
