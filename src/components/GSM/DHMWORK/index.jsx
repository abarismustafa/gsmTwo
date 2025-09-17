"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import useParallax from "@/hooks/use-parallax";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import { motion } from "framer-motion";
import {
  ClipboardList,
  GraduationCap,
  BarChart3,
  Activity,
  Handshake,
  AlertTriangle,
  Users,
} from "lucide-react";
import styles from "@/styles/BackgroundStyles.module.css";

const DHMResponsibilitiesPage = () => {
  useParallax();

  return (
    <div className="sticky-header">
      <div
        id="main-wrapper"
        className={`main-wrapper ${styles["gradient-blue"]}`}
      >
      <Header no_top_bar={true} />
      <BreadcrumbThree
        title="DHM की मुख्य जिम्मेदारियाँ"
        subtitle="District Health Manager - Roles & Responsibilities"
      />
      

      <section className="py-5 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <motion.div
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-5 rounded shadow bg-white"
              >
                <h2 className="text-center fw-bold mb-5 text-primary">
                  🏥 DHM की मुख्य जिम्मेदारियाँ
                </h2>

                {/* Responsibility Boxes */}
                <div className="d-grid gap-4">
                  {/* Responsibility 1 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-success-subtle p-5 rounded border border-success"
                  >
                    <h5 className="d-flex align-items-center fw-bold text-success mb-3">
                      <ClipboardList className="me-2" />
                      1️⃣ योजना का जिला स्तर पर संचालन
                    </h5>
                    <ul className="mb-0 mt-2">
                      <li>
                        ✅ जिले के सभी ब्लॉकों में चल रहे GSM कार्यक्रमों की
                        निगरानी करना।
                      </li>
                      <li>
                        ✅ ब्लॉक हेल्थ मैनेजर (BHM) और ग्रामीण स्वास्थ्य मित्र
                        (GSM) के कार्यों का समन्वय करना।
                      </li>
                      <li>
                        ✅ जिला प्रशासन, स्वास्थ्य विभाग और परियोजना मुख्यालय से
                        संपर्क स्थापित करना।
                      </li>
                    </ul>
                  </motion.div>

                  {/* Responsibility 2 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-danger-subtle p-5 rounded border border-danger"
                  >
                    <h5 className="d-flex align-items-center fw-bold text-danger mb-3">
                      <GraduationCap className="me-2" />
                      2️⃣ प्रशिक्षण और मार्गदर्शन
                    </h5>
                    <ul className="mb-0 mt-2">
                      <li>
                        ✅ सभी कार्यरत BHM और GSM को नियमित प्रशिक्षण और
                        रिफ्रेशर ट्रेनिंग देना।
                      </li>
                      <li>
                        ✅ डिजिटल प्लेटफॉर्म, ऐप्स और रिपोर्टिंग सिस्टम के उपयोग
                        पर तकनीकी मार्गदर्शन।
                      </li>
                    </ul>
                  </motion.div>

                  {/* Responsibility 3 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-warning-subtle p-5 rounded border border-warning"
                  >
                    <h5 className="d-flex align-items-center fw-bold text-warning mb-3">
                      <BarChart3 className="me-2" />
                      3️⃣ डेटा संग्रह और विश्लेषण
                    </h5>
                    <ul className="mb-0 mt-2">
                      <li>
                        ✅ जिले में होने वाली स्वास्थ्य स्क्रीनिंग का डेटा
                        एकत्रित करना।
                      </li>
                      <li>
                        ✅ डिजिटल प्लेटफॉर्म के माध्यम से रोगों की प्रवृत्ति और
                        गंभीर समस्याओं की पहचान करना।
                      </li>
                    </ul>
                  </motion.div>

                  {/* Responsibility 4 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-info-subtle p-5 rounded border border-info"
                  >
                    <h5 className="d-flex align-items-center fw-bold text-info mb-3">
                      <Activity className="me-2" />
                      4️⃣ स्वास्थ्य शिविर और जागरूकता कार्यक्रम
                    </h5>
                    <ul className="mb-0 mt-2">
                      <li>
                        ✅ कैंसर, मधुमेह, हृदय रोग, एनीमिया और अन्य बीमारियों के
                        लिए स्क्रीनिंग कैंप आयोजित करना।
                      </li>
                      <li>
                        ✅ पंचायतों और स्कूलों में स्वास्थ्य शिक्षा कार्यक्रम
                        कराना।
                      </li>
                    </ul>
                  </motion.div>

                  {/* Responsibility 5 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-purple-subtle p-5 rounded border border-purple"
                  >
                    <h5 className="d-flex align-items-center fw-bold text-purple mb-3">
                      <Handshake className="me-2" />
                      5️⃣ CSR और संस्थागत सहयोग
                    </h5>
                    <ul className="mb-0 mt-2">
                      <li>
                        ✅ CSR फंडिंग, मेडिकल कॉलेज, एनजीओ और निजी अस्पतालों से
                        सहयोग प्राप्त करना।
                      </li>
                      <li>
                        ✅ सरकारी अस्पतालों और डायग्नोस्टिक सेंटर्स के साथ
                        तालमेल करके सस्ती स्वास्थ्य सेवाएं उपलब्ध कराना।
                      </li>
                    </ul>
                  </motion.div>

                  {/* Responsibility 6 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-pink-subtle p-5 rounded border border-pink"
                  >
                    <h5 className="d-flex align-items-center fw-bold text-pink mb-3">
                      <AlertTriangle className="me-2" />
                      6️⃣ संकट प्रबंधन और आपातकालीन सेवाएँ
                    </h5>
                    <ul className="mb-0 mt-2">
                      <li>
                        ✅ किसी भी स्वास्थ्य आपदा की रिपोर्टिंग और GSM नेटवर्क
                        के माध्यम से त्वरित कार्रवाई।
                      </li>
                      <li>
                        ✅ स्वास्थ्य विभाग के साथ मिलकर दवाओं और उपकरणों की
                        आपूर्ति सुनिश्चित करना।
                      </li>
                    </ul>
                  </motion.div>

                  {/* Responsibility 7 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-light p-5 rounded border border-secondary"
                  >
                    <h5 className="d-flex align-items-center fw-bold text-dark mb-3">
                      <Users className="me-2" />
                      7️⃣ पंचायत और सामुदायिक सशक्तिकरण
                    </h5>
                    <ul className="mb-0 mt-2">
                      <li>
                        ✅ पंचायतों को GSM प्रोजेक्ट से जोड़ना और उन्हें आर्थिक
                        रूप से आत्मनिर्भर बनाना।
                      </li>
                      <li>
                        ✅ स्थानीय युवाओं और संगठनों को स्वास्थ्य गतिविधियों में
                        शामिल करना।
                      </li>
                    </ul>
                  </motion.div>
                </div>
                

                <p className="mt-4 text-center fst-italic text-secondary">
                  DHM की जिम्मेदारियाँ परियोजना के सफल क्रियान्वयन का मुख्य आधार
                  हैं।
                </p>
                
              </motion.div>
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
