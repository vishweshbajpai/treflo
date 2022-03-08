import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleCart } from "../actions";
import Modal from "./Modal";

const useStyles = makeStyles({
  modalContentWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
    borderBottom: "1px solid black",
    paddingBottom: "1rem",
  },
  bottomWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginTop: "2rem",
    "& > button": {
      padding: "1rem 3rem",
      borderRadius: "1.5rem",
      border: "none",
      backgroundColor: "green",
      color: "white",
      fontSize: "1.8rem",
      fontWeight: "bold",
      cursor: "pointer",
    },
  },
  quantityWrapper: {
    "& > input": {
      marginTop: "1.5rem",
      borderRadius: "1.5rem",
      border: "1px solid black",
      padding: "0.7rem 0.7rem 0.7rem 1.3rem",
      outline: "none",
      width: "5rem",
      fontSize: "1.8rem",
      textAlign: "center",
    },
  },
  quantity: {
    fontSize: "2rem",
  },
});

let cartListId = 101;

const ModalContent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const modalContent = useSelector((state) => state.modalContent);
  const {
    name,
    description,
    isVeg,
    rating,
    price,
    img_url,
    sizeList,
    toppingsList,
  } = modalContent;

  let quantity = 1;
  let toppings = [];
  let size = sizeList[0].size;

  const addToCartHandler = () => {
    dispatch(toggleCart());
    dispatch(
      addToCart({
        id: cartListId++,
        name,
        description,
        isVeg,
        rating,
        price,
        img_url,
        size,
        toppings,
        quantity,
      })
    );
  };

  const toppingsChangeHandler = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      toppings.push(name);
    } else {
      toppings.filter((item) => item !== name);
    }
  };

  const sizeChangeHandler = (e) => {
    size = e.target.value;
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.modalContentWrapper}>
        <div className={classes.heading}>Add-On</div>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ color: "black", fontSize: "2rem" }}
          >
            Choose size :
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={sizeList[0].size}
            onChange={sizeChangeHandler}
          >
            {sizeList.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item.size}
                control={<Radio />}
                label={<span style={{ fontSize: "1.6rem" }}>{item.size}</span>}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel
            component="legend"
            sx={{
              color: "black",
              marginTop: "2rem",
              fontSize: "2rem",
            }}
          >
            Choose topping(s) :
          </FormLabel>
          <FormGroup row>
            {toppingsList.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox onChange={toppingsChangeHandler} name={item.name} />
                }
                label={<span style={{ fontSize: "1.6rem" }}>{item.name}</span>}
              />
            ))}
          </FormGroup>
        </FormControl>
        <div className={classes.bottomWrapper}>
          <div className={classes.quantityWrapper}>
            <div className={classes.quantity}>Select Quantity :</div>
            <input
              type="number"
              min="1"
              max="10"
              step="1"
              defaultValue="1"
              onChange={(e) => {
                quantity = +e.target.value;
              }}
            />
          </div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContent;
