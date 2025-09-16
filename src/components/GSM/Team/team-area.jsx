import React from "react";

const TeamArea = () => {
  const teamMembers = [
    {
      name: "DR. MITHILESH SINGH",
      title: "BAMS, PHD (CHAIRMAN, BIHAR)",
      img: "/assets/images/chairman.jpg",
    },
    {
      name: "DR. RAJ KUMAR CHAUHAN",
      title: "MBBS, PHD (MD, GSM, BIHAR)",
      img: "/assets/images/md.jpg",
    },
    {
      name: "Er. ASHISH KUMAR",
      title: "B.TECH. (DIRECTOR, GSM, BIHAR)",
      img: "/assets/images/director.jpg",
    },
    {
      name: "DR. ARUN KUMAR",
      title: "B.TECH., M.TECH., PHD (CEO, GSM, BIHAR)",
      img: "/assets/images/ceo.jpg",
    },
    {
      name: "DR. AJEET KUMAR",
      title: "MBBS, MD (HEALTH ADVISOR, GSM, BIHAR)",
      img: "/assets/newimage/ajit.png",
    },
    {
      name: "DR. RANI",
      title: "MBBS (GYNECOLOGIST) (HEALTH ADVISOR, GSM, BIHAR)",
      img: "/assets/newimage/rani.png",
    },
    {
      name: "MR. BIKESH KUMAR",
      title: "VOLUNTEER (LIVELIHOOD DEVELOPMENT PROMOTION, GSM, BIHAR)",
      img: "/assets/newimage/bikesh.png",
    },
    {
      name: "PRITI VERMA",
      title: "VOLUNTEER & OFFICE HEAD (PUBLIC RELATIONSHIP EXECUTIVE)",
      img: "/assets/newimage/prity.png",
    },
    {
      name: "ADVOCATE KUNAL JAIN",
      title: "B.COM, LLB, MBA, DIPLOMA IN CYBER LAW",
      img: "/assets/newimage/kurnal.png",
    },
    {
      name: "SONAM SINGH",
      title: "MEDIA PRABHARI",
      img: "/assets/newimage/sonam.png",
    },
  ];

  return (
    <div className="container my-5 shadow-sm-shadow p-5">
      {/* Top Section with logos */}
      <div className="container text-center my-4">
        {/* Top Logos and Center Content */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* Left Logo */}
          <img src="/assets/images/logo.jpg" alt="Logo Left" height="70" />

          {/* Center Text */}
          <div>
            <h5 className="fw-bold text-danger mb-1">
              ग्रामीण स्वास्थ्य मित्र
            </h5>
            <p className="mb-1">
              स्वास्थ्य एवं परिवार कल्याण मंत्रालय, बिहार सरकार
            </p>
            <h6 className="fw-bold">"RUN & MANAGED BY"</h6>
            <h5 className="fw-bold text-danger mb-1">
              विक्रमशिला स्वास्थ्य एवं तकनीकी शिक्षा परिषद
            </h5>
            <p className="mb-1">
              <strong>
                VIKRAMSHILA HEALTH AND TECHNICAL EDUCATION COUNCIL
              </strong>
            </p>
            <p className="small text-muted">
              AN AUTONOMOUS ORGANIZATION, REGD. BY MCA GOVT. OF INDIA UNDER
              COMPANY ACT: 2013 AND REGD. GOVT. OF BIHAR
            </p>
          </div>

          {/* Right Logo */}
          <img src="/assets/images/logo2.jpg" alt="Logo Right" height="70" />
        </div>

        {/* Red Dashed Heading */}
        <div className="my-3">
          <h4
            className="fw-bold text-danger d-inline-block px-3 py-1"
            style={{
              border: "2px dashed red",
              borderRadius: "8px",
            }}
          >
            OUR GRAMIN SWASTHYA MITRA COMMITTEE'S
          </h4>
        </div>
      </div>

      {/* Team Members */}
      <div className="row g-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 text-center">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={member.img}
                alt={member.name}
                className="card-img-top  p-3"
                style={{ height: "295px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="fw-bold text-danger">{member.name}</h6>
                <p className="small mb-0">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamArea;
