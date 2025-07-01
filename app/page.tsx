"use client"
import { useState, useEffect } from "react"

import BlogSection from "@/components/BlogSection"
import Header from "@/components/Header"
import AboutSection from "@/components/AboutSection"
import HomeSection from "@/components/HomeSection"
import CustomerReview from "@/components/CustomerReview"
import Footer from "@/components/Footer"

export default function Home() {
  const [active, setActive] = useState("home")

  // Scrollga qarab active bo‘limni belgilash
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "blog", "review", "contact"];
      const scrollPos = window.scrollY + 100;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 scroll-smooth">
      <section id="home"><Header /></section>
      <section id="about"><AboutSection /></section>
      <section id="menu"><HomeSection /></section>
      <section id="blog"><BlogSection /></section>
      <section id="review"><CustomerReview /></section>
      <section id="contact"><Footer /></section>
    </div>
  )
}
