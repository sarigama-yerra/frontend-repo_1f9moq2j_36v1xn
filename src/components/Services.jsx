import { Wrench, Ruler, Shield, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Wrench,
    title: 'House Lifting & Leveling',
    desc: 'Raise existing structures for new foundations, flood compliance, or additional stories with millimeter precision.'
  },
  {
    icon: Ruler,
    title: 'Foundation Engineering',
    desc: 'Structural analysis, shoring plans, and permit-ready documentation by licensed engineers.'
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    desc: 'Rigorous safety protocols, insured operations, and local code compliance on every site.'
  },
  {
    icon: Truck,
    title: 'Transport & Logistics',
    desc: 'Heavy-duty equipment mobilization, traffic plans, and site logistics managed end-to-end.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-slate-900">
          What We Do
        </motion.h2>
        <p className="mt-3 text-slate-600 max-w-2xl">End-to-end structural lifting, engineered for safety and speed.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.2 }}
              transition={{duration:0.5, delay:i*0.05}}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 text-white flex items-center justify-center">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
