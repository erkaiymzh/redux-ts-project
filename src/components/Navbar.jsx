import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { AuthActionTypes } from "../types/types";
import { useSelector } from "react-redux";

const pages = ["Новости", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { logout } = useSelector(state => state);
  const googleProvider = new GoogleAuthProvider();

  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar sx={{ backgroundColor: "#184a28" }} position="fixed">
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}>
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
              synchro
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            synchro
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/products">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                products
              </Button>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/admin-panel-add">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  add
                </Button>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/about">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  about
                </Button>
              </Link>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton size="large" color="inherit" onClick={authWithGoogle}>
              <Badge color="error">
                <LoginIcon />
              </Badge>
            </IconButton>
          </Box>

          {/* {user ? (
              <>
                <IconButton size="small" color="inherit">
                  {user.displayName}
                </IconButton>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
                <IconButton onClick={logout} size="large" color="inherit">
                  <Logout />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={authWithGoogle} size="small" color="inherit">
                Войти
              </IconButton>
            )} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
