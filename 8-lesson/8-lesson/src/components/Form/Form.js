import React from "react";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    company: "",
    email: "",
    code: "",
    phone: "",
    subject: "",
    yes: "",
    no: "",
  });

  const handleSubmit = (event) => {
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="x">
        <label className="lbl" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="fname"
          placeholder="First name"
          onChange={handleSubmit}
          value={formData.fname}
        />
        <input
          type="text"
          name="lname"
          onChange={handleSubmit}
          placeholder="Last name"
          value={formData.lname}
        />
      </div>
      <div className="x">
        <label className="lbl" htmlFor="company">
          Company
        </label>
        <input
          type="text"
          onChange={handleSubmit}
          value={formData.company}
          name="company"
        />
      </div>
      <div className="x">
        <label className="lbl" htmlFor="mail">
          Email
        </label>
        <input
          type="text"
          name="email"
          onChange={handleSubmit}
          value={formData.email}
          placeholder="example@email.com"
        />
      </div>
      <div className="x">
        <label className="lbl" htmlFor="phone">
          Phone
        </label>
        <input
          type="number"
          onChange={handleSubmit}
          value={formData.code}
          name="code"
          placeholder="Area Code"
        />
        <input
          type="number"
          onChange={handleSubmit}
          value={formData.number}
          name="phone"
          placeholder="Phone Number"
        />
      </div>
      <div className="x">
        <label className="lbl" htmlFor="subject">
          Subject
        </label>
        <select name="subject" onChange={handleSubmit} value={formData.subject}>
          <option defaultValue={""}>Choose option</option>
          <option value="react">React</option>
          <option value="javaScript">JavaScript</option>
          <option value="nodeJs">NodeJs</option>
          <option value="css">Css</option>
          <option value="html">Html</option>
          <option value="bootstrap">Bootstrap</option>
        </select>
      </div>
      <div>
        <h4>Are you an existing customer?</h4>
        <fieldset>
          <input type="radio" onChange={handleSubmit} value="yes" name="yes" /> {" "}
          <label className="check" htmlFor="yes">
            Yes
          </label>
          <input type="radio" onChange={handleSubmit} name="no" value="no" />
          <label className="check" htmlFor="no">
            No
          </label>
        </fieldset>
      </div>
      <button type="submit" onClick={() => console.log("submited")}>
        REGISTER
      </button>
    </form>
  );
};

export default Form;
