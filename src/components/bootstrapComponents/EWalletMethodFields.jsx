import React from "react";
import TextField from "@mui/material/TextField";

export default function EWalletMethodFields() {
  return (
    <React.Fragment>
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="E-wallet Platform"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      />

      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="E-wallet Number"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      />
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="Amount to be Payed"
        variant="outlined"
        size="small"
        sx={{ ml: -0.5, width: 335, mb: 1 }}
      />
    </React.Fragment>
  );
}
