export default ({ src, alt }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-5 d-flex align-items-center">
      <img className="img-fluid" src={`/static/${src}`} alt={alt} />

      <style jsx>
        {`
          @media (max-width: 575px) {
            div.col-md-6 {
              max-width: 70vw;
            }
          }
        `}
      </style>
    </div>
  );
};
