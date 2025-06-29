'use client';
import Image from 'next/image';
import { ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative w-full min-h-screen bg-foreground text-white overflow-hidden">
      {/* Background Beans */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HERO.png"
          alt="Coffee Machine"
          width={1440}
          height={584}
          className="absolute right-0 bottom-0 z-10 select-none"
        />
      </div>

      {/* Navbar */}
      <div className="absolute top-6 left-0 right-0 z-20 px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Elza Coffee Logo"
            width={48}
            height={48}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-[#f3e8d3] font-medium tracking-wide text-sm">
          {['Home', 'Menu', 'Services', 'Product', 'Blog', 'Contact'].map((item, idx) => (
            <a key={idx} href={`#${item.toLowerCase()}`} className={`hover:text-white ${item === 'Home' ? 'border-b-2 border-white pb-1' : ''}`}>
              {item}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex gap-4">
          <button className="hover:text-amber-400">
            <User size={18} />
          </button>
          <button className="hover:text-amber-400">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Left Side Content */}
      <div className="relative z-10 px-10 pt-40 max-w-3xl">
        <h1 className="text-[64px] leading-[72px] font-bold text-white font-serif drop-shadow-md">
          Elza Coffee
        </h1>
        <p className="text-lg text-[#f3e8d3] mt-4 tracking-wide leading-relaxed">
          Today's good mood is sponsored by coffee<br />
          search for your coffee now
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2 border border-[#f3e8d3] text-[#f3e8d3] hover:bg-[#f3e8d3] hover:text-[#4b2e24] rounded-full text-sm transition-all">
            Shop Now
          </button>
          <button className="px-6 py-2 border border-[#f3e8d3] text-[#f3e8d3] hover:bg-[#f3e8d3] hover:text-[#4b2e24] rounded-full text-sm transition-all">
            Catalog
          </button>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="absolute bottom-10 left-10 z-10 w-[366px] h-[247px] bg-[#422e25] rounded-xl shadow-xl p-4 flex  justify-between">
        <Image
          src="/butfirstcup.png"
          alt="But First Coffee"
          width={264}
          height={264}
          className="rounded-lg shadow-md"
        />
        <div className="text-white">
          <p className="text-[28px] font-semibold">But First Coffee</p>
          <button className="mt-2 px-4 py-1 bg-none border-2 border-amber-600 text-white text-xs rounded-full shadow hover:from-[#a87442] hover:to-[#8b5830] transition-all">
            Hurry Up
          </button>
        </div>
      </div>
    </header>
  );
}
