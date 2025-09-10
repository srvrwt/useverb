import Button from "./Button.jsx";
import NewsletterImg from "../assets/img/Newsletter.webp";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="content-wrapper">
          <h2 data-aos="fade-up">
            TOO BUSY TO SET IT UP <span>YOURSELF?</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Our team will come to your location and set everything up for you —
            completely FREE!
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            Available for the first 10 businesses who sign up in April or May.
            Just reply "Done For You" to our welcome email.
          </p>
          <Button
            text="Start for free"
            href="/"
            showArrow
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
        <div className="img-wrapper">
          <img
            src={NewsletterImg}
            alt="Newsletter"
            data-aos="slide-left"
            data-aos-delay="2000"
          />
        </div>
      </div>
    </section>
  );
}
