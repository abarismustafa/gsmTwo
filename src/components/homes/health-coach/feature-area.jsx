import React from "react";

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
    <div className="features-area-5 gap-bottom-equal">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title">
            (सामुदायिक स ्वास ््ि सेवाओं की नई पहल)
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
            title="सामान्य स्वास््य जानकारी सिंग्रह"
          />
          <FeatureItem
            delay="100"
            clr="secondary-style"
            icon="35"
            title="जीवनशैली एविं आदतें"
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title="महत्वपूणण शारीररक माप (Vital Signs)"
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title="सामान्य रोगों की स्रीननिंग"
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title="सिंरामक रोगों की स्रीननिंग"
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title=" मठहला स्वास््य एविं मातृत्व स्रीननिंग"
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title="िाल स्वास््य एविं टीकाकरण"
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title="वृद्ि स्वास््य (Geriatric Screening) "
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title="मानमसक स्वास््य एविं नशा मुक्तत"
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title=" स्वच्छता एविं पयाणवरण स्वास््य"
          />
          <FeatureItem
            delay="150"
            clr="extra06-style"
            icon="36"
            title="सामुदानयक स्वास््य योजनाओिं की जानकारी "
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
