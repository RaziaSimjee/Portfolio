import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import { colors, typography } from "../components/styles";
import Lottie from "lottie-react";
import rocketAnimation from "../assets/Gears Lottie Animation.json"; // adjust path to your file

const neonGreen = "#00ff00";

const FuturePlan = () => {
  const plans = [
    "Pursuing a Bachelor’s degree in Computing at the University of Greenwich to establish a strong academic foundation for a career in information technology.",
    "Completing Python and Django training at Page Myanmar while exploring practical applications of back-end development.",
    "Continuously expanding expertise in both front-end and back-end technologies to enhance development capabilities and remain adaptable to emerging trends.",
    "Learning Kotlin and React Native to design and develop mobile applications, broadening proficiency in mobile development.",
    "Actively seeking internship opportunities in web development or IT assistance to gain industry experience and initiate a professional career.",
  ];

  return (
    <Box
      id="future-plan"
      sx={{
        width: "100%",
        bgcolor: "#0f0f0f",
        pt: 6,
        pb: 6,
        fontFamily: "'Fira Code', monospace",
        color: neonGreen,
      }}
    >
      <Box sx={{ maxWidth: 800, mx: "auto", px: { xs: 2, sm: 4 } }}>
        {/* Title */}
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            textShadow: `0 0 8px ${neonGreen}aa`,
          }}
        >
          Future Plan
        </Typography>

        {/* List */}
        <List
          sx={{
            p: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {plans.map((plan, index) => (
            <ListItem
              key={index}
              sx={{
                display: "block",
                px: 0,
                py: 0,
                borderLeft: `3px solid ${neonGreen}`,
                pl: 2,
              }}
            >
              <ListItemText
                primary={plan}
                primaryTypographyProps={{
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  fontWeight: 500,
                  letterSpacing: 0.4,
                  color: `${neonGreen}cc`,
                  lineHeight: 1.8,
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Divider */}
        <Divider
          sx={{
            mt: 8, // increased space above
            mb: 6,
            borderColor: neonGreen,
            borderWidth: "1.5px",
            boxShadow: `0 0 8px ${neonGreen}`,
          }}
        />

        {/* Farewell */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 4,
            userSelect: "none",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              ...typography.subtitle,
              fontWeight: 600,
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
              letterSpacing: 2,
              textTransform: "uppercase",
              textAlign: "center",
              color: colors.neonSoft,
            }}
          >
            THANK YOU FOR EXPLORING MY JOURNEY
          </Typography>

          <Box
  sx={{
    width: { xs: 70, sm: 70},
    height: { xs:70, sm: 70 },
    filter: "drop-shadow(0 0 6px #00ff99cc)",
  }}
>
  <Lottie
    animationData={rocketAnimation}
    loop={true}
    autoplay={true}
    style={{ width: "100%", height: "100%" }}
  />
</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FuturePlan;
