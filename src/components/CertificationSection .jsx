import React, { useState } from "react";
import { Box, Typography, Stack, Button, Modal } from "@mui/material";
import { styled } from "@mui/system";
import { colors, typography, cardStyle, buttonStyle } from "../components/styles";

import BIM from "../assets/BIM.jpg";
import GoogleITSupport from "../assets/Google IT Support Certificate.jpg";
import GoogleITSecurity from "../assets/IT Security Certificate.jpg";
import SCBI from "../assets/SCBI.jpeg";

// ===== Styled Components =====
const TerminalCard = styled(Box)(() => ({
  ...cardStyle,
  fontFamily: typography.body.fontFamily,
}));

export default function CertificationSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const certificationsData = [
    {
      name: "IT Infrastructure Fundamentals Program",
      institution: "BIM Myanmar",
      start: "Sep, 2020",
      end: "Nov, 2020",
      photo: BIM,
    },
    {
      name: "Google IT Support",
      institution: "Coursera",
      start: "May, 2021",
      end: "Aug, 2021",
      photo: GoogleITSupport,
    },
    {
      name: "IT Security: Defense against the digital dark arts",
      institution: "Coursera",
      start: "May, 2021",
      end: "Aug, 2021",
      photo: GoogleITSecurity,
    },
    {
      name: "English Upper-Class Intermediate Course",
      institution: "SCBI - Sandford City Business Institution",
      start: "Jan, 2023",
      end: "Mar, 2023",
      photo: SCBI,
    },
  ];

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPhoto(null);
  };

  return (
    <Box
      id="certification"
      sx={{
        width: "100%",
        bgcolor: colors.bgDark,
        py: 6,
        fontFamily: typography.body.fontFamily,
        color: colors.neon,
        minHeight: "80vh",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto", px: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h2" gutterBottom sx={typography.heading}>
          Certificates
        </Typography>

        <Stack spacing={4}>
          {certificationsData.map(({ name, institution, start, end, photo }, i) => (
            <TerminalCard key={i}>
              <Typography variant="h6" fontWeight="700" gutterBottom sx={{ color: colors.neon }}>
                {name}
              </Typography>

              <Typography variant="subtitle2" gutterBottom sx={typography.subtitle}>
                {institution} | {start} – {end}
              </Typography>

              {photo && (
                <Button
                  variant="outlined"
                  onClick={() => handleOpenModal(photo)}
                  sx={{ ...buttonStyle, mt: 2 }}
                >
                  View Certificate
                </Button>
              )}
            </TerminalCard>
          ))}
        </Stack>

        {/* Modal for viewing certificate */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="certificate-photo-modal"
          aria-describedby="certificate-photo-viewer"
          keepMounted
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: colors.bgCard,
              borderRadius: 3,
              boxShadow: `0 0 20px ${colors.neon}aa`,
              outline: "none",

              width: { xs: "min(80vw, 250px)", md: "min(700px, 90vw)" },
              maxHeight: { xs: "80vh", md: 600 },
              height: { xs: "auto", md: 600 },

              p: "2px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              {selectedPhoto &&
                (selectedPhoto.endsWith(".mp4") ? (
                  <Box
                    component="video"
                    src={selectedPhoto}
                    controls
                    autoPlay
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: 2,
                      display: "block",
                    }}
                  />
                ) : (
                  <Box
                    component="img"
                    src={selectedPhoto}
                    alt="Certificate"
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      borderRadius: 2,
                      display: "block",
                    }}
                  />
                ))}
            </Box>

            {/* Close button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1, p: 1 }}>
              <Button
                variant="contained"
                onClick={handleCloseModal}
                sx={{
                  backgroundColor: colors.neon,
                  color: "#000",
                  fontFamily: typography.body.fontFamily,
                  "&:hover": { backgroundColor: "#00cc00" },
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
