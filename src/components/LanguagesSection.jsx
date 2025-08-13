import React from "react";
import { Box, Typography, Stack, LinearProgress, styled } from "@mui/material";
import {
  colors,
  typography,
  cardStyle,
  sectionStyle,
  titleStyle,
} from "../components/styles";

// Styled neon progress bar
const NeonProgress = styled(LinearProgress)(() => ({
  height: 6,
  borderRadius: 3,
  backgroundColor: "#1a1a1a",
  "& .MuiLinearProgress-bar": {
    backgroundColor: colors.neon,
    boxShadow: `0 0 6px ${colors.neon}`,
  },
}));

// Reuse the same card style as Education
const TerminalCard = styled(Box)(() => ({
  ...cardStyle,
  fontFamily: typography.body.fontFamily,
}));

const languagesData = [
  {
    language: "Myanmar",
    proficiency: 90,
    description:
      "Native-level fluency attained through formal education in government schools.",
  },
  {
    language: "English",
    proficiency: 75,
    description:
      "Advanced proficiency with strong professional communication skills, developed through extensive coursework and formal training at SCBI English Language School.",
  },
  {
    language: "Hindi",
    proficiency: 45,
    description:
      "Intermediate proficiency with conversational ability, reflecting my cultural background as an Indian.",
  },
];

export default function LanguagesSection() {
  return (
    <Box id="languages" sx={sectionStyle}>
      {/* Match maxWidth with EducationSection (900) */}
      <Box sx={{ maxWidth: 900, mx: "auto", px: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h2" gutterBottom sx={titleStyle}>
          Languages Spoken
        </Typography>

        <Stack spacing={3}>
          {languagesData.map(({ language, proficiency, description }, i) => (
            <TerminalCard key={i}>
              {/* Language name and percentage */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{ color: colors.neon }}
                >
                  {language}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: colors.neonSoft, fontFamily: typography.body.fontFamily }}
                >
                  {proficiency}%
                </Typography>
              </Box>

              {/* Progress bar */}
              <NeonProgress variant="determinate" value={proficiency} sx={{ mb: 2 }} />

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  ...typography.body,
                  mb: 0,
                }}
              >
                {description}
              </Typography>
            </TerminalCard>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
