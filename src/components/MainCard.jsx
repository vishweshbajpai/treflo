import { makeStyles } from "@mui/styles";
import React from "react";
import { StarIcon } from "../assets/StarIcon";
import VegImg from "../assets/VegImg.png";
import NonVegImg from "../assets/NonVegImg.png";
import { useDispatch } from "react-redux";
import { addModalContent, toggleCart } from "../actions";

const useStyles = makeStyles({
  root: {
    height: "45rem",
    width: "35rem",
    borderRadius: "1.5rem",
    position: "relative",
    backgroundColor: "white",
    boxShadow: "0 0 10px 0.1px grey",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: "50%",
    width: "inherit",
    borderRadius: "1.5rem 1.5rem 0 0",
  },
  veg: {
    height: "3rem",
    width: "3rem",
    position: "absolute",
    left: "2rem",
    top: "2rem",
  },
  price: {
    position: "absolute",
    top: "17.5rem",
    left: "2rem",
    color: "white",
    fontWeight: "bold",
    fontSize: "3rem",
  },
  bottomWrapper: {
    padding: "5%",
    height: "27%",
    display: "flex",
    flexDirection: "column",
  },
  cardHeadingWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  pizzaName: {
    fontWeight: "bold",
    fontSize: "2.2rem",
  },
  ratingWrapper: {
    borderRadius: "1rem",
    backgroundColor: "green",
    color: "white",
    padding: "0.3rem 0.8rem",
    height: "fit-content",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    marginTop: "0.3rem",
    marginLeft: "1rem",
    fontSize: "1.6rem",
    "& > svg": {
      height: "1rem",
      width: "1rem",
      marginLeft: "0.3rem",
    },
  },
  orange: {
    backgroundColor: "orange",
  },
  pizzaDescription: {
    color: "gray",
    marginTop: "1rem",
    overflow: "auto",
    fontSize: "1.6rem",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: "1rem",
    height: "5rem",
    color: "white",
    fontWeight: "bold",
    letterSpacing: "0.2rem",
    fontSize: "1.8rem",
    width: "90%",
    cursor: "pointer",
    marginBottom: "5%",
    "&:hover": {
      backgroundColor: "#024402",
    },
  },

  "@media (max-width: 480px)": {
    root: {
      width: "30rem",
      height: "40rem",
    },
    price: {
      top: "14.5rem",
    },
  },
});
const MainCard = ({
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

export default MainCard;
