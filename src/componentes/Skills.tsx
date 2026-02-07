import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, BarChart3, Brain, Code2, TrendingUp, FileSpreadsheet } from "lucide-react";

const skills = [
  { name: "SQL & Databases", icon: Database, level: 95 },
  { name: "Python & R", icon: Code2, level: 90 },
  { name: "Data Visualization", icon: BarChart3, level: 92 },
  { name: "Machine Learning", icon: Brain, level: 85 },
  { name: "Statistical Analysis", icon: TrendingUp, level: 88 },
  { name: "Excel & Spreadsheets", icon: FileSpreadsheet, level: 93 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center text-gradient">Habilidades</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
                  className="glass p-6 rounded-2xl smooth-transition"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 bg-primary/20 rounded-lg mr-4"
                    >
                      <Icon className="text-primary" size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>

                  <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      className="absolute h-full bg-gradient-to-r from-primary to-primary-glow"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-right">{skill.level}%</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
