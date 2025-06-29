import { menuItems } from "../data/menuData"

export default function MenuSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">Our Menu</h2>
          <p className="text-xl text-amber-700">Carefully crafted beverages made with love</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-amber-200">
              <div className="text-4xl mb-4 text-center">{item.image}</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">{item.name}</h3>
              <p className="text-amber-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                <button className="px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
