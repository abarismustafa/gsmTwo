import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "../../../layout";

const DirectorPage = () => {
  return (
    <>
      <Header />

      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          {/* Page Title */}
          <h1 className="text-center fw-bold display-5 mb-2">
            निदेशक  संदेश
          </h1>
          <p className="text-center text-muted fs-5 mb-4">
            (Director’s Message)
          </p>
          <hr className="w-25 mx-auto mb-5" />

          {/* Card Container */}
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="row g-0">
              {/* Left Image Section */}
              <div className="col-md-4 d-flex align-items-center justify-content-center p-3 bg-light">
                <Image
                  src="/assets/images/director.jpg" // Make sure this file exists in /public/images/
                  alt="Er Ashish Srivastava"
                  width={280}
                  height={350}
                  className="rounded-3 shadow"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Right Text Section */}
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h3 className="fw-bold text-primary">
                    Er Ashish Srivastava
                  </h3>
                  <p className="text-muted mb-4">
                    Director – ग्रामीण स्वास्थ्य मित्र
                  </p>

                  {/* Quote Section */}
                  <div
                    className="p-3 rounded-3 mb-4"
                    style={{ background: "#f1f3f5" }}
                  >
                    <span className="fs-1 text-success">❝</span>
                    <p className="d-inline fs-5 ms-2">
                      प्रिय साथियों, स्वास्थ्य ही सबसे बड़ा धन है और यदि
                      स्वास्थ्य सेवाएँ{" "}
                      <strong className="text-primary">गाँव-गाँव तक पहुँच जाएँ</strong>{" "}
                      तो समाज का हर वर्ग सुरक्षित और सशक्त हो सकता है। इसी सोच के
                      साथ हमने ग्रामीण स्वास्थ्य मित्र (GSM) परियोजना की शुरुआत
                      की है।
                    </p>
                  </div>

                  <p className="fs-5 lh-lg">
                    इस परियोजना का लक्ष्य है कि हर गाँव में{" "}
                    <strong className="text-primary">
                      शिक्षित ग्रामीण स्वास्थ्य मित्र उपलब्ध हो
                    </strong>
                    , जो प्राथमिक स्वास्थ्य जाँच, रोगी पंजीकरण तथा स्वास्थ्य
                    जागरूकता फैलाने का कार्य करे। यह पहल पूरी तरह से{" "}
                    <em>गैर-आर्थिक (Non-Financial)</em> और{" "}
                    <em>जनहितकारी</em> है, जिसका उद्देश्य केवल सेवा है।
                  </p>

                  <ul className="fs-5 lh-lg">
                    <li>ग्रामीण समाज में स्वास्थ्य संबंधी जागरूकता बढ़ेगी।</li>
                    <li>लोग समय पर बीमारियों की जाँच और परामर्श पाएँगे।</li>
                    <li>गाँव-गाँव में स्वस्थ जीवन शैली को बढ़ावा मिलेगा।</li>
                  </ul>

                  <p className="fs-5 lh-lg">
                    मैं सभी युवाओं, समाजसेवियों और ग्राम प्रतिनिधियों से आह्वान
                    करता हूँ कि इस मिशन से जुड़कर एक स्वस्थ और सशक्त भारत के
                    निर्माण में अपनी भूमिका निभाएँ।{" "}
                    <strong className="text-primary">
                      आपका सहयोग ही इस परियोजना की सबसे बड़ी शक्ति है।
                    </strong>
                  </p>

                  {/* Signature */}
                  <div className="text-end mt-4">
                    <p className="fw-bold mb-0">सादर,</p>
                    <p className="mb-0">(हस्ताक्षर)</p>
                    <p className="fw-bold mb-0">निदेशक (Director)</p>
                    <p className="fw-bold text-primary">
                      ग्रामीण स्वास्थ्य मित्र परियोजना
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DirectorPage;
