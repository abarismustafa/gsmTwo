import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "../../../layout";

const MDPage = () => {
  return (
    <>
      <Header />

      {/* Background Section */}
      <div
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          {/* Heading */}
          <h1 className="text-center mb-3 fw-bold display-5">
            प्रबंध निदेशक संदेश{" "}
            <small className="text-muted d-block fs-5">
              (Managing Director’s Message)
            </small>
          </h1>
          <hr className="w-25 mx-auto mb-5" />

          {/* Card Layout */}
          <div
            className="card shadow-lg border-0 rounded-4 p-3"
            style={{
              transition: "all 0.3s ease-in-out",
              backgroundColor: "#001376",
            }}
          >
            <div className="row g-0">
              {/* Left Side Image */}
              <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                <img
                  src="/assets/images/md.jpg "
                  alt="Dr Rajkumar Chauhan"
                  width={320}
                  height={380}
                  className="rounded-4 img-fluid shadow"
                  style={{
                    objectFit: "cover",
                    border: "4px solid #dee2e6",
                  }}
                  //<Image
                  //src="/assets/images/md.jpg" // ✅ Replace with MD image path
                  // alt="Dr Rajkumar Chauhan"
                  // width={320}
                  // height={380}
                  // className="rounded-4 img-fluid shadow"
                  // style={{
                  //   objectFit: "cover",
                  //   border: "4px solid #dee2e6",
                  // }}
                />
              </div>

              {/* Right Side Content */}
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h3 className="fw-bold " style={{ color: "white" }}>
                    Dr. Rajkumar Chauhan
                  </h3>
                  <h6 className=" mb-4" style={{ color: "white" }}>
                    Managing Director – ग्रामीण स्वास्थ्य मित्र
                  </h6>

                  <blockquote className="blockquote mb-4">
                    <p className="fs-5 lh-lg">
                      प्रिय सहयोगियों एवं साथियों,
                      <br />
                      भारत की असली ताक़त उसके गांवों में बसती है। लेकिन यह भी एक
                      सच्चाई है कि आज भी गांवों में स्वास्थ्य सुविधाएं सीमित हैं
                      और लोग छोटी-छोटी बीमारियों के लिए भी समय पर उपचार नहीं पा
                      पाते। इसी अंतर को दूर करने के लिए{" "}
                      <span className="text-primary fw-semibold">
                        ग्रामीण स्वास्थ्य मित्र (GSM)
                      </span>{" "}
                      परियोजना की शुरुआत की गई है।
                    </p>
                  </blockquote>

                  <p className="fs-5 lh-lg" style={{ color: "white" }}>
                    इस पहल का उद्देश्य केवल एक परियोजना चलाना नहीं है, बल्कि एक{" "}
                    <strong className="text-primary">
                      जन-आंदोलन खड़ा करना
                    </strong>{" "}
                    है, जहां प्रत्येक गांव में एक प्रशिक्षित ग्रामीण स्वास्थ्य
                    मित्र उपलब्ध हो, जो प्राथमिक स्तर पर स्वास्थ्य स्क्रीनिंग,
                    पंजीकरण और जन-जागरूकता का कार्य करे। यह पूरी तरह से
                    <em> निःशुल्क सामाजिक सेवा </em> के हित में है।
                  </p>

                  <ul className="fs-5 lh-lg mt-3" style={{ color: "white" }}>
                    <li style={{ color: "white" }}>
                      हर नागरिक को समय पर प्राथमिक स्वास्थ्य जांच सुविधा मिले।
                    </li>
                    <li style={{ color: "white" }}>
                      गंभीर रोगों का प्रारंभिक चरण में ही पता चल सके।
                    </li>
                    <li style={{ color: "white" }}>
                      गांवों में स्वास्थ्य जागरूकता बढ़े और जीवनशैली में सुधार
                      आए।
                    </li>
                  </ul>

                  <p className="fs-5 lh-lg" style={{ color: "white" }}>
                    मुझे गर्व है कि इस मिशन में अनेक उत्साही युवक-युवतियां और
                    समाजसेवी हमारे साथ जुड़ रहे हैं।{" "}
                    <strong>
                      आपकी सहभागिता और समर्पण ही इस परियोजना की सफलता की कुंजी
                      है।
                    </strong>
                  </p>

                  <p className="fs-5 lh-lg" style={{ color: "white" }}>
                    आइए, मिलकर हम यह सुनिश्चित करें कि{" "}
                    <span className="text-primary fw-bold">
                      "स्वस्थ ग्राम – समृद्ध भारत"
                    </span>{" "}
                    का सपना जल्द ही साकार हो।
                  </p>

                  {/* Signature Section */}
                  <div className="text-end mt-4">
                    <p className="fw-bold mb-0" style={{ color: "white" }}>
                      सादर,
                    </p>
                    <p className="mb-0" style={{ color: "white" }}>
                      (हस्ताक्षर)
                    </p>
                    <p className="fw-bold mb-0" style={{ color: "white" }}>
                      प्रबंध निदेशक (Managing Director)
                    </p>
                    <p
                      className="fw-bold text-primary"
                      style={{ color: "white" }}
                    >
                      ग्रामीण स्वास्थ्य मित्र परियोजना
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MDPage;
