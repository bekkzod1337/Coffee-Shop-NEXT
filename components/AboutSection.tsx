'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative bg-foreground text-[#fdf1e7] py-24 px-4 md:px-10 overflow-hidden">

      {/* 🔆 BACKGROUND BLUR LIGHTS */}
      <div className="absolute w-[300px] h-[300px] bg-[#fdf1e7]/20 rounded-full blur-[100px] top-[10%] left-[-5%] z-0 pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] bg-[#a97455]/30 rounded-full blur-[80px] bottom-[15%] right-[-10%] z-0 pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-[#fff6dc]/10 rounded-full blur-[90px] bottom-[0%] left-[35%] z-0 pointer-events-none" />

      {/* 🔳 CONTENT START — Keep relative z-10 */}
      <div className="relative z-10">

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="bg-background rounded-xl shadow-lg p-8 md:flex md:items-center border border-[#a97455] relative">
            {/* Face Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/3 mb-6 md:mb-0 relative z-10"
            >
              <Image
                src="/story-face.png"
                alt="Story face"
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-2/3 md:pl-10"
            >
              <h2 className="text-3xl italic font-semibold mb-4 text-text">Our Story</h2>
              <p className="text-sm leading-relaxed mb-3 text-text/90">
                Elza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world...
              </p>
              <button className="text-sm text-text underline hover:text-[#d9b08c] transition">More</button>
            </motion.div>

            {/* Beans */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/bean.png"
                  alt="bean"
                  width={30}
                  height={30}
                  className="absolute animate-pulse"
                  style={{
                    top: `${Math.random() * 90}%`,
                    left: `${Math.random() * 90}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          id="services"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl font-semibold italic mb-12 text-[#fdf1e7]">Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { icon: '/icons/equipment.png', label: 'Equipment' },
              { icon: '/icons/type.png', label: 'Type Of Coffee' },
              { icon: '/icons/takeaway.png', label: 'Take A Way' },
              { icon: '/icons/beans.png', label: 'Beans Variant' },
              { icon: '/icons/pastry.png', label: 'Pastry' }
            ].map(({ icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center"
              >
                <div className="w-[107px] h-[107px] relative mb-3">
                  <Image src={icon} alt={label} fill className="object-contain" />
                </div>
                <p className="text-sm text-[#fdf1e7]">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Offer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-background rounded-xl shadow-lg p-8 md:flex items-center border border-[#a97455]">
            {/* Left Text */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-6 md:mb-0 md:pr-10"
            >
              <h3 className="text-[58px] font-semibold italic mb-3 text-[#fdf1e7]">Offer</h3>
              <p className="text-2xl font-bold mb-4 text-[#fdf1e7]">Up To 50% Off</p>
              <p className="text-[18px] text-[#fdf1e7]/90 mb-4">
                At our cafe, we take pride in providing our customers with the best coffee around...
              </p>
              <button className="px-6 py-2 border border-[#fdf1e7] text-[#fdf1e7] rounded-full hover:bg-[#fdf1e7] hover:text-[#5c3a2e] transition">
                Shop Now
              </button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-center"
            >
              <Image
                src="/offer.png"
                alt="coffee bags"
                width={250}
                height={250}
                className="ml-80"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
