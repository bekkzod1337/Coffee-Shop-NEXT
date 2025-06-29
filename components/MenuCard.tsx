export default function MenuCard({ title, img, price }: { title: string; img: string; price: string }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="font-bold text-lg text-[#6F4E37]">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{price}</p>
      </div>
    </div>
  )
}
