import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  backdrop: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    zIndex: "20",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },

  modal: {
    position: "fixed",
    top: "15vh",
    left: "5%",
    width: "90%",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "14px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: "30",
    animation: "slide-down 300ms ease-out forwards",
    boxSizing: "border-box",
  },

  "@media (min-width: 768px)": {
    modal: {
      width: "30rem",
      left: "calc(50% - 15rem)",
    },
  },

  "@keyframes slide-down": {
    from: {
      opacity: 0,
      transform: "translateY(-3rem)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});
const Backdrop = (props) => {
  const classes = useStyles();

  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  const classes = useStyles();
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onCloseCart={props.onCloseCart} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
