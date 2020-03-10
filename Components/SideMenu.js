import React, { useState } from "react";
import axios from "axios";

const Sidemenu = props => {
  const [state, setstate] = useState("popup closepopup");
  const [nextstep, setnextstep] = useState("buttonps");
  const [costone, setcostone] = useState("popupps closepopup");
  const [costtwo, setcosttwo] = useState("buttonps");

  const [phoneone, setphoneone] = useState(0);
  const [phonetwo, setphonetwo] = useState(0);

  const handelPopUp = () => {
    {
      state === "popup closepopup"
        ? setstate("popup")
        : setstate("popup closepopup");
    }
    {
      nextstep === "buttonps"
        ? setnextstep("buttonps button-closed")
        : setnextstep("buttonps");
    }

    if (costone === "popupps") {
      setcostone("popupps closepopup");
    } else if (costtwo === "buttonps") {
      setcosttwo("buttonps button-closed");
    }
  };

  const handelCostSheet = () => {
    {
      costone === "popupps closepopup"
        ? setcostone("popupps")
        : setcostone("popupps closepopup");
    }
    {
      costtwo === "buttonps"
        ? setcosttwo("buttonps button-closed1")
        : setcosttwo("buttonps");
    }
    if (state === "popup") {
      setstate("popup closepopup");
    } else if (nextstep === "buttonps button-closed") {
      setnextstep("buttonps");
    }
  };

  const restrictingone = e => {
    let value = e.target.value;
    if (value.length > 10) {
      alert("You are not allowed to enter Fake Numbers");
      setphoneone(0);
    }
    setphoneone(value);
  };

  const restricingSecond = e => {
    let valueone = e.target.value;
    if (valueone.length > 10) {
      alert("You are not allowed to enter more than 10 digits");
      setphonetwo(0);
    }
    setphonetwo(valueone);
  };

  const firstForm = e => {
    e.preventDefault();
    let vaueone = e.target.elements.email.value;
    let finalformdata = {
      name: vaueone,
      phonenumber: phoneone,
      PropertyName: props.project
    };
    var data = {
      service_id: "gmail",
      template_id: "normal",
      user_id: "user_s9VasukllOwTDnR8R0FWD",
      template_params: finalformdata
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const secondform = e => {
    e.preventDefault();
    let vaueone = e.target.elements.email.value;
    let finalformdata = {
      name: vaueone,
      phonenumber: phonetwo,
      PropertyName: props.project
    };
    var data = {
      service_id: "gmail",
      template_id: "normal",
      user_id: "user_s9VasukllOwTDnR8R0FWD",
      template_params: finalformdata
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className={state}>
        <div className="popup-content">
         <div className="formhead">
          <h1>Fill Form to Download Brouchure</h1>
          </div>
          <form
            name="brouchereform"
            onSubmit={firstForm}
            method="POST"
            id="frmdb"
          >
            <div className="inputGroup2">
              <input
                className="input"
                style={{
                  height: "30px",
                  fontSize: "15px",
                  padding: "10px 6px"
                }}
                required
                placeholder="Your emailId"
                type="email"
                name="email"
                id="email1"
              />
              <br />
            
            </div>
            <div className="inputGroup2">
              <input
                className="input"
                style={{
                  height: "30px",
                  fontSize: "15px",
                  padding: "10px 6px"
                }}
                onChange={restrictingone}
                required
                type="number"
                placeholder="Your Phone Number"
                name="mobile"
                id="mobile1"
              />
              <br />
              
            </div>
            <br/>
            <div className="btn-group">
              <button
                className="tabelbuttonabcde"
                style={{
                  height: "32px",
                  padding: "0px 10px 3px",
                }}
                type="submit"
                name="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <a className={nextstep} onClick={handelPopUp}>
          Download Brouchure
        </a>
      </div>

      <div className={costone}>
        <div className="popup-content" style={{ height: "186px" }}>
        <div className="formhead">
          <h1>
            Fill Form to Download cost sheet
          </h1>
          </div>
          <form
            action="./popup.php"
            method="POST"
            className="callRequest"
            id="frmps"
            onSubmit={secondform}
          >
            <div className="inputGroup2">
              <input
                className="input"
                style={{
                  height: "30px",
                  fontSize: "15px",
                  padding: "10px  6px"
                }}
                required
                type="email"
                placeholder="Your Emailid"
                name="email"
                id="email2"
              />
              <br />
            
            </div>
            <div className="inputGroup2">
              <input
                className="input"
                style={{
                  height: "30px",
                  fontSize: "15px",
                  padding: "10px 6px"
                }}
                onChange={restricingSecond}
                type="number"
                required
                placeholder="Your Number"
                name="mobile"
                id="mobile2"
              />
              <br />
              
            </div>
            <br/>
            <div className="btn-group">
              <button
                name="submit"
                className="tabelbuttonabcde"
                style={{
                  height: "30px",
                  padding: "0px 10px 3px",
                }}
                type="submit"
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <a className={costtwo} onClick={handelCostSheet}>
          Download CostSheet
        </a>
      </div>

      <style jsx>
        {`
          .popup {
            left: 0;
            position: fixed;
            top: 20%;
            transition: left 0.5s ease;
            z-index: 1000;
          }

          .popupps {
            left: 0;
            position: fixed;
            top: 55%;
            transition: left 0.5s ease;
            z-index: 1000;
          }

          .popup-content {
            box-sizing: border-box;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            color: black;
            background:white;
            float: left;
            height: 187px;
            width: 304px;
            font-size: 12px;
            box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
          }

          .popup-content form{
              padding:10px;
          }

          .closepopup {
            left: -304px;
          }

          @keyframes example {
            from {
              background-color: black;
            }
            to {
              background-color: #d3b169;
            }
            0%,
            100% {
              bottom: 0;
            }
            50% {
              padding-top: 12px;
            }
          }
          .button::after {
            font-family: "FontAwesome";
            writing-mode: "tb-rl";
            content: "\f0a9";
            text-decoration: underline;
            color: white !important;
            cursor: pointer;
            font-size: 1.2em;
            padding: 5px;
          }

          .button-closed::after {
            font-family: "FontAwesome";
            content: "\f0a8";
            color: white !important;
            cursor: pointer;
            font-size: 1.2em;
          }

          .buttonps {
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
            height: 110px;
            padding-top: 0.6rem;
            padding-right: 2px;
            width: 33px;
            font-weight: 500;
            color: #fff !important;
            font-size: 15px;
            line-height: 15px;
            writing-mode: tb-rl !important;
            animation: example 2s linear infinite;
            box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.09);
          }

          .buttonps::after {
            font-family: "FontAwesome";
            content: "\f0a9";
            text-decoration: underline;
            color: white !important;
            cursor: pointer;
            font-size: 1.2em;
            padding: 5px;
            border: none;
          }

          .button-closed1::after {
            font-family: "FontAwesome";
            content: "\f0a8";
            color: white !important;
            cursor: pointer;
            font-size: 1em;
            border: none;
          }
          .formhead h1{
            font-size: 16px;
            background-color: #d4af37;
            margin-bottom: 20px;
            font-weight: 500;
            padding: 10px 3px;
            color: #fff;
            text-transform: uppercase;
            border-bottom: .1px solid #fff;
            margin:0px;
          }
          .input{
            box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,.05);
            max-width: 100%;
            border-radius: 4px;
            border: 1px solid #dbdbdb;
            background-color: #fff;
            padding: 9px 15px;
            width: 100%;
            font-size: 16px;
            color: #000;
            margin-bottom:15px;
          }
          .btn-group{
              text-align:center;
          }
          .tabelbuttonabcde{
            color: #fff;
            padding: 8px 20px;
            font-size: 16px;
            border-radius: 2px;
            border: 1px solid transparent;
            border-radius: 3px;
            background: -webkit-gradient(linear,right top,left top,from(#d3b169),color-stop(#000),color-stop(#d3b169),to(#000));
            background: linear-gradient(-90deg,#d3b169,#000,#d3b169,#000);
            background-size: 400% 400%;
            -webkit-animation: Gradient 3s ease infinite;
            animation: Gradient 3s ease infinite;
          }
          @keyframes gradient{
            from {
                background-color: black;
              }
              to {
                background-color: #d3b169;
              }
          }
        `}
      </style>
    </div>
  );
};

export default Sidemenu;
