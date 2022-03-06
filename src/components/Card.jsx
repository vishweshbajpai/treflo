import { makeStyles } from "@mui/styles";
import React from "react";
import { StarIcon } from "../assets/StarIcon";
import VegImg from "../assets/VegImg.png";
import NonVegImg from "../assets/NonVegImg.png";
import { useDispatch } from "react-redux";
import { addModalContent, toggleCart } from "../actions";

const useStyles = makeStyles({
  root: {
    height: "500px",
    width: "400px",
    borderRadius: "15px",
    position: "relative",
    backgroundColor: "white",
    boxShadow: "0 0 10px 0.1px grey",
  },
  image: {
    maxHeight: "50%",
    width: "400px",
    borderRadius: "15px 15px 0 0",
  },
  veg: {
    height: "30px",
    width: "30px",
    position: "absolute",
    left: "20px",
    top: "20px",
  },
  price: {
    position: "absolute",
    top: "200px",
    left: "20px",
    color: "white",
    fontWeight: "bold",
    fontSize: "30px",
  },
  bottomWrapper: {
    padding: "20px",
  },
  cardHeadingWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  pizzaName: {
    fontWeight: "bold",
    fontSize: "25px",
  },
  ratingWrapper: {
    borderRadius: "10px",
    backgroundColor: "green",
    color: "white",
    padding: "3px 8px",
    height: "fit-content",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    marginTop: "3px",
    marginLeft: "10px",
    "& > svg": {
      height: "10px",
      width: "10px",
      marginLeft: "3px",
    },
  },
  orange: {
    backgroundColor: "orange",
  },
  pizzaDescription: {
    color: "gray",
    marginTop: "10px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: "10px",
    height: "50px",
    color: "white",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontSize: "20px",
    position: "absolute",
    left: "5%",
    width: "90%",
    bottom: "20px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#024402",
    },
  },
});
const Card = ({
  id,
  name,
  description,
  isVeg,
  rating,
  price,
  img_url,
  size,
  toppings,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sizeList = size[0].items;
  const toppingsList = toppings[0].items;
  const addClickHandler = () => {
    dispatch(toggleCart());
    dispatch(
      addModalContent({
        name,
        description,
        isVeg,
        rating,
        price,
        img_url,
        sizeList,
        toppingsList,
      })
    );
  };
  return (
    <div className={classes.root}>
      <img src={img_url} alt="pizzaImg" className={classes.image} />
      <img src={isVeg ? VegImg : NonVegImg} alt="veg" className={classes.veg} />
      <div className={classes.price}>&#8377; {price}</div>
      <div className={classes.bottomWrapper}>
        <div className={classes.cardHeadingWrapper}>
          <div className={classes.pizzaName}>{name}</div>
          <div
            className={`${classes.ratingWrapper} ${
              rating < 4 && classes.orange
            }`}
          >
            {rating.toFixed(1)}
            <StarIcon />
          </div>
        </div>
        <div className={classes.pizzaDescription}>{description}</div>
      </div>
      <div className={classes.button} onClick={addClickHandler}>
        ADD
      </div>
    </div>
  );
};

export default Card;
