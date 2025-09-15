"use client";
import React, { useState } from "react";
import { Footer, Header } from "../../../layout";
import { Download, Info, Search } from "lucide-react";
import Link from "next/link";

export default function InformationDownloadPage() {
  const [query, setQuery] = useState("");

  const infoFiles = [
    {
      title: "Introduction to GSM",
      description:
        "Step-by-step guide for GSM volunteers with instructions and best practices.",
      file: "/assets/pdfs/Introduction to GSM.pdf",
      size: "2.5 MB",
    },
    {
      title: "ग्रामीण स्वास्थ्य मित्र",
      description:
        "A checklist for conducting community health awareness programs.",
      file: "/assets/pdfs/ग्रामीण स्वास्थ्य मित्र kits uses.pdf",
      size: "1.2 MB",
    },
    {
      title: "Vision and Mission of GSM Project",
      description:
        "Learn about the vision and mission that drives GSM forward.",
      file: "/assets/pdfs/Vission and mission of GSM Project .pdf",
      size: "2.9 MB",
    },
    {
      title: "GSM Patient Screening",
      description: "Guidelines for conducting patient screening effectively.",
      file: "/assets/pdfs/ग्GSM Patient Screening.pdf",
      size: "1.2 MB",
    },
    {
      title: "GSM Standard Screening Kit",
      description:
        "A detailed explanation of the contents of the screening kit.",
      file: "/assets/pdfs/GSM_Standard_Screening_Kit.pdf",
      size: "2.9 MB",
    },
    {
      title: "Funding Organization",
      description: "Information about GSM’s funding partners and contributors.",
      file: "/assets/pdfs/Funding organization .pdf",
      size: "2.9 MB",
    },
    {
      title: "Gramin Swasthya Mitra",
      description: "Information about community health initiatives under GSM.",
      file: "/assets/pdfs/gramin swasthya mitra.pdf",
      size: "2.9 MB",
    },
    {
      title: "Poster A-3",
      description: "Official poster for awareness campaigns in communities.",
      file: "/assets/pdfs/Poster A-3.pdf",
      size: "2.9 MB",
    },
  ];

  // Filter results based on search query
  const filteredFiles = infoFiles.filter((file) =>
    file.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />

        {/* Hero Section */}
        <section
          className="py-5 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #43a047, #1b5e20)",
          }}
        >
          <div className="container">
            <h1 className="fw-bold display-5 mb-3">📘 Information Center</h1>
            <p className="lead mb-4" style={{ color: "#ffffff" }}>
              Download useful guides, protocols, and resources to stay informed.
            </p>

            {/* Search Bar */}
            <div className="d-flex justify-content-center">
              <div className="input-group" style={{ maxWidth: "500px" }}>
                <span className="input-group-text bg-white">
                  <Search className="text-success" size={18} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search documents..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Information Cards */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {filteredFiles.length > 0 ? (
                filteredFiles.map((file, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div className="card glass-card h-100">
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
                ))
              ) : (
                <p className="text-center text-muted">
                  No documents found for your search.
                </p>
              )}
            </div>
          </div>
        </section>

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border-radius: 1rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }
        .btn-success {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .btn-success:hover {
          background-color: #145a32;
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
