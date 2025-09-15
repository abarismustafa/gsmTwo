"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {
  const files = [
    {
      title: "नामांकन फॉर्म",
      description: "GSM नामांकन फॉर्म .",
      file: "/assets/pdfs/Namankanpatr.pdf",
      size: "2.3 MB",
    },
    {
      title: "Health Awareness Guide",
      description: "A complete health awareness training guide for volunteers.",
      file: "/assets/pdfs/health-guide.pdf",
      size: "1.8 MB",
    },
    {
      title: "GSM Project Overview",
      description: "Summary of GSM projects and future goals.",
      file: "/assets/pdfs/project-overview.pdf",
      size: "3.1 MB",
    },
  ];

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />

        {/* Hero Section */}
        <section className="py-5 bg-light text-center">
          <div className="container">
            <h1 className="fw-bold text-primary display-5">📂 Download Center</h1>
            <p className="lead text-muted">
              Get access to important reports, forms, and guides in one place.
            </p>
          </div>
        </section>

        {/* Download Cards */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {files.map((file, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card shadow-lg border-0 rounded-4 h-100">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <FileText size={32} className="text-primary me-2" />
                        <h5 className="fw-bold mb-0">{file.title}</h5>
                      </div>
                      <p className="text-muted mb-3">{file.description}</p>
                      <small className="text-secondary mb-3">
                        📄 PDF • {file.size}
                      </small>
                      <div className="mt-auto">
                        <Link
                          href={file.file}
                          target="_blank"
                          download
                          className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2"
                        >
                          <Download size={18} />
                          Download PDF
                        </Link>
                      </div>
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
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .btn-primary {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .btn-primary:hover {
          background-color: #004aad;
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
