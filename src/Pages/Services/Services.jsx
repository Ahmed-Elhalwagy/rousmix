import BottomContent from "./BottomContent";
import TopContent from "./TopContent";

function Services() {
  return (
    <div className="services-container">
      <div className="top-container">
        <div className="top-titles">
          <p>ما يميزنا</p>
          <h3>ما يميزنا في ميد مارت</h3>
        </div>
        <div className="content-container">
          <TopContent
            title="سرعة توفير ايفنتات"
            text="
            هذا النص هو نص يمكن استبداله هذا النص هو نص يمكن استبداله
            "
          />
          <TopContent
            title="سرعة توفير ايفنتات"
            text="
            هذا النص هو نص يمكن استبداله هذا النص هو نص يمكن استبداله
            "
          />
          <TopContent
            title="سرعة توفير ايفنتات"
            text="
            هذا النص هو نص يمكن استبداله هذا النص هو نص يمكن استبداله
            "
          />
        </div>
      </div>
      <div className="bottom-container">
        <div className="top-titles">
          <p>خدماتنا</p>
          <h3>ما هي خدماتنا في ميد مارت</h3>
        </div>
        <div className="bottom-content">
          <BottomContent
            title="خدمات الماركتينج"
            text="هذا النص هو نص يمكن استبداله هذا النص هو نص يمكن استبداله"
          />
          <BottomContent
            title="خدمات الماركتينج"
            text="هذا النص هو نص يمكن استبداله هذا النص هو نص يمكن استبداله"
          />
          <BottomContent
            title="خدمات الماركتينج"
            text="هذا النص هو نص يمكن استبداله هذا النص هو نص يمكن استبداله"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
