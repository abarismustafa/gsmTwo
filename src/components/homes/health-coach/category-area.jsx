import React from "react";

// category item
function CategoryItem({ delay, clr, icon, title, icon_img }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className={`categorie-grid categorie-style-5 color-${clr}`}>
        <div className="icon">
          {!icon_img && <i className={`icon-${icon}`}></i>}
          {icon_img && (
            <img
              src={`/assets/images/svg-icons/icon-${icon_img}.svg`}
              alt="Image Svg"
            />
          )}
        </div>
        <div className="content">
          <h5 className="title">{title}</h5>
          <p>...</p>
        </div>
      </div>
    </div>
  );
}

const CategoryArea = () => {
  return (
    <div className="edu-categorie-area categorie-area-5 edu-section-gap">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title">ग्रामीण स्वास्थ्य मित्र (GSM)</span>
          <h2 className="title">
            सामाजिक स्वास्थ्य सेवा अभियान <br /> ‘हर गाँव – हर वार्ड, स्वास्थ्य
            आपके द्वार’
          </h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
        </div>
        <div className="row g-5">
          <CategoryItem
            delay="50"
            clr="primary"
            icon="83"
            title="गाँव–गाँव में स्वास्थ्य जागरूकता फैलाना"
          />
          <CategoryItem
            delay="100"
            clr="secondary"
            icon="81"
            title="प्रत्येक परिवार तक बुनियादी स्वास्थ्य जाँच पहुँचाना"
          />
          <CategoryItem
            delay="150"
            clr="extra08"
            icon="78"
            title="ग्रामीण क्षेत्रों में प्राथमिक स्वास्थ्य सेवाओं की उपलब्धता सुनिश्चित करना"
          />
          <CategoryItem
            delay="50"
            clr="tertiary"
            icon_img="04"
            title="गाँव व वार्ड स्तर पर स्वास्थ्य सेवाओं का पहला संपर्क सूत्र"
          />
          <CategoryItem
            delay="100"
            clr="extra02"
            icon_img="05"
            title="मरीजों की स्क्रीनिंग (शुगर, वजन, प्राथमिक जाँच)"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="मरीजों का स्वास्थ्य जीवनचर्या एवं रिपोर्ट तैयार करना"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="लोगों को सरकारी / गैर-सरकारी स्वास्थ्य योजनाओं से जोड़ना"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="स्वास्थ्य जागरूकता अभियान एवं प्रशिक्षण कार्यक्रम चलाना"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="3 माह का प्रशिक्षण – ऑनलाइन / ऑफलाइन परीक्षा"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="मरीज स्क्रीनिंग किट उपलब्ध"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="सफल प्रशिक्षण के बाद ग्रामीण स्वास्थ्य मित्र प्रमाणपत्र"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="लक्ष्य: प्रति वर्ष 1000 मरीजों की स्क्रीनिंग"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="स्वास्थ्य जाँच शुल्क मात्र ₹1/- प्रतिवेदन"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="समाज सेवा का अवसर"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="स्वास्थ्य क्षेत्र में कैरियर व रोजगार की दिशा"
          />
          <CategoryItem
            delay="150"
            clr="extra07"
            icon="39"
            title="गाँव–गाँव में “स्वस्थ भारत–समर्थ भारत” बनाने में भागीदारी"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryArea;
