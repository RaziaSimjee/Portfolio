import React from 'react';
import { Box, Typography, Stack, LinearProgress } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsIcon from '@mui/icons-material/Settings';

const neonGreen = "#00ff00";

const skills = [
  { label: "IT Fundamentals", icon: <SettingsIcon />, level: 80 },
  { label: "Networking", icon: <LanguageIcon />, level: 60 },
  { label: "DevOps (GitHub, Docker & CI/CD)", icon: <CloudIcon />, level: 50 },
  { label: "Database (MongoDB, Firebase & MySql)", icon: <StorageIcon />, level: 70 },
  { label: "Object Oriented Programming (C#, C++ & Java)", icon: <CodeIcon />, level: 70 },
  { label: "Python Programming", icon: <CodeIcon />, level: 50 },
  { label: "HTML, CSS & Javascript", icon: <WebIcon />, level: 80 },
  { label: "Bootstrap & Tailwind", icon: <WebIcon />, level: 65 },
  { label: "NodeJS/ExpressJS", icon: <CodeIcon />, level: 75 },
  { label: "React", icon: <CodeIcon />, level: 75 },
  { label: "Android App Development (Kotlin & React Native)", icon: <SmartphoneIcon />, level: 50 },
];

export default function SkillsSection() {
  return (
    <Box
      id="skills"
      sx={{
        width: '100%',
        bgcolor: '#0f0f0f',
        py: 6,
        fontFamily: "'Fira Code', monospace",
        color: neonGreen,
        minHeight: '60vh',
      }}
    >
      <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 2, sm: 4 } }}>
        {/* Section Title */}
        <Typography
          variant="h4"
          component="h2"
          fontWeight="700"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 4,
            letterSpacing: 2,
            color: neonGreen,
            textTransform: 'uppercase',
            textShadow: `0 0 8px ${neonGreen}aa`,
          }}
        >
          Skills
        </Typography>

        {/* Skill List */}
        <Stack spacing={2.5}>
          {skills.map(({ label, icon, level }) => (
            <Box
              key={label}
              sx={{
                p: 2,
                border: `1.5px solid ${neonGreen}33`,
                borderRadius: 2,
                transition: "all 0.3s ease",
                backgroundColor: "#121212",
                "&:hover": {
                  borderColor: neonGreen,
                  boxShadow: `0 0 15px ${neonGreen}55`,
                },
              }}
            >
              {/* Skill Name + Percentage */}
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                {React.cloneElement(icon, { sx: { color: neonGreen } })}
                <Typography
                  sx={{
                    flexGrow: 1,
                    color: neonGreen,
                    fontWeight: '600',
                    fontSize: '0.95rem',
                  }}
                >
                  {label}
                </Typography>
                <Typography
                  sx={{
                    color: `${neonGreen}cc`,
                    fontSize: '0.85rem',
                  }}
                >
                  {level}%
                </Typography>
              </Stack>

              {/* Progress Bar */}
              <LinearProgress
                variant="determinate"
                value={level}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: '#1a1a1a',
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: neonGreen,
                    boxShadow: `0 0 6px ${neonGreen}`,
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
