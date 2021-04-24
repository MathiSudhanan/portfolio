import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceId = "service_MMS";
  const templateId = "template_MMS";
  const userId = "user_SdzoYJHS9L3O2gqQZLmcE";
  // const { ref, ...rest } = register("firstName");

  const onSubmit = (data, r) => {
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userId
    );
    r.target.reset();
  };

  const sendEmail = (serviceId, templateId, mailData, userId) => {
    // e.preventDefault();

    emailjs
      .send(serviceId, templateId, mailData, userId)
      .then(() => {
        setSuccessMessage(
          "Mail sent successfully! I'will contact you as soon as possible."
        );
      })
      .catch((error) => {
        console.error(`Something went wrong ${error}`);
        // setErrorMessage(error);
      });
  };

  return (
    <div className='contacts'>
      <div className='text-center'>
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your project needs and I will
          contact you aas soon as possible.
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        {/* className='contact-form' */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <div className='text-center'>
                <input
                  className='form-control'
                  name='name'
                  placeholder='Name'
                  type='text'
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 charaters",
                    },
                  })}
                />

                <div className='line'></div>
              </div>

              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>

              <div className='text-center'>
                <input
                  className='form-control'
                  name='phone'
                  placeholder='Phone Number'
                  type='text'
                  {...register("phone", {
                    required: "Please enter your phone number",
                  })}
                />

                <div className='line'></div>
              </div>

              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>

              <div className='text-center'>
                <input
                  className='form-control'
                  name='email'
                  placeholder='Email'
                  type='email'
                  {...register("email", {
                    required: "Please provide your email id",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email id",
                    },
                  })}
                />

                <div className='line'></div>
              </div>

              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>

              <div className='text-center'>
                <input
                  className='form-control'
                  name='subject'
                  placeholder='Subject'
                  type='text'
                  {...register("subject", {
                    required: "OOPS, you forget to add the subject",
                  })}
                />
                <div className='line'></div>
              </div>

              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              <div className='text-center'>
                <textarea
                  name='description'
                  className='form-control'
                  placeholder='Please descibe your project shortly.'
                  type='text'
                  {...register("description", {
                    required: "Please describe shortly your project needs...",
                  })}
                ></textarea>
                <div className='line'></div>
              </div>
              {errors && (
                <span className='error-message'>
                  {errors.description && errors.description.message}
                </span>
              )}
              <button className='btn-main-offer contact-btn' type='submit'>
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
