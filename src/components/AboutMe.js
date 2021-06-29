import { Fragment } from "react";
import classes from "./AboutMe.module.css";
import aboutMePic from "../assets/images/about-me-picture.jpg";

const AboutMe = () => {
  return (
    <div className={classes.card}>
      <div className={classes.about}>
        <div className={classes.main}>
          <div>
            <h1>About Me</h1>
            <p>
              Paul is a husband and soon to be father whose main passion is his
              family. After the recent successful sale of his local service
              business, he has become obsessed with programming and has been
              dedicating multiple hours a day to become skilled in frontend
              development. Paul has chosen to take the self taught path as this
              aligns with his ability to be self driven even when faced with
              difficult problems. He thrives off the constant challenge that
              programming provides and would be a great asset to any development
              team.
            </p>
            <div className={classes.skillsSummary}>
              <h1>Skills Summary</h1>
              <ul>
                <li>✏️HTML</li>
                <li>✏️CSS</li>
                <li>✏️Javascript</li>
                <li>✏️React</li>
                <li>✏️Redux</li>
                <li>✏️NextJS</li>
              </ul>
            </div>
          </div>
          <img src={aboutMePic} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
