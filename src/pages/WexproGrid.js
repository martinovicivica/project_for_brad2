import React, { useState, useEffect } from "react";
import mockData from "../MockData";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
import { Container, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import padsData from "../padsData";
import wellsData from "../wellsData";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

//1.columns: Table Header
//2.rows: Table Body

// const columns = [
//   { field: "id", headerName: "Id", width: 150 },
//   { field: "title", headerName: "Title", width: 150 },
// ];

const rigColumns = [
  { field: "id", headerName: "Id", width: 50 },
  { field: "Pad", headerName: "Pad", width: 200 },
  { field: "Wells", headerName: "Well", width: 150, hideable: false },
  { field: "Location", headerName: "Location", width: 150 },
  { field: "Afe", headerName: "Afe", width: 150 },
  {
    field: "DirectionalInclination",
    headerName: "Directional Inclination",
    width: 150,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "flex-start",
  color: theme.palette.text.secondary,
}));

// const rows = [
//   { id: 1, padName: "Whiskey Canyon 4", wellName: "Whiskey Canyon 14" },
//   { id: 2, padName: "Whiskey Canyon 4", wellName: "Whiskey Canyon 7" },
// ];

const WexproGrid = () => {
  // const [rigData, setRigData] = useState([]);
  const [mockDatum, setMockDatum] = useState(mockData);
  const [padsDataX, setPadsDataX] = useState(padsData);
  const [wellsDataX, setWellsDataX] = useState(wellsData);

  // const fetchRigData = async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await res.json();
  //     setRigData(data);
  //     console.log(data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   fetchRigData();
  // }, []);

  const rowsWithRigData = mockDatum?.map((data) => {
    return {
      id: data?.id,
      Pad: data?.Pad,
      Wells: data?.Wells,
      Location: data?.Location,
      Afe: data?.Afe,
      DirectionalInclination: data?.DirectionalInclination,
    };
  });
  // const rowData = rigData?.map((rd) => {
  //   return {
  //     id: rd?.id,
  //     title: rd?.title,
  //   };
  // });

  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
        height: "100%",
        width: "100%",
        padding: "30px 30px",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            components={{
              Toolbar: GridToolbar,
            }}
            rows={rowsWithRigData}
            columns={rigColumns}
            autoHeight
          />
        </div>
      </div> */}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
          width: "100%",
          paddingTop: "30px",
        }}
      >
        {/* <Card
          sx={{
            border: "solid 2px black",
            width: "100%",
            height: "fit-content",
            backgroundColor: "yellow",
          }}
        >
          <CardContent>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={1}
                paddingTop="10px"
              >
                <Grid item spacing={3}>
                  <Typography>No.</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Pad Designation</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Well</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Location</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Details</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>AFE</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Direction Inclination</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>MD</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>TVD</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>APD Date</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Spud Start</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Spud Est</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Spud Act</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Operational Status</Typography>
                </Grid>
                <Grid item spacing={3}>
                  <Typography>Drilling Window</Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card> */}
        {/* the main box and card  */}
        <Box
          component="div"
          sx={{
            paddingTop: "20px",
            width: "100%",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              display: "flex",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* Start of Pads as Column Headers  */}
                <Box
                  component="div"
                  sx={{
                    order: 1,
                    flexGrow: 1,
                    border: "solid 2px black",
                    width: "fit-content",
                    height: "100%",
                    backgroundColor: "yellow",
                    marginY: "20px",
                    marginX: "20px",
                  }}
                >
                  <Stack spacing={8} direction="column" padding={2}>
                    {padsDataX.map((data) => (
                      <Item
                        sx={{
                          border: "solid 1px orange",
                          margin: "2px 2px",
                        }}
                      >
                        <Grid
                          container
                          direction="column"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={1}
                          paddingY="100px"
                          width="300px"
                        >
                          <Grid item spacing={3}>
                            <item>
                              <h1>{data.padName}</h1>
                            </item>
                          </Grid>
                        </Grid>
                      </Item>
                    ))}
                  </Stack>
                </Box>
                <Box
                  component="div"
                  sx={{
                    order: 2,
                    flexGrow: 1,
                    flexDirection: "column",
                    minWidth: "fit-content",
                    border: "solid 2px black",
                    marginY: "20px",
                    marginLeft: "50px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "fit-content",
                      marginRight: "5px",
                    }}
                  >
                    <Stack spacing={12} direction="row" padding={2}>
                      {wellsDataX.map((data) =>
                        data.padsId === 1 ? (
                          <Item
                            sx={{
                              height: "fit-content",
                              border: "solid 1px orange",
                              margin: "2px 2px",
                              boxShadow: "3px 2px 10px black",
                            }}
                          >
                            <Grid
                              container
                              direction="column"
                              justifyContent="space-evenly"
                              alignItems="flex-start"
                              height="fit-content"
                              width="fit-content"
                            >
                              <Grid item spacing={3}>
                                <item>{data.wellId}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>
                                  <h3 bold>{data.wellName}</h3>
                                </item>
                              </Grid>
                              <Divider flexItem />
                              <Grid item spacing={3}>
                                <item>{data.Location}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>{data.Location_details}</item>
                              </Grid>
                              <Divider flexItem />
                              <Grid item spacing={3}>
                                <item>AFE: {data.Afe}</item>
                              </Grid>

                              <Grid item spacing={3}>
                                <item>
                                  Directional Inclination: {data.Dir_inc}
                                </item>
                              </Grid>
                              <Grid
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="flex-start"
                                height="fit-content"
                                width="fit-content"
                                spacing={3}
                              >
                                <Grid item spacing={3}>
                                  <item>MD: {data.Apd.MD}</item>
                                </Grid>
                                <Grid item spacing={3}>
                                  <item>TVD: {data.Apd.TVD}</item>
                                </Grid>
                              </Grid>
                              <Divider flexItem />
                              <Grid item spacing={3}>
                                <item>APD Date: {data.Apd_date}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Spud Start Date: {data.Spud_start}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Spud Est: {data.Spud_est}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Spud Act: {data.Spud_act}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Status: {data.Operational}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Drilling Window: {data.Dr_win}</item>
                              </Grid>
                            </Grid>
                          </Item>
                        ) : null
                      )}
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "fit-content",
                      paddingTop: "8px",
                    }}
                  >
                    <Stack spacing={12} direction="row" padding={2}>
                      {wellsDataX.map((data) =>
                        data.padsId === 2 ? (
                          <Item
                            sx={{
                              height: "fit-content",

                              border: "solid 1px orange",
                              margin: "2px 2px",
                              boxShadow: "3px 2px 10px black",
                            }}
                          >
                            <Grid
                              container
                              direction="column"
                              justifyContent="space-evenly"
                              alignItems="flex-start"
                              height="fit-content"
                              width="fit-content"
                            >
                              <Grid item spacing={3}>
                                <item>{data.wellId}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>
                                  <h3 bold>{data.wellName}</h3>
                                </item>
                              </Grid>
                              <Divider flexItem />
                              <Grid item spacing={3}>
                                <item>{data.Location}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>{data.Location_details}</item>
                              </Grid>
                              <Divider flexItem />
                              <Grid item spacing={3}>
                                <item>AFE: {data.Afe}</item>
                              </Grid>

                              <Grid item spacing={3}>
                                <item>
                                  Directional Inclination: {data.Dir_inc}
                                </item>
                              </Grid>
                              <Grid
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="flex-start"
                                height="fit-content"
                                width="fit-content"
                                spacing={3}
                              >
                                <Grid item spacing={3}>
                                  <item>MD: {data.Apd.MD}</item>
                                </Grid>
                                <Grid item spacing={3}>
                                  <item>TVD: {data.Apd.TVD}</item>
                                </Grid>
                              </Grid>
                              <Divider flexItem />
                              <Grid item spacing={3}>
                                <item>APD Date: {data.Apd_date}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Spud Start Date: {data.Spud_start}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Spud Est: {data.Spud_est}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Spud Act: {data.Spud_act}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Status: {data.Operational}</item>
                              </Grid>
                              <Grid item spacing={3}>
                                <item>Drilling Window: {data.Dr_win}</item>
                              </Grid>
                            </Grid>
                          </Item>
                        ) : null
                      )}
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "fit-content",
                      paddingTop: "28px",
                    }}
                  >
                    <Stack spacing={8} direction="row" padding={2}>
                      {wellsDataX.map((data) =>
                        data.padsId === 3 ? (
                          <Item
                            sx={{
                              height: "fit-content",
                              border: "solid 1px orange",
                            }}
                          >
                            <Grid item spacing={3}>
                              <item>{data.wellId}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>
                                <h3 bold>{data.wellName}</h3>
                              </item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Location}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Location_details}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Afe}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Dir_inc}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Apd.MD}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Apd.TVD}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Apd_date}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Spud_start}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Spud_est}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Spud_act}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Operational}</item>
                            </Grid>
                            <Grid item spacing={3}>
                              <item>{data.Dr_win}</item>
                            </Grid>
                          </Item>
                        ) : null
                      )}
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default WexproGrid;
