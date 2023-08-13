import Line from "./Line";
import Titles from "./Titles";
import Video from "./Video";

function About() {
  return (
    <div className="about-container">
      <div className="about-right">
        <div className="title">
          <Titles />
        </div>
        <div className="main-content">
          <Line>
            هذا النص هو مثال يمكن أن يستبدل في نفس المساحة لقد تم توليدالنص لقد
            تم توليد النص
          </Line>
          <Line>
            هذا النص هو مثال يمكن أن يستبدل في نفس المساحة لقد تم توليدالنص لقد
            تم توليد النص
          </Line>
          <Line>
            هذا النص هو مثال يمكن أن يستبدل في نفس المساحة لقد تم توليدالنص لقد
            تم توليد النص
          </Line>
          <Line>
            هذا النص هو مثال يمكن أن يستبدل في نفس المساحة لقد تم توليدالنص لقد
            تم توليد النص
          </Line>
          <Line>
            هذا النص هو مثال يمكن أن يستبدل في نفس المساحة لقد تم توليدالنص لقد
            تم توليد النص
          </Line>
        </div>
      </div>
      <div className="about-left">
        <Video
          soruce="https://www.youtube.com/embed/d1VN6h8m498"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  );
}

export default About;
