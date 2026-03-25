// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  Calendar,
  MapPin,
} from "lucide-react";

function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const education = [
    {
      degree: "Master's Degree",
      field: "Computer Science",
      specialization: "Information Systems, Optimization and Decision (SIOD)",
      institution: "Mohamed Khider University of Biskra",
      location: "Algeria",
      period: "2021 - 2023",
      color: "from-purple-600 to-pink-600",
      icon: Award,
      highlights: [
        "Specialized in Information Systems",
        "Optimization Algorithms",
        "Decision Support Systems",
        "Advanced Research Methods",
      ],
    },
    {
      degree: "Bachelor's Degree",
      field: "Computer Science",
      specialization: "",
      institution: "Mohamed Khider University of Biskra",
      location: "Algeria",
      period: "2018 - 2021",
      color: "from-teal-600 to-cyan-600",
      icon: GraduationCap,
      highlights: [
        "Fundamentals of Computer Science",
        "Software Engineering",
        "Data Structures & Algorithms",
        "Web Development",
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="education"
      className="relative py-32 bg-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(y, (value) => -value) }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
              Academic Background
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold max-w-4xl mb-6">
            Education &
            <br />
            <span className="bg-linear-to-r from-purple-600 via-pink-600 to-teal-500 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Strong academic foundation combined with continuous learning and
            practical application.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - Desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-600 via-pink-600 to-teal-600 -translate-x-1/2" />

          {/* Education items */}
          <div className="space-y-20">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Timeline dot - Desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="relative"
                    >
                      <div
                        className={`w-20 h-20 rounded-full bg-linear-to-r ${edu.color} flex items-center justify-center shadow-xl`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-full bg-linear-to-r ${edu.color} blur-xl opacity-50`}
                      />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`relative ${
                      index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
                    }`}
                  >
                    <div
                      className={`absolute -inset-4 bg-linear-to-r ${edu.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity rounded-3xl`}
                    />

                    <motion.div
                      whileHover={{ y: -10 }}
                      className="relative group"
                    >
                      <div className="relative bg-gray-800 border-2 border-gray-700 group-hover:border-transparent rounded-3xl p-8 transition-all shadow-xl">
                        {/* Gradient border on hover */}
                        <div
                          className={`absolute inset-0 rounded-3xl bg-linear-to-r ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm`}
                        />

                        {/* Icon - Mobile only */}
                        <div className="lg:hidden mb-6">
                          <div
                            className={`inline-flex p-4 rounded-2xl bg-linear-to-r ${edu.color}`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Degree */}
                        <div className="mb-4">
                          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                            {edu.degree}
                          </h3>
                          <p
                            className={`text-xl font-bold bg-linear-to-r ${edu.color} bg-clip-text text-transparent`}
                          >
                            {edu.field}
                          </p>
                          {edu.specialization && (
                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                              Specializing in {edu.specialization}
                            </p>
                          )}
                        </div>

                        {/* Institution */}
                        <div className="space-y-2 mb-6 pb-6 border-b border-gray-700">
                          <div className="flex items-start gap-2">
                            <BookOpen className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                            <p className="font-semibold text-white">
                              {edu.institution}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
                            Key Areas
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {edu.highlights.map((highlight, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.1 * i }}
                                className="flex items-center gap-2"
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${edu.color}`}
                                />
                                <span className="text-sm text-gray-300">
                                  {highlight}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div
                    className={`hidden lg:block ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "5+ Years", label: "Study Duration", icon: Calendar },
            { value: "2 Degrees", label: "Academic Achievements", icon: Award },
            { value: "Honors", label: "Graduate Status", icon: GraduationCap },
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="relative group text-center"
              >
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-teal-500 opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity" />
                <div className="relative p-8 rounded-2xl bg-gray-800 border border-gray-700 group-hover:border-teal-500 transition-colors">
                  <div className="inline-flex p-3 rounded-xl bg-linear-to-r from-purple-600 to-teal-500 mb-4">
                    <StatIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
