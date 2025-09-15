"use client";
import React from "react";
import Image from "next/image";
import { Footer, Header } from "../../../layout";
import useParallax from "@/hooks/use-parallax";
import { useRouter } from "next/navigation";

const TeamPage = () => {
  useParallax();
  const router = useRouter();

  const teamMembers = [
    {
      name: "Chairman",
      role: "Leader & Visionary",
      image: "/assets/images/chairman.jpg",
      link: "/GSM/chairman",
    },
    {
      name: "Managing Director",
      role: "Strategic Head",
      image: "/assets/images/md.jpg",
      link: "/GSM/md",
    },
    {
      name: "Director",
      role: "Operations Head",
      image: "/assets/images/director.jpg",
      link: "/GSM/director",
    },
    {
      name: "CEO",
      role: "Chief Executive Officer",
      image: "/assets/images/ceo.jpg",
      link: "/GSM/ceo",
    },
  ];

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />

        {/* Partner Logos Section */}
        <section className="py-5 text-center bg-light">
          <div className="container">
            <h2 className="fw-bold mb-4 text-primary">Our Partners & Support</h2>
            <div className="d-flex justify-content-center gap-5 flex-wrap">
              {["logo.jpg", "logo2.jpg", "logo3.jpg"].map((logo, index) => (
                <Image
                  key={index}
                  src={`/assets/images/${logo}`}
                  alt={`Company Logo ${index + 1}`}
                  width={160}
                  height={90}
                  className="rounded shadow-sm"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5 text-dark">
              Meet Our Leadership Team
            </h2>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div
                    className="card border-0 shadow-lg rounded-4 h-100 team-card"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div className="overflow-hidden rounded-top-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="img-fluid w-100 team-image"
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="fw-bold">{member.name}</h5>
                      <p className="text-muted mb-3">{member.role}</p>
                      <button
                        className="btn btn-outline-primary btn-sm px-3"
                        style={{
                          borderRadius: "50px",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() => router.push(member.link)}
                      >
                        Know More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>

      {/* Extra Styling */}
      <style jsx>{`
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .team-card:hover .team-image {
          transform: scale(1.05);
        }
        button:hover {
          background-color: #0d6efd;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
