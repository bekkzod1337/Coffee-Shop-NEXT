import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-800 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-100 mb-4">Get In Touch</h2>
          <p className="text-xl text-amber-200">We'd love to hear from you</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[{Icon: MapPin, title:"Address", text:"123 Coffee Street, Bean City, BC 12345"},
              {Icon: Phone, title:"Phone", text:"+1 (555) 123-COFFEE"},
              {Icon: Mail, title:"Email", text:"hello@elzacoffee.com"},
              {Icon: Clock, title:"Hours", text:"Mon-Fri: 6AM-9PM\nSat-Sun: 7AM-10PM"}].map((item,i)=>(
              <div key={i} className="flex items-center gap-4">
                <item.Icon className="w-8 h-8 text-amber-300" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-100">{item.title}</h3>
                  <p className="text-amber-200 whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-amber-400 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-amber-400 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300" />
            <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-amber-400 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"></textarea>
            <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
