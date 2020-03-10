import {FaHome, FaRupeeSign,FaCalendarAlt} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {GiEvilTower} from 'react-icons/gi';
import Link from 'next/link';

const Card = (props) => {
    return (
        <div className="box">
        <div className="card">
        <div className="card-image">
            <img src={props.image} alt="Placeholder image"/>
        </div>
        <div className="card-content">
         
            <div className="media-left">
             <FaHome style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)",fontSize:"1.5em"}}/>
             <div className="text">
             <span style={{marginLeft:"10px", textTransform:"uppercase",fontWeight:"500", color:" #a88944"}}>{props.alt}</span>
             </div>
            </div>
            <div className="media-left">
             <MdLocationOn style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)",fontSize:"1.5em" }}/>
             <div className="text">
             <span style={{marginLeft:"10px"}}>{props.location}</span>
             </div>
            </div>

            <div className="media-left">
             <FaRupeeSign style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)",fontSize:"1.5em" }}/>
             <div className="text">
             <span style={{marginLeft:"10px"}}> {props.price}</span>
             </div>
            </div>
            <div className="media-left">
            <GiEvilTower style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)",fontSize:"1.5em" }}/>
            <div className="text">
            <span style={{marginLeft:"10px"}}>{props.towers}</span>
            </div>
           </div>
            <div className="media-left">
             <FaCalendarAlt style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)",fontSize:"1.5em" }}/>
              <div className="text">
              <span style={{marginLeft:"10px"}}>{props.possession}</span>
              </div>
            </div>

            <div className="buttons">
             <button className="button"><Link href={`/${props.pages}`}><a>More details</a></Link></button>
             <button className="button button1">Brochure</button>
            </div>
         </div>
        </div>
        <style jsx>{
            `
            .card{
                border-top-right-radius:5px;
                border-top-left-radius:5px;
                box-shadow:0px 0px 10px 1px rgba(0,0,0,0.11);
            }
            .card:hover{
                transform: translateY(-1px);
                box-shadow:0px 0px 20px 5px rgba(0,0,0,0.11);
            }
            .media-left{
               margin-bottom:7px;
               padding:3px;
               border-radius:5px;
               box-shadow:0px 0px 2px 1px rgba(0,0,0,0.1);
               display:flex;
            }
            .card-image img{
                width:100%;
                height:30vh;
                border-top-right-radius:5px;
                border-top-left-radius:5px;
            }
            .card-image img:hover{
               cursor:pointer;
            }
            .card-content{
                padding:5px;
            }
            .box{
                margin:0px 10px;
            }
            .text{
                padding-top:2px;
            }
            .buttons{
                padding:10px 0px;
                background:#eeee;
                text-align:center;
                font-size:1.3em;
            }
            .button1{
              margin-left:70px;
              border-radius: 50px;
              color: white;
              animation: buttonanimate 2s linear infinite;
              animation: horizontal left 2s ease infinite;
              border-color: #ff1744;
            }
            .button1:hover{
               cursor:pointer;
            }
            .button{
                background: white;
                color:red;
                border-radius: 50px;
                border-color: #337ab7;
                color: #337ab7;
                padding:8px 15px;
            }
            .button a{
                text-decoration:none;
            }
            .button a:hover{
                text-decoration:none;
                text-decoration:underline;
            }
            .button:hover{
                transform: translateY(-1px);
                box-shadow: 0 5px 5px 0 rgba(0,0,0,.5);
            }
            @keyframes buttonanimate{
                from {background-color: rgba(255, 187, 0, 0.87);}
                to {background-color: rgba(0, 255, 221, 0.856);}
            }
           
            `
        }
         
        </style>
        </div>
    );
};

export default Card;