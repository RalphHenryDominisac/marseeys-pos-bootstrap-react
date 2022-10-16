import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function KuboNumButtonComponent() {
  return (
    <React.Fragment>
      <Button
        value=" Kubo 1"
        variant="contained"
        sx={{
          "&:hover": {
            backgroundColor: "#787589",
          },
          mt: -57,
          ml: 41,
          mb: 0.1,
          minWidth: 70,
          height: 70,
          backgroundColor: "#504C64",
          borderRadius: 10,
          padding: 0,
        }}
      >
        <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
          Kubo 1
        </Typography>
      </Button>
      <Button
        value=" Kubo 2"
        variant="contained"
        sx={{
          "&:hover": {
            backgroundColor: "#787589",
          },
          mt: -40.5,
          ml: 41,
          mb: 0.1,
          minWidth: 70,
          height: 70,
          backgroundColor: "#504C64",
          borderRadius: 10,
          padding: 0,
        }}
      >
        <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
          Kubo 2
        </Typography>
      </Button>
      <Button
        value=" Kubo 3"
        variant="contained"
        sx={{
          "&:hover": {
            backgroundColor: "#787589",
          },
          mt: -24,
          ml: 41,
          mb: 0.1,
          minWidth: 70,
          height: 70,
          backgroundColor: "#504C64",
          borderRadius: 10,
          padding: 0,
        }}
      >
        <Typography sx={{ fontSize: "19px", fontFamily: "Barlow Condensed" }}>
          Kubo 3
        </Typography>
      </Button>
    </React.Fragment>
  );
}
