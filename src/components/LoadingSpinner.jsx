import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", backgroundColor: "#f2f2f280" }}>
        <CircularProgress />
      </Box>
    </>
  );
};

export default LoadingSpinner;
