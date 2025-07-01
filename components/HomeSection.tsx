'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HomeSection() {
  return (
    <section className="relative bg-foreground text-[#f5ede2] font-serif overflow-hidden">

      {/* ✅ BACKGROUND LIGHT BLURS */}
      <div className="absolute w-[300px] h-[300px] bg-[#f5ede2]/20 rounded-full blur-[100px] top-[5%] left-[-10%] z-0 pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] bg-[#a97b56]/30 rounded-full blur-[80px] bottom-[20%] right-[-5%] z-0 pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-[#fff6dc]/10 rounded-full blur-[90px] bottom-[0%] left-[30%] z-0 pointer-events-none" />

      {/* 💡 All content inside z-10 */}
      <div className="relative z-10">
        {/* Reserve a Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-4 py-16 bg-background"
        >
          <motion.h2
            className="text-center text-3xl md:text-4xl font-semibold italic mb-8"
            
            custom={0}
          >
            Reserve a Table
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-8  mx-auto">
            <motion.div
              className="w-[430px] h-[470px] relative"
              
              custom={1}
            >
              <Image
                src="/Reserve.png"
                alt="Reserve Coffee"
                width={430}
                height={470}
                className="object-contain"
              />
            </motion.div>
            <motion.form
              className="flex flex-col gap-3 w-full max-w-md"
              
              custom={2}
            >
              <input type="date" placeholder="Date" className="bg-white/90 text-black rounded px-4 py-2" />
              <input type="time" placeholder="Time" className="bg-white/90 text-black rounded px-4 py-2" />
              <input type="text" placeholder="Your Name" className="bg-white/90 text-black rounded px-4 py-2" />
              <input type="text" placeholder="Your Phone" className="bg-white/90 text-black rounded px-4 py-2" />
              <input type="email" placeholder="Your Email" className="bg-white/90 text-black rounded px-4 py-2" />
              <button className="bg-[#1f0f0a] text-[#f5ede2] border border-[#f5ede2] py-2 rounded hover:bg-[#f5ede2] hover:text-[#1f0f0a] transition">
                Reserve
              </button>
            </motion.form>
          </div>
        </motion.div>

        {/* Recommended */}
        <motion.div
          id="product"
          className="py-16 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-center text-3xl md:text-4xl font-semibold italic mb-10"
            
            custom={3}
          >
            Recommended
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[{ name: 'Arabica', image: '/Rectangle1.png', desc: 'Dark Roast' }, { name: 'House Blend', image: '/Rectangle2.png', desc: 'Dark Roast' }, { name: 'Robusta', image: '/Rectangle3.png', desc: 'Dark Roast' }].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#a97b56] w-60 rounded-lg overflow-hidden shadow-lg"
                
                custom={i + 4}
              >
                <div className="w-full h-40 relative">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
                <div className="bg-[#7a4a2e] px-4 pt-3 pb-6 relative rounded-b-lg">
                  <h3 className="text-center text-lg text-[#f5ede2]">{item.name}</h3>
                  <p className="text-center text-sm text-[#f3e8d3]">{item.desc}</p>
                  <button className="absolute bottom-2 right-2 text-xl">🛒</button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="inline-block w-3 h-3 bg-white rounded-full mx-1"></div>
            <div className="inline-block w-3 h-3 bg-white/50 rounded-full mx-1"></div>
          </div>
        </motion.div>

        {/* Popular Menu */}
        <motion.div
          className="py-16 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-center text-3xl md:text-4xl font-semibold italic mb-10"
            
            custom={7}
          >
            Popular Menu
          </motion.h2>

          <motion.div
            className="relative w-full h-[600px] max-w-5xl mx-auto"
            
            custom={8}
          >
            <Image
              src="/Section7.png"
              alt="Popular Menu Full"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </motion.div>

          <motion.div
            className="text-center mt-6"
            
            custom={9}
          >
            <button className="text-[#f5ede2] border border-[#f5ede2] px-6 py-2 rounded-full hover:bg-[#f5ede2] hover:text-[#1f0f0a] transition">
              Our Menu →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
