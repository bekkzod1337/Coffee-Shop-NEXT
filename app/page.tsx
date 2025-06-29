"use client"
import { useState } from "react"

import BlogSection from "@/components/BlogSection"
import Footer from "@/components/Footer"
import { menuItems } from "./data/menuData"
import { blogPosts } from "./data/blogPosts"
import Header from "@/components/Header"
import AboutSection from "@/components/AboutSection"
import HomeSection from "@/components/HomeSection"

export default function Home() {
  const [active, setActive] = useState("home")
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />
      <AboutSection />
      <HomeSection />
      <BlogSection />
    </div>
  )
}
