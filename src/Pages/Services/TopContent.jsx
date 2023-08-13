/* eslint-disable react/prop-types */
function TopContent({ title, text }) {
  return (
    <div>
      <div className="content">
        <div className="image"></div>
        <div className="text">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
