import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import Title from "@/components/custom/Title";

export function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef, // هنا نربط الـ Ref
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById("custom-cursor");
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-gray-950 via-purple-950/20 to-gray-950"
    >
      {/* Custom cursor effect */}
      <div
        id="custom-cursor"
        className="hidden lg:block fixed w-96 h-96 pointer-events-none z-0 blur-3xl opacity-30 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThoMzZjMC05Ljk0LTguMDYtMTgtMTgtMTh6IiBzdHJva2U9InJnYmEoMTY4LDg1LDI0NywwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      {/* Animated mesh gradient */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute top-0 right-0 w-125 h-125 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-teal-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-pink-500/10 rounded-full blur-[120px] animate-pulse delay-500" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 pt-24"
          >
            {/* Name */}
            <div className="space-y-4">
              <Title />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <Terminal className="w-6 h-6 text-teal-400" />
                <p className="text-xl sm:text-2xl text-gray-300 font-light">
                  Full Stack Web Developer
                </p>
              </motion.div>

              {/* Badge  */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">
                  Available for new projects
                </span>
              </motion.div>
            </div>

            {/*  Desc */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              Building high-performance web applications with cutting-edge tech
              stacks.
            </motion.p>

            {/*  CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore My Work
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-gray-700 hover:border-purple-500 text-gray-100 rounded-2xl font-semibold transition-all hover:bg-purple-500/10"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* 3D Card effect */}
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-square rounded-3xl bg-linear-to-br from-purple-500/20 to-teal-500/20 backdrop-blur-xl border border-purple-500/20 overflow-hidden"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 via-transparent to-teal-500/10" />

                {/* Code snippet visual */}
                <div className="absolute inset-0 p-8 font-mono text-sm text-gray-400">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <span className="text-purple-400">const</span> developer{" "}
                    <span className="text-pink-400">=</span> {"{"}
                    <br />
                    <span className="ml-4 text-teal-400">name:</span>{" "}
                    <span className="text-yellow-400">'Abdallah Chiba'</span>,
                    <br />
                    <span className="ml-4 text-teal-400">passion:</span>{" "}
                    <span className="text-yellow-400">'Building'</span>,<br />
                    <span className="ml-4 text-teal-400">skills:</span> [
                    <span className="text-yellow-400">'React'</span>,{" "}
                    <span className="text-yellow-400">'Node.js'</span>]<br />
                    {"}"};
                  </motion.div>
                </div>

                {/* Floating orbs */}
                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-teal-500/30 rounded-full blur-2xl"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-64 h-64 border border-purple-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-64 h-64 border border-teal-500/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
