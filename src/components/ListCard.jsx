import { makeStyles } from "@mui/styles";
import React from "react";
import VegImg from "../assets/VegImg.png";
import NonVegImg from "../assets/NonVegImg.png";
import DeleteImg from "../assets/DeleteImg.png";
import { increaseQuantity, reduceQuantity } from "../actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginBottom: "3rem",
    height: "30rem",
    borderRadius: "1.5rem",
    position: "relative",
    backgroundColor: "white",
    boxShadow: "0 0 10px 0.1px grey",
    display: "flex",
    padding: "2rem",
    boxSizing: "border-box",
    gap: "3rem",
  },
  imageWrapper: {
    width: "35%",
    height: "100%",
    borderRadius: "1.5rem",
    position: "relative",
  },
  foodImage: {
    height: "100%",
    width: "100%",
    borderRadius: "inherit",
  },
  veg: {
    height: "3rem",
    width: "3rem",
    position: "absolute",
    left: "2rem",
    top: "2rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    padding: "1rem",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  name: {
    fontWeight: "bold",
    fontSize: "2.5rem",
  },
  cardDeleteWrapper: {
    display: "flex",
    justifyContent: "space-between",
    "& > img": {
      height: "5rem",
      width: "5rem",
      cursor: "pointer",
      borderRadius: "1rem",
    },
    "& > img:hover": {
      boxShadow: "0 0 10px 0.1px grey",
    },
  },
  quantity: {
    fontSize: "2rem",
    marginTop: "1rem",
    display: "flex",
  },
  size: {
    fontSize: "2rem",
    marginTop: "2rem",
  },
  toppings: {
    fontSize: "2rem",
    marginTop: "2rem",
  },
  price: {
    fontSize: "2rem",
    marginTop: "2rem",
  },
  marginWrapper: {
    marginLeft: "0.5rem",
    "& > span": {
      padding: "0 0.7rem",
      fontWeight: "bold",
      fontSize: "2rem",
      backgroundColor: "#e62f42",
      color: "white",
      borderRadius: "0.5rem",
      margin: "0 1rem",
      cursor: "pointer",
    },
  },
  "@media (max-width: 480px)": {
    root: {
      height: "25rem",
    },
    imageWrapper: {
      width: "40%",
    },
  },
});
const ListCard = ({
  id,
  name,
  img_url,
  isVeg,
  price,
  quantity,
  size,
  toppings,
  onDelete,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toppingsList =
    toppings.length > 0 ? (
      toppings.map((item) => (
        <span className={classes.marginWrapper}>{item}, </span>
      ))
    ) : (
      <span className={classes.marginWrapper}>None</span>
    );

  const deleteHandler = () => {
    onDelete(id);
  };

  const addClickHandler = () => {
    dispatch(increaseQuantity(id));
  };

  const reduceClickHandler = () => {
    if (quantity === 1) {
      onDelete(id);
    } else {
      dispatch(reduceQuantity(id));
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.imageWrapper}>
        <img src={img_url} alt="food" className={classes.foodImage} />
        <img
          src={isVeg ? VegImg : NonVegImg}
          alt="veg"
          className={classes.veg}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.cardDeleteWrapper}>
          <div className={classes.name}>{name}</div>
          <img src={DeleteImg} alt="delete" onClick={deleteHandler} />
        </div>
        <div className={classes.quantity}>
          Quantity :{" "}
          <div className={classes.marginWrapper}>
            <span onClick={addClickHandler}>+</span>
            {quantity}
            <span onClick={reduceClickHandler} style={{ padding: "0 0.9rem" }}>
              -
            </span>
          </div>
        </div>
        <div className={classes.size}>
          Size : <span className={classes.marginWrapper}>{size}</span>
        </div>
        <div className={classes.toppings}>Toppings : {toppingsList}</div>
        <div className={classes.price}>
          Price : <span className={classes.marginWrapper}>&#8377; {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
