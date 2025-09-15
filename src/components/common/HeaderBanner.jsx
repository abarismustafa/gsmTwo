import React from "react";

const HeaderBanner = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 justify-center gap-10">
      <div className="top-logo d-flex justify-content-between">
        {/* Logo 1 */}
        <img
          src="/assets/images/logo.jpg"
          alt="Logo 1"
          className="h-20 object-contain"
        />

        {/* Logo 2 */}
        <img
          src="/assets/images/logo2.jpg"
          alt="Logo 2"
          className="h-20 object-contain"
        />

        {/* Logo 3 */}
        <img
          src="/assets/images/logo3.jpg"
          alt="Logo 3"
          className="h-20 object-contain"
        />
      </div>
    </div>
  );
};

export default HeaderBanner;
