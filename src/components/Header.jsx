import Logo from "/Logo-UseVerb.webp";
import Button from "./Button.jsx";

export default function Header() {
  return (
    <header>
      <div className="container">
        <a href="/" className="logo" data-aos="fade" data-aos-delay="100">
          <img src={Logo} alt="Useverb" />
        </a>

        <Button
          text="Sign Up"
          href="/"
          showArrow={true}
          data-aos="fade"
          data-aos-delay="300"
        />
      </div>
    </header>
  );
}
