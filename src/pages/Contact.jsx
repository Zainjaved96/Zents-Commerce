import React from "react";
import Header from "/src/components/Navbar/Header";
import Footer from "../components/Footer/Footer";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      navigate('/thank-you');
    },
  });

  return (
    <>
      <Header />
      <div className="px-3 row py-5 my-5">
        <form onSubmit={formik.handleSubmit} className="col-lg-6 mx-auto py-5">
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
        <div className="col-lg-6 text-center mx-auto"> 
          <img className="rounded" width={"90%"} src={"https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} alt="contact image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
