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
        <Grid item xs={6} mt={7}>
          <Item>
            <Container
              maxWidth="lg"
              sx={{
                my: 10,
                mx: -4,
              }}
            >
              <Paper
                elevation={10}
                sx={{
                  py: 5,
                  mx: 18,
                  mt: 10.3,
                }}
              >
                <Typography variant="h4" mb={8} textAlign="center">
                  <b> Reset Password</b>
                </Typography>

                <Box>
                  <TextField
                    margin="none"
                    name="currntPassword"
                    label="Current Password"
                    sx={{ m: 1, width: "40ch" }}
                  />
                  <TextField
                    margin="none"
                    name="newpassword"
                    label="New Password"
                    sx={{ m: 1, width: "40ch" }}
                  />
                  <TextField
                    margin="none"
                    name="confirmpassword"
                    label="Confirm Password"
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
