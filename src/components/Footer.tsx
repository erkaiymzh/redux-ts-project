import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        naturegreens{" "}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "80vh",
      }}>
      <CssBaseline />
      <Container component="main" sx={{ mt: 2, mb: 2 }} maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center" }}>
          Buy naturegreen products right now!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            width="50%"
            src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/f8b3fad261b56b6acd4b59b9ace4a77b.jpg?compress=1&resize=768x576&vertical=top"
            alt=""
          />{" "}
          <img
            width="50%"
            src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/6bf8e292e27c109f86d3ba1c441ea373.jpg?compress=1&resize=768x576&vertical=top"
            alt=""
          />{" "}
          <img
            width="50%"
            src="https://cdn.dribbble.com/users/116499/screenshots/6141622/media/265b150868312c7a9578545de94a1151.png?compress=1&resize=768x576&vertical=top"
            alt=""
          />{" "}
          <img
            width="50%"
            src="https://cdn.dribbble.com/users/1228277/screenshots/13924493/media/948973720696db69fceb4be585fd61cc.jpg?compress=1&resize=768x576&vertical=top"
            alt=""
          />{" "}
        </div>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: theme =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
