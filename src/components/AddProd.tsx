import {
  Button,
  TextField,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid,
  Paper,
} from "@mui/material";
import { Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../hooks/useAction";

const theme = createTheme();

const AddProd: React.FC = () => {
  const { addUser } = useActions();
  const [value, setValue] = useState({
    name: "",
    picture: "",
    price: 0,
    description: "",
  });

  const handleSubmit = () => {
    if (!value.picture && !value.name && !value.price) {
      return;
    }
    addUser(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: t =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "30vw",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography component="h1" variant="h5" sx={{ mt: 10 }}>
              Add New Product
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}>
              <TextField
                onChange={e => setValue({ ...value, name: e.target.value })}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                onChange={e =>
                  setValue({ ...value, description: e.target.value })
                }
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                type="text"
                id="description"
              />

              <TextField
                onChange={e => setValue({ ...value, price: +e.target.value })}
                style={{ padding: "5px" }}
                variant="outlined"
                label="Price"
                fullWidth
              />
              <TextField
                onChange={e => setValue({ ...value, picture: e.target.value })}
                style={{ padding: "5px" }}
                variant="outlined"
                label="Picture"
                fullWidth
              />
              <Link to="/products">
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  type="submit"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}>
                  Add product
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default AddProd;
