import Link from "next/link";
import React from "react";

const BreadcrumbThree = ({ title, subtitle }) => {
  return (
    <div
      className="edu-breadcrumb-area position-relative text-white"
      style={{
        backgroundImage: "url('/assets/newimage/GSMBANNER.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="breadcrumb-inner py-5 text-center">
          <div className="page-title">
            <h1 className="title text-white">{title}</h1>
          </div>
          <ul className="edu-breadcrumb list-inline mt-3 ">
            <li className="breadcrumb-item d-inline text-white">
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="separator d-inline text-white">
              <i className="icon-angle-right text-white"></i>
            </li>
            <li className="breadcrumb-item d-inline text-white">
              <a href="#" className="text-white">
                Pages
              </a>
            </li>
            <li className="separator d-inline text-white">
              <i className="icon-angle-right text-white"></i>
            </li>
            <li
              className="breadcrumb-item d-inline text-white active"
              aria-current="page"
            >
              {subtitle}
            </li>
          </ul>
        </div>
      </div>

      {/* Shapes (Optional, ऊपर ही रहते हैं) */}
      <ul className="shape-group position-relative" style={{ zIndex: 2 }}>
        <li className="shape-1">
          <span></span>
        </li>
        <li className="shape-2 scene">
          <img
            data-depth="2"
            src="/assets/images/about/shape-13.png"
            alt="shape"
          />
        </li>
        <li className="shape-3 scene">
          <img
            data-depth="-2"
            src="/assets/images/about/shape-15.png"
            alt="shape"
          />
        </li>
        <li className="shape-4">
          <span></span>
        </li>
        <li className="shape-5 scene">
          <img
            data-depth="2"
            src="/assets/images/about/shape-07.png"
            alt="shape"
          />
        </li>
      </ul>
    </div>
    // <div className="edu-breadcrumb-area">
    //     <div className="container">
    //         <div className="breadcrumb-inner">
    //             <div className="page-title">
    //                 <h1 className="title">{title}</h1>
    //             </div>
    //             <ul className="edu-breadcrumb">
    //                 <li className="breadcrumb-item">
    //                     <Link href="/">
    //                         Home
    //                     </Link>
    //                 </li>
    //                 <li className="separator"><i className="icon-angle-right"></i></li>
    //                 <li className="breadcrumb-item"><a href="#">Pages</a></li>
    //                 <li className="separator"><i className="icon-angle-right"></i></li>
    //                 <li className="breadcrumb-item active" aria-current="page">{subtitle}</li>
    //             </ul>
    //         </div>
    //     </div>
    //     <ul className="shape-group">
    //         <li className="shape-1">
    //             <span></span>
    //         </li>
    //         <li className="shape-2 scene">
    //             <img data-depth="2" src="/assets/images/about/shape-13.png" alt="shape" />
    //         </li>
    //         <li className="shape-3 scene">
    //             <img data-depth="-2" src="/assets/images/about/shape-15.png" alt="shape" />
    //         </li>
    //         <li className="shape-4">
    //             <span></span>
    //         </li>
    //         <li className="shape-5 scene">
    //             <img data-depth="2" src="/assets/images/about/shape-07.png" alt="shape" />
    //         </li>
    //     </ul>
    // </div>
  );
};

export default BreadcrumbThree;
