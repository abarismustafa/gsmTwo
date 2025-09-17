"use client";
import React, { useState } from "react";
import { Footer, Header } from "../../../layout";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import styles from "@/styles/BackgroundStyles.module.css";



export default function DownloadPage() {
  const files = [
    { title: "नामांकन फॉर्म", description: "GSM नामांकन फॉर्म.", file: "/assets/pdfs/Namankanpatr.pdf", size: "2.3 MB" },
    { title: "भर्ती सूचना - ग्रामीण स्वास्थ्य मित्र योजना, बिहार 2025", description: "भर्ती की सभी जानकारी और प्रक्रिया इस फॉर्म में उपलब्ध है।", file: "/assets/pdfs/भर्ती सूचना - ग्रामीण स्वास्थ्य मित्र योजना, बिहार 2025.pdf", size: "1.8 MB" },
    { title: "ग्रामीण स्वास्थ्य मित्र (BHM)", description: "Step-by-step guide for GSM volunteers with instructions and best practices.", file: "/assets/pdfs/ग्रामीण स्वास्थ्य मित्र (BHM).pdf", size: "2.5 MB" },
    { title: "ग्रामीण स्वास्थ्य मित्र (DHM)", description: "Step-by-step guide for GSM volunteers with instructions and best practices.", file: "/assets/pdfs/ग्रामीण स्वास्थ्य मित्र (DHM).pdf", size: "2.5 MB" },
    { title: "ग्रामीण स्वास्थ्य मित्र (GSM)", description: "Step-by-step guide for GSM volunteers with instructions and best practices.", file: "/assets/pdfs/ग्रामीण स्वास्थ्य मित्र (GSM).pdf", size: "2.5 MB" },
    { title: "Volunteer Commitment Form", description: "Form to confirm participation and responsibility acceptance.", file: "/assets/pdfs/VolunteerCommitment.pdf", size: "2.7 MB" },
    { title: "Health Awareness Consent", description: "Consent form for health awareness campaigns.", file: "/assets/pdfs/HealthAwarenessConsent.pdf", size: "1.5 MB" },
    { title: "Screening Participation Form", description: "Form for individuals to participate in GSM screening events.", file: "/assets/pdfs/ScreeningParticipation.pdf", size: "2.0 MB" },
  ];

  const [search, setSearch] = useState("");

  const filteredFiles = files.filter(
    (file) =>
      file.title.toLowerCase().includes(search.toLowerCase()) ||
      file.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sticky-header">
<div id="main-wrapper" className={`main-wrapper ${styles["gradient-blue"]}`}>
        <Header no_top_bar={true} />

        <BreadcrumbThree
          title="📂 Download Center"
          subtitle="Access official GSM forms, letters, and application documents"
        />

        {/* Search Bar */}
        <section className="py-4">
          <div className="container">
            <input
              type="text"
              className="form-control shadow-sm rounded-pill border-2 border-primary-subtle"
              placeholder="🔍 Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        {/* Download List */}
        <section className="py-5">
          <div className="container">
            <div className="list-group">
              {filteredFiles.length > 0 ? (
                filteredFiles.map((file, index) => (
                  <div
                    key={index}
                    className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 shadow p-4 rounded-4 bg-white bg-opacity-90"
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div className="icon-circle bg-primary text-white shadow">
                        <FileText size={22} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1 text-dark">{file.title}</h6>
                        <p className="text-muted small mb-1">{file.description}</p>
                        <span className="badge bg-light text-dark">
                          📄 {file.size}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={file.file}
                      target="_blank"
                      download
                      className="btn btn-outline-primary rounded-pill d-flex align-items-center gap-2 mt-3 mt-md-0"
                    >
                      <Download size={18} /> Download
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted mt-4">
                  ❌ No documents match your search.
                </p>
              )}
            </div>
          </div>
        </section>

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>

      <style jsx>{`
      

        .icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .list-group-item {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .list-group-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        .btn-outline-primary {
          border-width: 2px;
          font-weight: 500;
          padding: 0.4rem 1rem;
        }
        .btn-outline-primary:hover {
          background-color: #163b8f;
          color: white;
        }
      `}</style>
    </div>
  );
}
