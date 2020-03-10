const hero = (props) => {
    return(
        <div>
         <img src={props.img} alt="Hero component" className="mainhero"/>
         <style jsx>{
             `.mainhero{
                height:80vh;
                width:100%;
                margin-top:-10px;
             }
             `
         }
         </style>
        </div>
    )
}

export default hero;