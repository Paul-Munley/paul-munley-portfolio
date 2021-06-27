import classes from "./Carosel.module.css";
import { useReducer, useState } from "react";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

const Carosel = () => {
  // const [initialLoad, setInitialLoad] = useState(true);
  // const [currentImg, setCurrentImg] = useState(1);

  const initialState = {
    initialLoad: true,
    imgArray: [
      { name: "img1", position: 0, translateX: -60 },
      { name: "img2", position: 1, translateX: 0 },
      { name: "img3", position: 2, translateX: 60 },
      { name: "img4", position: 3, translateX: 120 },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "RIGHT_ARROW_CLICK":
        return {
          initialLoad: false,
          imgArray: state.imgArray.map(img => {
            return {
              name: img.name,
              position: state.position,
              // img.position === 3 ? (img.position = 0) : (img.position += 1),
              translateX:
                img.translateX === -60
                  ? (img.translateX = 120)
                  : (img.translateX -= 60),
            };
          }),
        };
      case "LEFT_ARROW_CLICK":
        return {
          initialLoad: false,
          imgArray: state.imgArray.map(img => {
            return {
              name: img.name,
              position: state.position,
              // img.position === 0 ? (img.position = 3) : (img.position -= 1),
              translateX:
                img.translateX === 120
                  ? (img.translateX = -60)
                  : (img.translateX += 60),
            };
          }),
        };
      default:
        throw new Error("Issue updated React useReducer State.");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const rightArrowHandler = () => {
    dispatch({ type: "RIGHT_ARROW_CLICK" });
    console.log(state.imgArray);
  };

  const leftArrowHandler = () => {
    dispatch({ type: "LEFT_ARROW_CLICK" });
    console.log(state.imgArray);
  };

  // const [img1, img2, img3, img4] = [0, 1, 2, 3];
  // const translateAmount;

  // const rightArrowHandler = () => {
  //   imgArr.forEach(img => {
  //     if (img === 3) {
  // 			img = 0;
  // 			translateAmount = -60;
  //     } else {
  // 			img += 1;
  // 			translateAmount = 60;
  //     }
  //     console.log(imgArr);
  //   });
  // };

  // const leftArrowHandler = () => {
  //   imgArr.forEach(img => {
  //     if (img === 0) {
  // 			img = 3;
  // 			translateAmount =
  //     } else {
  //       img -= 1;
  //     }
  //     console.log(imgArr);
  //   });
  // };

  return (
    <div className={classes.container}>
      <img
        src={leftArrow}
        onClick={leftArrowHandler}
        className={classes.leftArrow}
      />
      <div className={classes.image1}></div>
      <div className={classes.image2}></div>
      <div className={classes.image3}></div>
      <div className={classes.image4}></div>
      <img
        src={rightArrow}
        onClick={rightArrowHandler}
        className={classes.rightArrow}
      />
    </div>
  );
};

export default Carosel;
