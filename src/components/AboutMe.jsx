import React from "react";
import { Box, Typography, Link, Stack, Divider } from "@mui/material";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { colors } from "../components/styles"; // adjust import path if needed

export default function AboutMe() {
  const accentColor = colors.neon;
  const fadedGreen = `${accentColor}aa`;

  return (
    <Box
      id="about-me"
      sx={{
        bgcolor: colors.bgDark,
        py: 8,
        px: 2,
        fontFamily: "'Fira Code', monospace",
      }}
    >
      {/* Card wrapper with SkillsSection hover effect */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          // px: { xs: 2, sm: 4 },
          p: 3,
          borderRadius: 2,
          border: `1.5px solid ${accentColor}33`,
          backgroundColor: "#121212",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: accentColor,
            boxShadow: `0 0 15px ${accentColor}55`,
          },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: `${accentColor}33` }}
            />
          }
          sx={{ width: "100%" }}
        >
          {/* Left Section - About Me */}
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: "bold",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: accentColor,
                textShadow: `0 0 6px ${fadedGreen}`,
                textAlign: "center",
              }}
            >
              About Me
            </Typography>
           <Typography
  variant="body1"
  sx={{
    fontSize: { xs: "1rem", sm: "1.1rem" },
    lineHeight: 1.7,
    color: `${accentColor}cc`,
    textAlign: "justify",
  }}
>
  I began my{" "}
  <Box component="span" sx={{ fontWeight: 700, color: accentColor }}>
    IT journey
  </Box>{" "}
  after completing my matriculation exams, starting with{" "}
  <Box component="span" sx={{ fontStyle: "italic", color: "#00ff66" }}>
    basic computing courses
  </Box>{" "}
  such as{" "}
  <Box component="span" sx={{ fontWeight: 700, color: accentColor }}>
    Google IT Support
  </Box>
  . As I discovered my passion for{" "}
  <Box component="span" sx={{ fontStyle: "italic", color: "#00ff66" }}>
    technology and problem-solving
  </Box>
  , I enrolled in a{" "}
  <Box component="span" sx={{ fontWeight: 700, color: accentColor }}>
    Bachelor's degree B.Sc. (Hons) in Computing
  </Box>{" "}
  at the University of Greenwich, where I gained core knowledge in{" "}
  <Box component="span" sx={{ fontStyle: "italic", color: "#00ff66" }}>
    computer science, networking, and web development
  </Box>
  .
  <br />
  <br />
  Realizing that academic learning alone was not enough to prepare me for the{" "}
  <Box component="span" sx={{ fontStyle: "italic", color: "#00ff66" }}>
    IT industry
  </Box>
  , I took both{" "}
  <Box component="span" sx={{ fontWeight: 700, color: accentColor }}>
    online and offline programming courses
  </Box>{" "}
  and engaged in{" "}
  <Box component="span" sx={{ fontWeight: 700, color: accentColor }}>
    self-learning
  </Box>{" "}
  using free online resources. Throughout my journey, I completed{" "}
  <Box component="span" sx={{ fontStyle: "italic", color: "#00ff66" }}>
    various academic and personal projects
  </Box>{" "}
  that allowed me to practice coding, troubleshoot IT issues, and apply both{" "}
  <Box component="span" sx={{ fontWeight: 700, color: accentColor }}>
    theoretical and practical knowledge
  </Box>
  .
  <br />
  <br />
  Now, in my final year, I am confident and ready to join the workforce as a{" "}
  <Box component="span" sx={{ fontWeight: 700, color: accentColor }}>
    Web Developer
  </Box>{" "}
  or{" "}
  <Box component="span" sx={{ fontWeight: 700, color: accentColor }}>
    IT Support Assistant
  </Box>
  , bringing{" "}
  <Box component="span" sx={{ fontStyle: "italic", color: "#00ff66" }}>
    hands-on experience, problem-solving skills, and a passion for innovation
  </Box>{" "}
  to a professional setting.
</Typography>

          </Box>

          {/* Right Section - Contact Info */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: "bold",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: accentColor,
                textShadow: `0 0 6px ${fadedGreen}`,
                textAlign: "center",
              }}
            >
              Contact Info
            </Typography>

            <Stack spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  label: "Email",
                  value: (
                    <Link
                      href="mailto:raziasimjee94@gmail.com"
                      underline="hover"
                      sx={{
                        color: accentColor,
                        fontWeight: 700,
                        fontSize: "1rem",
                        transition:
                          "color 0.3s ease, text-decoration 0.3s ease",
                        "&:hover": {
                          color: "#66ffb2", // softer bright green
                          textDecoration: "underline",
                        },
                      }}
                    >
                      raziasimjee94@gmail.com
                    </Link>
                  ),
                },
                {
                  label: "Phone",
                  value: (
                    <Box
                      sx={{
                        color: `${accentColor}cc`,
                        fontWeight: 500,
                        fontSize: "0.95rem",
                      }}
                    >
                      +95 09781658442
                    </Box>
                  ),
                },
                {
                  label: "Address",
                  value: (
                    <Box
                      sx={{
                        color: `${accentColor}cc`,
                        fontWeight: 500,
                        fontSize: "0.95rem",
                      }}
                    >
                      No. 84, First Floor, Middle Block, 28th Street, Pabedan
                      Township
                    </Box>
                  ),
                },
              ].map(({ label, value }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: accentColor,
                      minWidth: 80,
                      fontSize: "1.05rem",
                      letterSpacing: 0.5,
                    }}
                  >
                    {label}:
                  </Typography>
                  <Box sx={{ flexGrow: 1, ml: 2 }}>{value}</Box>
                </Box>
              ))}
            </Stack>

            {/* Social Links */}
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              sx={{ fontSize: "1.8rem" }}
            >
              <Link
                href="https://github.com/RaziaSimjee"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: accentColor,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    textShadow: `0 0 10px ${accentColor}`,
                    transform: "scale(1.15)",
                  },
                }}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.facebook.com/share/16e6zLvPom/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: accentColor,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#3b5998",
                    textShadow: `0 0 10px #3b5998`,
                    transform: "scale(1.15)",
                  },
                }}
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com/razia9_?igsh=eTRjMHZlY2w1NDhv"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: accentColor,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#e4405f",
                    textShadow: `0 0 10px #e4405f`,
                    transform: "scale(1.15)",
                  },
                }}
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com/in/razia-simjee-591033325"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: accentColor,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    textShadow: `0 0 10px ${accentColor}`,
                    transform: "scale(1.15)",
                  },
                }}
              >
                <FaLinkedinIn />
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
