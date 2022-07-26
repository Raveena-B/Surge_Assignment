import React, { useState } from "react";
import { Box, Container, Typography, Paper, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CreateNotes = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const submitHandler = (e) => {
    setTitleError(false);
    setDescriptionError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (description === "") {
      setDescriptionError(true);
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
          Create New Note
        </Typography>

        <TextField
          id="title"
          label="Note Title"
          value={title}
          color="secondary"
          required
          sx={{ m: 2, width: "100ch", mx: 20 }}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
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
          error={descriptionError}
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
          endIcon={<KeyboardArrowRightIcon />}
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default CreateNotes;
