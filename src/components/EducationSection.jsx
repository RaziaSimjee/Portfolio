import React, { useState } from "react";
import { Box, Typography, Stack, Button, Modal } from "@mui/material";
import { styled } from "@mui/system";
import {
  colors,
  typography,
  cardStyle,
  buttonStyle,
} from "../components/styles";

import Level4 from "../assets/Level-4.png";
import Level5 from "../assets/Level-5.png";
import Grade11 from "../assets/Grade-11.png";
import KBTC from "../assets/KBTC.jpg";
import BSC from "../assets/BSC.jpg";

const TerminalCard = styled(Box)(() => ({
  ...cardStyle,
  fontFamily: typography.body.fontFamily,
}));

const educationData = [
  {
    degree: "Matriculation Examination (Grade 11)",
    school: "ICEC",
    start: "Jun, 2019",
    end: "Feb, 2020",
    subject: "Myanmar, English, Mathematics, Physics, Chemistry , Biology",
    description: "Achieved a total score of 316 marks across all subjects.",
    diplomaPhoto: Grade11,
  },
  {
    degree: "Diploma in Programming (Endorsed)",
    school: "NCC Education",
    start: "Jan, 2021",
    end: "Oct, 2022",
     subject: "Computer System, Database Management System , Data Structure and Algorithms , Java and C# Programming ,Web Design and Development Fundamentals",
    description:
      "Graduated with Distinction in all subjects, demonstrating strong proficiency in core programming concepts and foundational software development skills.",
    diplomaPhoto: KBTC,
  },
  {
    degree: "Level 4 Diploma in Computing",
    school: "NCC Education",
    start: "Jan, 2023",
    end: "Nov, 2023",
    subject: "Computer System, Computer Networks, Databases, Designing and Developing Object-Oriented Computer Programs, Designing and Developing Website , Office Solutions Development , Skills for Computing , Software Development Technique",
    description:
     "Graduated with Distinction in all subjects, demonstrating advanced knowledge in computing fundamentals, software development, and IT systems.",
    diplomaPhoto: Level4,
  },
  {
    degree: "Level 5 Diploma in Computing",
    school: "NCC Education",
    start: "Jan, 2024",
    end: "Nov, 2024",
    subject: "Agile Development , Computing Project, Database Design and Development, Dynamic Websites, Information Systems Analysis, Network Security and Cryptography",
    description:
      "Graduated with Distinction in some subjects, showcasing advanced skills in software development, systems analysis, and IT security.",
    diplomaPhoto: Level5,
  },
  {
    degree: "B.Sc. (Hons) Computing",
    school: "University of Greenwich",
    start: "Jan, 2025",
    end: "Dec, 2025",
    subject: "Requirements Management , Project , Human Computer Interaction and Design,Mobile Application Design & Development,Enterprise Web Software Development ",
    description:
      "Currently pursuing a B.Sc. (Hons) Computing at the University of Greenwich, expected to complete in 2025.",
    diplomaPhoto: BSC,
  },
];

export default function EducationSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
      id="education"
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
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={typography.heading}
        >
          Education
        </Typography>

        <Stack spacing={4}>
          {educationData.map(
            ({ degree, school, start, end,subject ,description, diplomaPhoto }, i) => (
              <TerminalCard key={i}>
                <Typography
                  variant="h6"
                  fontWeight="700"
                  gutterBottom
                  sx={{ color: colors.neon }}
                >
                  {degree}
                </Typography>

                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={typography.subtitle}
                >
                  {school} | {start} – {end}
                </Typography>

                <Typography
                       variant="subtitle2"
                  gutterBottom
                  sx={typography.subtitle}
                >
                  Subjects: {subject}
                </Typography>


                <Typography
                  variant="body1"
                  sx={{
                    color: `${colors.neon}cc`,
                    mb: 2,
                    fontFamily: typography.body.fontFamily,
                  }}
                >
                  {description}
                </Typography>

                {diplomaPhoto && (
                  <Button
                    variant="outlined"
                    onClick={() => handleOpenModal(diplomaPhoto)}
                    sx={{ ...buttonStyle, mt: 2 }}
                  >
                    View Certificate
                  </Button>
                )}
              </TerminalCard>
            )
          )}
        </Stack>

        {/* Modal for viewing diploma */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="diploma-photo-modal"
          aria-describedby="diploma-photo-viewer"
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
              {selectedPhoto && (
                <Box
                  component="img"
                  src={selectedPhoto}
                  alt="Diploma"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: 2,
                    display: "block",
                  }}
                />
              )}
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
