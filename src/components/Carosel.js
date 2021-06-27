import classes from "./Carosel.module.css";
import { useState } from "react";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

const Carosel = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [currentImg, setCurrentImg] = useState(1);

  const imgArr = [0, 1, 2, 3];

  const rightArrowHandler = () => {
    imgArr.forEach(img => {
      if (img === 3) {
        img = 0;
      } else {
        img += 1;
      }
      console.log(imgArr);
    });
  };

  const leftArrowHandler = () => {
    imgArr.forEach(img => {
      if (img === 0) {
        img = 3;
      } else {
        img -= 1;
      }
      console.log(imgArr);
    });
  };

  return (
    <div className={classes.container}>
      <img
        src={leftArrow}
        onClick={leftArrowHandler}
        className={classes.leftArrow}
      />
      <div position={0} className={classes.image1}></div>
      <div position={1} className={classes.image2}></div>
      <div position={2} className={classes.image3}></div>
      <div position={3} className={classes.image4}></div>
      <img
        src={rightArrow}
        onClick={rightArrowHandler}
        className={classes.rightArrow}
      />
    </div>
  );
};

export default Carosel;
