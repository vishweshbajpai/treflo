import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles({});
const Cart = () => {
  const classes = useStyles();
  const cartList = useSelector((state) => state.cartList);
  console.log(cartList);
  return <div>cart</div>;
};

export default Cart;
