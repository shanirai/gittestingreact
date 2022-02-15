// React, Next packages
import React from "react";
import Link from "next/link";
// Mui packages
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

// Custom packages or Third Party packages
import sideBarMenuItem from "data/sidebarData";
function SideBar() {
  const drawerWidth = 320;

  console.log(sideBarMenuItem, "check this menu item");
  const LogoContainer = styled("div")({
    padding: " 0px 20px",
  });
  const drawer = (
    <div>
      <List sx={{ paddingBottom: 3 }}>
        <LogoContainer>
          {" "}
          <img src="/Images/mnr-logo.svg" />
        </LogoContainer>
      </List>
      <List>
        {sideBarMenuItem.map((item, index) => {
          return (
            <Link href={item.pageUrl} key={index}>
              <a style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  key={index}
                  disableRipple={true}
                  style={{ padding: "20px 0px" }}
                >
                  <ListItemIcon>
                    <img src={item.menuIcon} />{" "}
                  </ListItemIcon>

                  <ListItemText>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#2C2C31", opacity: "0.7" }}
                    >
                      {item.menuTitle}
                    </Typography>{" "}
                  </ListItemText>
                </ListItem>
              </a>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            color: "grey.main",
            background: "primary.main",
            padding: "40px 30px",
            borderRight: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}

export default SideBar;
