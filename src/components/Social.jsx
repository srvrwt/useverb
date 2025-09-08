import Twitter from "../assets/icons/twitter-x.svg";
import Facebook from "../assets/icons/fb.svg";
import Instagram from "../assets/icons/insta.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Youtube from "../assets/icons/yt.svg";
import TikTok from "../assets/icons/tiktok.svg";
import Medium from "../assets/icons/medium.svg";

export default function Social() {
  return (
    <ul className="social-media">
      <li>
        <a target="_blank" href="#twitter">
          <img src={Twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a target="_blank" href="#facebook">
          <img src={Facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a target="_blank" href="#instagram">
          <img src={Instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a target="_blank" href="#linkedin">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a target="_blank" href="#youtube">
          <img src={Youtube} alt="Youtube" />
        </a>
      </li>
      <li>
        <a target="_blank" href="#tiktok">
          <img src={TikTok} alt="TikTok" />
        </a>
      </li>
      <li>
        <a target="_blank" href="#medium">
          <img src={Medium} alt="Medium" />
        </a>
      </li>
    </ul>
  );
}
