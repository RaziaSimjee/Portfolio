import React from "react";
import { Box, Typography, Stack, Link, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const neonGreen = "#00ff00";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f0f0f",
        color: neonGreen,
        py: 4,
        borderTop: `1px solid ${neonGreen}55`,
        fontFamily: "'Fira Code', monospace",
        textAlign: "center",
      }}
    >
      {/* Contact Info */}
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
          <EmailIcon fontSize="small" />
          <Typography variant="body2">raziasimjee94@gmail.com</Typography>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
          <PhoneIcon fontSize="small" />
          <Typography variant="body2">09781 658 442</Typography>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2" sx={{ maxWidth: 500 }}>
            No. 84, First Floor, Middle Block, 28th Street, Pabedan Township
          </Typography>
        </Stack>
      </Stack>

      {/* Social Links */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        <IconButton
          component={Link}
          href="https://github.com/RaziaSimjee"
          target="_blank"
          sx={{ color: neonGreen }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com/razia9_?igsh=eTRjMHZlY2w1NDhv"
          target="_blank"
          sx={{ color: neonGreen }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.facebook.com/share/16e6zLvPom/"
          target="_blank"
          sx={{ color: neonGreen }}
        >
          <FacebookIcon />
        </IconButton>
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" sx={{ fontSize: "0.85rem", color: `${neonGreen}99` }}>
        © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
