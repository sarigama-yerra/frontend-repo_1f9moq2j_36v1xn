import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <CTA />
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} LiftWorks. All rights reserved.</p>
          <div className="text-sm text-slate-500">Licensed • Insured • CSHE Certified</div>
        </div>
      </footer>
    </div>
  )
}

export default App
