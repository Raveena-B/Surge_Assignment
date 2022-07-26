import React, { useState } from "react";
import { Box, Container, Typography, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const EditNote = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateHandler = async (id) => {
    // create handler for saving data to the db

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `http://localhost:8070/note/${id}`,
        {
          title,
          description,
        }
      );
      setTitle("");
      setDescription("");
    } catch (error) {
      alert(error);
    }
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
          <Button color="inherit" fontFamily={"Times New Roman"}>
            Edit Note
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
          Edit Note
        </Typography>
        <TextField
          id="title"
          label="Note Title"
          value={title}
          color="secondary"
          required
          sx={{ m: 2, width: "100ch", mx: 20 }}
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <TextField
          id="description"
          label="Description"
          value={description}
          color="secondary"
          required
          sx={{ m: 2, width: "100ch", mx: 20 }}
          multiline
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>

        <Button
          variant="contained"
          sx={{
            mt: 5,
            mx: 55,
            color: "primary",
            width: "40ch",
          }}
          type="submit"
          onClick={updateHandler}
        >
          Update
        </Button>
      </Container>
    </Box>
  );
};

export default EditNote;
