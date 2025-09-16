import { useRouter } from "next/navigation";
import React from "react";

const ResistrationFormArea = () => {
  const router = useRouter();
  const submitdata = () => {
    router.push("/carrier/paymentProceed");
  };
  return (
    <div className="container my-4">
      {/* Header Section */}
      <div className="border p-3 rounded text-center rnt-contact-form rwt-dynamic-form">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left Logo */}
          <img
            src="/assets/images/logo.jpg"
            alt="Logo Left"
            style={{ maxHeight: "120px" }}
          />

          {/* Center Text */}
          <div className="flex-grow-1 text-center">
            <h5 className="fw-bold mb-1 text-danger">
              ग्रामीण स्वास्थ्य मित्र
            </h5>
            <p className="mb-1">
              स्वास्थ्य एवं परिवार कल्याण मंत्रालय, बिहार सरकार
            </p>
            <p className="fw-bold">“RUN & MANAGED BY”</p>
            <h5 className="fw-bold mb-1 text-danger">
              विक्रमशिला स्वास्थ्य एवं तकनीकी शिक्षा परिषद
            </h5>
            <p className="mb-1 fw-bold text-primary">
              VIKRAMSHILA HEALTH AND TECHNICAL EDUCATION COUNCIL
            </p>
            <small className="d-block">
              (An Autonomous Organization, Regd. by Govt. of India, Govt. of
              NCT-DELHI)
            </small>
            <small className="d-block">
              Regd. Under CR ACT-1957, MHRD Govt. of India (Dept. of Secondary
              and Higher Education)
            </small>
            <small className="d-block">
              Regd. by NCS-Ministry of Labour and Employment Govt. of India
            </small>
            <small className="d-block">
              Regd. by Ministry of Micro Small and Medium Enterprises Govt. of
              India
            </small>
            <small className="d-block fw-bold text-danger">
              Approved by Skill India (NSDC)
            </small>
          </div>

          {/* Right Logo */}
          <img
            src="/assets/images/logo3.jpg"
            alt="Logo Right"
            style={{ maxHeight: "120px" }}
          />
        </div>
      </div>

      {/* Form Title */}
      <h5 className="text-center fw-bold my-3 border p-2 rounded bg-light">
        नामांकन - पत्र
      </h5>

      {/* Form */}
      <form className="border p-4 rounded shadow-sm rnt-contact-form rwt-dynamic-form">
        {/* Apply For + Photo */}
        <div className="row mb-4">
          <div className="col-md-8">
            <h6 className="fw-bold">Apply For</h6>
            {["GSM", "BHM", "DHM", "SHPD"].map((course, idx) => (
              <div className="form-check" key={idx}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`course${idx}`}
                />
                <label className="form-check-label" htmlFor={`course${idx}`}>
                  {course}
                </label>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center border d-flex align-items-center justify-content-center">
            <p>
              यहाँ अपना हाल का
              <br />
              सीधा खींचा पासपोर्ट
              <br />
              साइज़ का फोटो चिपकाएँ
            </p>
          </div>
        </div>

        {/* Training Centre & Name */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">
              1. प्रशिक्षण केंद्र / Training Centre
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">2. नाम / Name</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Father/Husband & DOB */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">
              3. पिता / पति का नाम F/o W/o Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">4. जन्म तिथि / DOB</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        {/* Education */}
        <div className="mb-3">
          <label className="form-label">
            5. शैक्षिक योग्यता / Educational Qualification
          </label>
          <input type="text" className="form-control" />
        </div>

        {/* Reservation Category */}
        <div className="mb-3">
          <label className="form-label">6. आरक्षण कोटि :</label>
          <div className="d-flex flex-wrap gap-3">
            {[
              "सामान्य",
              "पिछड़ी जाति",
              "अत्यंत पिछड़ी जाति",
              "अनुसूचित जाति",
              "अनुसूचित जनजाति",
              "दिव्यांग",
              "महिला",
            ].map((cat, idx) => (
              <div className="form-check form-check-inline" key={idx}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`cat${idx}`}
                />
                <label className="form-check-label" htmlFor={`cat${idx}`}>
                  {cat}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">7. स्थायी पता : ग्राम</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">वार्ड संख्या</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">पंचायत</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">पोस्ट</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">थाना</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">जिला</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">राज्य</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">पिन</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* Mobile & WhatsApp */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">मोबाइल</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">व्हाट्सएप नंबर</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        {/* How did you know */}
        <div className="mb-3">
          <label className="form-label">
            8. इस कोर्स के बारे में आपको कैसे जानकारी मिली?
          </label>
          <div className="d-flex flex-wrap gap-3">
            {[
              "पर्चा",
              "बैनर",
              "पड़ोसी/मित्र",
              "रैली",
              "भूतपूर्व विद्यार्थी",
              "बैंकों",
              "घर पर आकर जानकारी दी",
              "कोई अन्य",
            ].map((info, idx) => (
              <div className="form-check form-check-inline" key={idx}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`info${idx}`}
                />
                <label className="form-check-label" htmlFor={`info${idx}`}>
                  {info}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Interest in other courses */}
        <div className="mb-3">
          <label className="form-label">
            9. इस कोर्स के अलावा आपकी किस अन्य कोर्स में दिलचस्पी है?
          </label>
          <input type="text" className="form-control mb-2" />
          <input type="text" className="form-control mb-2" />
          <input type="text" className="form-control" />
        </div>

        {/* Future Plans */}
        <div className="mb-3">
          <label className="form-label">
            10. इस कोर्स को पूरा करने के बाद आपकी भविष्य की क्या योजनाएँ हैं?
          </label>
          <div className="d-flex flex-wrap gap-3">
            {["नौकरी", "अतिरिक्त शिक्षा", "स्वयं रोजगार", "कोई अन्य"].map(
              (plan, idx) => (
                <div className="form-check form-check-inline" key={idx}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`plan${idx}`}
                  />
                  <label className="form-check-label" htmlFor={`plan${idx}`}>
                    {plan}
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Signature & Date */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">
              11. प्रशिक्षणार्थी का हस्ताक्षर
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">तिथि</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary mt-4"
            style={{ width: "200px", height: "50px", fontSize: "20px" }}
            onClick={submitdata}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResistrationFormArea;
