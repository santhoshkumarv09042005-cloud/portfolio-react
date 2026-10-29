import ScrollCanvas from './components/ScrollCanvas'
import EnquiryForm from './components/EnquiryForm'
import { PERSONAL as P, stats, servicesLeft, servicesRight, experience, projects, aboutList, tools } from './data'

const Card = ({ title, text }: { title: string; text: string }) => (
  <div className="service-card"><h4>{title}</h4><p>{text}</p></div>
)
const dim = 'rgba(214, 197, 179, 0.8)'

export default function App() {
  return (
    <>
      <ScrollCanvas />
      <div id="content-wrapper">
        <header>
          <span>Creative Portfolio</span>
          <span className="accent">{P.location}</span>
        </header>

        <div className="huge-title-split"><span>PORT</span><span>FOLIO</span></div>

        <section className="split-layout" style={{ borderBottom: 'none', paddingTop: '4vh', minHeight: '70vh' }}>
          <div className="hero-left">
            <p className="hello">Hello, I'm</p>
            <h2 className="name">{P.name[0]} {P.name[1]}</h2>
            <p className="role-accent">{P.subRole} &amp; {P.roles[3]}</p>
            <p className="desc">{P.bio}</p>
            <span className="pill">📍 {P.location}</span>
          </div>
          <div className="hero-right">
            <div className="quote-card">{P.quote}</div>
            <div className="stats stacked">
              {stats.map(s => (
                <div className="stat-item" key={s.value}><h3>{s.value}</h3><span>{s.label[0]}<br />{s.label[1]}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="split-layout">
          <div>
            <h3 className="section-header">What I Do</h3>
            <div className="services-grid">{servicesLeft.map(c => <Card key={c.title} {...c} />)}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div className="services-grid">{servicesRight.map(c => <Card key={c.title} {...c} />)}</div>
          </div>
        </section>

        <section className="split-layout">
          <div>
            <h3 className="section-header">Experience</h3>
            <div className="process-list">
              {experience.map((e, i) => (
                <div className="process-item" key={e.title}>
                  <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="process-content"><h5>{e.title}</h5><p style={{ color: 'var(--color-red)', marginBottom: '0.4rem' }}>{e.org}</p><p>{e.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="section-header">Featured Work</h3>
            <div className="work-grid">
              {projects.map(p => (
                <div className="project-card" key={p.title}>
                  <div className="project-img-placeholder">{p.label}</div>
                  <h4>{p.title}</h4><p style={{ fontSize: '0.8rem', lineHeight: 1.5, color: 'rgba(214, 197, 179, 0.7)' }}>{p.text}</p><span>{p.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="split-layout">
          <div>
            <h3 className="section-header">About Me</h3>
            <div className="about-content">
              <p>{P.longBio}</p>
              <p>{P.degree} · {P.college} · {P.collegeYear}</p>
              <ul className="about-list">{aboutList.map(a => <li key={a}>{a}</li>)}</ul>
            </div>
          </div>
          <div>
            <h3 className="section-header">Tools I Use</h3>
            <div className="tools-grid">{tools.map(t => <div className="tool-box" key={t}>{t}</div>)}</div>
            <div className="testimonial">
              <p>{P.degree}<br />{P.college}<br /><br />
                <span style={{ color: 'var(--color-red)', fontSize: '0.8rem', textTransform: 'uppercase' }}>{P.collegeYear}</span></p>
            </div>
          </div>
        </section>

        <section className="split-layout">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '1rem' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: dim, maxWidth: 350 }}>
              Whether you need a scalable Django backend, a fast REST API, or a full stack web application—I'm ready to help you build it.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', maxWidth: 350 }}>
              <h3 className="section-header" style={{ justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>Start a Project</h3>
              <EnquiryForm />
            </div>
          </div>
        </section>

        <section className="split-layout footer-section" style={{ borderBottom: 'none' }}>
          <div>
            <h3>LET'S COLLABORATE</h3>
            <div className="contact-info">
              <p>Have a project in mind or just want to say hi?<br />I'd love to hear from you.</p><br />
              <p>{P.email}</p><p>{P.phone}</p><p>{P.location}</p>
            </div>
          </div>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--color-red)' }}>CONNECT</h3>
            <div className="contact-info" style={{ marginTop: '1rem', alignItems: 'flex-end' }}>
              <a href={P.linkedin} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>LinkedIn</a>
              <a href={P.github} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>GitHub</a>
            </div>
          </div>
          <div className="footer-bottom">
            BUILDING SCALABLE BACKENDS.<br />SHIPPING REAL PRODUCTS.<br />
            <span style={{ color: 'var(--color-beige)', fontSize: '2rem' }}>{P.fullName}</span>
          </div>
        </section>
      </div>
    </>
  )
}
