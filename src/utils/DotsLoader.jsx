import { motion } from "framer-motion";

const dot = { animate: { y: [0, -6, 0], opacity: [1,0.6,1] } };

export default function DotsLoader() {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[0,1,2].map(i => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-[#3262d2] rounded-full block"
          variants={dot}
          animate="animate"
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}
