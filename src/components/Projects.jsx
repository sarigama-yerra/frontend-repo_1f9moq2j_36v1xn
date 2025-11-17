import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Coastal Flood Elevation',
    meta: 'Cape May, NJ · 2,800 sq ft',
    desc: 'Raised 9 feet to meet FEMA requirements, new pilings and utilities.'
  },
  {
    title: 'Historic Bungalow Lift',
    meta: 'Charleston, SC · 1,400 sq ft',
    desc: 'Careful structural support preserved original beams and facade.'
  },
  {
    title: 'Multi-Unit Leveling',
    meta: 'Portland, OR · 6 units',
    desc: 'Synchronized hydraulic lift corrected 4.5" settlement across building.'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-slate-900">
          Recent Projects
        </motion.h2>
        <p className="mt-3 text-slate-600 max-w-2xl">A snapshot of our recent lifting and leveling work.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.2 }}
              transition={{duration:0.5, delay:i*0.05}}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-slate-200 to-slate-300" />
              <div className="p-5">
                <div className="text-sm text-slate-500">{p.meta}</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
