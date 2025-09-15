"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {
  const files = [
    {
      title: "नामांकन फॉर्म",
      description: "GSM नामांकन फॉर्म.",
      file: "/assets/pdfs/Namankanpatr.pdf",
      size: "2.3 MB",
    },
    {
      title: "भर्ती सूचना - ग्रामीण स्वास्थ्य मित्र योजना, बिहार 2025",
      description: "भर्ती की सभी जानकारी और प्रक्रिया इस फॉर्म में उपलब्ध है।",
      file: "/assets/pdfs/भर्ती सूचना - ग्रामीण स्वास्थ्य मित्र योजना, बिहार 2025.pdf",
      size: "1.8 MB",
    },
    {
      title: "Self Declaration Letter",
      description: "Candidate's self-declaration form for GSM activities.",
      file: "/assets/pdfs/Self declaration letter.pdf",
      size: "3.1 MB",
    },
    {
      title: "Volunteer Commitment Form",
      description: "Form to confirm participation and responsibility acceptance.",
      file: "/assets/pdfs/VolunteerCommitment.pdf",
      size: "2.7 MB",
    },
    {
      title: "Health Awareness Consent",
      description: "Consent form for health awareness campaigns.",
      file: "/assets/pdfs/HealthAwarenessConsent.pdf",
      size: "1.5 MB",
    },
    {
      title: "Screening Participation Form",
      description: "Form for individuals to participate in GSM screening events.",
      file: "/assets/pdfs/ScreeningParticipation.pdf",
      size: "2.0 MB",
    },
  ];

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />

        {/* Hero Section */}
        <section
          className="py-5 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #1E3C72, #2A5298)",
          }}
        >
          <div className="container">
            <h1 className="fw-bold display-5">📂 Download Center</h1>
            <p className="lead">
              Access official GSM forms, letters, and application documents.
            </p>
          </div>
        </section>

        {/* Download Cards */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {files.map((file, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card custom-card h-100 border-0 shadow-lg">
                    <div className="card-body d-flex flex-column">
                      {/* Icon inside a circular background */}
                      <div className="icon-circle bg-primary text-white mb-3">
                        <FileText size={28} />
                      </div>
                      <h5 className="fw-bold">{file.title}</h5>
                      <p className="text-muted flex-grow-1">{file.description}</p>
                      <span className="badge bg-light text-dark align-self-start mb-3">
                        📄 {file.size}
                      </span>
                      <Link
                        href={file.file}
                        target="_blank"
                        download
                        className="btn btn-primary d-flex justify-content-center align-items-center gap-2 mt-auto"
                      >
                        <Download size={18} /> Download
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>

      <style jsx>{`
        .custom-card {
          border-radius: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(30, 60, 114, 0.3);
        }
        .icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .btn-primary {
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          transform: scale(1.05);
          background-color: #163b8f;
        }
      `}</style>
    </div>
  );
}
