'use client'
import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="bg-foreground text-[#f5ede2] font-serif">
      {/* Reserve a Table */}
      <div className="px-4 py-16 bg-background">
        <h2 className="text-center text-3xl md:text-4xl font-semibold italic mb-8">Reserve a Table</h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8  mx-auto">
          <div className="w-[430px] h-[470px] relative">
            <Image
              src="/Reserve.png"
              alt="Reserve Coffee"
              width={430}
              height={470}
              className="object-contain"
            />
          </div>
          <form className="flex flex-col gap-3 w-full max-w-md">
            <input type="date" placeholder="Date" className="bg-white/90 text-black rounded px-4 py-2" />
            <input type="time" placeholder="Time" className="bg-white/90 text-black rounded px-4 py-2" />
            <input type="text" placeholder="Your Name" className="bg-white/90 text-black rounded px-4 py-2" />
            <input type="text" placeholder="Your Phone" className="bg-white/90 text-black rounded px-4 py-2" />
            <input type="email" placeholder="Your Email" className="bg-white/90 text-black rounded px-4 py-2" />
            <button className="bg-[#1f0f0a] text-[#f5ede2] border border-[#f5ede2] py-2 rounded hover:bg-[#f5ede2] hover:text-[#1f0f0a] transition">
              Reserve
            </button>
          </form>
        </div>
      </div>

      {/* Recommended */}
      <div className="py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold italic mb-10">Recommended</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: 'Arabica', image: '/Rectangle1.png', desc: 'Dark Roast' },
            { name: 'House Blend', image: '/Rectangle2.png', desc: 'Dark Roast' },
            { name: 'Robusta', image: '/Rectangle3.png', desc: 'Dark Roast' }
          ].map((item, i) => (
            <div key={i} className="bg-[#a97b56] w-60 rounded-lg overflow-hidden shadow-lg">
  {/* Image qismi */}
  <div className="w-full h-40 relative">
    <Image src={item.image} alt={item.name} fill className="object-contain" />
  </div>

  {/* Text block pastki fonda */}
  <div className="bg-[#7a4a2e] px-4 pt-3 pb-6 relative rounded-b-lg">
    <h3 className="text-center text-lg text-[#f5ede2]">{item.name}</h3>
    <p className="text-center text-sm text-[#f3e8d3]">{item.desc}</p>

    {/* Savatcha tugmasi */}
    <button className="absolute bottom-2 right-2 text-xl">🛒</button>
  </div>
</div>

          ))}
        </div>
        <div className="text-center mt-6">
          <div className="inline-block w-3 h-3 bg-white rounded-full mx-1"></div>
          <div className="inline-block w-3 h-3 bg-white/50 rounded-full mx-1"></div>
        </div>
      </div>

      {/* Popular Menu */}
      <div className="py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold italic mb-10">Popular Menu</h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/Popularmenu.png"
              alt="Popular Menu Background"
              width={560}
              height={870}
              className="mx-auto"
            />
            {/* Prices Left */}
            <div className="absolute top-[10%] left-0 text-right w-1/3 pr-4 space-y-4">
              <div><span className="text-lg">Chocolate</span><span className="ml-2">$40.00</span></div>
              <div><span className="text-lg">Double E</span><span className="ml-2">$25.00</span></div>
              <div><span className="text-lg">Caramel</span><span className="ml-2">$45.00</span></div>
              <div><span className="text-lg">Doppio</span><span className="ml-2">$30.00</span></div>
            </div>
            {/* Prices Right */}
            <div className="absolute top-[10%] right-0 text-left w-1/3 pl-4 space-y-4">
              <div><span className="text-lg">Espresso</span><span className="ml-2">$30.00</span></div>
              <div><span className="text-lg">Cappuccino</span><span className="ml-2">$30.00</span></div>
              <div><span className="text-lg">Mocha</span><span className="ml-2">$25.00</span></div>
              <div><span className="text-lg">Latte</span><span className="ml-2">$35.00</span></div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="text-[#f5ede2] border border-[#f5ede2] px-6 py-2 rounded-full hover:bg-[#f5ede2] hover:text-[#1f0f0a] transition">
            Our Menu →
          </button>
        </div>
      </div>
    </section>
  );
}
