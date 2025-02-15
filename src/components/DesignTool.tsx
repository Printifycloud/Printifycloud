import { motion } from 'framer-motion';
import { Upload, Palette, Ruler, DollarSign } from 'lucide-react';

export default function DesignTool() {
  return (
    <section id="design-tool" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Custom Design Tool</h2>
          <p className="text-xl text-gray-300">Create your perfect design in minutes</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: <Upload className="w-8 h-8" />,
                title: "Upload Your Design",
                description: "Drag and drop your artwork or logo"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Choose Colors",
                description: "Select from our premium color palette"
              },
              {
                icon: <Ruler className="w-8 h-8" />,
                title: "Pick Size & Placement",
                description: "Customize the perfect fit and position"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Instant Pricing",
                description: "Get real-time quotes based on your selections"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-purple-600 rounded-lg text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513346940221-6f673d962e97?auto=format&fit=crop&q=80"
                alt="Design Tool Preview"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-purple-700 transition-colors"
                >
                  <Upload className="w-5 h-5" />
                  Start Designing
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}