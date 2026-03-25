import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@assets/ImageWithFallback";
import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/custom/SectionHeader";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FinanceFlow",
      subtitle: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution handling $2M+ in transactions. Features real-time inventory, advanced analytics, and seamless payment integration.",
      longDescription:
        "Built a scalable platform that increased client revenue by 150%. Implemented micro-services architecture, real-time data sync, and AI-powered recommendations.",
      image:
        "https://images.unsplash.com/photo-1643906226799-59eab234e41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzcwNzYxMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      color: "from-purple-600 to-pink-600",
      metrics: ["150% Revenue Growth", "50K+ Users", "99.9% Uptime"],
    },
    {
      id: 2,
      title: "DataVision Pro",
      subtitle: "Analytics Dashboard",
      description:
        "Enterprise-grade analytics platform processing 10M+ data points daily. Real-time visualization and predictive insights.",
      longDescription:
        "Transformed complex data into actionable insights. Reduced report generation time by 80% and improved decision-making speed.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDcyNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "D3.js", "PostgreSQL", "AWS"],
      color: "from-teal-600 to-cyan-600",
      metrics: ["10M+ Data Points", "80% Faster Reports", "Fortune 500 Client"],
    },
    {
      id: 3,
      title: "CloudSync",
      subtitle: "Modern Web Application",
      description:
        "Progressive web app with offline-first architecture. Serving 100K+ active users with seamless cross-platform experience.",
      longDescription:
        "Revolutionary PWA that works flawlessly offline. Achieved 98% user satisfaction and 4.8★ rating on app stores.",
      image:
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA4MjUwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "PWA", "Firebase", "Tailwind", "WebSocket"],
      color: "from-orange-600 to-red-600",
      metrics: ["100K+ Users", "98% Satisfaction", "4.8★ Rating"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 bg-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Work"
          title="Projects That"
          highlight="Make an Impact"
          description="Selected works that showcase innovation, technical excellence, and tangible business results."
        />

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Side */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative background */}
                <div
                  className={`absolute -inset-6 bg-linear-to-r ${project.color} opacity-20 blur-3xl rounded-3xl`}
                />

                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-4/3 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                    <div className="flex gap-4">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Floating number */}
                <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-linear-to-r from-purple-600 to-teal-500 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>

              {/* Content Side */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl sm:text-5xl font-bold text-white mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-purple-400 font-semibold"
                  >
                    {project.subtitle}
                  </motion.p>
                </div>

                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-400 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300"
                >
                  {project.longDescription}
                </motion.p>

                {/* Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-3 gap-4 py-6 border-y border-gray-800"
                >
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-bold text-white mb-1">
                        {metric.split(" ")[0]}
                      </div>
                      <div className="text-xs text-gray-400">
                        {metric.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-sm font-semibold text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-lg font-semibold text-purple-400 group"
                  >
                    View Case Study
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-xl text-gray-400 mb-8">
            Want to see more? I have 40+ projects in my portfolio.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-linear-to-r from-purple-600 to-teal-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
