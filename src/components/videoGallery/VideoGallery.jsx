import React from "react";

const VideoGallery = () => {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">🎥 Video Gallery</h2>
        <p className="text-muted">हमारे वीडियो देखें और जानें अधिक</p>
      </div>

      {/* Video Grid */}
      <div className="row g-4">
        {/* Video 1 */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/BvoA6eLHVU8?si=2DZPPqYHbeq8AH3q"
                title="Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">पहला वीडियो</h5>
              <p className="card-text">
                यहाँ आपके प्रोजेक्ट से जुड़ी जानकारी का वीडियो।
              </p>
            </div>
          </div>
        </div>

        {/* Video 2 */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Jq0hCBFf6Xo?si=_fyBquFFQl20f0S1"
                title="Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">दूसरा वीडियो</h5>
              <p className="card-text">
                स्वास्थ्य जागरूकता और अभियान पर वीडियो।
              </p>
            </div>
          </div>
        </div>

        {/* Video 3 */}
        <div className="col-md-4">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/b0tJlTDQ67c?si=5IBc-_mtJaut1GKi"
                title="Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">तीसरा वीडियो</h5>
              <p className="card-text">
                ग्राम स्वास्थ्य मित्र से जुड़ा वीडियो।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
