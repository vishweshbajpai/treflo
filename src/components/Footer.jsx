import { makeStyles } from "@mui/styles";
import React from "react";
import PizzaImg from "../assets/PizzaImg.png";
import FacebookImg from "../assets/FacebookImg.png";
import InstagramImg from "../assets/InstagramImg.png";
import TwitterImg from "../assets/TwitterImg.png";

const useStyles = makeStyles({
  root: {
    minHeight: "150px",
    padding: "50px 100px",
    backgroundColor: "#10101012",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  footer: {
    color: "black",
    fontSize: "30px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    "& > img": {
      height: "50px",
      width: "50px",
      marginRight: "8px",
    },
  },
  footerList: {
    marginTop: "50px",
    "& > span": {
      fontSize: "16px",
      color: "gray",
      marginRight: "40px",
      cursor: "pointer",
    },
  },
  socialLinksWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
  },
  socialLinks: {
    "& > img": {
      marginLeft: "20px",
      height: "30px",
      width: "30px",
      cursor: "pointer",
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.footer}>
          <img src={PizzaImg} alt="pizza" />
          Pizzarati
        </div>
        <div className={classes.footerList}>
          <span>Disclaimer</span>
          <span>Privacy Policy</span>
          <span>FAQ</span>
          <span>Terms & Conditions</span>
          <span>Feedback</span>
        </div>
      </div>
      <div className={classes.socialLinksWrapper}>
        <div className={classes.socialLinks}>
          <img src={FacebookImg} alt="facebook" />
          <img src={InstagramImg} alt="instagram" />
          <img src={TwitterImg} alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
