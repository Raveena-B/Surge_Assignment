import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import axios from "axios";
import NoteCard from "../../Components/NoteCard";
// import EditNote from "./EditNote";
import { useNavigate } from "react-router-dom";

const DisplayNotes = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [deleteNote, setDeleteNote] = useState("");

  useEffect(() => {
    (async () =>
      await axios //get all notes
        .get(`http://localhost:8070/note/`)
        .then((res) => {
          setNotes(res.data.notes);
        })
        .catch((err) => alert(err.message)))();
  }, [deleteNote]);
  console.log(notes);

  const handleDelete = async (id) => {
    //delete notes
    await axios
      .delete(`http://localhost:8070/note/${id}`, id)
      .then((res) => {
        alert("Note successfully deleted!");
      })
      .catch((error) => {
        alert(error);
      });
  };

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
        <Container>
          <Grid container spacing={3}>
            {notes &&
              notes.map((note) => (
                <Grid Item key={note.id} xs={12} md={6} lg={4}>
                  <NoteCard
                    note={note}
                    handleDelete={handleDelete}
                    setDeleteNote={setDeleteNote}
                    // updateHandler={updateHandler}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default DisplayNotes;
