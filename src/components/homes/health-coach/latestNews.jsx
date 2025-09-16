const LatestNews = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="my-3">
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="5"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                "ग्रामीण स्वास्थ्य मित्र परियोजना के अंतर्गत जिला स्वास्थ्य
                प्रबंधक (District Health Care Manager) 38 पद, ब्लॉक स्वास्थ्य
                प्रबंधक (BHM) 534 पद तथा ग्रामीण स्वास्थ्य मित्र पद हेतु
                प्रत्येक वार्ड में एक पुरुष और एक महिला का चयन किया जाएगा। कुल
                मिलाकर लगभग 2 लाख 30 हज़ार भर्ती की जाएंगी।"
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
