import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Precision House Lifting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg text-slate-700 max-w-xl"
            >
              Safe, efficient, and engineered solutions for raising and leveling homes. Modern equipment. Expert crew. Fully insured.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold shadow hover:shadow-md transition">
                Get a Free Estimate
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur border border-slate-200 px-6 py-3 font-semibold text-slate-900 hover:bg-white transition">
                See Our Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                ['15+', 'Years'],
                ['500+', 'Projects'],
                ['24/7', 'Support'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-sm px-5 py-4">
                  <p className="text-2xl font-bold text-slate-900">{value}</p>
                  <p className="text-slate-600 text-sm">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
