import FloatingBeans from "./FloatingBeans"
import GrinderIllustration from "./GrinderIllustration"
import { Coffee } from 'lucide-react';

export default function HeroSection({ setActiveSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 overflow-hidden">
      <FloatingBeans />
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="text-white space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-300">Elza Coffee</h1>
          <p className="text-xl md:text-2xl text-amber-200">Today's good mood is sponsored by coffee</p>
          <p className="text-amber-300 text-lg">Search for your coffee now</p>
          <div className="flex gap-4 pt-6">
            <button onClick={() => setActiveSection("menu")} className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg">Shop Now</button>
            <button onClick={() => setActiveSection("menu")} className="px-8 py-4 border-2 border-amber-300 text-amber-300 rounded-full font-semibold hover:bg-amber-300 hover:text-amber-900 transition-all">Catalog</button>
          </div>
          <div className="bg-amber-800 bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-amber-600">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center">
                <Coffee className="w-8 h-8 text-amber-200" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-200">But First Coffee</h3>
                <button className="mt-2 px-4 py-2 bg-amber-600 text-white rounded-full text-sm hover:bg-amber-700">Hurry Up ☕</button>
              </div>
            </div>
          </div>
        </div>
        <GrinderIllustration />
      </div>
    </section>
  )
}
