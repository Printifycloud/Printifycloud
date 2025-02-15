import { motion } from 'framer-motion';
import { Printer, Upload, TrendingUp, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513346940221-6f673d962e97?auto=format&fit=crop&q=80"
          alt="Premium Printing Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Custom Printing
            <span className="block text-3xl md:text-4xl mt-2 text-purple-400">
              in the Greater Toronto Area
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 max-w-3xl mx-auto">
            Transform your ideas into high-quality custom apparel. Fast, reliable, and hassle-free printing services.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-xl text-purple-400 mb-12"
          >
            <Phone className="w-5 h-5" />
            <span>For quick orders, call us at </span>
            <a href="tel:437-225-0488" className="font-semibold hover:text-purple-300 transition-colors">
              437-225-0488
            </a>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
            >
              <Upload className="w-5 h-5" />
              Start Designing Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              View Our Portfolio
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Printer className="w-8 h-8 text-purple-400" />,
              title: "Premium Quality",
              description: "State-of-the-art printing technology for exceptional results"
            },
            {
              icon: <Upload className="w-8 h-8 text-purple-400" />,
              title: "Easy Design Upload",
              description: "Simple process to upload and preview your custom designs"
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
              title: "Fast Turnaround",
              description: "Quick production and delivery across the GTA"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}