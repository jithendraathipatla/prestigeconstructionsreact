import main from '../Asserts/images/logo.png';
import Link from 'next/link';

const NNavbar = () => {
  return (
    <div className="navigation">
      <div className="logo">
      <img src={main} alt="Prestige Constructions"/>
      </div>
      <div className="links">
        <ul >
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </ul>
      </div>
      <style jsx>
        {`
          .navigation {
            width: 100%;
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
            z-index: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 100px 0;
            margin-bottom: 60px;
            background: white;
            position: fixed;
            height: 70px;
          }
          .logo{
              flex:10;
          }
          .logo img{
            height:60px;
          }

          .links{
             flex:8;
          }
          .links ul{
              display: flex;
          }
          .links a{
              padding-left:100px;
             text-decoration:none;
          }
          .links a:hover{
           text-decoration:underline;
        }
        `}
      </style>
    </div>
  );
};

export default NNavbar;
