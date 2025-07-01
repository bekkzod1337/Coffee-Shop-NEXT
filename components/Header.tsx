'use client';
import Image from 'next/image';
import { ShoppingCart, User } from 'lucide-react';
import { motion } from 'framer-motion';
interface HeaderProps {
  active: string;
}
export default function Header() {
  return (
    <header className="relative w-full min-h-screen bg-foreground text-white overflow-hidden">
      {/* ☀️ Light Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-orange-200 rounded-full blur-3xl z-0 pointer-events-none"
      />

      {/* 🌄 Background Image */}
      <Image
        src="/HERO.png"
        alt="Coffee Background"
        fill
        className="absolute right-0 bottom-0 object-cover object-bottom select-none z-0"
      />

      {/* 🧭 Sticky Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1f0f0a]/80 backdrop-blur-md px-10 py-4 flex justify-between items-center text-[#f3e8d3] font-medium tracking-wide text-sm shadow-md"
      >
        <div className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="text-lg font-bold">Elza Coffee</span>
        </div>
        <div className="hidden md:flex gap-8">
          {[
            { label: 'Home', id: 'home' },
            { label: 'Services', id: 'services' },
            { label: 'Product', id: 'product' },
            { label: 'Blog', id: 'blog' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group relative hover:text-white transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="hover:text-amber-400"><User size={18} /></button>
          <button className="hover:text-amber-400"><ShoppingCart size={18} /></button>
        </div>
      </motion.nav>

      {/* ✨ Hero Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative z-10 px-6 md:px-10 pt-40 max-w-3xl"
      >
        <h1 className="text-[48px] md:text-[64px] font-bold font-serif leading-tight text-white drop-shadow-md">
          Elza Coffee
        </h1>
        <p className="text-base md:text-lg text-[#f3e8d3] mt-4 leading-relaxed">
          Today's good mood is sponsored by coffee.<br />
          Search for your coffee now.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 border border-[#f3e8d3] text-[#f3e8d3] hover:bg-[#f3e8d3] hover:text-[#4b2e24] rounded-full text-sm transition"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 border border-[#f3e8d3] text-[#f3e8d3] hover:bg-[#f3e8d3] hover:text-[#4b2e24] rounded-full text-sm transition"
          >
            Catalog
          </motion.button>
        </div>
      </motion.div>

      {/* 📦 Bottom Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-10 z-10 w-[340px] md:w-[366px] h-[240px] md:h-[247px] bg-[#422e25] rounded-xl shadow-xl p-4 flex gap-4 items-center"
      >
        <Image
          src="/butfirstcup.png"
          alt="But First Coffee"
          width={130}
          height={130}
          className="rounded-lg shadow-md object-contain"
        />
        <div className="text-white">
          <p className="text-xl md:text-[28px] font-semibold">But First Coffee</p>
          <button className="mt-2 px-4 py-1 border-2 border-amber-600 text-white text-xs rounded-full hover:bg-amber-600 transition-all">
            Hurry Up
          </button>
        </div>
      </motion.div>
    </header>
  );
}
