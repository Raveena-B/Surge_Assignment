import React from "react";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 3, mx: 3 }}
            onClick={() => navigate("/createuser")}
          >
            Admin Login
          </Button>
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
                  mt: 8,
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
                    sx={{ m: 1, width: "40ch" }}
                  />
                  <TextField
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    sx={{ m: 1, width: "40ch" }}
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
                      sx={{ m: 1, width: "40ch", backgroundColor: "purple" }}
                    >
                      Sign In
                    </Button>
                  </Box>
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
            <Box mt={17} mb={5} mx={15}>
              <img src="1.svg" alt="student login"></img>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
