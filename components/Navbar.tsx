"use client"
import { ShoppingCart, User, Coffee } from "lucide-react"

export default function Navbar({ onNavigate, active }) {
  return (
    <header className="bg-gradient-to-r from-amber-900 to-orange-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Coffee className="w-8 h-8 text-amber-800" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-amber-100">Elza Coffee</h1>
            <p className="text-xs text-amber-200">Premium Coffee Experience</p>
          </div>
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex gap-6">
          {["home", "menu", "services", "product", "blog", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => onNavigate(s)}
              className={`px-4 py-2 rounded-full text-amber-100 font-medium ${
                active === s
                  ? "bg-amber-200 text-amber-900 shadow-lg"
                  : "hover:bg-amber-700"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-amber-700 rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-amber-700 rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
        </div>
      </div>
    </header>
  )
}
