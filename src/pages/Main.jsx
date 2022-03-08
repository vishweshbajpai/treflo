import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import MainCard from "../components/MainCard";
import LoadingSpinner from "../components/LoadingSpinner";
import SubHeader from "../components/SubHeader";

const useStyles = makeStyles({
  root: {
    minHeight: "calc(100vh - 41rem)",
    padding: "1% 10% 7% 10%",
    boxSizing: "border-box",
    backgroundColor: "#f2f2f280",
    display: "flex",
    flexWrap: "wrap",
    rowGap: "3em",
  },
  emptyMsg: {
    margin: "5rem auto",
    fontSize: "2rem",
  },
  "@media (max-width: 480px)": {
    root: {
      padding: "1% 5% 7% 5%",
    },
  },
});
const Main = () => {
  const classes = useStyles();
  let data = useSelector((state) => state.data);
  const isVeg = useSelector((state) => state.isVeg);
  const isLoading = useSelector((state) => state.isLoading);
  const sortByRating = useSelector((state) => state.sortByRating);
  const sortByPrice = useSelector((state) => state.sortByPrice);

  if (sortByRating) {
    data = data.sort((a, b) => b.rating - a.rating);
  }
  if (sortByPrice) {
    data = data.sort((a, b) => a.price - b.price);
  }
  if (isVeg) {
    data = data.filter((item) => item.isVeg);
  }

  return (
    <>
      <SubHeader />
      {isLoading && <LoadingSpinner />}
      <div className={classes.root}>
        {data?.length === 0 && !isLoading && (
          <div className={classes.emptyMsg}>No Pizza Found!</div>
        )}
        {data?.map((item) => (
          <MainCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            isVeg={item.isVeg}
            rating={item.rating}
            price={item.price}
            img_url={item.img_url}
            size={item.size}
            toppings={item.toppings}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
