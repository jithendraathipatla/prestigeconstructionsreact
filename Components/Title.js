const Title = props => {
  return (
    <div className="title">
      {props.title}
      <style jsx>
        {`
          .title {
            color: #a88944;
            font-size: 26px;
            padding-top: 15px;
            padding-bottom: 20px;
            font-weight: 500;
            text-decoration: underline;
            -webkit-text-decoration-color: #000;
            text-decoration-color: #000;
            -webkit-text-underline-position: under;
            -ms-text-underline-position: below;
            text-underline-position: under;
          }
        `}
      </style>
    </div>
  );
};

export default Title;
