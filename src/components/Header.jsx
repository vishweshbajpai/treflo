import { makeStyles } from "@mui/styles";
import React from "react";
import PizzaImg from "../assets/PizzaImg.png";
import CartImg from "../assets/CartImg.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minHeight: "84px",
    padding: "20px 100px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    boxShadow: "0 0 10px 1px grey",
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: "36px",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    "& > img": {
      height: "50px",
      width: "50px",
      marginRight: "8px",
    },
  },
  cart: {
    fontSize: "24px",
    margin: "auto 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "8px 10px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  },
  cartIcon: {
    height: "25px",
    width: "25px",
    marginRight: "10px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={"/"} className={classes.header}>
        <img src={PizzaImg} alt="pizza" />
        Pizzarati
      </Link>
      <Link to={"/cart"} className={classes.cart}>
        <img src={CartImg} alt="cart" className={classes.cartIcon} />
        Cart
      </Link>
    </div>
  );
};

export default Header;
