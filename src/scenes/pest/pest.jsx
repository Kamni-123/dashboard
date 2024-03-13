import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import { DataGrid } from "@mui/x-data-grid";
import { dataTeam } from "../../data/data";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 }, // Add a column for ID
    { field: "end_year", headerName: "end_year" },
    {
      field: "intensity",
      headerName: "intensity",
      flex: 1,
      cellClassName: "intensity-column--cell",
    },
    {
      field: "relevance",
      headerName: "relevance",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "topic",
      headerName: "topic",
      flex: 1,
    },
    {
      field: "region",
      headerName: "region",
      flex: 1,
    },
    {
      field: "likelihood",
      headerName: "likelihood",
      flex: 1,
    },
    {
      field: "country",
      headerName: "country",
      flex: 1,
      
    },
  ];

  // Add sequential IDs to each row in dataTeam
  const dataTeamWithIds = dataTeam.map((row, index) => ({
    id: index + 1, // Generate a sequential ID for each row
    ...row,
  }));

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={dataTeamWithIds} // Use dataTeamWithIds with sequential IDs
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
