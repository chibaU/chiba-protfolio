import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import SectionHeader from '@/components/custom/SectionHeader';

function Skills() {
  const skillSets = [
    {
      category: 'Frontend Mastery',
      skills: [
        { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-900' },
        { name: 'TypeScript', level: 92, color: 'from-blue-600 to-blue-800' },
        { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-teal-500' },
      ],
    },
    {
      category: 'Backend Excellence',
      skills: [
        { name: 'Node.js', level: 93, color: 'from-green-600 to-green-800' },
        { name: 'Express', level: 90, color: 'from-gray-600 to-gray-800' },
        { name: 'GraphQL', level: 85, color: 'from-pink-600 to-purple-600' },
        { name: 'REST APIs', level: 95, color: 'from-orange-500 to-red-500' },
      ],
    },
    {
      category: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 88, color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-500 to-indigo-600' },
        { name: 'AWS', level: 80, color: 'from-yellow-500 to-orange-500' },
        { name: 'Firebase', level: 87, color: 'from-yellow-600 to-orange-600' },
      ],
    },
  ];

  const tools = [
    'Git', 'Docker', 'Figma', 'VS Code', 'Webpack', 'Jest', 
    'Redux', 'WebSocket', 'CI/CD', 'Vercel', 'Linux', 'Agile'
  ];

  return (
    <section id="skills" className="relative py-32 bg-gray-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
         <SectionHeader
                 badge="Expertise"
                 title="Crafted With"
                 highlight="Precision & Passion"
                 description="A curated arsenal of technologies and tools, mastered through years of building exceptional digital products."
               />
       

        {/* Skills with progress bars */}
        <div className="space-y-16 mb-20">
          {skillSets.map((set, setIndex) => (
            <motion.div
              key={set.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: setIndex * 0.1 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                {set.category}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {set.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-purple-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                        className={`h-full bg-linear-to-r ${skill.color} rounded-full relative`}
                      >
                        {/* Shine effect */}
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative group cursor-default"
              >
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                <div className="relative px-6 py-3 bg-gray-900 border-2 border-gray-700 group-hover:border-transparent rounded-2xl font-semibold text-gray-300 group-hover:text-white transition-all">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">{tool}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-400 mb-6">
            Continuous learning is part of my DNA
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-teal-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/30"
          >
            <Sparkles className="w-5 h-5" />
            Always Expanding My Toolkit
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
