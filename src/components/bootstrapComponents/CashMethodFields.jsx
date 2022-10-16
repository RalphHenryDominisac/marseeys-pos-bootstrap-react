import React from "react";
import TextField from "@mui/material/TextField";

export default function CashMethodFields() {
  return (
    <React.Fragment>
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="Cash Amount to be Payed"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335 }}
      />
    </React.Fragment>
  );
}
