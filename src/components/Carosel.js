import classes from "./Carosel.module.css";
import { useReducer, useState } from "react";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

const Carosel = () => {
  // OTHER METHODS TESTED
  // const [initialLoad, setInitialLoad] = useState(true);
  // const [currentImg, setCurrentImg] = useState(1);

  // useState METHOD
  const [img1, setImg1] = useState(-60);
  const [img2, setImg2] = useState(0);
  const [img3, setImg3] = useState(60);
  const [img4, setImg4] = useState(120);

  // useReducer METHOD
  // const initialState = {
  //   initialLoad: true,
  //   imgArray: [
  //     { name: "img1", position: 0, translateX: -60 },
  //     { name: "img2", position: 1, translateX: 0 },
  //     { name: "img3", position: 2, translateX: 60 },
  //     { name: "img4", position: 3, translateX: 120 },
  //   ],
  // };

  // const reducer = (state, action) => {
  //   const copiedArray = [...state.imgArray];
  //   switch (action.type) {
  //     case "RIGHT_ARROW_CLICK":
  //       return {
  //         initialLoad: false,
  //         imgArray: copiedArray.map(img => {
  //           return {
  //             name: img.name,
  //             // position: state.position,
  //             // img.position === 3 ? (img.position = 0) : (img.position += 1),
  //             translateX: (img.translateX -= 60),
  //             // img.translateX === -60
  //             //   ? (img.translateX = 120)
  //             //   : (img.translateX = img.translateX - 60),
  //           };
  //         }),
  //       };
  //     case "LEFT_ARROW_CLICK":
  //       return {
  //         initialLoad: false,
  //         imgArray: copiedArray.map(img => {
  //           return {
  //             name: img.name,
  //             // position: state.position,
  //             // img.position === 0 ? (img.position = 3) : (img.position -= 1),
  //             translateX: (img.translateX += 60),
  //             // img.translateX === 120
  //             //   ? (img.translateX = -60)
  //             //   : (img.translateX = img.translateX + 60),
  //           };
  //         }),
  //       };
  //     default:
  //       throw new Error("Issue updated React useReducer State.");
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);

  // const rightArrowHandler = () => {
  //   dispatch({ type: "RIGHT_ARROW_CLICK" });
  // };

  // const leftArrowHandler = () => {
  //   dispatch({ type: "LEFT_ARROW_CLICK" });
  // };

  // console.log(state.imgArray);

  // useState METHOD
  const rightArrowHandler = () => {
    if (img1 === -120) {
      setImg1(120);
    } else {
      setImg1(img1 - 60);
    }
    if (img2 === -120) {
      setImg2(120);
    } else {
      setImg2(img2 - 60);
    }
    if (img3 === -120) {
      setImg3(120);
    } else {
      setImg3(img3 - 60);
    }
    if (img4 === -120) {
      setImg4(120);
    } else {
      setImg4(img4 - 60);
    }
  };

  const leftArrowHandler = () => {
    if (img1 === 120) {
      setImg1(-120);
    } else {
      setImg1(img1 + 60);
    }
    if (img2 === 120) {
      setImg2(-120);
    } else {
      setImg2(img2 + 60);
    }
    if (img3 === 120) {
      setImg3(-120);
    } else {
      setImg3(img3 + 60);
    }
    if (img4 === 120) {
      setImg4(-120);
    } else {
      setImg4(img4 + 60);
    }
  };

  // const leftArrowHandler = () => {
  //   setImg1(img1 + 60);
  //   setImg2(img2 + 60);
  //   setImg3(img3 + 60);
  //   setImg4(img4 + 60);
  // };

  console.log(img1, img2, img3, img4);

  // ORIGINAL METHODS TESTED
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
      <div className={classes.image1} style={{ translateX: `${img1}vh` }}></div>
      <div className={classes.image2} style={{ translateX: `${img2}vh` }}></div>
      <div className={classes.image3} style={{ translateX: `${img3}vh` }}></div>
      <div className={classes.image4} style={{ translateX: `${img4}vh` }}></div>
      <img
        src={rightArrow}
        onClick={rightArrowHandler}
        className={classes.rightArrow}
      />
    </div>
  );
};

export default Carosel;
