import { useState } from "react";
import TitleForOverview from "./Title";
import ProjectType from "../Asserts/images/svg/home.svg";
import TotalLandArea from "../Asserts/images/svg/mountain.svg";
import TotalUnits from "../Asserts/images/svg/binary-code.svg";
import NumberOfFloors from "../Asserts/images/svg/castle.svg";
import TotalTowers from "../Asserts/images/svg/cityscape.svg";
import UnitVarients from "../Asserts/images/svg/towel.svg";
import PossessionDate from "../Asserts/images/svg/calendar.svg";
import Location from "../Asserts/images/svg/location.svg";

const OverviewPart = props => {
  const [state, setstate] = useState([
    {
      main_title: "Project Type",
      sub_heading: "Residential Unit",
      image: ProjectType
    },
    {
      main_title: "Total Land Area",
      sub_heading: "5 Aceres",
      image: TotalLandArea
    },
    {
      main_title: "Total Units",
      sub_heading: "501 Units",
      image: TotalUnits
    },
    {
      main_title: "Number Of Floors",
      sub_heading: "B + G + 28",
      image: NumberOfFloors
    },
    {
      main_title: "Total Towers",
      sub_heading: "3 Blocks",
      image: TotalTowers
    },
    {
      main_title: "Unit Varients",
      sub_heading: "1.5, 2 & 3 BHK",
      image: UnitVarients
    },
    {
      main_title: "Possession Date",
      sub_heading: "Dec 2023",
      image: PossessionDate
    },
    {
      main_title: "Location",
      sub_heading: "KR Puram Bangalore",
      image: Location
    }
  ]);

  const displayingOverview = () => {
    return state.map((item, i) => {
      return (
        <div key={i} className="subdivisions">
          <img src={item.image} alt={item.main_title} width="50px" />
          <div className="headings">
            <span>{item.main_title}</span>
            <span>{item.sub_heading}</span>
          </div>
          <style jsx>
            {`
              .headings span {
                display: block;
                margin-left: 20px;
              }
              .headings span:nth-child(odd) {
                margin-bottom:5px;
                font-weight:500;
                text-transform: uppercase;
              }
              .subdivisions {
                display: flex;
              }
              .subdivisions img{
                padding: 10px;
                border-radius: 10px;
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
    <div style={{ marginBottom: "30px" }}>
      <div style={{ textAlign: "center" }}>
        <TitleForOverview title={props.title} />
      </div>
      <br />
      <div className="overview_main">{displayingOverview()}</div>
      <style jsx>
        {`
          .overview_main {
            display: grid;
            grid-template-columns: 3fr 3fr 3fr 3fr;
            grid-gap: 40px 10px;
            padding-left: 80px;
          }
        `}
      </style>
    </div>
  );
};

export default OverviewPart;
