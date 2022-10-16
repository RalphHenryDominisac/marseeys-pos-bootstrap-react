import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import ButtonCategoryStyle from "../ButtonCategoryStyle";
// import ItemsCategoryButton from "../ItemsCategoryButton";

function preventDefault(event) {
  event.preventDefault();
}

export default function TableNumberButtons({ tableNum }) {
  return (
    <React.Fragment>
      <Button
        value={tableNum}
        variant="contained"
        sx={{
          "&:hover": {
            backgroundColor: "#787589",
          },
          mt: 1.5,
          ml: 2,
          mb: 0.1,
          minWidth: 40,
          height: 40,
          backgroundColor: "#504C64",
          borderRadius: 10,
          padding: 0,
        }}
      >
        <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
          {tableNum}
        </Typography>
      </Button>
    </React.Fragment>
  );
}
