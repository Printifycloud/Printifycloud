import { motion } from 'framer-motion';
import { Printer, Truck, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-gray-300">Your trusted partner for premium custom printing</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <p className="text-gray-300">
              Founded with a passion for quality printing and creative expression, GTA Prints has become
              the Greater Toronto Area's premier destination for custom apparel and merchandise. Our
              commitment to excellence, coupled with state-of-the-art printing technology, ensures that
              every project we handle exceeds expectations.
            </p>
            <p className="text-gray-300">
              We believe in making premium custom printing accessible to everyone, from individual
              creators to large corporations. Our team of experts is dedicated to bringing your vision
              to life with precision and care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80"
              alt="Our Workshop"
              className="rounded-xl"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Printer className="w-8 h-8" />,
              title: "Premium Quality",
              description: "Using the latest printing technology for exceptional results"
            },
            {
              icon: <Truck className="w-8 h-8" />,
              title: "Fast Delivery",
              description: "Quick turnaround times across the Greater Toronto Area"
            },
            {
              icon: <Leaf className="w-8 h-8" />,
              title: "Eco-Friendly",
              description: "Committed to sustainable practices and materials"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4 text-purple-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}