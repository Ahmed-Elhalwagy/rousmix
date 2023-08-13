/* eslint-disable react/prop-types */
function Line({ children }) {
  return (
    <div>
      <p className="line">
        <p></p> {children}
      </p>
    </div>
  );
}

export default Line;
