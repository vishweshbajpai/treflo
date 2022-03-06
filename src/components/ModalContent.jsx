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
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    borderBottom: "1px solid black",
    paddingBottom: "10px",
  },
  bottomWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginTop: "20px",
    "& > button": {
      padding: "10px 30px",
      borderRadius: "15px",
      border: "none",
      backgroundColor: "green",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  },
  quantityWrapper: {
    "& > input": {
      marginTop: "15px",
      borderRadius: "15px",
      border: "1px solid black",
      padding: "7px 7px 7px 13px",
      outline: "none",
      width: "50px",
      fontSize: "18px",
      textAlign: "center",
    },
  },
  quantity: {
    fontSize: "20px",
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
            sx={{ color: "black", fontSize: "20px" }}
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
                label={item.size}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel
            component="legend"
            sx={{
              color: "black",
              marginTop: "20px",
              fontSize: "20px",
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
                label={item.name}
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
