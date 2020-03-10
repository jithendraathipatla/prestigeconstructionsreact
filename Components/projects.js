import Card from "./Cards";
import {useState} from 'react';
import Image1 from "../Asserts/images/songofsouth.jpg";
import Image2 from "../Asserts/images/lakeridge.jpg";
import Image3 from "../Asserts/images/kew.jpg";
import Image4 from "../Asserts/images/kew.jpg";



const App = () => {

    const [state, setstate] = useState([
        {
            image:Image1,
            alt:"Prestige Waterford",
            unit_type:"3 & 4 BHK",
            price:"1.24 CR",
            towers:"Coming Soon",
            location:"Coming Soon",
            posession:"Coming Soon",
            link:"Coming Soon",
            brouchereName:"Coming Soon",
            page:"waterford",
        },
        {
            image:Image1,
            alt:"Prestige Finsbury Park",
            unit_type:"3 & 4 BHK",
            price:"1.24 CR",
            towers:"Coming Soon",
            location:"KIDAB Area, North Bangalore",
            posession:"Coming Soon",
            link:"Coming Soon",
            brouchereName:"Coming Soon",
            page:"finsburypark",
        },
        {
            image:Image1,
            alt:"Prestige Song of the South",
            unit_type:"1,2,2.5,3,3.5,4 BHK",
            price:"40 Lakhs",
            towers:"16 Towers  G + 15,17,20 Floors",
            location:"Begur Road, Bangalore",
            posession:"2019 onwards",
            link:"https://drive.google.com/open?id=1S6RsDbGVtaIDhW5EY5jI-ZTsesoBjQkN",
            brouchereName:"Download Prestige Song of the South Brouchere",
            page:"song_of_south",
        },
        {
            image:Image2,
            alt:"Prestige lake ridge",
            unit_type:"1,2& 3 BHk",
            price:"40 lakhs",
            towers:"12 Towers Devasthanagalu",
            location:"Devasthanagalu, Bangalore",
            posession:"2019 onwards",
            link:"https://drive.google.com/open?id=13jPTHzIRfjsX0-Og8c1bJp0LcjTdim66",
            brouchereName:"Download prestige lake ridge Brouchere",
            page:"lake_ridge"
        },
        
        {
            image:Image3,
            alt:"Prestige Kew Gardens ",
            unit_type:"1,2 & 3 BHK",
            price:"94 Lakh",
            towers:"16 Towers G + 4 Floors",
            location:"Yemalur, Bangalore",
            posession:"2019 onwards",
            link:"https://drive.google.com/open?id=1S6RsDbGVtaIDhW5EY5jI-ZTsesoBjQkN",
            brouchereName:"Download Prestige Kew Gardens Brouchere",
            page:"kew_gardens"
        },
        {
            image:Image4,
            alt:"Prestige Jindal City",
            unit_type:"1,2,3 & 4 BHk",
            price:"48 lakhs",
            towers:"15 Towers G + 27,28 Floors",
            location:"Tumkur Road, Bangalore East",
            posession:"2021 Onwards (P1)",
            link:"https://drive.google.com/file/d/1-1vxZM_N147Yl9y2Iiza87xdtp2fOYYC/view?usp=sharing",
            brouchereName:"Download Prestige Jindal City Brouchere",
            page:"jindal_City"
        },
        {
            image:Image4,
            alt:"Prestige Elysian",
            unit_type:"2 Towers G + 16,18 Floors",
            price:"86 Lakhs",
            towers:"12 Blocks G+26 Floors",
            location:"Arekere, Bannerghatta Road",
            posession:"2022 onwards",
            // link:"https://drive.google.com/open?id=1gD1dqRdfmSLXclBQSC43a3VBY3CNOj84",
            brouchereName:"Download Prestige Elysian Brouchere",
            page:"elysian"
        },
       
        {
            image:Image4,
            alt:"Prestige Willow Tree",
            unit_type:"1,2,3,3.5 BHK",
            price:"46 Lakhs",
            towers:"5 Towers G + 10,11 Floors",
            location:"Vidyaranyapura, Bangalore",
            posession:"2022 onwards",
            link:"https://drive.google.com/open?id=1Luc7dPRqSMwT8T-GjDV64HpFFzCV90sc",
            brouchereName:"Download Prestige Willow Tree Brouchere",
            page:"willow_tree"
        },
        {
            image:Image4,
            alt:"Prestige Botanique",
           unit_type:"3, & 3 BHk",
            price:"1.6 cr",
            towers:"1 Towers 2B+G+8 Floors",
            location:"RV Road, Bangalore ",
            posession:"2021",
            link:"https://drive.google.com/open?id=1LXZB4htUXDk5aHt1-XmeVV5Gdtn4AWrl   ",
            brouchereName:"Download Prestige Botanique Brouchere",
            page:"botanique"
        },
        
        {
            image:Image4,
            alt:"Prestige Park Square",
            unit_type:"2 & 3 BHk",
            price:"95 Lakhs",
            towers:"3 Towers 3B + G + 27 Floors",
            location:"Bannerghatta Road, Bangalore North",
            posession:"2021",
            link:"https://drive.google.com/open?id=1kuI8nfT50ujZIOJaNesfARsi9i-_tj9f",
            brouchereName:"Download Prestige Park Square Brouchere",
            page:"park_square"
        },

        {
            image:Image4,
            alt:"Prestige Fontaine Bleau",
            unit_type:"2 & 3 BHk",
            price:"83 Lakhs",
            towers:"2 Tower G + 10 Floors",
            location:"Whitefield, Bangalore",
            posession:"2021",
            link:"https://drive.google.com/open?id=1iiwgLyIHfwp2KkVayBE5T9-xEBmKi5wV",
            brouchereName:"Download Prestige Fontaine Bleau Brouchere",
            page:"fontaine_bleau"
        },
        {
            image:Image4,
            alt:"Prestige Dolce Vita",
            unit_type:"2 & 3 BHk",
            price:"94 lakhs",
            towers:"2 Towers G + 7,8 Floors",
            location:"Whitefield, Bangalore ",
            posession:"2021 onwards",
            link:"https://drive.google.com/open?id=1o92-nnA-kYMsE8U-e-TnknwW3Uvm24xR",
            brouchereName:"Download Prestige Dolce Vita Brouchere",
            page:"dolce_vita"
        },
        {
            image:Image4,
            alt:"Prestige Brooklyn Heights",
            unit_type:"1 2 & 3 BHk",
            price:"66 Lakhs",
            towers:"12 Blocks G+26 Floors",
            location:"Banashankari Bangalore",
            posession:"2021 onwards",
            // link:"https://drive.google.com/open?id=1JmstNKv4SmlSJNp-DduTnkufTNjOP9m6",
            brouchereName:"Download Prestige Brooklyn Heights Brouchere",
            page:"brooklyn_heights"
        }

    ]);

    const displayingCards = () => {
        return (
            state.map((item, i)=>{
                return (
                    <div key={i}> 
                    <Card image={item.image} alt={item.alt} unit={item.unit_type} price={item.price} towers={item.towers} location={item.location} possession={item.posession} link={item.link} brouchere={item.brouchereName} pages={item.page}/></div>
                )
            })
        )
    }
    return (
        console.log(state),
        <div>
        <div className="card_container">
        {displayingCards()}
        </div>

        <style jsx>{
            `
           .card_container{
               display:grid;
               grid-template-columns:3fr 3fr 3fr 3fr;
               grid-gap:25px 5px;
           }
            `
        }
        
        </style>
        </div>
    )
}


export default App;