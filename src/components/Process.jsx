import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Assessment & Plan',
    desc: 'Site survey, structural assessment, and a transparent proposal with timeline and cost.'
  },
  {
    title: 'Engineering & Permits',
    desc: 'Stamped drawings, permit approvals, and utility coordination handled by our team.'
  },
  {
    title: 'Lift & Support',
    desc: 'Hydraulic jacking, synchronized lifts, and continuous monitoring for flawless execution.'
  },
  {
    title: 'Set & Reconnect',
    desc: 'New foundation set, utilities reconnected, final inspections and handoff.'
  }
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-slate-900">
          How It Works
        </motion.h2>
        <p className="mt-3 text-slate-600 max-w-2xl">A proven, safety-first process from first call to final handoff.</p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.2 }}
              transition={{duration:0.5, delay:i*0.05}}
              className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-6"
            >
              <div className="text-sm font-semibold text-cyan-600">Step {i+1}</div>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
