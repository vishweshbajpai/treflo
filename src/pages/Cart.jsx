import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Back from "../components/Back";
import ListCard from "../components/ListCard";
import EmptyCartImg from "../assets/EmptyCartImg.png";
import { removeFromCart } from "../actions";

const useStyles = makeStyles({
  root: {
    minHeight: "calc(100vh - 18rem)",
    padding: "1% 10%",
    boxSizing: "border-box",
    backgroundColor: "#f2f2f280",
    display: "flex",
    flexDirection: "column",
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto 0",
    "& > img": {
      height: "30rem",
      width: "30rem",
    },
    "& > div": {
      marginTop: "2rem",
      fontSize: "4rem",
    },
  },
  total: {
    fontSize: "3rem",
    textAlign: "right",
  },
  "@media (max-width: 480px)": {
    root: {
      padding: "1% 5% 7% 5%",
    },
  },
});

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let totalAmount = 0;

  let cartList = useSelector((state) => state.cartList);

  totalAmount = cartList.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const deleteHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Back />
      <div className={classes.root}>
        {cartList.length === 0 && (
          <div className={classes.empty}>
            <img src={EmptyCartImg} alt="empty" />
            <div>Cart is Empty!</div>
          </div>
        )}
        {cartList.map((item) => (
          <ListCard
            key={item.id}
            id={item.id}
            name={item.name}
            img_url={item.img_url}
            isVeg={item.isVeg}
            price={item.price}
            quantity={item.quantity}
            size={item.size}
            toppings={item.toppings}
            onDelete={deleteHandler}
          />
        ))}
        {cartList.length > 0 && (
          <div className={classes.total}>
            Total Amount : &#8377; {totalAmount}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
