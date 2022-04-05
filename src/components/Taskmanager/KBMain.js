import React, { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import emptyRigData from "../../emptyRigData";
import KBBoard from "./KBBoard";

function KBMain() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingY: "20px",
        paddingX: "20px",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          backgroundColor: "black",
          padding: "20px",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "flex-start",
            minWidth: 290,
            height: "fit-content",
            border: "1px solid orange",
          }}
        >
          <CardContent>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              name="Pad"
              type="text"
              variant="standard"
              placeholder="Enter Pad Name"
              size="small"
              sx={{ paddingTop: "22px" }}
              // onChange={handleNameOfPad}
            ></TextField>
            <Button type="submit">Add Pad</Button>
          </CardContent>
        </Card>
      </Box>
      <Box
        component="div"
        id="list_of_boards"
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <Fragment>
          <KBBoard />
        </Fragment>
      </Box>
    </Box>
  );
}

export default KBMain;
