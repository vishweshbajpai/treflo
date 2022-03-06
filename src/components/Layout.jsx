import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../actions";
import Footer from "./Footer";
import Header from "./Header";
import ModalContent from "./ModalContent";

const Layout = (props) => {
  const cartIsShown = useSelector((state) => state.cartIsShown);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };
  return (
    <>
      {cartIsShown && <ModalContent onCloseCart={toggleCartHandler} />}
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
