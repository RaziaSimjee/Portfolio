import React, { useState } from "react";
import { Box, Typography, Stack, Button, Modal } from "@mui/material";
import { styled } from "@mui/system";
import {
  colors,
  typography,
  cardStyle,
  buttonStyle,
} from "../components/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

import CampingImg from "../assets/Camping project.png";
import CarParkImg from "../assets/Carpark.png";
import HomeApplianceImg from "../assets/Home appliance project 2.png";
import SocialMediaImg from "../assets/Social Media.png";
import IdeaMgmtImg from "../assets/University.png";
import FlagsQuizImg from "../assets/quizz project.png";

const TerminalCard = styled(Box)(() => ({
  ...cardStyle,
  fontFamily: typography.body.fontFamily,
}));

const projectsData = [
  {
    name: "Camping website",
    start: "Jun 2023",
    end: "Oct, 2023",
    description:
      "As part of a school project, I developed a camping website using HTML, CSS, and JavaScript, aimed at attracting visitors and facilitating reservations. This experience strengthened my foundation in front-end web development.",
    photo: CampingImg,
    github: "https://github.com/RaziaSimjee/Camping-Gear-Shop.git",
  },
  {
    name: "Car Park Membership & Payment Management System",
    start: "Jan 2023",
    end: "May, 2023",
    description:
      "As part of a school assignment based on a car parking business case study, I developed a Microsoft Access database and Excel-based tools to automate membership and payment management. I designed user-friendly forms with data validation and implemented macros to streamline membership renewals and generate reports.",
    photo: CarParkImg,
    github:
      "https://github.com/RaziaSimjee/Car-Park-Membership-Payment-Management-System.git",
  },
  {
    name: "Home Appliance Management System",
    start: "Jul 2023",
    end: "Nov, 2023",
    description:
      "I developed a C# WinForms desktop application to manage home appliance inventories for businesses, automating tracking processes and generating detailed reports.",
    photo: HomeApplianceImg,
    github:
      "https://github.com/RaziaSimjee/Home-Appliance-Management-System.git",
  },
  {
    name: "Social Media Campaign Website",
    start: "Jan 2024",
    end: "May, 2024",
    description:
      "I created a Social Media Campaign Website using PHP and vanilla JavaScript, based on a case study focused on educating users about online safety.",
    photo: SocialMediaImg,
    github: "https://github.com/RaziaSimjee/Social-Media-Campaign-Website.git",
  },
  {
    name: "University Idea Management System",
    start: "Jan 2025",
    end: "May, 2025",
    description:
      "I served as a full-stack developer in a seven-member team to create a web-based Idea Management System, implementing authentication, encryption, and essential front-end and back-end functionalities using Node.js and React.",
    photo: IdeaMgmtImg,
    github: "https://github.com/SufiaSimjee/University.git",
  },
  {
    name: "Country Flags Quiz Game",
    start: "Jan 2025",
    end: "Mar, 2025",
    description:
      "I developed a mobile quiz application in Kotlin for Android smartphones, where users identify countries based on their flags, with score tracking to enhance engagement and competition.",
    photo: FlagsQuizImg,
    github: "https://github.com/RaziaSimjee/Country-Flags-Quiz-Game.git",
  },
];

export default function ProjectSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setOpenModal(false);
  };

  return (
    <Box
      id="projects"
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
          Academic Projects
        </Typography>

        <Stack spacing={4}>
          {projectsData.map(
            ({ name, start, end, description, photo, github }, i) => (
              <TerminalCard key={i}>
                <Typography
                  variant="h6"
                  fontWeight="700"
                  gutterBottom
                  sx={{ color: colors.neon }}
                >
                  {name}
                </Typography>

                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={typography.subtitle}
                >
                  {start} – {end}
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

                <Stack direction="row" spacing={2}>
                  {photo && (
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenModal(photo)}
                      sx={buttonStyle}
                    >
                      View Project
                    </Button>
                  )}
                  {github && (
                    <Button
                      variant="outlined"
                      component="a"
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={buttonStyle}
                      startIcon={<GitHubIcon />}
                    >
                      GitHub Repo
                    </Button>
                  )}
                </Stack>
              </TerminalCard>
            )
          )}
        </Stack>

        {/* Modal for viewing project image */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="project-photo-modal"
          aria-describedby="project-photo-viewer"
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
                  alt="Project"
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
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", mt: 1, p: 1 }}
            >
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
