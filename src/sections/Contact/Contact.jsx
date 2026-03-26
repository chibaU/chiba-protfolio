import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/custom/SectionHeader";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // أضفنا الحقل هنا
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // استدعاء من الـ .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // استدعاء من الـ .env
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // استدعاء من الـ .env
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("FAILED...", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "chibaubnt@gmail.com",
      description: "Drop me a line anytime",
      href: "mailto:chibaubnt@gmail.com",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: MapPin,
      title: "Algeria",
      value: "Remote",
      description: "Available worldwide ",
      href: "#",
      color: "from-teal-600 to-cyan-600",
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Open for Projects",
      description: "Available 7 days a week for new opportunities",
      href: "#",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gray-950 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Let's Connect"
          title="Ready to Build"
          highlight="Something Amazing?"
          description="I'm currently available for freelance work and new projects. Let's
            discuss how I can help bring your vision to life."
        />

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-1 bg-linear-to-r ${method.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity`}
              />
              <div className="relative h-full p-8 rounded-2xl bg-gray-900 border border-gray-800 group-hover:border-transparent transition-all">
                <div
                  className={`inline-flex p-4 rounded-xl bg-linear-to-r ${method.color} mb-4`}
                >
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-2xl font-bold text-white mb-2">
                  {method.value}
                </p>
                <p className="text-gray-400 text-sm">{method.description}</p>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all mt-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's create something extraordinary together
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether you're a startup looking to make your mark, or an
                established company ready to innovate—I'm here to help transform
                your ideas into digital experiences that captivate and convert.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6 py-8 border-y border-gray-800">
              {[
                { label: "Average Response Time", value: "< 24 hours" },
                { label: "Project Success Rate", value: "100%" },
                { label: "Client Satisfaction", value: "5.0★" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-400">{stat.label}</span>
                  <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* What to expect */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">What to Expect</h4>
              {[
                "Quick response within 24 hours",
                "Free initial consultation",
                "Detailed project proposal",
                "Transparent pricing & timeline",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-teal-500 rounded-3xl opacity-20 blur-2xl" />

              {/* Form container */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-10"
              >
                <div className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Project Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Project Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What's your project about?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                      placeholder="Tell me about your project, goals, and timeline..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{
                      scale: isSubmitting || isSubmitted ? 1 : 1.02,
                    }}
                    whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                    className="w-full px-8 py-4 bg-linear-to-r from-purple-600 to-teal-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-6 h-6" />
                        Message Sent Successfully!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to receive communication from me
                    regarding your project.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
