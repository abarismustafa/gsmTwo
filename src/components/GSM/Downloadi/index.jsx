"use client";
import React, { useState } from "react";
import { Footer, Header } from "../../../layout";
import { Download, Info, Search } from "lucide-react";
import Link from "next/link";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import styles from "@/styles/BackgroundStyles.module.css";

export default function InformationDownloadPage() {
  const [query, setQuery] = useState("");

  const infoFiles = [
    {
      title: "Prospectus Book",
      description:
        "Step-by-step guide for GSM volunteers with instructions and best practices.",
      file: "/assets/pdfs/Prospectus_Book.pdf",
      size: "25 MB",
    },
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

  const filteredFiles = infoFiles.filter((file) =>
    file.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="sticky-header">
      <div
        id="main-wrapper"
        className={`main-wrapper ${styles["gradient-green"]}`}
      >
        <Header no_top_bar={true} />

        <BreadcrumbThree title="📘 Information Center" subtitle="GSM" />
        <br />

        {/* Search Bar */}
        <div className="d-flex justify-content-center">
          <div className="input-group shadow-sm" style={{ maxWidth: "500px" }}>
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

        {/* Horizontal List of Files */}
        <section className="py-5">
          <div className="container">
            <div className="list-group">
              {filteredFiles.length > 0 ? (
                filteredFiles.map((file, index) => (
                  <div
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center glass-item mb-3"
                  >
                    <div className="d-flex flex-column">
                      <h6 className="fw-bold mb-1 d-flex align-items-center">
                        <Info size={20} className="text-success me-2" />
                        {file.title}
                      </h6>
                      <p className="text-muted small mb-0">
                        {file.description}
                      </p>
                      <small className="text-secondary">📄 {file.size}</small>
                    </div>
                    <Link
                      href={file.file}
                      target="_blank"
                      download
                      className="btn btn-outline-success rounded-pill d-flex align-items-center gap-2"
                    >
                      <Download size={16} />
                      Download
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">No documents found.</p>
              )}
            </div>
          </div>
        </section>

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>

      <style jsx>{`
        .glass-item {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          padding: 1rem 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .glass-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        .btn-outline-success {
          border-width: 2px;
          font-weight: 500;
          padding: 0.4rem 1rem;
          transition: all 0.3s ease;
        }
        .btn-outline-success:hover {
          background-color: #28a745;
          color: #fff;
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
