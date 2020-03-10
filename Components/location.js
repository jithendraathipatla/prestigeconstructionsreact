import Form from "../Components/Form";
import Title from "../Components/Title";
import Comings from '../Asserts/images/Coming-Soon-Project.jpg';

const Location = (props) => {
  
  const iframedisplay = () => {
    return(
      <iframe
      src={props.iframe}
      frameBorder="0"
      style={{ width: "100%" }}
      height="450px"
      allowFullScreen=""
      title={props.title}
    ></iframe>
    )
  }
  
  const comingSoon = () => {
    return(
      <div  style={{textAlign:"center", marginTop:"75px"}}>
      <img src={Comings} alt="coming Soon"/>
      </div>
    )
  }

  return (
    <div className="locationpart">
      <div className="loc">
        <div style={{ textAlign: "center" }}>
          <Title title={props.title} />
        </div>
        {props.iframe === "null" ? comingSoon() : iframedisplay() }
      </div>
      <div className="fosr">
        <div style={{ textAlign: "center" }}>
          <Title title="Get In touch With Us" />
        </div>
        <div className="formbeaut">
          <Form />
        </div>
      </div>
      <style jsx>
        {`
          .locationpart {
            display: flex;
            margin-bottom: 10px;
          }
          .loc {
            flex: 8;
            margin-left: 10px;
          }
          .fosr {
            flex: 4;
            margin: 0px 10px;
          }
          .formbeaut {
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            background-size: cover;
          }
        `}
      </style>
    </div>
  );
};

export default Location;
