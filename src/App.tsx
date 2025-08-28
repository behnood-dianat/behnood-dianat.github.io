import React from 'react'
import InteractiveNetworkBackground from './InteractiveNetworkBackground'

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className='max-w-5xl mx-auto px-6 py-14 md:py-16'>
      <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>{title}</h2>
      <div className='mt-5 text-gray-200 leading-relaxed space-y-4'>{children}</div>
    </section>
  )
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <div className='rounded-2xl border border-white/10 p-5 bg-white/5'>
      <h3 className='font-medium text-lg'>{title}</h3>
      {subtitle && <p className='text-sm opacity-80 mt-1'>{subtitle}</p>}
      {children && <div className='mt-3 text-sm opacity-90 leading-relaxed'>{children}</div>}
    </div>
  )
}

export default function App() {
  return (
    <main className='min-h-screen bg-black text-white selection:bg-white/20'>
      {/* HERO */}
      <section className='relative'>
        <InteractiveNetworkBackground className='rounded-none' theme='royal' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center px-6'>
            <h1 className='text-4xl md:text-6xl font-semibold tracking-tight'>Behnood Dianat</h1>
            <p className='mt-4 text-lg md:text-xl opacity-90'>Embedded Machine Learning Scientist</p>
            <p className='mt-2 max-w-3xl mx-auto text-base md:text-lg opacity-80'>
              Advancing embedded ML at the intersection of technology, industry, and science —
              from sensor fusion and edge vision to biomedical signal processing and industrial IoT.
            </p>
            <div className='mt-6 flex items-center justify-center gap-3 md:gap-4 flex-wrap'>
              <a href='https://github.com/behnood-dianat' target='_blank' rel='noreferrer'
                 className='px-5 py-2 rounded-xl bg-white/20 hover:bg-white/30'>GitHub</a>
              <a href='https://www.linkedin.com/in/behnood-dianat-15889137' target='_blank' rel='noreferrer'
                 className='px-5 py-2 rounded-xl bg-white/20 hover:bg-white/30'>LinkedIn</a>
              <a href='#contact' className='px-5 py-2 rounded-xl bg-emerald-300 text-black hover:brightness-110'>Contact</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section title='About'>
        <p>
          I design and deploy machine learning systems that run on resource‑constrained hardware.
          My work spans autonomous off‑road navigation, wearable health monitoring, predictive maintenance,
          and augmented reality for cultural heritage — with a consistent focus on reliability, latency,
          and energy efficiency at the edge.
        </p>
        <p>
          Trained as a physicist (B.Sc., M.Sc. in Solid State Physics; Ph.D. in Industrial Innovation Engineering),
          I combine signal processing, model optimization, and embedded software engineering to move AI
          from lab to field. Recent work appears in <em>ACS Applied Electronic Materials</em>,
          <em>Computational Materials Science</em>, <em>Computers in Biology &amp; Medicine</em>, and
          <em>Biomedical Signal Processing &amp; Control</em>.
        </p>
      </Section>

      {/* HIGHLIGHTS */}
      <section className='max-w-5xl mx-auto px-6 pb-4'>
        <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>Highlights</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          <Card title='RIGA‑AT (All‑Terrain Autonomy)' subtitle='Sensor fusion • ADAS • Edge perception'>
            Embedded GPS‑RTK + IMU fusion and optimized 3D point‑cloud preprocessing for robust navigation on unstructured terrain.
          </Card>
          <Card title='INSIDE (Industrial IoT)' subtitle='Predictive maintenance • Interoperability'>
            Device‑agnostic wireless sensor prototype with on‑device vibration/temperature analysis and universal IIoT data format.
          </Card>
          <Card title='M.A.P.S. (Cultural Heritage AR)' subtitle='Edge vision • Multispectral • Wearables'>
            Linux‑based AR headset performing real‑time multispectral inspection with conservation overlays.
          </Card>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Section title='Experience'>
        <div className='mt-4 space-y-6'>
          <div className='rounded-2xl border border-white/10 p-5 bg-white/5'>
            <div className='flex items-start justify-between gap-4 flex-wrap'>
              <div>
                <h3 className='font-medium text-lg'>Embedded Machine Learning Scientist — Redox Srl</h3>
                <p className='text-sm opacity-80'>Oct 2023 – Present · Reggio Emilia, Italy</p>
              </div>
            </div>
            <ul className='list-disc pl-5 mt-3 space-y-2 text-sm opacity-90'>
              <li><strong>RIGA‑AT:</strong> GPS‑RTK + IMU fusion; real‑time object perception for ADAS on off‑road vehicles.</li>
              <li><strong>INSIDE:</strong> Edge anomaly detection for industrial motors; universal IIoT data format; cybersecurity by design.</li>
              <li><strong>MAPS:</strong> Embedded machine vision for AR headset with multispectral imaging and diagnostic overlays.</li>
              <li>Wearables: On‑device human‑activity recognition on STM32‑class MCUs with robust preprocessing.</li>
              <li>Operations: +23% production efficiency via analytics; software for automated test benches and QA.</li>
            </ul>
          </div>

          <div className='rounded-2xl border border-white/10 p-5 bg-white/5'>
            <h3 className='font-medium text-lg'>Postdoctoral Fellow — Univ. of Modena &amp; Reggio Emilia</h3>
            <p className='text-sm opacity-80'>Jun 2021 – Sep 2023 · Reggio Emilia, Italy</p>
            <p className='mt-2 text-sm opacity-90'>
              Early screening of interstitial lung disease from auscultation using deep CNNs, with denoising/augmentation and validation against HRCT.
              Achieved ~91–93% classification accuracy; designed pipelines for efficient edge deployment.
            </p>
          </div>

          <div className='rounded-2xl border border-white/10 p-5 bg-white/5'>
            <h3 className='font-medium text-lg'>Scientific Researcher — Consiglio Nazionale delle Ricerche (CNR)</h3>
            <p className='text-sm opacity-80'>Feb 2020 – Feb 2021 · Modena, Italy</p>
            <p className='mt-2 text-sm opacity-90'>
              Investigated phase‑change materials for non‑volatile memory; authored <em>BELLO</em>, an open‑source
              Python tool for local‑order analysis (Computational Materials Science, 2022).
            </p>
          </div>
        </div>
      </Section>

      {/* SELECTED PROJECTS */}
      <Section id='projects' title='Selected Projects'>
        <div className='grid md:grid-cols-2 gap-6'>
          <Card title='RIGA‑AT — Autonomy in All‑Terrain Vehicles'
                subtitle='Sensor fusion • Edge perception • Precision agriculture'>
            Developed navigation stack integrating GPS‑RTK, IMU, and LiDAR‑ready perception for unstructured environments.
            Focus on safety, reliability, and autonomy without fixed infrastructure.
          </Card>
          <Card title='INSIDE — Interoperable Industrial IoT'
                subtitle='On‑device analytics • Predictive maintenance'>
            Designed device‑agnostic wireless sensor with embedded ML for vibration/temperature analytics.
            Delivered factory‑integrable health indicators and a universal data format.
          </Card>
          <Card title='M.A.P.S. — Machine Vision &amp; AR for Culture'
                subtitle='Multispectral imaging • Wearable AR'>
            Built a headset that overlays conservation diagnostics in real time using multispectral and multi‑camera inputs.
          </Card>
          <Card title='BELLO — Materials Science Software'
                subtitle='Open‑source • Local order analysis'>
            Created a Python tool to quantify orientation and coordination in disordered systems; adopted by materials researchers.
          </Card>
        </div>
      </Section>

      {/* PUBLICATIONS & TALKS */}
      <Section title='Publications &amp; Talks (selected)'>
        <ul className='list-disc pl-5 space-y-2 text-sm opacity-90'>
          <li>Computational Materials Science (2022): BELLO — local atomic order analysis for disordered systems.</li>
          <li>ACS Applied Electronic Materials; studies on chalcogenide glasses and transport in amorphous materials.</li>
          <li>Computers in Biology &amp; Medicine; Biomedical Signal Processing &amp; Control: CNN‑based auscultation analysis for ILD screening.</li>
          <li>Invited talk (19 Jun 2025): “Embedded Machine Learning: Challenges and Opportunities at the Edge,” UNIMORE PhD Summer School.</li>
        </ul>
      </Section>

      {/* EDUCATION */}
      <Section title='Education'>
        <div className='grid md:grid-cols-3 gap-6'>
          <Card title='Ph.D., Industrial Innovation Engineering' subtitle='Univ. of Modena &amp; Reggio Emilia'>
            Thesis on chalcogenide glasses for memory switching; multi‑scale/topological analysis; DFT and electron transport (GINESTRA®).
          </Card>
          <Card title='M.Sc., Solid State Physics' subtitle='Iran University of Science &amp; Technology'>
            MoS₂ nanoribbon transport; combined simulation and thin‑film experimentation; MPI parallelization of quantum algorithms.
          </Card>
          <Card title='B.Sc., Solid State Physics' subtitle='Karaj Azad University'>
            Oxidation effects in Cu thin films; experience with sputtering and e‑gun deposition.
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id='contact' title='Contact'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='rounded-2xl border border-white/10 p-5 bg-white/5'>
            <div className='font-medium'>Email</div>
            <div className='text-sm opacity-90 mt-1'>
              <a href='mailto:behnood.dianat@gmail.com' className='underline underline-offset-4'>behnood.dianat@gmail.com</a>
            </div>
          </div>
          <div className='rounded-2xl border border-white/10 p-5 bg-white/5'>
            <div className='font-medium'>Location</div>
            <div className='text-sm opacity-90 mt-1'>Parma, Italy</div>
          </div>
          <div className='rounded-2xl border border-white/10 p-5 bg-white/5'>
            <div className='font-medium'>GitHub</div>
            <div className='text-sm opacity-90 mt-1'>
              <a href='https://github.com/behnood-dianat' target='_blank' rel='noreferrer' className='underline underline-offset-4'>github.com/behnood-dianat</a>
            </div>
          </div>
          <div className='rounded-2xl border border-white/10 p-5 bg-white/5'>
            <div className='font-medium'>LinkedIn</div>
            <div className='text-sm opacity-90 mt-1'>
              <a href='https://www.linkedin.com/in/behnood-dianat-15889137' target='_blank' rel='noreferrer' className='underline underline-offset-4'>linkedin.com/in/behnood-dianat-15889137</a>
            </div>
          </div>
        </div>
        <p className='text-xs opacity-60 mt-6'>© {new Date().getFullYear()} Behnood Dianat</p>
      </Section>
    </main>
  )
}