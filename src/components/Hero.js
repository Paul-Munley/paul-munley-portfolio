import heroImage from "../assets/images/hero-image.jpg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <img src={heroImage} />
      <div className={classes.quote}>
        <p>
          When you cease to make a contribution, you begin to die. - Eleanor
          Roosevelt
        </p>
      </div>
    </div>
  );
};

export default Hero;
