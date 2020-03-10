import { useState } from "react";
import Logo from "../Asserts/images/mainlogo.png";
import axios from "axios";
import Download from "../pages/download";

const Form = props => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const handelingFormdata = e => {
    e.preventDefault();
    let client_name = e.target.elements.name.value;
    let client_email = e.target.elements.email.value;
    let phonenumber = e.target.elements.phone.value;

    if (phonenumber.length > 10) {
      alert("Must enter a Valid Number");
    }
    const finalData = {
      Client_name: client_name,
      Client_email: client_email,
      Client_phone_number: phonenumber,
      Project_Name: props.project
    };
    var data = {
      service_id: "gmail",
      template_id: "normal",
      user_id: "user_s9VasukllOwTDnR8R0FWD",
      template_params: finalData
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then(res => {
        window.location;
      });
  };

  return (
    <form onSubmit={handelingFormdata} name="main_forma" method="post">
      <div style={{ textAlign: "center" }}>
        <img src={Logo} alt={props.project} width="70px" height="86px" />
      </div>
      <div>
        <br />
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              required
              value={name}
              placeholder="e.g Alex Smith"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              required
              value={email}
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Phone Number</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="phone"
              required
              maxLength={10}
              value={phone}
              placeholder="e.g. 999999999"
            />
          </div>
        </div>
        <br />
        <div style={{textAlign:"center"}}>
        <button
          className="tabelbuttonabcde is-link"
          type="submit"
          value="submit"
          name="submit"
        >
          Submit
        </button>
        </div>
        <style jsx>
          {`
            .input {
              box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
              max-width: 100%;
              width: 100%;
              background-color: #fff;
              border-color: #dbdbdb;
              border-radius: 4px;
              color: #363636;
              -webkit-appearance: none;
              align-items: center;
              border: 1px solid #dbdbdb;
              border-radius: 4px;
              box-shadow: none;
              display: inline-flex;
              font-size: 1rem;
              height: 2.5em;
              justify-content: flex-start;
              line-height: 1.5;
              padding-bottom: calc(0.5em - 1px);
              padding-left: calc(0.75em - 1px);
              padding-right: calc(0.75em - 1px);
              padding-top: calc(0.5em - 1px);
              position: relative;
              vertical-align: top;
              margin-bottom:1em;
            }
            .label {
              color: #363636;
              display: block;
              font-size: 1rem;
              margin-bottom:0.5em;
              font-weight: 700;
            }
          `}
        </style>
      </div>
    </form>
  );
};

export default Form;
