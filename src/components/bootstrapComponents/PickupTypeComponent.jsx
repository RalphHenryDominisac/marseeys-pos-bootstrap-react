import React from "react";
import TextField from "@mui/material/TextField";

export default function PickupTypeComponent() {
  return (
    <React.Fragment>
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="Pickup Receiver Name"
        variant="outlined"
        size="small"
        sx={{ ml: 3, mt: 4, width: 335, mb: 1 }}
      />
      <TextField
        // onChange={(g1) => setOrderComment(g1.target.value)}
        className="inputRounded"
        placeholder="Estimated Pickup Time"
        variant="outlined"
        size="small"
        sx={{ ml: 3, width: 335, mb: 1 }}
      />
    </React.Fragment>
  );
}
