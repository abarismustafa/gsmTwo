"use client";
import { useState } from "react";
import { useTheme } from "next-themes";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setDownloaded(false);

    // Simulate file download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/assets/pdfs/Prospectus_Book.pdf";
      link.download = "GSM_Prospectus.pdf";
      link.click();

      setDownloading(false);
      setDownloaded(true);
    }, 2000); // simulate 2 sec delay
  };

  return (
    <>
      {/* Theme Switcher */}
      <div className="dark-light-wrapper">
        <label htmlFor="dark-light-checkbox" className="dark-light-label">
          <input
            type="checkbox"
            className="dark-light-checkbox"
            id="dark-light-checkbox"
          />
          <p
            className="switcher swith-to-light"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Light
          </p>
          <p
            className="switcher swith-to-dark"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Dark
          </p>

          <div className="dark-light-ball">
            <div
              className="dark-light-ball-inner"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <i
                className="sun-icon ri-sun-fill"
                onClick={() => setTheme("dark")}
              ></i>
              <i
                className="moon-icon ri-moon-fill"
                onClick={() => setTheme("light")}
              ></i>
            </div>
          </div>
        </label>
      </div>

      {/* Download Button */}
      <div className="download-browser">
        <button
          onClick={handleDownload}
          className="btn btn-primary"
          style={{
            marginTop: "2rem",
            padding: "14px 28px",
            borderRadius: "8px",
            fontSize: "1.25rem",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "1px",
            cursor: downloading ? "not-allowed" : "pointer",
            opacity: downloading ? 0.7 : 1,
          }}
          disabled={downloading}
        >
          {downloading
            ? "Downloading..."
            : downloaded
            ? "Downloaded ✅"
            : "Download Prospectus"}
        </button>
      </div>
    </>
  );
};

export default Theme;
