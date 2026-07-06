import { useState, useEffect, useRef } from "react";

const PUBLICATIONS = [
  {
    year: "2026",
    title: "Developmental or Liberal? How Japan and South Korea Diffuse Hybrid Financial Market Norms",
    journal: "Development and Change",
    coauthor: "with Saori N. Katada",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/dech.70068",
    ssci: true,
  },
  {
    year: "2026",
    title: "The Politics and Impact of Bretton Woods Institutions and Their Alternatives",
    journal: "The Routledge Companion to International Law and Responsible Business",
    coauthor: "with I. Amrouche",
    link: "https://books.google.co.kr/books?hl=en&lr=&id=RKLkEQAAQBAJ&oi=fnd&pg=PT168&dq=info:mDbL0Iq3iBYJ:scholar.google.com&ots=H6VRtyrMok&sig=WdFAUZJBe2J_6vWsgwL7zaMofWM&redir_esc=y#v=onepage&q&f=false",
    chapter: true,
  },
  {
    year: "2026",
    title: "Geopolitics in the International Market: A Systematic Review and Research Agenda",
    journal: "International Business and Seismic Disruptions: Political, Digital, and Environmental Challenges",
    coauthor: "with D. Kim & T. Roh",
    link: "https://books.google.co.kr/books?hl=en&lr=&id=cArwEQAAQBAJ&oi=fnd&pg=PA12&ots=L9VQfFa0CW&sig=g2m190Jsw2bLmt3299CdfQQF_G4&redir_esc=y#v=onepage&q&f=false",
    chapter: true,
  },
  {
    year: "2025",
    title: "From Contest to Convergence in East Asia: Why Do Regional Challengers End Up Resembling Incumbent Institutions?",
    journal: "The Pacific Review, 39(1): 149–176",
    coauthor: "with William W. Grimes",
    link: "https://www.tandfonline.com/doi/full/10.1080/09512748.2025.2522778",
    ssci: true,
  },
  {
    year: "2025",
    title: "The Geoeconomics of Regional Currency Contest: How Bilateral Swap Arrangements of India and Japan Counter the Rise of RMB",
    journal: "Geopolitics, 30(2)",
    coauthor: "with Saori N. Katada",
    link: "https://www.tandfonline.com/doi/full/10.1080/14650045.2024.2388636",
    ssci: true,
  },
  {
    year: "2024",
    title: "Financial Liberalization or State Capitalism? The Developmental State and the Special Purpose Bond Market in South Korea",
    journal: "Contemporary Politics, 31(3): 375–394",
    coauthor: "",
    link: "https://www.tandfonline.com/doi/full/10.1080/13569775.2024.2384206",
    ssci: true,
  },
  {
    year: "2024",
    title: "The Varieties of Financial Statecraft and Middle Powers: Assessing South Korea's Strategic Involvement in Regional Financial Cooperation",
    journal: "The Pacific Review, 37(5): 913–939",
    coauthor: "with William W. Grimes & William N. Kring",
    link: "https://www.tandfonline.com/doi/full/10.1080/09512748.2023.2281687",
    ssci: true,
  },
  {
    year: "2024",
    title: "Regional Financial Cooperation and Regional Financial Arrangement",
    journal: "Edward Elgar Handbook on Regional Cooperation and Integration, 123–142",
    coauthor: "with William N. Kring",
    link: "https://www.elgaronline.com/edcollchap-oa/book/9781800373747/book-part-9781800373747-13.xml",
    chapter: true,
  },
  {
    year: "2024",
    title: "Financial Cooperation in the Asia-Pacific as Regime Complex: Explaining Patterns of Coverage, Membership, and Rules",
    journal: "International Relations of the Asia-Pacific, 24(3): 399–428",
    coauthor: "with William W. Grimes & William N. Kring",
    link: "https://academic.oup.com/irap/article-abstract/24/3/399/7424196",
    ssci: true,
  },
  {
    year: "2023",
    title: "Manifesting the Embedded Developmental State: The Role of South Korea's National Pension Service in Managing Financial Crisis",
    journal: "Review of International Political Economy, 30(5): 1933–1956",
    coauthor: "with William W. Grimes",
    link: "https://www.tandfonline.com/doi/full/10.1080/09692290.2022.2136733",
    ssci: true,
  },
  {
    year: "2021",
    title: "Riding the Tide: Assessing South Korea's Hedging Strategy through Regional Security Initiatives",
    journal: "The Pacific Review, 36(3): 494–520",
    coauthor: "",
    link: "https://www.tandfonline.com/doi/full/10.1080/09512748.2021.1977685",
    ssci: true,
  },
  {
    year: "2018",
    title: "Economic Interdependence and Peace: A Case Comparison Between the US-China and US-Japan Trade Disputes",
    journal: "East Asia, 35: 215–232",
    coauthor: "",
    link: "https://link.springer.com/article/10.1007/s12140-018-9296-4",
  },
  {
    year: "2018",
    title: "What Brought Them Together? Comparative Analysis of the Normalization Processes of North Korea-Japan and South Korea-Japan",
    journal: "The Korean Journal of International Studies, 21(3): 411–433",
    coauthor: "",
    link: "https://www.kjis.org/journal/view.html?doi=10.14731/kjis.2023.12.21.3.411",
  },
];

