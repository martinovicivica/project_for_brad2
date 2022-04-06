import { CardContent } from "@mui/material";
// import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
// import emptyRigData from "../../emptyRigData";
import React, { Fragment, useState } from "react";
import KBCard from "./KBCard";

const KBBoard = () => {
  const wellList = [];
  const [cardList, setCardList] = useState(wellList);

  const handleAddNewWell = (e) => {
    e.preventDefault();

    const newWellList = [...cardList];
    newWellList.push(KBCard);
    setCardList(newWellList);
  };

  const handleRemoveLastWell = (e) => {
    e.preventDefault();
    const newWellList = [...cardList];
    newWellList.pop();
    setCardList(newWellList);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 290,
        height: "fit-content",
        border: "1px solid orange",
      }}
    >
      <CardContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexFlow: "column nowrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexFlow: "column nowrap",
              alignItems: "center",
              // paddingY: "20px",
            }}
          >
            {cardList.map((KBCard, i) => (
              <Fragment>
                <KBCard key={i} />
              </Fragment>
            ))}
          </Box>

          <Button
            variant="outlined"
            type="submit"
            sx={{ marginX: "10px", marginTop: "20px" }}
            onClick={handleAddNewWell}
          >
            Add Well
          </Button>
          <Button
            variant="outlined"
            type="submit"
            sx={{ marginX: "10px", marginTop: "20px" }}
            onClick={handleRemoveLastWell}
          >
            Remove Last Well
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KBBoard;
