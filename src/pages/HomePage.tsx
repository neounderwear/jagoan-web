import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BannerSlider from "../components/BannerSlider";
import AboutUs from "../components/AboutUs";
import BackgroundImage from "../assets/background.jpg";
import Brands from "../components/Brands";
import Catalog from "../components/Catalog";
import Services from "../components/Services";
import Contact from "../components/Contact";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("Beranda");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main\[id], section\[id]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "Beranda";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          const sectionName = section.id
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          currentSection = sectionName;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header activePage={activeSection} />

      <main id="beranda" className="relative h-screen w-full font-lexend bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <Hero />
      </main>

      <section className="bg-white py-12 px-4">
        <BannerSlider />
      </section>
      <AboutUs />
      <Brands />
      <Catalog />
      <Services />
      <Contact />
    </>
  );
};

export default HomePage;
