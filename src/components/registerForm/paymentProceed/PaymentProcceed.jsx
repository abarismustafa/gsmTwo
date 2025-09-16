"use client";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import { Footer, Header } from "@/layout";
import { useCallback } from "react";
import { useRazorpay } from "react-razorpay";

const PaymentProcceed = () => {
  const Razorpay = useRazorpay();
  const handlePayment = useCallback(
    async (data) => {
      console.log("paymetRzor", data);
      // const filterSecrateKy = paymentSelectData?.map((item) => {
      //   return item
      // })
      // console.log(filterSecrateKy);

      // const filterRoazarKey = filterSecrateKy?.filter((item) => {
      //   return item?.slug == 'razorpay'
      // })
      // console.log('filterRoazarKey', filterRoazarKey[0]?.key);
      try {
        // const res = await rozarPayApi(rozarPayData);
        // "rzp_test_9VeeiBAgDSX9Tq"
        // console.log('hkjbhjkhjlknl', user);
        // rzp_test_Y1vZ5apL1BJ4Gg
        const options = {
          key: "rzp_test_Y1vZ5apL1BJ4Gg", // Replace with your Razorpay key
          amount: 20000, // Amount in paise (500 INR)
          // amount: payableAmount * 100,
          currency: "INR",
          name: "Gramin Swasthya Mitra",
          description: "  Transaction",
          image: "https://your-logo-url.com", // Optional logo URL
          order_id: data?.data?.order?.id,
          handler: (response) => {
            //  console.log(response);
            checkoutApi(response);
            // alert(`Payment ID: ${response.razorpay_payment_id}`);
          },
          prefill: {
            name: window.localStorage.getItem("userName"),
            email: window.localStorage.getItem("email"),
            contact: "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };

        // const rzpay = new Razorpay(options);
        const rzpay = new window.Razorpay(options);

        rzpay.on("payment.failed", function (response) {
          // console.log(response);
          // alert(response.error.code);
          // alert(response.error.description);
          // alert(response.error.source);
          // alert(response.error.step);
          // alert(response.error.reason);
          // alert(response.error.metadata.order_id);
          // alert(response.error.metadata.payment_id);
        });
        rzpay.open();
      } catch (error) {
        console.error("Error in handlePayment:", error);
      }
    },
    [Razorpay]
  );

  const checkoutApi = () => {};
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree title="Payment " subtitle="Payment Process" />
        <div className="container my-5">
          <div className="row">
            {/* Left Side - Franchise Fee & Bank Details */}
            <div className="col-lg-4 col-md-12 mb-4">
              {/* Franchise Fee */}
              <div className="card shadow-sm-shadow mb-4">
                <div className="card-body">
                  <h5 className="text-uppercase fw-bold text-primary">
                    Franchise Fee
                  </h5>
                  <hr />
                  <p>
                    <strong>District Administrator</strong>
                    <br />
                    INR 3,00,000.00 (Inclusive Tax)
                  </p>
                  <hr />
                  <p>
                    <strong>Block Administrator</strong>
                    <br />
                    INR 50,000.00 (Inclusive Tax)
                  </p>
                </div>
              </div>

              {/* Bank Details */}
              <div className="card shadow-sm-shadow">
                <div className="card-body">
                  <h5 className="text-uppercase fw-bold text-primary">
                    Bank Details
                  </h5>
                  <hr />
                  <p className="mb-1">
                    <strong>A/C Name:</strong> ABC
                  </p>
                  <p className="mb-1">
                    <strong>A/C No:</strong> 9999999999
                  </p>
                  <p className="mb-1">
                    <strong>Bank Name:</strong> ICICI
                  </p>
                  <p className="mb-1">
                    <strong>Branch:</strong> G1-454, Dal Mill Road Near Vidya
                    Memorial Public School, Uttam Nagar, New Delhi-110059
                  </p>
                  <p className="mb-1">
                    <strong>IFSC:</strong> ICIC0000000
                  </p>

                  <div className="text-center mt-3">
                    <img
                      src="/assets/images/qr-sample.png"
                      alt="QR Code"
                      className="img-fluid"
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Payment Form */}
            <div className="col-lg-8 col-md-12">
              <div className="card shadow-sm-shadow">
                <div className="card-body">
                  <h5 className="text-uppercase fw-bold text-primary">
                    Fill Below Form To Pay Us
                  </h5>
                  <hr />

                  <form>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Who Are You?</label>
                        <select className="form-select">
                          <option>Select</option>
                          <option>District Administrator</option>
                          <option>Block Administrator</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Amount"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-4">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Mobile No.</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Mobile No."
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <textarea
                        className="form-control"
                        rows="2"
                        placeholder="Enter Address"
                      ></textarea>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">State</label>
                        <select className="form-select">
                          <option>Select</option>
                          <option>Rajasthan</option>
                          <option>Delhi</option>
                          <option>Uttar Pradesh</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Pincode</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Pincode"
                        />
                      </div>
                    </div>

                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="agree"
                      />
                      <label className="form-check-label" htmlFor="agree">
                        I agree on all payment{" "}
                        <a
                          href="#"
                          className="text-decoration-none text-primary"
                        >
                          terms & conditions
                        </a>
                        .
                      </label>
                    </div>

                    <div className=" text-center">
                      <button
                        type="button"
                        className="btn btn-primary text-center"
                        style={{
                          width: "200px",
                          // height: "40px",
                          fontSize: "25px",
                        }}
                        onClick={handlePayment}
                      >
                        PAY NOW
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default PaymentProcceed;
