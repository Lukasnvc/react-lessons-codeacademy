import { useState } from "react";
import "./Form2.css";

const Form2 = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [registered, setRegistered] = useState("");
  const [form, setForm] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name && lastName && company && email && areaCode && phone && subject) {
      const newEvent = {
        name: `${name} ${lastName}`,
        company: company,
        email: email,
        phone: `${areaCode} ${phone}`,
        subject: subject,
        registered: registered,
      };
      setForm([...form, newEvent]);
      return console.log(form);
    } else {
      return console.log("not validated");
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h2>Event registration form</h2>
        <div className="row">
          <label htmlFor="name">Name</label>
          <div className="input">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <span className="labelBottom">First Name</span>
          </div>
          <div className="input">
            <input
              type="text"
              name="name"
              value={lastName}
              onChange={(event) => setLastname(event.target.value)}
            />
            <span className="labelBottom">Last Name</span>
          </div>
        </div>
        <div className="row">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="phone">Phone</label>
          <div className="input">
            <input
              type="number"
              name="areaCode"
              value={areaCode}
              onChange={(event) => setAreaCode(event.target.value)}
            />
            <span className="labelBottom">Area Code</span>
          </div>
          <div className="input">
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <span className="labelBottom">Phone</span>
          </div>
        </div>
        <div className="row">
          <label htmlFor="option">Subject</label>
          <select
            name="option"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required>
            <option disabled>Choose option</option>
            <option onSelect={() => setSubject("css")}>Css</option>
            <option onSelect={() => setSubject("html")}>Html</option>
            <option onSelect={() => setSubject("javaScript")}>
              JavaScript
            </option>
            <option onSelect={() => setSubject("nodeJs")}>NodeJs</option>
            <option onSelect={() => setSubject("React")}>React</option>
            <option onSelect={() => setSubject("bootstrap")}>Bootstrap</option>
          </select>
        </div>
        <div className="row">
          <h4>Are you an existing user?</h4>
          <div>
            <div className="input">
              <input
                type="radio"
                name="yes"
                onChange={() => setRegistered(true)}
              />
              <label htmlFor="yes">YES</label>
            </div>
            <div className="input">
              <input
                type="radio"
                name="no"
                onChange={() => setRegistered(false)}
              />
              <label htmlFor="no">NO</label>
            </div>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form2;
