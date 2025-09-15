import React from 'react';
import { SocialShare } from '../social-share';

const ContactMeArea = () => {
    return (
        <section className="section-gap-equal about-leadership-area">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-10">
        <div className="about-leadership text-center">
          <h2 className="heading-title mb-5">Our Leadership</h2>

          {/* Chairman */}
          <div className="leader mb-5">
            <h3 className="leader-title">Dr. Mithilesh Kumar Singh</h3>
            <h5 className="designation">Chairman</h5>
            <p className="description mt-3">
              Dr. Mithilesh Kumar Singh is the visionary Chairman of our organization. With decades of 
              experience in education, healthcare, and social development, he has dedicated his life 
              to creating opportunities for youth and professionals through quality training and awareness programs. 
              His leadership is focused on empowering students with the right skills and guiding the institute 
              to achieve national and international recognition.
            </p>
          </div>

          {/* MD */}
          <div className="leader mb-5">
            <h3 className="leader-title">Dr. Rajkumar Chauhan</h3>
            <h5 className="designation">Managing Director (MD)</h5>
            <p className="description mt-3">
              Dr. Rajkumar Chauhan serves as the Managing Director, bringing a wealth of expertise in 
              organizational development and administration. Under his direction, the institute has expanded 
              its reach across India, ensuring that skill-based education is accessible to students from all 
              walks of life. His role emphasizes operational excellence, transparency, and innovation in training 
              methodologies.
            </p>
          </div>

          {/* Director */}
          <div className="leader mb-5">
            <h3 className="leader-title">Er. Ashish Srivastava</h3>
            <h5 className="designation">Director</h5>
            <p className="description mt-3">
              Er. Ashish Srivastava, the Director of the organization, is a dynamic leader known for his 
              technical expertise and forward-thinking approach. With a strong engineering background, 
              he has played a key role in introducing modern teaching practices, digital platforms, and 
              skill-oriented courses to meet today’s industry demands. As Director, he focuses on academic 
              excellence, student engagement, and partnerships with industries.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ContactMeArea;