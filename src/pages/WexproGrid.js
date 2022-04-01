import React, { useState, useEffect } from "react";
import mockData from "../MockData";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
// import mockRigData from "../mockRigData";

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

// const rows = [
//   { id: 1, padName: "Whiskey Canyon 4", wellName: "Whiskey Canyon 14" },
//   { id: 2, padName: "Whiskey Canyon 4", wellName: "Whiskey Canyon 7" },
// ];

const WexproGrid = () => {
  // const [rigData, setRigData] = useState([]);
  const [mockDatum, setMockDatum] = useState(mockData);

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
    <div
      style={{
        display: "flex",
        height: "100%",
        padding: "50px 300px",
      }}
    >
      <div
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
      </div>
    </div>
  );
};

export default WexproGrid;
