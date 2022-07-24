import React from "react";
import { Box, Container, Typography, Paper, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            fontFamily={"Times New Roman"}
          >
            👩‍💼 Student Note App
          </Typography>
          <Button
            color="inherit"
            align={"center"}
            fontFamily={"Times New Roman"}
            onClick={() => navigate("/createuser")}
          >
            Create User
          </Button>
          <Button
            color="inherit"
            fontFamily={"Times New Roman"}
            onClick={() => navigate("/displayusers")}
          >
            Display User
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          mb={5}
          mt={5}
          textAlign="center"
          fontFamily={"Times New Roman"}
        >
          <b>Create User</b>
        </Typography>
        <Paper
          elevation={11}
          sx={{
            py: 5,
            mx: 10,
            mt: 5,
          }}
        >
          <TextField
            id="email"
            label="Enter the email"
            variant="outlined"
            sx={{ m: 2, width: "60ch", mx: 25 }}
            maxRows={4}
          ></TextField>
          <TextField
            id="password"
            label="Enter the password"
            variant="outlined"
            sx={{ m: 2, width: "60ch", mx: 25 }}
            maxRows={4}
          ></TextField>

          <Button
            variant="contained"
            sx={{
              mt: 5,
              mx: 50,
              width: "22ch",
              height: "6ch",
              backgroundColor: "purple",
            }}
          >
            Save
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default CreateUser;
