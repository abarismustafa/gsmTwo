"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, EffectFade, Navigation } from "swiper/modules";
// import imag1 from "../../../../public/assets/newimage/imag2.jpg";

const slider_content_data = [
  {
    pre_title: "Welcome to GSM",
    title: (
      <>
        गरामीण स्वास्य, <br /> ममत्र (GSM) & <br /> परियोजना.
      </>
    ),
    desc: "गरामीण स्वास््य ममत (GSM) परियोजना एक बहुआयामी औि दूिगामी स्वास््य पहल है जो भाित के ग्रामीण, अर्ध-शहिी औि पपछडे क्षेत्रों में समग्र, सुलभ तथा गुणवत्तापूणध प्राथममक स ्वास््य सेवाओं को स्थायी रूप से पहु ुँचाने के मलए डिजाइन की गई है।",
  },
  {
    pre_title: "Welcome to GSM",
    title: (
      <>
        गरामीण स्वास्य, <br /> ममत्र (GSM) & <br /> परियोजना.
      </>
    ),
    desc: "हमािी मान्यता है कक स ्वास््य केवल चचककत्सालयों तक सीममत नहीं िहना चाहहए — स्वास््य सेवाएुँ उन स्थानों तक पहु ुँचनी चाहहए जहाुँ लोग िहते, काम किते औि अपने पारिवारिक ननणधय लेते हैं। ",
  },
  {
    pre_title: "Welcome to GSM",
    title: (
      <>
        गरामीण स्वास्य, <br /> ममत्र (GSM) & <br /> परियोजना.
      </>
    ),
    desc: " इस दृष्टि से GSM का उद्देश्य ग्रामीण स्ति पि स्वास््य स्रीननंग, समयोचचत िेफ़िल, प्राथममक उपचाि औि समुदाय-आर्ारित स्वास््य मशक्षा की एक सतत् प्रणाली ननममधत किना है। ",
  },
];

const slider_images = [
  {
    img: "/assets/newimage/imag1.jpeg",
  },
  {
    img: "/assets/newimage/imag2.jpeg",
  },
  {
    img: "/assets/newimage/imag3.jpeg",
  },
];

const HeroBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="hero-banner hero-style-9">
        <div className="slider">
          <div className="container">
            <Swiper
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 5000,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              navigation={{
                nextEl: ".slide-next",
                prevEl: ".slide-prev",
              }}
              className="swiper health-slider-content"
            >
              {slider_content_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="inner">
                    <span className="pre-title color-primary">
                      Welcome to GSM
                    </span>
                    <h1 className="title">{item.title}</h1>
                    <p>
                      {/* Excepteur sint occaecat cupidatat non proident sunt <br />{" "}
                      in culpa qui officia deserunt mollit. */}

                      {item?.desc}
                    </p>
                    <div className="banner-btn">
                      <a href="#" className="edu-btn">
                        Find courses <i className="icon-4"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <!-- end slider-content --> */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={1}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="swiper health-slider-main"
            >
              {slider_images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="slide-image"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <!-- end slider-main --> */}
            <ul className="shape-group">
              <li className="shape-1">
                <span></span>
              </li>
              <li className="shape-2">
                <img
                  className="rotateit"
                  src="assets/images/about/shape-25.png"
                  alt="Shape"
                />
              </li>
            </ul>
          </div>
        </div>
        <ul className="shape-group">
          <li
            className="shape-3 scene"
            data-sal-delay="1000"
            data-sal="fade"
            data-sal-duration="1000"
          >
            <img
              data-depth="2"
              src="assets/images/others/health-shape-33.png"
              alt="Shape"
            />
          </li>
          <li
            className="shape-4 scene"
            data-sal-delay="1000"
            data-sal="fade"
            data-sal-duration="1000"
          >
            <img
              data-depth="2"
              src="assets/images/others/health-shape-34.png"
              alt="Shape"
            />
          </li>
          <li className="shape-5">
            <img src="assets/images/counterup/shape-02.png" alt="image" />
          </li>
          <li
            className="shape-6 scene"
            data-sal-delay="1000"
            data-sal="fade"
            data-sal-duration="1000"
          >
            <img
              data-depth="-2"
              src="assets/images/about/shape-13.png"
              alt=""
            />
          </li>
        </ul>
        <div className="hero-slider-bg-controls">
          <div className="swiper-slide-controls slide-prev">
            <i className="icon-west"></i>
          </div>
          <div className="swiper-slide-controls slide-next">
            <i className="icon-east"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
