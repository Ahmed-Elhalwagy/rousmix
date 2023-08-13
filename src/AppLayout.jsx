import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";

function AppLayout() {
  return (
    <div>
      <header className="header">
        <Button>
          <Link to="/about">من نحن</Link>
        </Button>
        <Button>
          <Link to="/">خدماتنا</Link>
        </Button>
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
