import { Award, Clock, Coffee } from "lucide-react"

export default function ServicesSection() {
  const services = [
    { Icon: Award, title: "Premium Quality", text: "We source the finest coffee beans from around the world." },
    { Icon: Clock, title: "Fast Service", text: "Quick preparation without compromising quality." },
    { Icon: Coffee, title: "Expert Baristas", text: "Our skilled baristas craft each drink with precision." },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">Our Services</h2>
          <p className="text-xl text-amber-700">More than just coffee</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <s.Icon className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-900 mb-4">{s.title}</h3>
              <p className="text-amber-700">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
