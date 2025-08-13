import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactInfo() {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 3,
        background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
        height: "100%",
      }}
    >
      <Typography variant="h5" fontWeight="600" gutterBottom>
        Contact Info
      </Typography>
      <Stack spacing={3} mt={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <EmailIcon color="primary" />
          <Link
            href="mailto:raziasimjee94@gmail.com"
            underline="hover"
            sx={{ fontSize: "1.1rem" }}
          >
            raziasimjee94@gmail.com
          </Link>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <PhoneIcon color="primary" />
          <Typography sx={{ fontSize: "1.1rem" }}>
            +95 09781658442
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <LocationOnIcon color="primary" />
          <Typography sx={{ fontSize: "1.1rem" }}>
            No. 84, First Floor, Middle Block, 28th Street, Pabedan Township.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
