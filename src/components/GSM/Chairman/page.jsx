import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "../../../layout";

const ChairmanPage = () => {
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
            अध्यक्ष  संदेश{" "}
            <small className="text-muted d-block fs-5">
              (Chairman’s Message)
            </small>
          </h1>
          <hr className="w-25 mx-auto mb-5" />

          {/* Card Layout */}
          <div
            className="card shadow-lg border-0 rounded-4 p-3"
            style={{
              transition: "all 0.3s ease-in-out",
              backgroundColor: "white",
            }}
          >
            <div className="row g-0">
              {/* Left Side Image */}
              <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                <Image
                  src="/assets/images/chairman.jpg" // ✅ Ensure image path exists in /public/assets/images/
                  alt="Dr Mithilesh Kumar Singh"
                  width={320}
                  height={380}
                  className="rounded-4 img-fluid shadow"
                  style={{
                    objectFit: "cover",
                    border: "4px solid #dee2e6",
                  }}
                />
              </div>

              {/* Right Side Content */}
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h3 className="fw-bold text-primary">
                    Dr. Mithilesh Kumar Singh
                  </h3>
                  <h6 className="text-muted mb-4">
                    Chairman – ग्रामीण स्वास्थ्य मित्र
                  </h6>

                  <blockquote className="blockquote mb-4">
                    <p className="fs-5" style={{ lineHeight: "1.9" }}>
                      प्रिय साथियों, <br />
                      ग्रामीण भारत की सच्ची उन्नति तभी संभव है जब गांव-गांव तक
                      <span className="text-primary fw-semibold">
                        {" "}
                        बेहतर स्वास्थ्य सुविधाएं{" "}
                      </span>
                      पहुंचें। इसी उद्देश्य को ध्यान में रखते हुए ग्रामीण स्वास्थ्य
                      मित्र (GSM) परियोजना की शुरुआत की गई है। यह पहल हमारे देश
                      के उन लाखों ग्रामीण परिवारों के लिए समर्पित है, जिन्हें समय
                      पर सही स्वास्थ्य परामर्श और स्क्रीनिंग उपलब्ध नहीं हो पाती।
                    </p>
                  </blockquote>

                  <p className="fs-5 lh-lg">
                    इस परियोजना का मुख्य उद्देश्य है –{" "}
                    <strong className="text-primary">
                      हर गांव, हर घर तक बुनियादी स्वास्थ्य जागरूकता और प्राथमिक
                      जांच सुविधा पहुंचाना।
                    </strong>{" "}
                    हमारे प्रशिक्षित "ग्रामीण स्वास्थ्य मित्र" गांव स्तर पर समाज
                    के सच्चे सेवक बनकर कार्य करेंगे। उनका कार्य रोगियों की
                    स्क्रीनिंग, पंजीकरण और स्वास्थ्य संबंधी जानकारी को समय पर सही
                    संस्थान तक पहुंचाना है।
                  </p>

                  <p className="fs-5 lh-lg">
                    मैं विश्वास के साथ कह सकता हूं कि यह परियोजना न केवल ग्रामीण
                    समाज में स्वास्थ्य के प्रति जागरूकता लाएगी, बल्कि लोगों के
                    जीवन की गुणवत्ता को भी बेहतर बनाएगी।{" "}
                    <strong>हमारा लक्ष्य है कि हर परिवार स्वस्थ, हर गांव सशक्त और हर नागरिक सुरक्षित रहे।</strong>
                  </p>

                  <p className="fs-5 lh-lg">
                    मैं सभी ग्राम स्तर के प्रतिनिधियों, स्वयंसेवकों और
                    समाजसेवियों से अपील करता हूं कि इस मिशन में हमारा साथ दें और
                    एक स्वस्थ भारत के निर्माण में योगदान करें। साथ मिलकर हम
                    निश्चित ही यह सपना पूरा करेंगे।
                  </p>

                  {/* Signature Section */}
                  <div className="text-end mt-4">
                    <p className="fw-bold mb-0">सादर,</p>
                    <p className="mb-0">(हस्ताक्षर)</p>
                    <p className="fw-bold mb-0">अध्यक्ष (Chairman)</p>
                    <p className="fw-bold text-primary">
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

export default ChairmanPage;
