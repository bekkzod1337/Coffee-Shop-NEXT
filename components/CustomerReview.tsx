'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Tyler',
    role: 'Student',
    image: '/face/tyler.png',
    rating: 4,
    text: 'I Love Spending My Downtime In A Cozy Coffee Shop, Surrounded By The Sweet Aroma Of Freshly Brewed Drinks And Pastries.',
  },
  {
    id: 2,
    name: 'John',
    role: 'Developer',
    image: '/face/john.png',
    rating: 5,
    text: 'The calm and cozy vibe helps me focus while I work. Amazing place!',
  },
  {
    id: 3,
    name: 'Emma',
    role: 'Designer',
    image: '/face/emma.png',
    rating: 5,
    text: 'Best place to brainstorm ideas and sip good coffee. I love it!',
  },
];

const CustomerReview = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((current + 1) % reviews.length);

  return (
    <section className="relative bg-foreground text-white">
      <div className="relative z-10 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl text-center font-cursive text-[#f5d1a1] mb-12"
        >
          Customer Review
        </motion.h2>

        {/* Review Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto bg-[#2b1a1a] rounded-2xl overflow-hidden flex items-center p-6"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-customer.png"
              alt="Background"
              fill
              className="object-cover opacity-100"
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#f5d1a1]"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="w-full flex justify-center gap-4 items-center transition-all">
            {reviews.map((review, index) => (
              <AnimatePresence key={review.id}>
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: index === current ? 1 : 0.4, scale: index === current ? 1 : 0.9 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 text-center rounded-xl bg-[#613c2d] mt-5 w-[300px] shrink-0 shadow-md ${
                    index === current
                      ? 'z-10'
                      : 'z-0 translate-y-12'
                  }`}
                >
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-[#f5d1a1] mb-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg text-[#f5d1a1]">{review.name}</p>
                  <p className="text-sm text-gray-300 mb-2">{review.role}</p>
                  <div className="flex justify-center mb-3">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span
                          key={i}
                          className={`text-[#f5d1a1] text-xl ${i < review.rating ? '' : 'opacity-30'}`}
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="text-sm text-[#e0cfcf] italic">{review.text}</p>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#f5d1a1]"
          >
            <ChevronRight size={32} />
          </button>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-background py-16 text-center h-[357px]"
        >
          <h3 className="text-[#f5d1a1] text-lg mb-14">
            Subscribe To Our Newsletter, Discounts And Promotions
          </h3>
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="rounded-full border border-[#e0cfcf] px-6 py-3 w-full text-black"
            />
          </div>
          <button className="bg-[#f5d1a1] text-[#2b1a1a] mt-16 px-6 py-3 rounded-full font-medium hover:bg-[#e4b989] cursor-pointer">
            Subscribe
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReview;