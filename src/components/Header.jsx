import { makeStyles } from "@mui/styles";
import React from "react";
import PizzaImg from "../assets/PizzaImg.png";
import CartImg from "../assets/CartImg.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minHeight: "8.4rem",
    padding: "1% 10%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    boxShadow: "0 0 10px 1px grey",
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: "3.6rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    "& > img": {
      height: "5rem",
      width: "5rem",
      marginRight: "0.8rem",
    },
  },
  cart: {
    fontSize: "2.4rem",
    margin: "auto 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderRadius: "1rem",
    textDecoration: "none",
    color: "black",
    padding: "1rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  },
  cartIcon: {
    height: "2.5rem",
    width: "2.5rem",
    marginRight: "1rem",
  },
});

const Header = () => {
  const classes = useStyles();
  const cartList = useSelector((state) => state.cartList);
  let cartListLength = cartList.length;

  return (
    <div className={classes.root}>
      <Link to={"/"} className={classes.header}>
        <img src={PizzaImg} alt="pizza" />
        Pizzarati
      </Link>
      <Link to={"/cart"} className={classes.cart}>
        <img src={CartImg} alt="cart" className={classes.cartIcon} />
        Cart {cartListLength > 0 && `(${cartListLength})`}
      </Link>
    </div>
  );
};

export default Header;
