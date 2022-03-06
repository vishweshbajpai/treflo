import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import BackImg from "../assets/BackImg.png";
const useStyles = makeStyles({
  root: {
    height: "100px",
    display: "flex",
    padding: "20px 100px",
    boxSizing: "border-box",
    alignItems: "center",
    backgroundColor: "#f2f2f280",
  },
  back: {
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "bold",
    "& > img": {
      height: "25px",
      width: "25px",
      marginRight: "10px",
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
