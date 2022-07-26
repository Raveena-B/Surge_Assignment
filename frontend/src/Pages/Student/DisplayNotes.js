import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Paper, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DisplayNotes = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    function getNotes() {
      axios
        .get("http://localhost:8070/note/")
        .then((res) => console.log(res))
        .catch((err) => alert(err));
    }
    getNotes();
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
            onClick={() => navigate("/createnote")}
          >
            Create Note
          </Button>
          <Button
            color="inherit"
            fontFamily={"Times New Roman"}
            onClick={() => navigate("/displaynotes")}
          >
            Display Note
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography
          mb={5}
          mt={8}
          textAlign="center"
          variant="h4"
          color={"textSecondary"}
          fontFamily={"Times New Roman"}
          gutterBottom
        >
          Display Notes
        </Typography>
        <div>
          {notes.map((note) => (
            <p key={notes.id}>{notes.title}</p>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default DisplayNotes;
