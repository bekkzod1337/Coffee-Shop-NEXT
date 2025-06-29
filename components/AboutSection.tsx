'use client';
import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-foreground text-[#fdf1e7] py-24 px-4 md:px-10">
      {/* Our Story */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="bg-background rounded-xl shadow-lg p-8 md:flex md:items-center border border-[#a97455] relative">
          {/* Face Image */}
          <div className="md:w-1/3 mb-6 md:mb-0 relative z-10">
            <Image
              src="/story-face.png"
              alt="Story face"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-2/3 md:pl-10">
            <h2 className="text-3xl italic font-semibold mb-4 text-text">Our Story</h2>
            <p className="text-sm leading-relaxed mb-3 text-text/90">
              Elza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world.
              From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products
              to tantalize any customer’s palate. For those looking for unique brewing equipment, Elza also carries a full range
              of quality espresso makers, grinders, brewers,...
            </p>
            <button className="text-sm text-text underline hover:text-[#d9b08c] transition">More</button>
          </div>

          {/* Coffee beans around */}
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
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold italic mb-12 text-[#fdf1e7]">Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { icon: '/icons/equipment.png', label: 'Equipment' },
            { icon: '/icons/type.png', label: 'Type Of Coffee' },
            { icon: '/icons/takeaway.png', label: 'Take A Way' },
            { icon: '/icons/beans.png', label: 'Beans Variant' },
            { icon: '/icons/pastry.png', label: 'Pastry' }
          ].map(({ icon, label }) => (
            <div key={label} className="bg-background p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <Image src={icon} alt={label} width={107} height={107} className="mx-auto mb-3 w-[107px] h-[107px]" />
              <p className="text-sm text-[#fdf1e7]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Offer */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-background rounded-xl shadow-lg p-8 md:flex items-center border border-[#a97455]">
          {/* Left Text */}
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
            <h3 className="text-[58px] font-semibold italic mb-3 text-[#fdf1e7]">Offer</h3>
            <p className="text-2xl font-bold mb-4 text-[#fdf1e7]">Up To 50% Off</p>
            <p className="text-[18px] text-[#fdf1e7]/90 mb-4">
              At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees
              come from some of the most renowned coffee growing regions in the world, ensuring that…
            </p>
            <button className="px-6 py-2 border border-[#fdf1e7] text-[#fdf1e7] rounded-full hover:bg-[#fdf1e7] hover:text-[#5c3a2e] transition">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 text-center">
            <Image
              src="/offer.png"
              alt="coffee bags"
              width={250}
              height={250}
              className="ml-80" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
