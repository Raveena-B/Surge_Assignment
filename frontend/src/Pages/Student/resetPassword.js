import React from "react";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ResetPassword = () => {
  return (
    <Box>
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
                  py: 5,
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
                    sx={{ m: 1, width: "40ch", mx: 2, mb: 1 }}
                  ></TextField>
                  <TextField
                    id="lastName"
                    label="Enter the Last Name"
                    variant="outlined"
                    size="small"
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                  ></TextField>
                  <TextField
                    id="email"
                    label="Enter the Email"
                    variant="outlined"
                    size="small"
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                  ></TextField>
                  <TextField
                    id="dateOfBirth"
                    label="Enter the Date-Of-Birth"
                    variant="outlined"
                    size="small"
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                  ></TextField>
                  <TextField
                    id="mobile"
                    label="Enter the Mobile"
                    variant="outlined"
                    size="small"
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                  ></TextField>
                  <TextField
                    margin="none"
                    name="currntPassword"
                    label="Current Password"
                    size="small"
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                  />
                  <TextField
                    margin="none"
                    name="newpassword"
                    label="New Password"
                    size="small"
                    sx={{ m: 1, width: "40ch", mx: 2 }}
                  />
                  <TextField
                    margin="none"
                    name="confirmpassword"
                    label="Confirm Password"
                    size="small"
                    sx={{ m: 1, width: "40ch", mx: 2 }}
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
                    >
                      Submit
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
