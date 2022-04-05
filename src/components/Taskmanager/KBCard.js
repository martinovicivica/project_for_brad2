import { CardContent } from "@mui/material";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const KBCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{ boxShadow: "1", padding: "10px", margin: "10px" }}
    >
      <CardContent>
        <Box>
          <TextField
            variant="standard"
            placeholder="Enter a Well Name"
            size="small"
          ></TextField>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KBCard;
