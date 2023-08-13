/* eslint-disable react/prop-types */
function Button({ children, type }) {
  return (
    <button className={`btn ${type == "more" ? "more" : ""}`}>
      {children}
    </button>
  );
}

export default Button;
