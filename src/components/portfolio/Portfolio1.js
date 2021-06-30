import classes from "./Portfolio1.module.css";
import portfolio1Image from "../../assets/images/crypto-project.jpg";
import githubIcon from "../../assets/icons/github-logo.png";
import linkIcon from "../../assets/icons/link-icon.png";

const Portfolio1 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.portfolioText}>
        <p>
          This is a minimalist SPA that allows you to see the top
          cryptocurrencies and their current prices in USD, BTC, ETH. Created
          with React, Redux, and React Router.
        </p>
        <div className={classes.portfolioSkills}>
          <p>Skills Used & Added Features:</p>
          <ul>
            <li>
              <span>Dynamic Search Bar</span>
            </li>
            <li>
              <span>Consuming Multiple APIs</span>
            </li>
            <li>
              <span>String and Array Methods</span>
            </li>
            <li>
              <span>CSS Aligning and CSS Modules</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.portfolioImages}>
        <img className={classes.portfolioImage} src={portfolio1Image} />
        <div className={classes.iconLinks}>
          <img src={githubIcon} width="90px" height="auto" />
          <img src={linkIcon} width="40px" height="auto" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio1;
