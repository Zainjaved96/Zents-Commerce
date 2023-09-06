import React from "react";
import Header from "/src/components/Navbar/Header";
import Footer from "../components/Footer/Footer";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate(); // Use the useNavigate hook to navigate to different pages

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      // Perform any necessary form submission logic here
      // You can send the data to your backend or handle it as needed

      // After successful submission, navigate to the thank you page
      navigate('/thank-you');
    },
  });

  return (
    <>
      <Header />
      <div className="container py-5 my-5">
        <form onSubmit={formik.handleSubmit} className="col-lg-10 mx-auto py-5">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              type="text"
              className="form-control"
              placeholder="Mubashir"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          <button type="submit" className="zen-btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
