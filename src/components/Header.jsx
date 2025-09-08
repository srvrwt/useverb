import Logo from "/Logo-UseVerb.webp";
import Button from "./Button.jsx";
export default function Header() {
  return (
    <header>
      <div className="container">
        <a href="/" className="logo">
          <img src={Logo} alt="Useverb" />
        </a>
        <Button text="Sign Up" href="/" showArrow={true} />
      </div>
    </header>
  );
}
