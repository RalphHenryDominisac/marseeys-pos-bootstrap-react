import React from "react";
import Button from "@mui/material/Button";

export default function PaymentMethodButtons({ title, onClick }) {
  return (
    <React.Fragment>
      <Button
        onClick={onClick}
        value="Dine In"
        variant="outlined"
        sx={{
          "&.Mui-selected": {},
          "&.Mui-focusVisible": {
            border: "3px solid #F2A42A",
          },
          ":focus": {
            border: "3px solid #F2A42A",
          },
          ":hover": {
            border: "3px solid #F2A42A",
          },

          width: 131,
          textTransform: "none",
          height: 42,
          borderRadius: 3,
          fontFamily: "Barlow Condensed",
          fontSize: "22px",
          backgroundColor: "#252836",
          borderColor: "#252836",
          color: "white",
          ml: 1,
          mb: 1
        }}
      >
        {title}
      </Button>
    </React.Fragment>
  );
}
