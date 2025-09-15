import React from "react";

const ContactMap = () => {
  return (
    <div className="google-map-area">
      <div className="mapouter">
        <div className="gmap_canvas">
          {/* <iframe id="gmap_canvas" src="<iframe src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2093324855537!2d77.05437717473696!3d28.623487584492704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d8a3a4baff%3A0x29ba678d2473e722!2sVidya%20Memorial%20Sr.%20Sec.%20Public%20School!5e0!3m2!1sen!2sin!4v1757936698099!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen=" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2093324855537!2d77.05437717473696!3d28.623487584492704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d8a3a4baff%3A0x29ba678d2473e722!2sVidya%20Memorial%20Sr.%20Sec.%20Public%20School!5e0!3m2!1sen!2sin!4v1757936698099!5m2!1sen!2sin"
            width={1500}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