const NAV = ["About", "Publications", "CV"];

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.07 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const refs = useRef({});

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const y = window.scrollY + 120;
      for (const n of NAV) {
        const el = refs.current[n];
        if (el && y >= el.offsetTop) setActive(n);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (n) => {
    refs.current[n]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  /* ── Palette: warm stone / ink / muted sage — an editorial, architectural register ── */
  const C = {
    bg:     "#EDEAE1",
    bg2:    "#E3DFD2",
    ink:    "#211F1B",
    inkDim: "rgba(33,31,27,0.56)",
    inkFaint: "rgba(33,31,27,0.34)",
    accent: "#5C6650",
    line:   "rgba(33,31,27,0.14)",
  };

  const serif = "'Fraunces', Georgia, serif";
  const sans  = "'Inter', 'Helvetica Neue', Arial, sans-serif";
  const mono  = "'Space Mono', 'Courier New', monospace";

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: sans, minHeight: "100vh" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(92,102,80,0.22); }
        a { color: inherit; text-decoration: none; }

        .nav-item {
          font-family: ${mono};
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${C.inkDim};
          cursor: pointer;
          padding: 4px 0;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .nav-item:hover, .nav-item.on {
          color: ${C.ink};
          border-bottom-color: ${C.accent};
        }

        .hero-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 6vw 140px;
          min-height: calc(100vh - 72px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-name {
          font-family: ${serif};
          font-weight: 400;
          font-size: clamp(56px, 10vw, 128px);
          line-height: 0.96;
          letter-spacing: -0.01em;
        }
        .hero-name em {
          font-style: italic;
          font-weight: 400;
          color: ${C.accent};
        }
        .bio-p {
          font-family: ${sans};
          font-size: 17.5px;
          line-height: 1.85;
          font-weight: 400;
          color: rgba(33,31,27,0.82);
          max-width: 640px;
        }
        .bio-quote {
          font-family: ${serif};
          font-style: italic;
          font-weight: 400;
          font-size: 21px;
          line-height: 1.6;
          color: ${C.ink};
          max-width: 640px;
        }

        .contact-row a {
          font-family: ${mono};
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${C.inkDim};
          border-bottom: 1px solid ${C.line};
          padding-bottom: 3px;
          transition: color 0.2s, border-color 0.2s;
        }
        .contact-row a:hover { color: ${C.ink}; border-bottom-color: ${C.accent}; }

        .section-eyebrow {
          font-family: ${mono};
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C.accent};
          display: block;
          margin-bottom: 18px;
        }
        .section-heading {
          font-family: ${serif};
          font-weight: 400;
          font-style: italic;
          font-size: clamp(28px, 4vw, 46px);
          letter-spacing: -0.01em;
          line-height: 1.05;
          margin-bottom: 56px;
        }

        .pub-row {
          display: grid;
          grid-template-columns: 96px 1fr;
          gap: 0 32px;
          padding: 30px 0;
          border-bottom: 1px solid ${C.line};
        }
        .pub-index {
          font-family: ${serif};
          font-style: italic;
          font-size: 16px;
          color: ${C.inkFaint};
        }
        .pub-year {
          font-family: ${mono};
          font-size: 12px;
          letter-spacing: 0.02em;
          color: ${C.accent};
          display: block;
          margin-top: 4px;
        }
        .pub-chapter {
          font-family: ${mono};
          font-size: 9.5px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${C.inkFaint};
          display: block;
          margin-top: 6px;
        }
        .pub-title {
          font-family: ${serif};
          font-size: 20px;
          font-weight: 400;
          line-height: 1.4;
          display: block;
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .pub-title:hover { color: ${C.accent}; }
        .pub-coauthor {
          font-family: ${sans};
          font-size: 13.5px;
          color: ${C.inkDim};
          display: block;
          margin-bottom: 6px;
        }
        .pub-journal {
          font-family: ${sans};
          font-size: 14.5px;
          font-style: italic;
          font-weight: 500;
          color: ${C.accent};
        }

        .btn-outline {
          display: inline-block;
          padding: 12px 32px;
          border: 1px solid ${C.ink};
          font-family: ${mono};
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${C.ink};
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .btn-outline:hover { background: ${C.ink}; color: ${C.bg}; }

        .field-list {
          font-family: ${sans};
          font-size: 14px;
          color: ${C.inkDim};
          line-height: 2;
        }

        .section-pad { padding: 140px 6vw; }
        .section-inner { max-width: 900px; margin: 0 auto; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mob-btn { display: flex !important; }
          .hero-inner { padding: 48px 6vw 80px; min-height: auto; }
          .bio-p { font-size: 15.5px; }
          .field-list { font-size: 12.5px; }
          .pub-row { grid-template-columns: 1fr; gap: 4px 0; }
          .pub-index { display: none; }
          .pub-title { font-size: 17px; }
          .pub-journal { font-size: 13px; }
          .section-pad { padding: 64px 6vw; }
          .section-heading { margin-bottom: 36px; }
        }
        @media (max-width: 420px) {
          .contact-row { gap: 16px !important; }
          .contact-row a { font-size: 11.5px; }
          .nav-name { font-size: 9.5px !important; }
        }
        @media (min-width: 769px) {
          .mob-btn  { display: none !important; }
          .mob-menu { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 6vw", height: 72,
        background: scrolled ? "rgba(237,234,225,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <span className="nav-name" style={{ fontFamily: `${mono}, Dotum, '돋움', sans-serif`, fontSize: 13, letterSpacing: "0.06em", color: C.inkDim }}>
          이예찬 · Yaechan Lee
        </span>
        <div className="desktop-nav" style={{ display: "flex", gap: 36 }}>
          {NAV.map(n => (
            <span key={n} className={`nav-item${active === n ? " on" : ""}`} onClick={() => goto(n)}>{n}</span>
          ))}
        </div>
        <button className="mob-btn" onClick={() => setMenuOpen(o => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 6, padding: 4 }}>
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 22, height: 1.5, background: C.ink }} />)}
        </button>
      </nav>

      {menuOpen && (
        <div className="mob-menu" style={{
          position: "fixed", top: 72, left: 0, right: 0, zIndex: 99,
          background: "rgba(237,234,225,0.98)", padding: "22px 6vw",
          display: "flex", flexDirection: "column", gap: 22,
          borderBottom: `1px solid ${C.line}`,
        }}>
          {NAV.map(n => (
            <span key={n} className="nav-item" onClick={() => goto(n)} style={{ fontSize: 15 }}>{n}</span>
          ))}
        </div>
      )}

      {/* HERO / ABOUT */}
      <section ref={el => refs.current["About"] = el} style={{ paddingTop: 72 }}>
        <div className="hero-inner">
          <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.14em", color: C.inkDim, textTransform: "uppercase", marginBottom: 22, display: "block" }}>
            Assistant Professor · International Relations
          </span>
          <h1 className="hero-name" style={{ marginBottom: 32 }}>
            Yaechan<br /><em>Lee</em>
          </h1>
          <div style={{ width: 40, height: 1, background: C.ink, marginBottom: 32 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 40 }}>
            <p className="bio-p">
              I am an Assistant Professor of International Relations at Hanyang University's Graduate School of International Studies (GSIS) and Korean Studies Chair at the Department of Korean Studies. I received my Ph.D. in Political Science from Boston University.
            </p>
            <p className="bio-p">
              My research explores how states — particularly in East Asia — use financial institutions and instruments to pursue political goals. I am interested in the ways that public pension funds, development bonds, and regional financial arrangements shape and are shaped by broader geopolitical dynamics. My work has appeared or is forthcoming in <em>Review of International Political Economy</em>, <em>The Pacific Review</em>, <em>Geopolitics</em>, <em>Development and Change</em>, <em>Contemporary Politics</em>, <em>International Relations of the Asia-Pacific</em>, and <em>East Asia</em>, among others.
            </p>
          </div>

          <div className="field-list" style={{ marginBottom: 40 }}>
            East Asian IPE — Financial Statecraft — Regional Financial Cooperation<br />
            Developmental State — Geopolitics of Finance
          </div>

          <div className="contact-row" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            <a href="https://scholar.google.com/citations?user=crLGqAYAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="mailto:yaechanlee@hanyang.ac.kr">Email</a>
            <a href="https://www.claudeusercontent.com/cv.pdf" target="_blank" rel="noreferrer">CV</a>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section ref={el => refs.current["Publications"] = el} style={{ background: C.bg2 }}>
        <div className="section-pad">
          <div className="section-inner">
            <FadeIn>
              <span className="section-eyebrow">Research</span>
              <h2 className="section-heading">Publications</h2>
            </FadeIn>
            <div style={{ borderTop: `1px solid ${C.line}` }}>
              {PUBLICATIONS.map((p, i) => (
                <FadeIn key={i} delay={Math.min(i * 0.03, 0.2)}>
                  <div className="pub-row">
                    <div>
                      <span className="pub-index">{String(i + 1).padStart(2, "0")}</span>
                      <span className="pub-year">{p.year}</span>
                      {p.chapter && <span className="pub-chapter">Chapter</span>}
                      {p.ssci && <span className="pub-chapter">SSCI</span>}
                    </div>
                    <div>
                      <a href={p.link} target="_blank" rel="noreferrer" className="pub-title">{p.title}</a>
                      {p.coauthor && <span className="pub-coauthor">{p.coauthor}</span>}
                      <span className="pub-journal">{p.journal}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV */}
      <section ref={el => refs.current["CV"] = el} style={{ textAlign: "center" }}>
        <div className="section-pad">
          <FadeIn>
            <span className="section-eyebrow">Curriculum Vitae</span>
            <h2 className="section-heading">Download CV</h2>
            <p style={{ fontFamily: mono, fontSize: 11, color: C.inkFaint, marginBottom: 40, letterSpacing: "0.06em" }}>Last updated July 2026</p>
            <a href="cv.pdf" download className="btn-outline">Download PDF</a>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${C.line}`,
        padding: "26px 6vw",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
        background: C.bg2,
      }}>
        <span style={{ fontFamily: mono, fontSize: 10.5, color: C.inkDim }}>© 2026 Yaechan Lee · Hanyang University GSIS</span>
        <span style={{ fontFamily: mono, fontSize: 10.5, color: C.inkFaint }}>React · GitHub Pages</span>
      </footer>
    </div>
  );
}
