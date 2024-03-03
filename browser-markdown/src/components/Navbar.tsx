import { DeleteOutlineRounded } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavbarDrawer from "./NavbarDrawer";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2B2D31" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NavbarDrawer />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h6 className="navbar-logo">MARKDOWN</h6>
          </Typography>
          <Button color="inherit" sx={{ mb: "0.2rem", mr: "0.5rem" }}>
            <DeleteOutlineRounded />
          </Button>
          <Button color="inherit" sx={{ backgroundColor: "#E46742" }}>
            Save Changes
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
