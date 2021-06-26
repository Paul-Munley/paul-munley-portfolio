import heroImage from "../assets/hero-image.jpg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <img src={heroImage} width="900" height="520" />
    </div>
  );
};

export default Hero;
