import { makeStyles } from "@mui/styles";
import React from "react";
import VegImg from "../assets/VegImg.png";
import NonVegImg from "../assets/NonVegImg.png";
import DeleteImg from "../assets/DeleteImg.png";
import { increaseQuantity, reduceQuantity } from "../actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
    height: "300px",
    borderRadius: "15px",
    position: "relative",
    backgroundColor: "white",
    boxShadow: "0 0 10px 0.1px grey",
    display: "flex",
    padding: "20px",
    boxSizing: "border-box",
    gap: "30px",
  },
  imageWrapper: {
    width: "350px",
    height: "260px",
    borderRadius: "15px",
    position: "relative",
  },
  foodImage: {
    height: "100%",
    width: "100%",
    borderRadius: "inherit",
  },
  veg: {
    height: "30px",
    width: "30px",
    position: "absolute",
    left: "20px",
    top: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    padding: "10px",
  },
  name: {
    fontWeight: "bold",
    fontSize: "25px",
  },
  cardDeleteWrapper: {
    display: "flex",
    justifyContent: "space-between",
    "& > img": {
      height: "50px",
      width: "50px",
      cursor: "pointer",
      borderRadius: "10px",
    },
    "& > img:hover": {
      boxShadow: "0 0 10px 0.1px grey",
    },
  },
  quantity: {
    fontSize: "20px",
    marginTop: "10px",
    display: "flex",
  },
  size: {
    fontSize: "20px",
    marginTop: "20px",
  },
  toppings: {
    fontSize: "20px",
    marginTop: "20px",
  },
  price: {
    fontSize: "20px",
    marginTop: "20px",
  },
  marginWrapper: {
    marginLeft: "5px",
    "& > span": {
      padding: "0px 10px",
      fontWeight: "bold",
      fontSize: "20px",
      backgroundColor: "#e62f42",
      color: "white",
      borderRadius: "5px",
      margin: "0 10px",
      cursor: "pointer",
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
            <span onClick={reduceClickHandler}>-</span>
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
