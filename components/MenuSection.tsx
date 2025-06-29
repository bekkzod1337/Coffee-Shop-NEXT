import MenuCard from "./MenuCard"

const menu = [
  { title: 'Espresso', img: '/menu/espresso.jpg', price: '$3.00' },
  { title: 'Latte', img: '/menu/latte.jpg', price: '$4.50' },
  { title: 'Cappuccino', img: '/menu/cappuccino.jpg', price: '$4.00' },
]

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-[#fff8f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#6F4E37] mb-10">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menu.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
