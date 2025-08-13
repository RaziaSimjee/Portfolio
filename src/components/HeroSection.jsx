import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import profile1 from "../assets/graduation.jpg";
import profile2 from "../assets/profile-4.jpg";
import profile3 from "../assets/profile-2.jpg";

const images = [profile1, profile2, profile3];

export default function HeroSection() {
  const fullName = "Razia Yusoof Simjee";
  const [displayedName, setDisplayedName] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Typing effect for name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullName]);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        bgcolor: "#0f0f0f",
        fontFamily: "'Fira Code', monospace",
        color: "#00ff00",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 5, md: 8 }}
        alignItems="center"
        maxWidth={1100}
        width="100%"
        justifyContent="space-between"
      >
        {/* Left Text Section */}
        <Box
          sx={{
            maxWidth: 500,
            color: "#00ff00",
            textAlign: { xs: "center", md: "left" },
            paddingBottom: { xs: 4, md: 0 },
            userSelect: "none",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            {displayedName}
            <Box
              component="span"
              sx={{
                borderRight: "2px solid #00ff00",
                marginLeft: 1,
                animation: "blink 1s step-end infinite",
              }}
            />
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              color: "#00ff0099",
            }}
          >
            Full Stack Developer
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#00ff00",
              borderColor: "#00ff00",
              fontFamily: "'Fira Code', monospace",
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#00ff0022",
                borderColor: "#00ff00",
                boxShadow: "0 0 8px #00ff00",
              },
            }}
            startIcon={<DownloadIcon sx={{ color: "#00ff00" }} />}
            href="../../public/Razia-Yusoof-Simjee-CV-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </Button>
        </Box>

        {/* Right Slide Section */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 280, sm: 350, md: 400 },
            height: { xs: 280, sm: 350, md: 400 },
            userSelect: "none",
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid #00ff00aa",
            boxShadow: "0 0 20px #00ff0055",
            bgcolor: "#101010",
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`Slide ${i + 1}`}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: i === currentSlide ? 1 : 0,
                transition: "opacity 1s ease",
                pointerEvents: i === currentSlide ? "auto" : "none",
                userSelect: "none",
                userDrag: "none",
              }}
              draggable={false}
            />
          ))}

          {/* Prev Arrow */}
          <IconButton
            aria-label="Previous slide"
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              color: "#00ff00",
              bgcolor: "#003300cc",
              "&:hover": { bgcolor: "#006600cc" },
              borderRadius: "50%",
              boxShadow: "0 0 8px #00ff00",
              zIndex: 10,
              width: 32,
              height: 32,
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
          </IconButton>

          {/* Next Arrow */}
          <IconButton
            aria-label="Next slide"
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              color: "#00ff00",
              bgcolor: "#003300cc",
              "&:hover": { bgcolor: "#006600cc" },
              borderRadius: "50%",
              boxShadow: "0 0 8px #00ff00",
              zIndex: 10,
              width: 32,
              height: 32,
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Stack>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </Box>
  );
}
