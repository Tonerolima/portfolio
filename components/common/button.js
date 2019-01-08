const Button = ({ text, classes }) => {
  return (
    <button className={`btn btn-lg d-inline ${classes}`}>
      {text}

      <style jsx>{`
        button {
          border-radius: 50px;
          background-color: #f9899c;
          box-shadow: 0px 2px 22px 1px rgba(245, 244, 244, 1);
          transition: all 0.2s linear;
        }
        button:hover {
          box-shadow: 0px 2px 22px 1px rgba(200, 190, 190, 1);
        }
      `}</style>
    </button>
  );
};

export default Button;
