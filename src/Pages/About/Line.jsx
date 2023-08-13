/* eslint-disable react/prop-types */
function Line({ children }) {
  return (
    <div>
      <p className="line">
        <span></span> {children}
      </p>
    </div>
  );
}

export default Line;
