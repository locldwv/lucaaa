import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Rocket, Star, Shield, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
]

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
      <span className="font-semibold tracking-tight">YourBrand</span>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="hover:opacity-80 transition"><Logo /></a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-indigo-600 transition">{n.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-2xl px-4 py-2 border border-black/10 shadow-sm hover:shadow-md transition">
              Get Started
            </a>
          </div>
          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-xl border border-black/10" onClick={() => setOpen(v => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} className="block py-2" onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <a href="#contact" className="block py-2 font-medium" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </div>
  )
}

function Section({ id, className = '', children }) {
  return <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
}

function Hero() {
  return (
    <Section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs mb-4">
              <Rocket size={14} /> New: Launch your site in minutes
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              A clean, modern website template
            </h1>
            <p className="mt-4 text-black/70 max-w-xl">
              Use this one‑page layout for a portfolio, small business, school project, or landing page. It’s fast, responsive, and easy to customise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-2xl bg-black text-white px-5 py-3 shadow-lg hover:translate-y-[-1px] transition">See Pricing</a>
              <a href="#features" className="inline-flex items-center rounded-2xl px-5 py-3 border border-black/10 hover:bg-black/5 transition">Explore Features</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-black/60">
              <div className="flex items-center gap-1"><Star size={16} /> Trusted by students & startups</div>
              <div className="flex items-center gap-1"><Shield size={16} /> No-code friendly</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/10">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-cyan-400 opacity-80" />
              <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(transparent, black 80%)' }} />
              <div className="absolute bottom-4 right-4 text-white/90 text-sm bg-black/30 px-3 py-1 rounded-xl">Replace with your image</div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

function Features() {
  const items = [
    { icon: <Rocket />, title: 'Fast to set up', text: 'Copy, paste, and publish. Tailwind keeps styles tidy.' },
    { icon: <Shield />, title: 'Secure & responsive', text: 'Looks great on mobile and desktop with accessible defaults.' },
    { icon: <Star />, title: 'Easily customisable', text: 'Swap colours, fonts, and sections in minutes.' },
  ]
  return (
    <Section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-semibold tracking-tight text-center">
          Features
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-3xl border border-black/10 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="h-10 w-10 rounded-2xl bg-black/5 flex items-center justify-center mb-4">{it.icon}</div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="text-sm text-black/70 mt-1">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Showcase() {
  const cards = [
    { title: 'Project One', desc: 'Short description of a thing you made.', tag: 'Design' },
    { title: 'Project Two', desc: 'Another cool example to show.', tag: 'App' },
    { title: 'Project Three', desc: 'Swap these with your real work.', tag: 'Web' },
  ]
  return (
    <Section id="showcase" className="py-16 bg-gradient-to-b from-white to-indigo-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Showcase</h2>
        <p className="mt-2 text-center text-black/60">Highlight your best work, products, or school projects.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-amber-200" />
              <div className="p-5">
                <span className="text-[11px] uppercase tracking-wide text-black/60">{c.tag}</span>
                <h3 className="mt-1 font-semibold">{c.title}</h3>
                <p className="text-sm text-black/70 mt-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: 'Free', features: ['1 page', 'Basic styles', 'Email support'] },
    { name: 'Pro', price: '$29', features: ['All Starter', '3 sections', 'Priority support'] },
    { name: 'Ultimate', price: '$79', features: ['All Pro', 'Unlimited sections', 'Custom components'] },
  ]
  return (
    <Section id="pricing" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Pricing</h2>
        <p className="mt-2 text-center text-black/60">Change or remove pricing if you don't sell anything.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-black/10 p-6 shadow-sm hover:shadow-md bg-white">
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <div className="text-3xl font-bold mt-2">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {t.features.map((f, j) => (<li key={j}>• {f}</li>))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full rounded-2xl bg-black text-white py-3 shadow hover:translate-y-[-1px] transition">Choose</a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-10">
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
              <p className="text-black/70 text-sm mt-2">Tell us about your project or say hi — we usually reply within a day.</p>
              <form className="mt-6 grid gap-4" onSubmit={(e)=>e.preventDefault()}>
                <input className="rounded-2xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="Your name" />
                <input className="rounded-2xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="Email" type="email" />
                <textarea className="rounded-2xl border border-black/10 px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="Message" />
                <button className="rounded-2xl bg-black text-white py-3 hover:translate-y-[-1px] transition">Send</button>
              </form>
            </div>
            <div className="p-8 lg:p-10 bg-gradient-to-br from-indigo-50 to-fuchsia-50 border-t lg:border-t-0 lg:border-l border-black/5">
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3"><Mail size={18} /> hello@yourbrand.com</div>
                <div className="flex items-center gap-3"><Phone size={18} /> +61 412 345 678</div>
                <div className="flex items-center gap-3"><MapPin size={18} /> Sydney, Australia</div>
                <div className="pt-4 flex items-center gap-4">
                  <a href="#" aria-label="Instagram" className="p-2 rounded-xl border border-black/10 hover:bg-black/5"><Instagram size={18} /></a>
                  <a href="#" aria-label="Facebook" className="p-2 rounded-xl border border-black/10 hover:bg-black/5"><Facebook size={18} /></a>
                  <a href="#" aria-label="LinkedIn" className="p-2 rounded-xl border border-black/10 hover:bg-black/5"><Linkedin size={18} /></a>
                </div>
              </div>
              <div className="mt-8 aspect-[4/3] w-full rounded-2xl overflow-hidden border border-black/10 bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-amber-200" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-black/60">
        <Logo />
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-black">Features</a>
          <a href="#showcase" className="hover:text-black">Showcase</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} YourBrand. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
