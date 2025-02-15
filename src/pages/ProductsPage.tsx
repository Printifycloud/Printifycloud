import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Cookie as Hoodie, Cat as Hat, ShoppingBag, Package, Frame } from 'lucide-react';

const products = [
  {
    icon: <Shirt className="w-12 h-12" />,
    title: "Custom T-Shirts",
    description: "Premium cotton, polyester, and eco-friendly options",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80"
  },
  {
    icon: <Hoodie className="w-12 h-12" />,
    title: "Hoodies & Sweatshirts",
    description: "High-quality custom prints for all seasons",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80"
  },
  {
    icon: <Hat className="w-12 h-12" />,
    title: "Hats & Caps",
    description: "Custom embroidered or printed designs",
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&q=80"
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: "Tote Bags",
    description: "Perfect for promotions and branding",
    image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&q=80"
  },
  {
    icon: <Frame className="w-12 h-12" />,
    title: "Custom Photo Frames",
    description: "Beautiful frames with your cherished memories",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80"
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: "Business Merchandise",
    description: "Custom office supplies, mugs, and more",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80"
  }
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-xl text-gray-300">Premium quality custom printing for every need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-purple-400">
                      {product.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                  </div>
                  <p className="text-gray-300">{product.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Customize Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}