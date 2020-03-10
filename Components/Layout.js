import Navigation from './navbar';
import Footer from './footer';

const Layoutabc = (props) => {
    return(
        <div>
          <Navigation/>
            <div className="displayContent">
            {props.children}
            </div>
          <Footer/>
          <style jsx>{`
            .displayContent{
                padding-top:75px;
            }
          `}
          </style>
          <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
    
          * {
            box-sizing: border-box;
          }
        `}</style>
        </div>
    )
}

export default Layoutabc;