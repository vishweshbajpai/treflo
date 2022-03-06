import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress />
      </Box>
    </>
  );
};

export default LoadingSpinner;
