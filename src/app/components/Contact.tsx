"use client";
import Heading from "./Heading";
import { useState } from "react";
import * as yup from "yup";
import { contactInfoType, onChangeEeventType } from "../types/customTypes";

const contactInfoSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required().min(6),
  email: yup.string().required().email(),
  subject: yup.string().required().max(15),
  message: yup.string().required().max(100),
});

const Contact = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [contactList, setContactList] = useState<contactInfoType[]>([]);
  const [contactInfo, setContactInfo] = useState<contactInfoType>({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const onChangeHandler = (e: onChangeEeventType) => {
    const contactData = {
      ...contactInfo,
      [e.target.name]: e.target.value,
    };
    setContactInfo(contactData);
  
  };

  const submitHanlder = async () => {
    try {
      await contactInfoSchema.validate(contactInfo);
      const newContactList = [...contactList, contactInfo];
      setContactList(newContactList);

      setContactInfo({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: "",

      });
      alert("Form Submitted Successfully!")
      setErrors([])
    } catch (err:any) {
      setErrors(err.errors);
      console.log(err.name);
    }
  };

  console.log(contactList);

  return (
    <>
      <section className="contactSection wrapper">
        <Heading title="Get in Touch" />
        <div>
          <form className="form">
            <div>
              <label htmlFor="name"></label>
              <input
                value={contactInfo.name}
                onChange={onChangeHandler}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name...."
              />

              <label htmlFor="phone"></label>
              <input
                value={contactInfo.phone}
                onChange={onChangeHandler}
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone number...."
              />

              <label htmlFor="eamil"></label>
              <input
                value={contactInfo.email}
                onChange={onChangeHandler}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email...."
              />
            </div>
            <div>
              <label htmlFor="subject"></label>
              <input
                value={contactInfo.subject}
                onChange={onChangeHandler}
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter subject..."
              />
              <label htmlFor="message"></label>
              <textarea
                value={contactInfo.message}
                onChange={onChangeHandler}
                name="message"
                id="message"
                rows={7}
                placeholder="Enter your meesage..."
              ></textarea>
            </div>
          </form>
          {errors.map((item,index) => {
            return <p key={index} className="error">{item}</p>;
          })}
          <button type="submit" className="btn" onClick={submitHanlder}>
            Send
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
