import React from "react";
import { Box, Container, Typography, Paper, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CreateUser = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

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
        },
        config
      );

      await axios.post(
        "http://localhost:8070/user/notifyuser",
        { email, password },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        Snackbar.info({
          message: `Notification`,
          description: "Successfully Submitted the user details 😘",
          placement,
        });
        form.resetFields();
      }, 5000); //5seconds timeout
    } catch (error) {
      Snackbar.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
      setError(true);
      form.resetFields();
      setLoading(false);
    }
  };

  const [form] = form.useForm();

  const onReset = () => {
    form.resetFields();
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
              sx={{ m: 2, width: "60ch", mx: 25 }}
              maxRows={4}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
            <TextField
              id="password"
              label="Enter the password"
              variant="outlined"
              value={password}
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
