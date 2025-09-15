"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import { Download, Info } from "lucide-react";
import Link from "next/link";

export default function InformationDownloadPage() {
  const infoFiles = [
    {
      title: "Volunteer Training Manual",
      description: "Step-by-step guide for GSM volunteers with instructions and best practices.",
      file: "/assets/pdfs/volunteer-training.pdf",
      size: "2.5 MB",
    },
    {
      title: "Community Health Checklist",
      description: "A checklist for conducting community health awareness programs.",
      file: "/assets/pdfs/ग्रामीण स्वास्थ्य मित्र kits uses.pdf",
      size: "1.2 MB",
    },
    {
      title: "Vission and mission of GSM Project ",
      description: "Vission and mission of GSM Project .",
      file: "/assets/pdfs/Vission and mission of GSM Project .pdf",
      size: "2.9 MB",
    },
  ];

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />

        {/* Hero Section */}
        <section className="py-5 text-center" style={{ background: "#e8f5e9" }}>
          <div className="container">
            <h1 className="fw-bold text-success display-5">
              📘 Information Center
            </h1>
            <p className="lead text-muted">
              Download useful guides, protocols, and resources to stay informed.
            </p>
          </div>
        </section>

        {/* Information Cards */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {infoFiles.map((file, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card shadow-lg border-0 rounded-4 h-100">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <Info size={32} className="text-success me-2" />
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
                          className="btn btn-success w-100 d-flex justify-content-center align-items-center gap-2"
                        >
                          <Download size={18} />
                          Download Info
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
        .btn-success {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .btn-success:hover {
          background-color: #1b5e20;
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
