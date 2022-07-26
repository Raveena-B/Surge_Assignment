import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Paper, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateUser = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const type = "user";

  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
  }, []);

  const userHandler = async (placement) => {
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        //use axios API
        "http://localhost:8070/user/register",
        {
          email,
          password,
          accountType: "Student",
          userStatus: true,
        },
        config
      );

      await axios.post(
        "http://localhost:8070/user/notifyuser",
        { email, password },
        config
      );
      setOpen(true);

      setTimeout(() => {
        //set a time out
        setEmail("");
        setPassword("");
        setLoading(false);
        setOpen(false);
      }, 5000); //5seconds timeout
    } catch (error) {
      setError(true);
      setErrorOpen(true);

      setTimeout(() => {
        setEmail("");
        setPassword("");
        setErrorOpen(false);
      }, 5000);

      setLoading(false);
    }
  };

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
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Successfully Registered
        </Alert>
      </Snackbar>
      <Snackbar open={errorOpen} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: "100%" }}>
          Already Registered !!
        </Alert>
      </Snackbar>
      <Container maxWidth="lg">
        <Button
          variant="outlined"
          color="error"
          sx={{
            width: "25ch",
            mt: 3,
            mx: -20,
          }}
          onClick={() => navigate("/")}
        >
          <ReplyIcon /> Back To Login
        </Button>
        <Typography
          mb={5}
          mt={5}
          textAlign="center"
          variant="h4"
          color={"textSecondary"}
          fontFamily={"Times New Roman"}
          gutterBottom
        >
          Create User
        </Typography>

        <Paper
          elevation={11}
          sx={{
            py: 5,
            mx: 18,
            mt: 10,
          }}
        >
          <form>
            <TextField
              id="email"
              label="Enter the email"
              variant="outlined"
              value={email}
              color="secondary"
              required
              sx={{ m: 2, width: "60ch", mx: 25 }}
              maxRows={4}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              id="password"
              label="Enter the password"
              variant="outlined"
              value={password}
              color="secondary"
              required
              sx={{ m: 2, width: "60ch", mx: 25 }}
              maxRows={4}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>

            <Button
              variant="contained"
              sx={{
                mt: 5,
                mx: 45,
                width: "22ch",
                height: "6ch",
                backgroundColor: "purple",
              }}
              onClick={userHandler}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default CreateUser;
