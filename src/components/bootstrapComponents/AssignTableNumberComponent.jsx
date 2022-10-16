import React from "react";
import Stack from "@mui/material/Stack";
import TableNumberButtons from "./TableNumberButtons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KuboNumButtonComponent from "./KuboNumButtonComponent";

export default function AssignTableNumberComponent() {
  return (
    <React.Fragment>
      <Typography class="itemNameTag">Assign Table Number:</Typography>
      <Box
        border={2}
        borderRadius={2}
        backgroundColor="#252836"
        borderColor="#504C64"
        width={450}
        marginLeft={-4}
        height={283}
      >
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="1" />
          <TableNumberButtons tableNum="2" />
          <TableNumberButtons tableNum="3" />
          <TableNumberButtons tableNum="4" />
          <TableNumberButtons tableNum="5" />
        </Stack>
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="6" />
          <TableNumberButtons tableNum="7" />
          <TableNumberButtons tableNum="8" />
          <TableNumberButtons tableNum="9" />
          <TableNumberButtons tableNum="10" />
        </Stack>
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="11" />
          <TableNumberButtons tableNum="12" />
          <TableNumberButtons tableNum="13" />
          <TableNumberButtons tableNum="14" />
          <TableNumberButtons tableNum="15" />
        </Stack>
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="16" />
          <TableNumberButtons tableNum="17" />
          <TableNumberButtons tableNum="18" />
          <TableNumberButtons tableNum="19" />
          <TableNumberButtons tableNum="20" />
        </Stack>
        <Stack spacing={0} direction="row">
          <TableNumberButtons tableNum="21" />
          <TableNumberButtons tableNum="22" />
          <TableNumberButtons tableNum="23" />
          <TableNumberButtons tableNum="24" />
          <TableNumberButtons tableNum="25" />
        </Stack>
        <KuboNumButtonComponent />
      </Box>
    </React.Fragment>
  );
}
