import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  styled,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Divider,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["HOME", "ABOUT", "BLOG", "LOGIN", "SIGN UP"];

const ModAppBar = styled(AppBar)`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  background-color: #fff;
`;

const ModBox = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
const ModButton = styled(Button)`
  color: #4829b2;
  font-size: 1rem;
  font-family: "Baloo Bhaijaan 2";
  font-weight: 500;
`;
const ModListItemText = styled(ListItemText)`
  text-align: center;
  color: #4829b2;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0.5rem;
  .css-10hburv-MuiTypography-root {
    font-family: "Baloo Bhaijaan 2";
  }
`;

const primary = "#4829B2";
const secondary = "#b3294e";

const drawerWidth = 240;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ModListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", mb: 7 }}>
      <ModAppBar component="nav">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h4"
            className="LogoText"
            fontFamily={"'Baloo Bhaijaan 2', cursive"}
            fontWeight="400"
            color={primary}
          >
            {" "}
            Lets{" "}
          </Typography>
          <Typography
            variant="h4"
            className="LogoText"
            fontFamily={"'Baloo Bhaijaan 2', cursive"}
            fontWeight="400"
            color={secondary}
          >
            {" "}
            Normalize{" "}
          </Typography>
          <Typography
            variant="h4"
            className="LogoText"
            fontFamily={"'Baloo Bhaijaan 2', cursive"}
            fontWeight="400"
            color={primary}
          >
            {" "}
            It{" "}
          </Typography>

          <ModBox sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <ModButton key={item}>{item}</ModButton>
            ))}
          </ModBox>
        </Toolbar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </ModAppBar>
    </Box>
  );
};

export default Navbar;
