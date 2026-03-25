import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-teal-500 rounded-2xl opacity-50 blur-xl" />
          
          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="relative p-4 rounded-2xl bg-linear-to-r from-purple-600 to-teal-500 text-white shadow-2xl overflow-hidden group"
            aria-label="Scroll to top"
          >
            {/* Shine effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
            />
            
            <ArrowUp className="w-6 h-6 relative z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
