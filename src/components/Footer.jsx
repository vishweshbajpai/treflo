import { makeStyles } from "@mui/styles";
import React from "react";
import PizzaImg from "../assets/PizzaImg.png";
import FacebookImg from "../assets/FacebookImg.png";
import InstagramImg from "../assets/InstagramImg.png";
import TwitterImg from "../assets/TwitterImg.png";

const useStyles = makeStyles({
  root: {
    minHeight: "15rem",
    padding: "5% 7%",
    backgroundColor: "#10101012",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  footer: {
    color: "black",
    fontSize: "3rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    "& > img": {
      height: "5rem",
      width: "5rem",
      marginRight: "0.8rem",
    },
  },
  footerList: {
    marginTop: "5rem",
    display: "flex",
    "& > span": {
      fontSize: "1.6rem",
      color: "gray",
      marginRight: "4rem",
      cursor: "pointer",
    },
  },
  socialLinksWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
  },
  socialLinks: {
    display: "flex",
    "& > img": {
      marginLeft: "2rem",
      height: "3rem",
      width: "3rem",
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
