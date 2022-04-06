import React, { Fragment, useState } from "react";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
// import emptyRigData from "../../emptyRigData";
import KBBoard from "./KBBoard";

function KBMain() {
  const padList = [KBBoard, KBBoard];
  const padNames = [
    "Whiskey Canyon 4 Pad",
    "Canyon Creek Unit 217 Pad",
    "Canyon Creek Unit 242 Pad",
  ];
  const [addPadName, setAddPadName] = useState(padNames);
  const [boardList, setBoardList] = useState(padList);

  const handleAddNewPad = (e) => {
    e.preventDefault();

    const newBoardList = [...boardList];
    newBoardList.push(KBBoard);
    setBoardList(newBoardList);
  };

  const handleAddPadName = (e) => {
    e.preventDefault();

    const pName = e.target.getAttribute("name");
    const pValue = e.target.value;

    const newPadName = { ...addPadName };
    newPadName[pName] = pValue;

    setAddPadName(newPadName);
  };

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
            <Box component="form" onSubmit={handleAddNewPad}>
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
              />
              <Button onClick={handleAddNewPad} type="submit">
                Add Pad
              </Button>
            </Box>
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
          alignContent: "space-around",
          rowGap: "30px",
          columnGap: "60px",
          padding: "20px",
        }}
      >
        {boardList.map((KBBoard, i) => (
          <Fragment>
            <Card variant="outlined">
              <CardContent>
                <Box component="div">
                  <TextField
                    hiddenLabel
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{ paddingY: "2px" }}
                    variant="standard"
                    size="small"
                    placeholder="Pad Designation"
                    name="Pad"
                    onChange={handleAddPadName}
                  />
                  <KBBoard key={i} />
                </Box>
              </CardContent>
            </Card>
          </Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default KBMain;
