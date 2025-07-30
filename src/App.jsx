import { useState } from 'react'
import  DataTable  from "./Components/Table/Table.jsx"
import { Box, Typography, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/RemoveCircle";
import AddIcon from "@mui/icons-material/AddCircle";
import styles from "./App.module.css"

function App() {

  return (
    <>
      <Box
  className={styles.header}
  sx={{
    backgroundColor: "#496786",
    color: "white",
    px: { xs: 2, sm: 3 },
    py: 2,
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: { xs: "flex-start", sm: "center" },
    gap: 2,
  }}
>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Manage <span style={{ color: "white", fontWeight: "bolder" }}>Employees</span>
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>

        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
        >
          Add New Employee
        </Button>
      </Stack>
    </Box>
      <DataTable />
    </>
  )
}

export default App
