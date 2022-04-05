import { CardContent } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
import emptyRigData from "../../emptyRigData";
import React, { useState } from "react";
// import KBCard from "./KBCard";

const KBBoard = () => {
  const [drillData, setDrillData] = useState(emptyRigData);
  const [newPadName, setNewPadName] = useState(
    setDrillData.id,
    setDrillData.Pad
  );

  function handleAddPadName(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newAddedPadName = { ...newPadName };
    newAddedPadName[fieldName] = fieldValue;

    setNewPadName(newAddedPadName);
  }

  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 290, height: "fit-content", border: "1px solid orange" }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexFlow: "column nowrap",
          }}
        >
          <Box
            component="form"
            // key={}
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "flex-start",
            }}
          >
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              name="Pad"
              id="Pad"
              type="text"
              variant="standard"
              placeholder="Enter a Pad Name"
              size="small"
              value={emptyRigData.Pad}
              onChange={handleAddPadName}
            ></TextField>
            <Button
              variant="outlined"
              type="submit"
              size="small"
              color="error"
              sx={{ marginTop: "-5px" }}
            >
              Edit
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexFlow: "column nowrap",
              alignItems: "center",
              paddingY: "20px",
            }}
          >
            {/* <KBCard />
              <KBCard />
              <KBCard />
              <KBCard /> */}
          </Box>
          <Button variant="outlined" type="submit" sx={{ marginX: "10px" }}>
            Add Well
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KBBoard;
