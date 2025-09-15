
import React from 'react'

const OurMissionset = () => {
    return (
        <section className="my-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Section */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold">
                            Our <span className="text-primary">Mission</span>
                        </h2>
                        <p className="lead">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img
                            src="/assets/newimage/man-touching-mission-text-screen_218381-4228.jpg"
                            alt="Our Mission"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMissionset
