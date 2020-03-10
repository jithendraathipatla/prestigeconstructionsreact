import { useState } from "react";
import Title from "./Title";
import Swimming from "../Asserts/images/amensvg/swimming-pool.svg";
import Club from "../Asserts/images/amensvg/house.svg";
import Child from "../Asserts/images/amensvg/player.svg";
import Landscape from "../Asserts/images/amensvg/sprout.svg";
import Secur from "../Asserts/images/amensvg/royal-guard.svg";
import Bank from "../Asserts/images/amensvg/atm.svg";
import Basket from "../Asserts/images/amensvg/basketball.svg";
import Caft from "../Asserts/images/amensvg/coffee.svg";
import Conven from "../Asserts/images/amensvg/pet-shop.svg";
import Jogging from "../Asserts/images/amensvg/race-track.svg";
import Lands from "../Asserts/images/amensvg/path.svg";
import Meditation from "../Asserts/images/amensvg/meditation.svg";
import Convention from "../Asserts/images/amensvg/hall.svg";
import Piped from "../Asserts/images/amensvg/valve.svg";
import Power from "../Asserts/images/amensvg/battery.svg";
import Tennis from "../Asserts/images/amensvg/tennis-court.svg";
import Wifi from "../Asserts/images/amensvg/wifi.svg";

const Amenities = props => {
  const [state, setstate] = useState([
    {
      name: "Swimming Pool",
      img: Swimming
    },
    {
      name: "Club House",
      img: Club
    },
    {
      name: "Kid's Playing Area",
      img: Child
    },
    {
      name: "Landscaped Garden",
      img: Landscape
    },
    {
      name: "24/7 Security",
      img: Secur
    },
    {
      name: "Bank/ ATM",
      img: Bank
    },
    {
      name: "Basketball Court",
      img: Basket
    },
    {
      name: "Cafeteria",
      img: Caft
    },
    {
      name: "Convenience Store",
      img: Conven
    },
    {
      name: "Jogging Track",
      img: Jogging
    },
    {
      name: "Landscape",
      img: Lands
    },
    {
      name: "Meditaion",
      img: Meditation
    },
    {
      name: "Convention Hall",
      img: Convention
    },
    {
      name: "Piped Gas",
      img: Piped
    },
    {
      name: "Power Backup",
      img: Power
    },
    {
      name: "Tennis Court",
      img: Tennis
    },
    {
      name: "WiFi",
      img: Wifi
    },
    {
      name: "Garden",
      img: Lands
    }
  ]);

  const displayingAmenities = () => {
    return state.map((item, i) => {
      return (
        <div key={i} className="newstyle">
          <img src={item.img} alt={item.name} width="50px" />
          <span>{item.name}</span>
          <style jsx>
            {`
              .newstyle span {
                display: block;
                padding-top: 5px;
              }
              .newstyle img {
                border:2px solid #a88944;
                padding: 10px;
                border-radius: 10px;
                background: linear-gradient(180deg,rgba(255,0,0,.06),rgba(255,255,0,.18));
              }
              
            `}
          </style>
        </div>
      );
    });
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Title title={props.title} />
      </div>
      <br />
      <div className="Amenities_main">{displayingAmenities()}</div>
      <style jsx>
        {`
          .Amenities_main {
            display: grid;
            grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
            grid-gap: 40px 20px;
            padding-left: 80px;
            margin-bottom:30px;
          }
        `}
      </style>
    </div>
  );
};

export default Amenities;
