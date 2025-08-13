import React, { useState, useEffect, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About Me", id: "about-me" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Certification", id: "certification" },
  { label: "Projects", id: "projects" },
  { label: "Languages", id: "languages" },
  { label: "Future Plan", id: "future-plan" },
];

const colors = {
  neon: "#00ff00",
  darkBg: "#0f0f0f",
};

const sharedTextStyle = {
  fontFamily: "'Fira Code', monospace",
  letterSpacing: "0.1em",
  fontWeight: "bold",
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (isMobile) setDrawerOpen(false);
  };

  const handleScroll = useCallback(() => {
    setElevated(window.scrollY > 30);

    const scrollPos = window.scrollY + window.innerHeight / 3;
    let current = "hero";
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        current = id;
      }
    }
    setActiveId(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={elevated ? 3 : 0}
        sx={{
          bgcolor: colors.darkBg,
          boxShadow: elevated ? `0 0 15px ${colors.neon}aa` : "none",
          borderBottom: `1px solid ${colors.neon}33`,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 2, md: 5 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            minHeight: { xs: 56, md: 64 },
            py: 0,
          }}
        >
          {/* Brand */}
          <Typography
            component="a"
            href="#hero"
            onClick={handleNavClick("hero")}
            sx={{
              ...sharedTextStyle,
              fontSize: { xs: "1.3rem", md: "1.7rem" },
              color: colors.neon,
              textDecoration: "none",
              "&:hover": { opacity: 0.8 },
            }}
          >
            RAZIA
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box component="nav" sx={{ display: "flex", gap: 3 }}>
              {navItems.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={handleNavClick(id)}
                  sx={{
                    ...sharedTextStyle,
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    color: id === activeId ? colors.neon : "#007f00aa",
                    borderBottom:
                      id === activeId ? `3px solid ${colors.neon}` : "none",
                    paddingBottom: id === activeId ? "6px" : "4px",
                    transition:
                      "color 0.3s ease, border-bottom 0.3s ease, padding-bottom 0.3s ease",
                    "&:hover": {
                      color: colors.neon,
                      borderBottom: `3px solid ${colors.neon}`,
                      boxShadow: `0 0 10px ${colors.neon}aa`,
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: colors.neon,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 0,
                mr: 3, // extra spacing from right edge
                "&:hover": { bgcolor: `${colors.neon}22` },
              }}
              aria-label="open menu"
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: colors.darkBg,
            width: 240,
            borderRight: `1px solid ${colors.neon}33`,
            boxShadow: `-4px 0 20px ${colors.neon}aa`,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              color: colors.neon,
              "&:hover": { bgcolor: `${colors.neon}22` },
            }}
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

<List disablePadding>
  {navItems.map(({ label, id }) => (
    <ListItem key={id} disablePadding>
      <ListItemButton
        onClick={handleNavClick(id)}
        sx={{
          ...sharedTextStyle,
          color: colors.neon,
          textTransform: "uppercase",
          fontSize: "1rem",
          borderRadius: 1.5,
          mx: 1,
          mt: 0.5,
          mb: 0.5,
          border: id === activeId ? `2px solid ${colors.neon}` : "2px solid transparent",
          boxShadow:
            id === activeId ? `0 0 10px ${colors.neon}88` : "none",
          transition:
            "background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          "&:hover": {
            borderColor: colors.neon,
            backgroundColor: `${colors.neon}22`,
            boxShadow: `0 0 8px ${colors.neon}55`,
          },
        }}
      >
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      </Drawer>
    </>
  );
}
