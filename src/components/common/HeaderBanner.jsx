import React from "react";

const HeaderBanner = () => {
  return (
    <div
      className="py-3 text-white"
      style={{
        // backgroundColor: "#ffae00"
        background: "linear-gradient(90deg, #ffae00 0%, #001376 100%)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Logo */}
          <div className="col-2 text-start">
            <img
              src="/assets/images/logo3.jpg"
              alt="Left Logo"
              className="img-fluid"
              style={{ maxHeight: "120px" }}
            />
          </div>

          {/* Center Content */}
          <div className="col-8 text-center">
            <h4 className="fw-bold mb-1">ग्रामीण स्वास्थ्य मित्र</h4>
            <p className="mb-1" style={{ color: "white" }}>
              स्वास्थ्य एवं परिवार कल्याण मंत्रालय, बिहार सरकार
            </p>
            <h5 className="fw-bold text-white mb-2">"RUN & MANAGED BY"</h5>
            <h4 className="fw-bold text-danger mb-2">
              विक्रमशिला स्वास्थ्य एवं तकनीकी शिक्षा परिषद
            </h4>
            <h5 className="fw-bold m-0">
              VIKRAMSHILA HEALTH AND TECHNICAL EDUCATION COUNCIL
            </h5>
            <p className="small mb-0" style={{ color: "white" }}>
              AN AUTONOMOUS ORGANIZATION, REGD. BY MCA GOVT. OF INDIA UNDER
              COMPANY ACT - 2013
              <br />
              CIN NO.-{" "}
              <span className="text-success fw-bold">
                U80904DL2022NPL406186
              </span>{" "}
              | NCT-DELHI REGD. NO.- 1688
              <br />
              REGD. UNDER CR ACT-1957, MHRD GOVT. OF INDIA (DEPT. OF SECONDARY
              AND HIGHER EDUCATION)
              <br />
              <span className="text-primary fw-bold">
                REGD. BY NCS-MINISTRY OF LABOUR AND EMPLOYMENT GOVT. OF INDIA
              </span>
              <br />
              REGD. BY MINISTRY OF MICRO SMALL AND MEDIUM ENTERPRISES GOVT. OF
              INDIA
              <br />
              <span className="text-danger fw-bold">
                REGD. BY NITI AAYOG GOVT. OF INDIA
              </span>
              <br />
              {/* MEMBER EARLY CHILDHOOD ASSOCIATION (ECA) | APPROVED BY SKILL INDIA
              (NSDC) */}
              <br />
              {/* <span className="text-danger">
                (AN ISO 9001:2015 CERTIFIED ORGANIZATION)
              </span> */}
            </p>
          </div>

          {/* Right Logo */}
          <div className="col-2 text-end">
            <img
              src="/assets/images/logo2.png"
              alt="Right Logo"
              className="img-fluid"
              style={{ maxHeight: "120px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
