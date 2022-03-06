import { FormControlLabel, Switch, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortPrice, sortRating, toggleVeg } from "../actions";

const useStyles = makeStyles({
  root: {
    height: "100px",
    padding: "20px 100px",
    backgroundColor: "#f2f2f280",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sortWrapper: {
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
  },
  chip: {
    marginLeft: "15px",
    border: "1px solid green",
    borderRadius: "25px",
    padding: "8px 20px",
    cursor: "pointer",
  },
  chipSelected: {
    backgroundColor: "green",
    color: "white",
  },
  veg: {
    fontSize: "20px",
  },
});
const SubHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sortByRating = useSelector((state) => state.sortByRating);
  const sortByPrice = useSelector((state) => state.sortByPrice);

  const vegClickHandler = (e) => {
    dispatch(toggleVeg(e.target.checked));
  };
  const ratingClickHandler = () => {
    dispatch(sortRating());
  };
  const priceClickHandler = () => {
    dispatch(sortPrice());
  };

  return (
    <div className={classes.root}>
      <div className={classes.sortWrapper}>
        Sort By :
        <span
          onClick={ratingClickHandler}
          className={`${classes.chip} ${sortByRating && classes.chipSelected}`}
        >
          Rating
        </span>
        <span
          onClick={priceClickHandler}
          className={`${classes.chip} ${sortByPrice && classes.chipSelected}`}
        >
          Price
        </span>
      </div>
      <FormControlLabel
        control={<Switch onChange={vegClickHandler} color="success" />}
        label={<Typography style={{ fontSize: "20px" }}>Veg</Typography>}
      />
    </div>
  );
};

export default SubHeader;
