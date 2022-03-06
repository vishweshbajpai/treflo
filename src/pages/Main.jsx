import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import SubHeader from "../components/SubHeader";

const useStyles = makeStyles({
  root: {
    minHeight: "1000px",
    padding: "10px 100px 50px 100px",
    boxSizing: "border-box",
    backgroundColor: "#f2f2f280",
  },
  listWrapper: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "50px",
    justifyContent: "space-between",
  },
  emptyMsg: {
    margin: "50px auto",
    fontSize: "20px",
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
      <div className={classes.root}>
        {isLoading && <LoadingSpinner />}
        <div className={classes.listWrapper}>
          {data?.length === 0 && !isLoading && (
            <div className={classes.emptyMsg}>No Pizza Found!</div>
          )}
          {data?.map((item) => (
            <Card
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
      </div>
    </>
  );
};

export default Main;
