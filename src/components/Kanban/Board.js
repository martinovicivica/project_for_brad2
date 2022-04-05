import { Card, CardContent, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
// import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import CardKB from "../Card/Card";
import Editable from "../Editable/Editable";
import mockRigData from "../../mockRigData";

import "./Board.css";

function Board() {
  const [rigData, setRigData] = useState(mockRigData);

  const padNameArr = Object.entries(rigData);

  // console.log(padNameArr);

  const filteredPadName = padNameArr.filter(function ([k, v]) {
    return k === "Pad";
  });

  const PadName1 = Object.fromEntries(filteredPadName);
  console.log(filteredPadName);

  const padNames = rigData?.filter((data) => {
    return {
      id: data?.id,
      Pad: data?.Pad,
    };
  });
  return (
    <Card
      className="board_top"
      variant="outlined"
      sx={{
        display: "flex",
        minWidth: 290,
        height: "100%",
        justifyContent: "center",
        outline: "solid black .5px",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography
            className="board_top_title"
            sx={{
              fontSize: "1rem",
              lineHeight: "1.875rem",
              display: "flex",
              alignItems: "left",
              fontWeight: "bold",
              paddingRight: "18px",
            }}
          >
            <Box component="span" sx={{ color: "#c4c3c2" }}>
              4
            </Box>
          </Typography>
          <TextField
            InputProps={{
              disableUnderline: true,
            }}
            variant="standard"
            size="small"
            value={padNames.Pad}
            label={padNames.Pad}
          />
          <Box sx={{ paddingTop: "6px" }}>
            <FaIcons.FaEllipsisH />
          </Box>
        </Box>
        <Box
          component="div"
          className="box-holding-cards"
          backgroundColor="#c4c3c2"
          borderRadius="5px"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-evenly",
            padding: "2px 2px",
          }}
        >
          <CardKB />
          <CardKB />
          <CardKB />
          <CardKB />
          <Editable />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Board;
