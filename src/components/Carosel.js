import classes from "./Carosel.module.css";
import { Fragment, useEffect, useReducer, useState } from "react";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";
import starfishImage from "../assets/images/starfish.jpg";
import northernLights from "../assets/images/northern-lights.jpg";
import sedona from "../assets/images/sedona.jpg";
import green from "../assets/images/green.jpg";

const Carosel = () => {
  // useState METHOD
  const [img1, setImg1] = useState(-60);
  const [img2, setImg2] = useState(0);
  const [img3, setImg3] = useState(60);
  const [img4, setImg4] = useState(120);

  // useState METHOD
  const rightArrowHandler = () => {
    // Garud Clause to prevent slides from moving right any further
    if (img4 === 0) return;

    setImg1(img1 - 60);
    setImg2(img2 - 60);
    setImg3(img3 - 60);
    setImg4(img4 - 60);
  };

  const leftArrowHandler = () => {
    // Gaurd clause to prevent slides from moving left any further
    if (img1 === 0) return;

    setImg1(img1 + 60);
    setImg2(img2 + 60);
    setImg3(img3 + 60);
    setImg4(img4 + 60);
  };

  let trans1 = `translateX(${img1}vh)`;
  let trans2 = `translateX(${img2}vh)`;
  let trans3 = `translateX(${img3}vh)`;
  let trans4 = `translateX(${img4}vh)`;

  let css1 = { transform: trans1 };
  let css2 = { transform: trans2 };
  let css3 = { transform: trans3 };
  let css4 = { transform: trans4 };

  return (
    <Fragment>
      <h2> Paul Munley - Professional Developer</h2>
      <div className={classes.container}>
        <img
          src={leftArrow}
          onClick={leftArrowHandler}
          className={classes.leftArrow}
        />
        <div className={classes.image1} style={css1}>
          <img src={green} />
        </div>
        <div className={classes.image2} style={css2}>
          <img src={starfishImage} />
        </div>
        <div className={classes.image3} style={css3}>
          <img src={northernLights} />
        </div>
        <div className={classes.image4} style={css4}>
          <img src={sedona} />
        </div>
        <img
          src={rightArrow}
          onClick={rightArrowHandler}
          className={classes.rightArrow}
        />
      </div>
    </Fragment>
  );
};

export default Carosel;
