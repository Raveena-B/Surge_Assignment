import React, { useState, useEffect } from "react";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import axios from "axios";
import ReplyIcon from "@mui/icons-material/Reply";
// import { FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ResetPassword = () => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);

  const { resetToken } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 5000);
  }, []);

  // const [form] = form.useForm();

  const resetPasswordHandler = async () => {
    setLoading(true);
    try {
      await axios.put(
        `http://localhost:8070/user/resetpassword/${resetToken}`,
        { password }
      );

      setTimeout(() => {
        Snackbar.info({
          message: "Password Reset Successfully",
          placement: "top",
        });
        setLoading(false);
      }, 3000);
    } catch (error) {
      alert(error);
      setLoading(false);
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
            fontFamily={"Times New Roman"}
            onClick={() => history("/login")}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0}>
        <Box mt={20} mb={5.8} mx={6}>
          <img src="2.webp" alt="reser password"></img>
        </Box>
        <Grid item xs={6} mt={4}>
          <Item>
            <Container maxWidth="lg" sx={{ my: 2 }}>
              <Paper
                elevation={10}
                sx={{
                  py: 3.9,
                  mx: 14,
                }}
              >
                <Typography
                  variant="h4"
                  mb={2}
                  textAlign="center"
                  fontFamily={"Times New Roman"}
                >
                  Reset Password
                </Typography>

                <Box>
                  <TextField
                    id="firstName"
                    label="Enter the First Name"
                    variant="outlined"
                    size="small"
                    value={firstName}
                    sx={{ m: 1, width: "40ch", mx: 2, mb: 1 }}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></TextField>
                  <TextField
                    id="lastName"
                    label="Enter the Last Name"
                    variant="outlined"
                    size="small"
                    value={lastName}
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                    onChange={(e) => setLastName(e.target.value)}
                  ></TextField>
                  <TextField
                    id="email"
                    label="Enter the Email"
                    variant="outlined"
                    size="small"
                    value={email}
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                    onChange={(e) => setEmail(e.target.value)}
                  ></TextField>
                  <TextField
                    id="dateOfBirth"
                    label="Enter the Date-Of-Birth"
                    variant="outlined"
                    size="small"
                    value={dateOfBirth}
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  ></TextField>
                  <TextField
                    id="mobile"
                    label="Enter the Mobile"
                    variant="outlined"
                    size="small"
                    value={mobile}
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                    onChange={(e) => setMobile(e.target.value)}
                  ></TextField>

                  <TextField
                    margin="none"
                    name="password"
                    label="Enter New Password"
                    size="small"
                    value={password}
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Box
                    sx={{
                      my: 4,
                      px: 5,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "40ch",
                        backgroundColor: "purple",
                        mx: 5,
                      }}
                      onClick={resetPasswordHandler}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{
                        width: "25ch",
                        mx: 20,
                        mt: 2,
                      }}
                      onClick={() => history("/login")}
                    >
                      <ReplyIcon /> Back To Login
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Container>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResetPassword;
