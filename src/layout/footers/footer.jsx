import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
  logoLight: "/assets/images/logo.jpg",
  logoDark: "/assets/images/logo.jpg",
  desc: " ग्रामीण स्वास्थ्य ममता (GSM) परियोजना का उद्देश्य ग्रामीण क्षेत्रों में सस्ती और गुणवत्तापूर्ण प्राथमिक स्वास्थ्य सेवाएँ पहुँचाना है।",
  add: "G1-454, Dal Mill Road Near Vidya Memorial Public School, Uttam Nagar, New Delhi-110059",
  Regd: "H. No. 738, Ground Floor, Blk-d, Jahangirpuri City North East Delhi- 110033.",
  call: "8076591948, 8236049275, 9318328064 ,7717765608",
  email: "info@graminswasthyamitra.org",
  widgets: [
    {
      col: "3",
      class: "explore-widget",
      widget_title: "Online Platform",
      footer_links: [
        { link: "GSM/about", title: "About" },
        { link: "event-grid", title: "Events" },
        { link: "GSM/team", title: "Instructor Profile" },
        { link: "purchase-guide", title: "Purchase Guide" },
        { link: "GSM/downloadi", title: "Download" },

      ],
    },
    {
      col: "2",
      class: "quick-link-widget",
      widget_title: "Links",
      footer_links: [
        { link: "contact-us", title: "Contact Us" },
        { link: "gallery-grid", title: "Gallery" },
        { link: "blog-standard", title: "News & Articles" },
        { link: "faq", title: "FAQ's" },
        { link: "sign-in", title: "Sign In/Registration" },
        { link: "coming-soon", title: "Coming Soon" },
        { link: "carrier", title: "Career" },
      ],
    },
  ],
};

const { logoDark, logoLight, desc, add, call, email, widgets } =
  footer_contents;

const Footer = ({ style_2, dark_bg, home_4, cls = "", logo_white = false }) => {
  return (
    <footer
      className={`edu-footer ${
        style_2
          ? style_2
          : dark_bg
          ? "footer-dark bg-image footer-style-3"
          : cls
          ? ""
          : "footer-lighten bg-image footer-style-1"
      } ${cls}`}
    >
      <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="edu-footer-widget">
                {!logo_white && (
                  <div className="logo">
                    <Link href={"/"}>
                      {!dark_bg && (
                        <>
                          {!style_2 && (
                            <img
                              className="logo-light"
                              src={logoLight}
                              alt="Corporate Logo"
                              style={{ width: "100px" }}
                            />
                          )}
                          <img
                            className="logo-dark"
                            src={logoDark}
                            alt="Corporate Logo"
                            style={{ width: "100px" }}
                          />
                        </>
                      )}
                    </Link>

                    {dark_bg && (
                      <Link href={"/"}>
                        <img
                          className="logo-light"
                          src={
                            home_4
                              ? "/assets/images/logo/logo-white.png"
                              : "/assets/images/logo/logo-light-2.png"
                          }
                          alt="Corporate Logo"
                        />
                      </Link>
                    )}
                  </div>
                )}

                {logo_white && (
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/assets/images/logo/logo-white.png"
                        alt="Corporate Logo"
                      />
                    </Link>
                  </div>
                )}

                <p className="description">{desc}</p>
                <div className="widget-information">
                  <ul className="information-list">
                    <li>
                      <span>Corporate & Communication Office:</span>
                      {add}
                    </li>
                    <li>
                      <span>Corporate & Communication Office:</span>
                      {add}
                    </li>
                    <li>
                      <span>Call:</span>
                      <a href="tel:+011235641231">{call}</a>
                    </li>
                    <li>
                      <span>Email:</span>
                      <a
                        href="info@graminswasthyamitra.org"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {widgets.map((w, i) => (
              <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                <div className={`edu-footer-widget ${w.class}`}>
                  <h4 className="widget-title">{w.widget_title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {w.footer_links.map((l, i) => (
                        <li key={i}>
                          <Link href={`/${l.link}`}>{l.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-4 col-md-6">
              <div className="edu-footer-widget">
                <h4 className="widget-title">Contacts</h4>
                <div className="inner">
                  <p className="description">
                    Enter your email address to register to our newsletter
                    subscription
                  </p>
                  <div className="input-group footer-subscription-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                    <button
                      className={`edu-btn ${
                        dark_bg && !home_4 ? "btn-secondary" : ""
                      } btn-medium`}
                      type="button"
                    >
                      Subscribe <i className="icon-4"></i>
                    </button>
                  </div>
                  <ul className="social-share icon-transparent">
                    <FooterSocial />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <p>
                  Copyright {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.abarissoftech.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GSM
                  </a>{" "}
                  Designed By{" "}
                  <a
                    href="https://www.abarissoftech.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Abaris Softech
                  </a>
                  . All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
