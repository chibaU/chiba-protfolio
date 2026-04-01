import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@assets/ImageWithFallback";
import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/custom/SectionHeader";
import LandingPage_pic from "@assets/landing-page.png";
import MovieSearch_pic from "@assets/movie-search.png";
import BlogProject_pic from "@assets/blog.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movie Search",
      subtitle: "Movie Search Application",
      description:
        "A dynamic movie search platform leveraging the OMDB API to provide detailed information about films and TV series.",
      image: MovieSearch_pic,
      tags: ["React", "Tailwind CSS", "REST API", "OMDB API"],
      color: "from-purple-600 to-pink-600",
      github: "https://github.com/chibaU/Movie-app",
      demo: "https://simple-movie-search-blush.vercel.app/",
    },
    {
      id: 2,
      title: "Landing Page",
      subtitle: "Professional Landing Page",
      description:
        "A modern, multi-section landing page featuring an interactive and sleek design.",
      image: LandingPage_pic,
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      color: "from-teal-600 to-cyan-600",
      github: "https://github.com/chibaU/landing-page",
      demo: "https://landing-page-umber-ten-45.vercel.app/",
    },

    {
      id: 3,
      title: "Blog Platform",
      subtitle: "Modern Content Management System",
      description:
        "A full-stack blogging platform featuring a professional UI and an optimized reading experience with a robust backend.",
      image: BlogProject_pic,
      tags: ["React", "Tailwind CSS"],
      color: "from-blue-600 to-indigo-600",
      github: "https://github.com/chibaU/blog",
      demo: "https://chiba-blog.vercel.app/",
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
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent 
  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
  transition-opacity duration-300 flex items-end justify-center p-8"
                  >
                    {" "}
                    <div className="flex gap-4">
                      {project.demo && (
                        <motion.a
                          target="_blank"
                          href={project.demo}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </motion.a>
                      )}

                      {project.github && (
                        <motion.a
                          target="_blank"
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-6 h-6 text-white" />
                        </motion.a>
                      )}
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
          <motion.button
            onClick={() =>
              window.open(
                "https://github.com/chibaU",
                "_blank",
                "noopener,noreferrer",
              )
            }
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
