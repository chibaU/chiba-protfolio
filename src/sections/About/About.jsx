import { motion, useScroll, useTransform } from "framer-motion"; // تأكد من استخدام المسار الصحيح للمكتبة
import { useRef } from "react";
import { ImageWithFallback } from "@assets/ImageWithFallback";
import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";

function About() {
  // إزالة تعريف النوع <HTMLDivElement>
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const achievements = [
    {
      icon: Briefcase,
      value: "50+",
      label: "Projects Completed",
      description: "From startups to enterprise",
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence",
    },
    {
      icon: GraduationCap,
      value: "10+",
      label: "Certifications",
      description: "Continuous learning",
    },
  ];
  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-32 bg-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        style={{ x, rotate }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with unique styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
              About Me
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold max-w-4xl">
            Turning Ideas Into
            <br />
            <span className="bg-linear-to-r from-purple-600 via-pink-600 to-teal-500 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side with premium styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-linear-to-r from-purple-600 to-teal-500 rounded-3xl opacity-20 blur-xl" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA4MDgzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex Morgan"
                  className="w-full aspect-4/5 object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-purple-900/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="font-bold text-white">Available</div>
                    <div className="text-sm text-gray-400">For Projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Story */}
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Hi, I'm{" "}
                <span className="font-bold text-purple-400">
                  Chiba Abdallah
                </span>{" "}
                A Full Stack Developer specialized in building modern and
                efficient
                <span className="font-bold text-teal-400">
                  {" "}
                  web applications
                </span>
                .
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                I hold a Master's degree in Computer Science specializing in
                Information Systems, Optimization, and Decision (SIOD) from
                Mohamed Khider University of Biskra, Algeria. My passion is
                transforming complex ideas into simple, user-friendly software
                solutions. I combine my academic background with practical web
                development experience to build modern and innovative
                applications. I thrive on technical challenges and continuously
                seek to learn new technologies and enhance my skills. Whether
                building interactive UIs with React or developing robust APIs
                with Node.js, I focus on writing clean, maintainable code.
              </p>
            </div>

            {/* Achievements grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                  <div className="relative p-6 rounded-2xl bg-gray-800 border border-gray-700 group-hover:border-teal-500 transition-colors">
                    <item.icon className="w-8 h-8 mb-3 text-purple-400" />
                    <div className="text-3xl font-bold text-white mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-300 mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-purple-400 font-semibold group"
              >
                Let's create something amazing together
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
