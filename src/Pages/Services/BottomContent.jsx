/* eslint-disable react/prop-types */
import Button from "../../../components/Button";

function BottomContent({ title, text }) {
  return (
    <div className="content">
      <div className="image"></div>
      <h4>{title}</h4>
      <p>{text}</p>
      <Button type="more" className="btn">
        المزيد
      </Button>
    </div>
  );
}

export default BottomContent;
