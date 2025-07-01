'use client';
import Image from 'next/image';
import { MapPin, Mail, Phone, Linkedin, Instagram, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-background text-[#f5d1a1] px-8 pt-16 pb-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10"
      >
        {/* LEFT IMAGE */}
        <motion.div custom={0} className="col-span-1 flex items-center justify-center">
          <Image src="/coffee-machine.png" alt="Grinder" width={240} height={350} className="object-contain" />
        </motion.div>

        <motion.div custom={1} className="flex flex-col justify-center">
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>FAQ</li>
            <li>Careers</li>
          </ul>
        </motion.div>

        <motion.div custom={2} className="flex flex-col justify-center">
          <h4 className="font-semibold mb-4">Customer Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Menu</li>
            <li>Locations</li>
            <li>Support</li>
          </ul>
        </motion.div>

        <motion.div custom={3} className="flex flex-col justify-center">
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Payment Options</li>
            <li>Refunds & Exchanges</li>
            <li>Limitation Of Liability</li>
          </ul>
        </motion.div>

        <motion.div custom={4} className="flex flex-col justify-center space-y-3 text-sm">
          <p className="flex items-center gap-2">
            <MapPin size={16} /> 12 Jhon Avenue #35 - New York
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} /> Elizacoffee@Coffee.Com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> 1-222-34-ELIZA
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Linkedin size={18} />
            <Share2 size={18} />
            <Instagram size={18} />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        custom={5}
    
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-xs mt-10 border-t border-[#5e4034] pt-4"
      >
        <a href='https://t.me/iam_brand'>Created By Bekzod</a>
        <p>Copyright ©2025 Eliza Coffee. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
