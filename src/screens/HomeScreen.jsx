import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import CertificationSection from "../components/CertificationSection ";
import ProjectSection from "../components/ProjectSection ";
import LanguagesSection from "../components/LanguagesSection";
import FuturePlan from "../components/FuturePlan";
import Footer from "../components/Footer";
import "../index.css";
const HomeScreen = () => (
  <>
    <Navbar />

    <HeroSection />

    <AboutMe />

    <SkillsSection />

    <EducationSection />

    <CertificationSection />

    <ProjectSection />

    <LanguagesSection />

    <FuturePlan />

    {/* <Footer/> */}
  </>
);

export default HomeScreen;
