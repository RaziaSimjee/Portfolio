// styles.js
export const colors = {
  bgDark: "#0f0f0f",
  bgCard: "#121212",
  neon: "#00ff00",
  neonSoft: "#00ff99cc",
};

export const typography = {
  heading: {
    fontFamily: "'Fira Code', monospace",
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
    color: colors.neon,
    textShadow: "0 0 8px #00ff00aa",
  },
  body: {
    fontFamily: "'Fira Code', monospace",
    color: `${colors.neon}cc`,
  },
  subtitle: {
    fontFamily: "'Fira Code', monospace",
    color: colors.neonSoft,
  },
};

// Section container style
export const sectionStyle = {
  width: "100%",
  bgcolor: colors.bgDark,
  py: 6,
  fontFamily: "'Fira Code', monospace",
  color: colors.neon,
  minHeight: "80vh",
  "*": {
    color: `${colors.neon} !important`, // force all text neon
  },
  
};


// Section title style
export const titleStyle = {
  ...typography.heading,
  mb: 4,
};

export const cardStyle = {
  padding: "24px", // 3 * 8px
  borderRadius: 3,
  backgroundColor: colors.bgCard,
  border: `1.5px solid ${colors.neon}44`,
  boxShadow: `0 0 8px ${colors.neon}22`,
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: `0 0 20px ${colors.neon}`,
    borderColor: colors.neon,
  },
};

export const buttonStyle = {
  borderColor: colors.neon,
  color: colors.neon,
  fontFamily: "'Fira Code', monospace",
  "&:hover": {
    borderColor: colors.neon,
    boxShadow: `0 0 8px ${colors.neon}`,
    backgroundColor: "rgba(0,255,0,0.1)",
  },
};
