import React from 'react'
import InteractiveNetworkBackground from './InteractiveNetworkBackground'
export default function App(){return(<main className='min-h-screen bg-black text-white'>
<section className='relative'><InteractiveNetworkBackground className='rounded-none'/>
<div className='absolute inset-0 flex items-center justify-center'><div className='text-center px-6'>
<h1 className='text-4xl md:text-6xl font-semibold tracking-tight'>Behnood Dianat</h1>
<p className='mt-4 text-lg md:text-xl opacity-90'>Embedded Machine Learning Scientist</p>
<div className='mt-6 flex items-center justify-center gap-4'>
<a href='https://github.com/behnood-dianat' target='_blank' className='px-5 py-2 rounded-xl bg-white/20 hover:bg-white/30'>GitHub</a>
<a href='https://www.linkedin.com/in/behnood-dianat-15889137' target='_blank' className='px-5 py-2 rounded-xl bg-white/20 hover:bg-white/30'>LinkedIn</a>
<a href='#contact' className='px-5 py-2 rounded-xl bg-accent text-black hover:brightness-110'>Contact</a>
</div></div></div></section>
<section className='max-w-5xl mx-auto px-6 py-16'><h2 className='text-2xl md:text-3xl font-semibold'>About</h2>
<p className='mt-4 text-gray-200 leading-relaxed'>Machine Learning Scientist with expertise in Machine Vision, Embedded Systems, and Digital Signal Processing.</p></section>
<section className='max-w-5xl mx-auto px-6 pb-8'><h2 className='text-2xl md:text-3xl font-semibold'>Highlights</h2>
<div className='mt-6 grid md:grid-cols-3 gap-6'><div className='rounded-2xl border border-white/10 p-5 bg-white/5'><h3 className='font-medium'>Sensor fusion</h3><p className='text-sm mt-2 opacity-90'>Real-time IMU+GPS fusion on STM32 MCU.</p></div>
<div className='rounded-2xl border border-white/10 p-5 bg-white/5'><h3 className='font-medium'>INSIDE</h3><p className='text-sm mt-2 opacity-90'>Device-agnostic anomaly detection for industrial motors.</p></div>
<div className='rounded-2xl border border-white/10 p-5 bg-white/5'><h3 className='font-medium'>Machine Vision</h3><p className='text-sm mt-2 opacity-90'>AR headset software for art analysis via edge ML.</p></div></div></section>
<section className='max-w-5xl mx-auto px-6 py-8'><h2 className='text-2xl md:text-3xl font-semibold'>Experience</h2>
<div className='mt-6 space-y-6'><div className='rounded-2xl border border-white/10 p-5 bg-white/5'><div className='flex flex-wrap items-baseline gap-2'><h3 className='text-lg font-medium'>Embedded Machine Learning Scientist</h3><span className='opacity-80'>— Redox Srl</span></div><div className='text-sm opacity-80 mt-1'>Oct 2023 — Present • Reggio Emilia, Italy</div><p className='text-sm mt-3 leading-relaxed opacity-90'>Optimized 3D point-cloud pipelines; deployed real-time embedded ML; sensor fusion & anomaly detection.</p></div>
<div className='rounded-2xl border border-white/10 p-5 bg-white/5'><div className='flex flex-wrap items-baseline gap-2'><h3 className='text-lg font-medium'>Postdoctoral Fellow</h3><span className='opacity-80'>— UniMoRe</span></div><div className='text-sm opacity-80 mt-1'>Jun 2021 — Sep 2023 • Reggio Emilia, Italy</div><p className='text-sm mt-3 leading-relaxed opacity-90'>ML for early detection of ILD; signal processing & CNNs for auscultations.</p></div>
<div className='rounded-2xl border border-white/10 p-5 bg-white/5'><div className='flex flex-wrap items-baseline gap-2'><h3 className='text-lg font-medium'>Scientific Researcher</h3><span className='opacity-80'>— CNR</span></div><div className='text-sm opacity-80 mt-1'>Feb 2020 — Feb 2021 • Modena, Italy</div><p className='text-sm mt-3 leading-relaxed opacity-90'>GeTe4 phase-change research; BELLO Python tool for disordered systems.</p></div></div></section>
<section id='contact' className='max-w-5xl mx-auto px-6 py-16'><h2 className='text-2xl md:text-3xl font-semibold'>Contact</h2>
<div className='mt-6 grid md:grid-cols-2 gap-6'><a className='rounded-2xl border border-white/10 p-5 bg-white/5' href='mailto:behnood.dianat@gmail.com'><div className='font-medium'>Email</div><div className='text-sm opacity-90 mt-1'>behnood.dianat@gmail.com</div></a><div className='rounded-2xl border border-white/10 p-5 bg-white/5'><div className='font-medium'>Location</div><div className='text-sm opacity-90 mt-1'>Parma, Italy</div></div></div>
<p className='text-xs opacity-60 mt-6'>© {new Date().getFullYear()} Behnood Dianat</p></section>
</main>)}