"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import useParallax from "@/hooks/use-parallax";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  BookOpen,
  Activity,
  Handshake,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import styles from "@/styles/BackgroundStyles.module.css";

const GSMResponsibilitiesPage = () => {
  useParallax();

  return (
    <div className="sticky-header">
      <div
        id="main-wrapper"
        className={`main-wrapper ${styles["gradient-blue"]}`}
      >
        <Header no_top_bar={true} />
        <BreadcrumbThree
          title="GSM की मुख्य जिम्मेदारियाँ"
          subtitle="Gram Swasthya Mitra - Roles & Responsibilities"
        />

        <section className="py-5">
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
                    🏥 GSM की मुख्य जिम्मेदारियाँ
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
                        1️⃣ स्वास्थ्य निगरानी
                      </h5>
                      <ul className="mb-0 mt-2">
                        <li>✅ अपने पंचायत/गांव में नियमित स्वास्थ्य जांच करना।</li>
                        <li>✅ रोगों और स्वास्थ्य समस्याओं की रिपोर्ट जिला प्रशासन को भेजना।</li>
                        <li>✅ बच्चों और बुजुर्गों के स्वास्थ्य रिकॉर्ड बनाए रखना।</li>
                      </ul>
                    </motion.div>

                    {/* Responsibility 2 */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-danger-subtle p-5 rounded border border-danger"
                    >
                      <h5 className="d-flex align-items-center fw-bold text-danger mb-3">
                        <BookOpen className="me-2" />
                        2️⃣ स्वास्थ्य शिक्षा और प्रशिक्षण
                      </h5>
                      <ul className="mb-0 mt-2">
                        <li>✅ ग्रामीणों को स्वास्थ्य, पोषण और स्वच्छता के बारे में जागरूक करना।</li>
                        <li>✅ BHM और जिला स्वास्थ्य अधिकारियों द्वारा आयोजित प्रशिक्षण में भाग लेना।</li>
                      </ul>
                    </motion.div>

                    {/* Responsibility 3 */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-warning-subtle p-5 rounded border border-warning"
                    >
                      <h5 className="d-flex align-items-center fw-bold text-warning mb-3">
                        <BarChart3 className="me-2" />
                        3️⃣ डेटा संग्रह और रिपोर्टिंग
                      </h5>
                      <ul className="mb-0 mt-2">
                        <li>✅ रोगों और स्वास्थ्य अभियान का डेटा नियमित रूप से अपडेट करना।</li>
                        <li>✅ डिजिटल प्लेटफॉर्म पर रिपोर्ट जमा करना।</li>
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
                        <li>✅ मासिक स्वास्थ्य शिविर और स्क्रीनिंग कार्यक्रम आयोजित करना।</li>
                        <li>✅ पंचायत और स्कूलों में स्वास्थ्य जागरूकता अभियान चलाना।</li>
                      </ul>
                    </motion.div>

                    {/* Responsibility 5 */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-purple-subtle p-5 rounded border border-purple"
                    >
                      <h5 className="d-flex align-items-center fw-bold text-purple mb-3">
                        <Handshake className="me-2" />
                        5️⃣ सामुदायिक सहयोग
                      </h5>
                      <ul className="mb-0 mt-2">
                        <li>✅ स्थानीय NGOs और स्वास्थ्य संस्थानों के साथ समन्वय।</li>
                        <li>✅ पंचायतों के साथ मिलकर स्वास्थ्य गतिविधियों में सहयोग करना।</li>
                      </ul>
                    </motion.div>

                    {/* Responsibility 6 */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-pink-subtle p-5 rounded border border-pink"
                    >
                      <h5 className="d-flex align-items-center fw-bold text-pink mb-3">
                        <AlertTriangle className="me-2" />
                        6️⃣ आपातकालीन सेवाएँ
                      </h5>
                      <ul className="mb-0 mt-2">
                        <li>✅ स्वास्थ्य आपात स्थितियों में त्वरित कार्रवाई।</li>
                        <li>✅ जिला स्वास्थ्य अधिकारियों के संपर्क में रहकर दवाओं और आपूर्ति सुनिश्चित करना।</li>
                      </ul>
                    </motion.div>

                    {/* Responsibility 7 */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-light p-5 rounded border border-secondary"
                    >
                      <h5 className="d-flex align-items-center fw-bold text-dark mb-3">
                        <Users className="me-2" />
                        7️⃣ पंचायत और समुदाय सशक्तिकरण
                      </h5>
                      <ul className="mb-0 mt-2">
                        <li>✅ ग्राम समुदाय को स्वास्थ्य गतिविधियों में सक्रिय रूप से शामिल करना।</li>
                        <li>✅ स्थानीय युवाओं को स्वास्थ्य नेटवर्क में जोड़ना।</li>
                      </ul>
                    </motion.div>
                  </div>

                  <p className="mt-4 text-center fst-italic text-secondary">
                    GSM की जिम्मेदारियाँ ग्रामीण स्वास्थ्य सेवाओं की सफलता के लिए महत्वपूर्ण हैं।
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

export default GSMResponsibilitiesPage;
