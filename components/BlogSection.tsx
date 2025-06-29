'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  icons: string[];
}

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

const BlogSection: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [email, setEmail] = useState('');

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

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/avatar1.jpg",
      rating: 5,
      review: "I love being able to purchase many coffee beans from many countries..."
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/avatar2.jpg",
      rating: 5,
      review: "Amazing quality coffee beans and fast delivery..."
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: "/avatar3.jpg",
      rating: 5,
      review: "Best coffee subscription service I've tried..."
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="bg-[#4d2c1d] min-h-screen text-white relative overflow-hidden">
      {/* Background Coffee Bean Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#5c3a26] rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#7c4f35] rounded-full" />
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-[#5c3a26] rounded-full" />
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-[#7c4f35] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Blog Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-amber-100 mb-12">Our Blog</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-[#5c3a26]/70 rounded-lg p-6 border border-amber-800 hover:bg-[#5c3a26]/90 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-amber-100">{post.title}</h3>
                <p className="text-amber-200 text-sm leading-relaxed mb-6">{post.content}</p>

                <div className="flex justify-center space-x-4 mb-4">
                  {post.icons.map((icon, iconIndex) => (
                    <div key={iconIndex} className="w-8 h-8 relative">
                      <Image
                        src={icon}
                        alt={`Icon ${iconIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>

                <button className="text-text hover:text-amber-100 text-sm font-medium transition-colors">
                  More
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mb-8">
            {[0, 1, 2].map((dot) => (
              <div key={dot} className={`w-3 h-3 rounded-full ${dot === 0 ? 'bg-amber-300' : 'bg-amber-600'}`}></div>
            ))}
          </div>

          <button className="absolute right-8 top-1/2 transform -translate-y-1/2 text-amber-300 hover:text-amber-100 text-2xl">
            →
          </button>
        </div>

        {/* Review Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-amber-100 mb-12">Customer Review</h2>

          <div className="relative max-w-2xl mx-auto">
            <button onClick={prevReview} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-300 hover:text-amber-100 text-2xl z-10">←</button>
            <button onClick={nextReview} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-300 hover:text-amber-100 text-2xl z-10">→</button>

            <div className="flex items-center justify-center space-x-4">
              <div className="hidden md:block w-20 h-20 bg-[#5c3a26] rounded-full opacity-50" />
              <div className="bg-[#5c3a26]/70 rounded-lg p-8 max-w-md border border-amber-800 relative">
                <div className="text-6xl text-amber-300 absolute top-2 left-4">"</div>

                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full mb-4 overflow-hidden">
                    <Image src={reviews[currentReview].avatar} alt={reviews[currentReview].name} width={64} height={64} className="rounded-full object-cover" />
                  </div>
                  <h4 className="text-lg font-semibold text-amber-100">{reviews[currentReview].name}</h4>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-300 text-xl">★</span>
                  ))}
                </div>

                <p className="text-amber-200 text-sm leading-relaxed italic">
                  {reviews[currentReview].review}
                </p>
              </div>
              <div className="hidden md:block w-20 h-20 bg-[#5c3a26] rounded-full opacity-50" />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl text-amber-100 mb-6">
            Subscribe To Our Newsletter, Discounts And Promotions
          </h3>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-amber-900 placeholder-amber-600 border border-amber-300 focus:outline-none focus:border-amber-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
