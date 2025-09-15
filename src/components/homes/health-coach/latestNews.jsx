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
                सर्वत्र शिक्षा समिति के संबंध में विस्तृत जानकारी हेतु आदरणीय
                श्रीमान गजेन्द्र सिंह जी शेखावत साहब (कैबिनेट मंत्री संस्कृति
                मंत्रालय भारत सरकार), आदरणीय श्रीमान इंद्रजीत सिंह जी राव साहब
                (राज्य मंत्री संस्कृति मंत्रालय भारत सरकार) एवं संस्कृति
                मंत्रालय भारत सरकार के नोडल अधिकारी आदरणीय श्रीमान गुरमीत सिंह
                जी चावला (संयुक्त सचिव) से मुलाकात करेंगे, राजस्थान के समस्त
                D.P.C.O/R.P.C.O और प्रदेश स्तरीय समस्त अधिकारीयों के साथ
                पहुंचेंगे, संस्कृति मंत्रालय भारत सरकार नई दिल्ली!
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
