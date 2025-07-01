'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  icons: string[];
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How To Make A Great Coffee",
      content: "Making a Cup Of Coffee Doesn't Have To Be Complicated...",
      image: "/icons/type.png",
      icons: ["/icons/type.png", "/icons/type.png", "/icons/type.png"]
    },
    {
      id: 2,
      title: "Why Does Caffeine Make Us Stay Awake?",
      content: "Caffeine Works By Blocking Adenosine Receptors In The Brain...",
      image: "/icons/pastry.png",
      icons: ["/icons/pastry.png", "/icons/pastry.png", "/icons/pastry.png"]
    },
    {
      id: 3,
      title: "Different Types Of Coffee",
      content: "Coffee Is About The Type Of Bean, How It's Roasted...",
      image: "/icons/takeaway.png",
      icons: ["/icons/takeaway.png", "/icons/takeaway.png", "/icons/takeaway.png"]
    }
  ];

  return (
    <div className="relative text-white overflow-hidden">
      {/* Background image with blur */}
      <div className="absolute inset-0 z-0 bg-background">
        <Image
          src="/bg2.png"
          alt="Background"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif italic text-amber-100 mb-12"
          >
            Our Blog
          </motion.h2>

          <Swiper
            spaceBetween={20}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogPosts.map((post, i) => (
              <SwiperSlide key={post.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#997D6C] rounded-lg p-6 border border-amber-800 hover:bg-[#5c3a26]/90 transition-all duration-300 h-full"
                >
                  <h3 className="text-xl font-semibold mb-4 text-amber-100">{post.title}</h3>
                  <p className="text-amber-200 text-sm leading-relaxed mb-6">{post.content}</p>

                  <div className="flex justify-center space-x-4 mb-4">
                    {post.icons.map((icon, index) => (
                      <div key={index} className="w-8 h-8 relative">
                        <Image
                          src={icon}
                          alt={`Icon ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <button className="text-text hover:text-amber-100 text-sm font-medium transition-colors">
                    More
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center space-x-2 mt-8">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className={`w-3 h-3 rounded-full ${
                  dot === 0 ? 'bg-[#997D6C]' : 'bg-[#997D6C]/70'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSection;