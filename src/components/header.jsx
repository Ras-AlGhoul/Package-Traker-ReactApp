import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
export default function Header() {
  return (
    <header className="introduction">
      <div className="center">
        <Link to="/">
          <img className="avatar" src={logo} alt="brand-logo" />
        </Link>
      </div>
    </header>
  );
}
