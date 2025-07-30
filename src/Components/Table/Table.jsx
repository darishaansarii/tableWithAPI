import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Stack, Box, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const theme = useTheme();
  const isWide = useMediaQuery("(min-width:1300px)");
  const isSmall = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.users.map((users) => ({
          id: users.id,
          firstName: users.firstName,
          lastName: users.lastName,
          username: users.username,
          email: users.email,
        }));
        setRows(formatted);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      field: "firstName",
      headerName: "First name",
      minWidth: isWide ? 250 : 150,
      flex: isWide ? undefined : 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      minWidth: isWide ? 250 : 150,
      flex: isWide ? undefined : 1,
    },
    {
      field: "username",
      headerName: "Username",
      minWidth: isWide ? 250 : 150,
      flex: isWide ? undefined : 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: isWide ? 300 : 200,
      flex: isWide ? undefined : 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: isWide ? 250 : 200,
      flex: isWide ? undefined : 1,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <EditIcon style={{ color: "orange", cursor: "pointer" }} />
          <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
        </Stack>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ width: "100%", overflowX: "auto" }}>
      <Box sx={{ minWidth: isSmall ? "800px" : "100%" }}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
          }}
        />
      </Box>
    </Paper>
  );
}
