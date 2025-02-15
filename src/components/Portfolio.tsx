import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    content: "The quality of prints exceeded our expectations. Perfect for our company merchandise!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Event Organizer",
    company: "GTA Events",
    content: "Fast turnaround and excellent customer service. Will definitely order again!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    company: "Craft & Co.",
    content: "Their attention to detail and print quality is outstanding. Highly recommended!",
    rating: 5
  }
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503342250614-aff8232ccf1e?auto=format&fit=crop&q=80"
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-xl text-gray-300">See what we've created for our clients</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                <p className="text-purple-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}