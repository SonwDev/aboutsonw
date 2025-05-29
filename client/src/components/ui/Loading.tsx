import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="w-16 h-16 border-4 border-primary rounded-full border-t-transparent"
      />
    </div>
  );
}
