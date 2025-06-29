import { Coffee } from "lucide-react"

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-amber-950 text-amber-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-100">Elza Coffee</h3>
                <p className="text-xs text-amber-300">Premium Experience</p>
              </div>
            </div>
            <p className="text-amber-300">Crafting exceptional coffee experiences since 2020.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home","Menu","Services","Product","Blog","Contact"].map((l)=>(
                <li key={l}>
                  <button onClick={()=>onNavigate(l.toLowerCase())} className="hover:text-amber-100 transition-colors">{l}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Services</h4>
            <ul className="space-y-2 text-amber-300">
              {["Dine-in Experience","Takeaway Orders","Coffee Catering","Barista Training","Private Events"].map((s)=>(
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              {["F","I","T"].map((s)=>(
                <button key={s} className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                  <span className="text-sm font-bold">{s}</span>
                </button>
              ))}
            </div>
            <h5 className="text-amber-100 font-semibold mb-2">Newsletter</h5>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded bg-amber-800 text-amber-100 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              <button className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-800 pt-8 text-center">
          <p className="text-amber-400">© 2025 Elza Coffee. All rights reserved. Made with ❤️ and lots of coffee.</p>
        </div>
      </div>
    </footer>
  )
}
