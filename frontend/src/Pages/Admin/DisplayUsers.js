import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import axios from "axios";
import NoteCard from "../../Components/NoteCard";
import { useNavigate } from "react-router-dom";

const DisplayUsers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () =>
      await axios //get all users
        .get(`http://localhost:8070/user/`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => alert(err.message)))();
  }, []);

  return (
    <Box>
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
          mb={5}
          mt={10}
          textAlign="center"
          variant="h4"
          color={"textSecondary"}
          fontFamily={"Times New Roman"}
          gutterBottom
        >
          Display User
        </Typography>
        <Container>
          <Grid container spacing={3}>
            {users &&
              users.map((user) => (
                <Grid Item key={user.id} xs={12} md={6} lg={4}>
                  <NoteCard user={user} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default DisplayUsers;
