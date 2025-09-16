"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import useParallax from "@/hooks/use-parallax";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";

const GSMVisionMissionPage = () => {
  useParallax();

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree
          title="GSM प्रोजेक्ट - हष्ट और मिशन"
          subtitle="Gramin Swasthya Mitra Project"
        />

        <section className="section-gap-equal">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card shadow-lg p-5 rounded-4">
                  {/* परिचय */}
                  <h2 className="text-center fw-bold mb-4 text-primary">
                    🏥 ग्रामीण स्वास्थ्य मित्र (GSM) प्रोजेक्ट – हष्ट और मिशन
                  </h2>

                  <h5 className="fw-bold mb-2 text-dark">📜 परिचय</h5>
                  <p className="text-muted">
                    भारत जैसे विशाल और जनसंख्या बहुल देश में स्वास्थ्य सेवाओं की पहुँच
                    ग्रामीण क्षेत्रों तक सीमित और असमान है। विशेष रूप से बिहार जैसे
                    राज्यों में, जहाँ 80% से अधिक आबादी ग्रामीण क्षेत्रों में निवास
                    करती है, वहाँ गुणवत्तापूर्ण स्वास्थ्य सेवाओं और इलाज की सुविधाओं की
                    कमी है। इस समस्या को हल करने के लिए <strong>ग्रामीण स्वास्थ्य मित्र (GSM)</strong> प्रोजेक्ट की
                    परिकल्पना की गई है, जिसका उद्देश्य प्रशिक्षित युवाओं को जोड़कर
                    डिजिटल स्वास्थ्य नेटवर्क बनाना है जो हर नागरिक तक गुणवत्तापूर्ण
                    स्वास्थ्य सेवाएं पहुँचाए।
                  </p>

                  <hr className="my-4" />

                  {/* Vision */}
                  <h4 className="fw-bold mb-3 text-success">🎯 परियोजना की हष्ट (Vision)</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li>✅ “स्वस्थ ग्राम, सशक्त समाज” – हर गाँव, हर घर तक प्राथमिक स्वास्थ्य सेवा पहुँचाना।</li>
                        <li>✅ स्वास्थ्य सेवाओं को सुलभ, सस्ती और डिजिटल रूप से पारदर्शी बनाना।</li>
                        <li>✅ गंभीर और शारीरिक पहचान योग्य बीमारियों से बचाव सुनिश्चित करना।</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li>✅ हर घर का डिजिटल हेल्थ रिकॉर्ड बनाना।</li>
                        <li>✅ समाज में स्वास्थ्य जागरूकता और निवारक चिकित्सा की संस्कृति विकसित करना।</li>
                        <li>✅ युवाओं को रोजगार देकर उन्हें आत्मनिर्भर बनाना।</li>
                        <li>✅ बिहार को पहला राज्य बनाना जहाँ पूरी आबादी की स्वास्थ्य स्क्रीनिंग डिजिटल हो।</li>
                      </ul>
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/* Mission */}
                  <h4 className="fw-bold mb-3 text-danger">🚀 परियोजना का मिशन (Mission)</h4>
                  <ul className="list-unstyled">
                    <li>
                      <strong>👨‍⚕️ स्वास्थ्य मित्रों का सशक्तिकरण:</strong> 
                      2.3 लाख से अधिक ग्रामीण स्वास्थ्य मित्र (GSM) तैयार करना और 534 ब्लॉकों में BHM एवं 38 DHM नियुक्त करना।
                    </li>
                    <li>
                      <strong>🌐 स्वास्थ्य सेवाओं की पहुँच:</strong> 
                      3.10 करोड़ नागरिकों की वार्षिक स्क्रीनिंग और डिजिटल रिपोर्ट तैयार करना।
                    </li>
                    <li>
                      <strong>💻 डिजिटल हेल्थ रिकॉर्ड:</strong> 
                      प्रत्येक नागरिक का डिजिटल हेल्थ कार्ड बनाना और डेटा आधारित नीतियां तैयार करना।
                    </li>
                    <li>
                      <strong>📢 जागरूकता अभियान:</strong> 
                      हर गाँव में स्वास्थ्य शिविर, स्क्रीनिंग कैंप और जागरूकता कार्यक्रम आयोजित करना।
                    </li>
                  </ul>

                  <p className="mt-3 text-secondary fst-italic">
                    GSM प्रोजेक्ट केवल Vision तक सीमित नहीं है, बल्कि सम्पूर्ण स्वास्थ्य पारिस्थितिकी तंत्र को बदलने का प्रयास है।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default GSMVisionMissionPage;
