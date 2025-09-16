"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import useParallax from "@/hooks/use-parallax";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";

const DHMResponsibilitiesPage = () => {
  useParallax();

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree
          title="DHM की मुख्य जिम्मेदारियाँ"
          subtitle="District Health Manager - Roles & Responsibilities"
        />

        <section className="section-gap-equal">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card shadow-lg p-5 rounded-4">
                  <h2 className="text-center fw-bold mb-4 text-primary">
                    🏥 DHM की मुख्य जिम्मेदारियाँ
                  </h2>

                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <h5 className="fw-bold text-success">
                        1️⃣ योजना का जिला स्तर पर संचालन
                      </h5>
                      <ul>
                        <li>✅ जिले के सभी ब्लॉकों में चल रहे GSM कार्यक्रमों की निगरानी करना।</li>
                        <li>✅ ब्लॉक हेल्थ मैनेजर (BHM) और ग्रामीण स्वास्थ्य मित्र (GSM) के कार्यों का समन्वय करना।</li>
                        <li>✅ जिला प्रशासन, स्वास्थ्य विभाग और परियोजना मुख्यालय से संपर्क स्थापित करना।</li>
                      </ul>
                    </li>

                    <li className="mb-4">
                      <h5 className="fw-bold text-danger">
                        2️⃣ प्रशिक्षण और मार्गदर्शन
                      </h5>
                      <ul>
                        <li>✅ सभी कार्यरत BHM और GSM को नियमित प्रशिक्षण और रिफ्रेशर ट्रेनिंग देना।</li>
                        <li>✅ डिजिटल प्लेटफॉर्म, ऐप्स और रिपोर्टिंग सिस्टम के उपयोग पर तकनीकी मार्गदर्शन।</li>
                      </ul>
                    </li>

                    <li className="mb-4">
                      <h5 className="fw-bold text-warning">
                        3️⃣ डेटा संग्रह और विश्लेषण
                      </h5>
                      <ul>
                        <li>✅ जिले में होने वाली स्वास्थ्य स्क्रीनिंग का डेटा एकत्रित करना।</li>
                        <li>✅ डिजिटल प्लेटफॉर्म के माध्यम से रोगों की प्रवृत्ति (trend) और गंभीर समस्याओं की पहचान करना।</li>
                      </ul>
                    </li>

                    <li className="mb-4">
                      <h5 className="fw-bold text-info">
                        4️⃣ स्वास्थ्य शिविर और जागरूकता कार्यक्रम
                      </h5>
                      <ul>
                        <li>✅ कैंसर, मधुमेह, हृदय रोग, एनीमिया और अन्य बीमारियों के लिए स्क्रीनिंग कैंप आयोजित करना।</li>
                        <li>✅ पंचायतों और स्कूलों में स्वास्थ्य शिक्षा कार्यक्रम कराना।</li>
                      </ul>
                    </li>

                    <li className="mb-4">
                      <h5 className="fw-bold text-secondary">
                        5️⃣ CSR और संस्थागत सहयोग
                      </h5>
                      <ul>
                        <li>✅ CSR फंडिंग, मेडिकल कॉलेज, एनजीओ और निजी अस्पतालों से सहयोग प्राप्त करना।</li>
                        <li>✅ सरकारी अस्पतालों और डायग्नोस्टिक सेंटर्स के साथ तालमेल करके सस्ती स्वास्थ्य सेवाएं उपलब्ध कराना।</li>
                      </ul>
                    </li>

                    <li className="mb-4">
                      <h5 className="fw-bold text-primary">
                        6️⃣ संकट प्रबंधन और आपातकालीन सेवाएँ
                      </h5>
                      <ul>
                        <li>✅ किसी भी स्वास्थ्य आपदा की रिपोर्टिंग और GSM नेटवर्क के माध्यम से त्वरित कार्रवाई।</li>
                        <li>✅ स्वास्थ्य विभाग के साथ मिलकर दवाओं और उपकरणों की आपूर्ति सुनिश्चित करना।</li>
                      </ul>
                    </li>

                    <li className="mb-2">
                      <h5 className="fw-bold text-dark">
                        7️⃣ पंचायत और सामुदायिक सशक्तिकरण
                      </h5>
                      <ul>
                        <li>✅ पंचायतों को GSM प्रोजेक्ट से जोड़ना और उन्हें आर्थिक रूप से आत्मनिर्भर बनाना।</li>
                        <li>✅ स्थानीय युवाओं और संगठनों को स्वास्थ्य गतिविधियों में शामिल करना।</li>
                      </ul>
                    </li>
                  </ul>

                  <p className="mt-3 text-secondary fst-italic">
                    DHM की जिम्मेदारियाँ परियोजना के सफल क्रियान्वयन का मुख्य आधार हैं।
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

export default DHMResponsibilitiesPage;
