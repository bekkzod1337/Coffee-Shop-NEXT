import { Coffee, Star, Heart, Share2 } from "lucide-react"

export default function ProductSection() {
  const products = [
    { name: 'Premium Coffee Beans', price: '$24.99', rating: 5 },
    { name: 'Coffee Grinder', price: '$89.99', rating: 5 },
    { name: 'French Press', price: '$34.99', rating: 4 },
    { name: 'Coffee Mug Set', price: '$19.99', rating: 5 },
  ]

  return (
    <section className="py-20 bg-white" id="product">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">Featured Products</h2>
          <p className="text-xl text-amber-700">Take home the Elza Coffee experience</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className="bg-gradient-to-b from-amber-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-amber-200 group">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-400 rounded-xl mb-4 flex items-center justify-center">
                <Coffee className="w-16 h-16 text-amber-800" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">{p.name}</h3>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < p.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">{p.price}</span>
                <div className="flex gap-2">
                  <button className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform group-hover:scale-105">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
