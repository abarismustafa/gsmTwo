import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header } from "../../../layout";
import Breadcrumb from "@/components/breadcrumb/breadcrumb-3";

const CEOPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="GSM" subtitle="SGM" />

      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          {/* Heading */}
          <h1 className="text-center fw-bold display-5 mb-2">
            मुख्य कार्यकारी अधिकारी संदेश
          </h1>
          <p className="text-center text-muted fs-5 mb-4">(CEO’s Message)</p>
          <hr className="w-25 mx-auto mb-5" />

          {/* Card Layout */}
          <div
            className="card border-0 shadow-lg rounded-4 overflow-hidden"
            style={{
              transition: "all 0.3s ease-in-out",
              backgroundColor: "#001376",
            }}
          >
            <div className="row g-0">
              {/* Left Side Image */}
              <div className="col-md-4 d-flex align-items-center justify-content-center p-3 ">
                <img
                  src="/assets/images/ceo.jpg"
                  alt="CEO"
                  width={280}
                  height={350}
                  className="rounded-3 shadow"
                  style={{
                    objectFit: "cover",
                  }}
                  // <Image
                  //   src="/images/ceo.jpg" // ✅ Add CEO photo later at /public/images/ceo.jpg
                  //   alt="CEO"
                  //   width={280}
                  //   height={350}
                  //   className="rounded-3 shadow"
                  //   style={{
                  //     objectFit: "cover",
                  //   }}
                />
              </div>

              {/* Right Side Content */}
              <div className="col-md-8">
                <div className="card-body p-4">
                  {/* ✅ Add CEO name here later */}
                  <h3 className="fw-bold " style={{ color: "white" }}>
                    Dr.Arun Kumar
                  </h3>
                  <p className=" mb-4" style={{ color: "white" }}>
                    CEO – ग्रामीण स्वास्थ्य मित्र
                  </p>

                  {/* Quote Section */}
                  <div
                    className="p-3 rounded-3 mb-4"
                    style={{ background: "#f1f3f5" }}
                  >
                    <span className="fs-1 text-success">❝</span>
                    <p className="d-inline fs-5 ms-2">
                      प्रिय देशवासियों, ग्रामीण स्वास्थ्य मित्र (GSM) परियोजना
                      केवल एक सामाजिक पहल नहीं, बल्कि एक व्यापक राष्ट्रीय
                      स्वास्थ्य मिशन है, जिसका उद्देश्य है – भारत के हर नागरिक
                      तक आधुनिक और सुलभ स्वास्थ्य सुविधाएँ पहुँचाना।
                    </p>
                  </div>

                  <p className="fs-5 lh-lg" style={{ color: "white" }}>
                    हमारी टीम ने यह सुनिश्चित करने का संकल्प लिया है कि –
                  </p>

                  <ul className="fs-5 lh-lg">
                    <li style={{ color: "white" }}>
                      प्रत्येक पंजीकृत ग्रामीण स्वास्थ्य मित्र को ₹10,000 मूल्य
                      का पैड (Tab/Pad) प्रदान किया जाए, जिससे स्वास्थ्य डेटा
                      डिजिटल संग्रहित और ट्रैक किया जा सके।
                    </li>
                    <li style={{ color: "white" }}>
                      मोबाइल एम्बुलेंस सेवाएँ हर गाँव और कस्बे तक पहुँचाई जाएँ,
                      ताकि आपात स्थिति में तुरंत स्वास्थ्य सहायता मिल सके।
                    </li>
                    <li style={{ color: "white" }}>
                      भारत के हर ज़िले में 500-बेड का चैरिटेबल हॉस्पिटल स्थापित
                      किया जाए, जहाँ आधुनिक तकनीक और विश्वस्तरीय चिकित्सा
                      सुविधाएँ उपलब्ध हों।
                    </li>
                    <li style={{ color: "white" }}>
                      सभी सेवाएँ समाज के अंतिम पंक्ति तक बैठे व्यक्ति तक पहुँचें
                      और उन्हें बिना भेदभाव के स्वास्थ्य सुरक्षा मिले।
                    </li>
                  </ul>

                  <p className="fs-5 lh-lg" style={{ color: "white" }}>
                    GSM परियोजना का मुख्य उद्देश्य है – ग्रामीण भारत को
                    विश्वस्तरीय स्वास्थ्य सुविधाओं से जोड़ना और हर परिवार को
                    सुरक्षित जीवन का भरोसा देना।
                  </p>

                  <p className="fs-5 lh-lg" style={{ color: "white" }}>
                    हम मानते हैं कि यह सपना केवल हमारी टीम का नहीं, बल्कि पूरे
                    देश का है। यदि हम सब मिलकर कदम बढ़ाएँ तो यह मिशन निश्चित ही
                    सफल होगा और भारत स्वास्थ्य सेवा के क्षेत्र में एक नई पहचान
                    बनाएगा।
                  </p>

                  <p className="fs-5 lh-lg" style={{ color: "white" }}>
                    आइए, सब मिलकर हम यह सुनिश्चित करें कि –{" "}
                    <strong className="text-primary">
                      “हर गाँव स्वस्थ, हर ज़िला सुरक्षित और हर नागरिक सशक्त”
                    </strong>{" "}
                    बने।
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
                      मुख्य कार्यकारी अधिकारी (CEO)
                    </p>
                    <p className="fw-bold " style={{ color: "white" }}>
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

export default CEOPage;
