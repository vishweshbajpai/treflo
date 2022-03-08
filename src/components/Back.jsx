import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import BackImg from "../assets/BackImg.png";
const useStyles = makeStyles({
  root: {
    height: "10rem",
    display: "flex",
    padding: "1% 10%",
    boxSizing: "border-box",
    alignItems: "center",
    backgroundColor: "#f2f2f280",
  },
  back: {
    fontSize: "2rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "1rem",
    fontWeight: "bold",
    "& > img": {
      height: "2.5rem",
      width: "2.5rem",
      marginRight: "1rem",
    },
    "&:hover": {
      backgroundColor: "#10101012",
    },
  },
});
const Back = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const backClickHandler = () => {
    navigate(-1);
  };
  return (
    <div className={classes.root}>
      <div className={classes.back} onClick={backClickHandler}>
        <img src={BackImg} alt="back" />
        Back
      </div>
    </div>
  );
};

export default Back;
