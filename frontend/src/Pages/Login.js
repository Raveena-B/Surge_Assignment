import React from "react";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const history = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [available, setAvailable] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    console.log("trigger");
    //handler method for login

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8070/user/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token); //set the browser caching or local storage for globally accessed anywhere in the application
      localStorage.setItem("email", data.email);
      localStorage.setItem("type", data?.type);
      localStorage.setItem("id", data?.id);
      localStorage.setItem("firstName", data?.firstName);
      localStorage.setItem("lastName", data?.lastName);
      localStorage.setItem("dateOfBirth", data?.dateOfBirth);
      localStorage.setItem("mobile", data?.mobile);
      localStorage.setItem("userStatus", data?.userStatus);
      localStorage.setItem("accountType", data?.accountType);

      setTimeout(() => {
        // set a 5seconds timeout for authentication

        if (data.accountType === "Student" && data.userStatus) {
          history(`/resetpassword`);
        } else if (data.accountType === "Student" && !data.userStatus) {
          history(`/createnote`);
        } else {
          history(`/createuser`);
        }

        setLoading(false);
        window.location.reload();
      }, 5000);
    } catch (error) {
      setError(error.response.data.error);
      setAvailable(error.response.data.available);
      setLoading(false);
      setIsError(true);
      setTimeout(() => {
        setError("");
        setAvailable("");
      }, 5000); //5s
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
        </Toolbar>
      </AppBar>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Item>
            <Container
              maxWidth="lg"
              sx={{
                my: 7,
                mx: 3,
              }}
            >
              <Paper
                elevation={10}
                sx={{
                  py: 5,
                  mx: 18,
                  mt: 10,
                }}
              >
                <Typography
                  variant="h4"
                  mb={8}
                  textAlign="center"
                  fontFamily={"Times New Roman"}
                >
                  Login
                </Typography>

                <Box>
                  <TextField
                    margin="normal"
                    name="email"
                    label="Email"
                    type="email"
                    color="secondary"
                    sx={{ m: 1, width: "40ch" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    color="secondary"
                    sx={{ m: 1, width: "40ch" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Box className="btn-wrap">
                    <center>
                      {isError && (
                        <small style={{ color: "red" }}>
                          Something went wrong. Please try again later.
                        </small>
                      )}
                      <Button
                        variant="contained"
                        sx={{ m: 2, width: "40ch", backgroundColor: "purple" }}
                        onClick={() => loginHandler()}
                      >
                        {loading ? "Authenticating..." : "SIGN IN"}
                      </Button>
                    </center>
                  </Box>
                  <Box
                    sx={{
                      my: 1,
                      px: 10,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  ></Box>
                  <Typography variant="h8">
                    ___________________OR ___________________
                  </Typography>
                  <br />
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      typography: "body1",
                      "& > :not(style) + :not(style)": {
                        ml: 2,
                      },
                    }}
                  >
                    <Link href="/resetpassword" underline="hover">
                      {" Forgot Your Password?"}
                      <br /> {" reset password"}
                    </Link>
                  </Box>

                  <br />
                  <br />
                </Box>
              </Paper>
            </Container>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <Box mt={10} mb={5} mx={15}>
              <img src="1.svg" alt="student login"></img>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
