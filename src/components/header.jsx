import logo from "../images/logo2.png";
export default function Header() {
  return (
    <header className="introduction">
      <div className="center">
        <img className="avatar" src={logo} alt="brand-logo" />
      </div>
    </header>
  );
}
