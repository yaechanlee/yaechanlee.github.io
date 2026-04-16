import { useState, useEffect, useRef } from "react";

const PUBLICATIONS = [
  {
    year: "Forthcoming",
    title: "Developmental or Liberal? How Japan and South Korea Diffuse Hybrid Financial Market Norms",
    journal: "Development and Change",
    coauthor: "with Saori N. Katada",
    link: "https://onlinelibrary.wiley.com/journal/14677660",
  },
  {
    year: "2025",
    title: "From Contest to Convergence in East Asia: Why Do Regional Challengers End Up Resembling Incumbent Institutions?",
    journal: "The Pacific Review, 39(1): 149–176",
    coauthor: "with William W. Grimes",
    link: "https://www.tandfonline.com/doi/full/10.1080/09512748.2025.2522778",
  },
  {
    year: "2025",
    title: "The Geoeconomics of Regional Currency Contest: How Bilateral Swap Arrangements of India and Japan Counter the Rise of RMB",
    journal: "Geopolitics, 30(2)",
    coauthor: "with Saori N. Katada",
    link: "https://www.tandfonline.com/doi/full/10.1080/14650045.2024.2388636",
  },
  {
    year: "2024",
    title: "Financial Liberalization or State Capitalism? The Developmental State and the Special Purpose Bond Market in South Korea",
    journal: "Contemporary Politics, 31(3): 375–394",
    coauthor: "",
    link: "https://www.tandfonline.com/doi/full/10.1080/13569775.2024.2384206",
  },
  {
    year: "2024",
    title: "The Varieties of Financial Statecraft and Middle Powers: Assessing South Korea's Strategic Involvement in Regional Financial Cooperation",
    journal: "The Pacific Review, 37(5): 913–939",
    coauthor: "with William W. Grimes & William N. Kring",
    link: "https://www.tandfonline.com/doi/full/10.1080/09512748.2023.2281687",
  },
  {
    year: "2024",
    title: "Regional Financial Cooperation and Regional Financial Arrangement",
    journal: "Edward Elgar Handbook on Regional Cooperation and Integration, 123–142",
    coauthor: "with William N. Kring",
    link: "https://www.elgaronline.com/edcollchap/edcoll/9781800886179/9781800886179.00015.xml",
    chapter: true,
  },
  {
    year: "2024",
    title: "Financial Cooperation in the Asia-Pacific as Regime Complex: Explaining Patterns of Coverage, Membership, and Rules",
    journal: "International Relations of the Asia-Pacific, 24(3): 399–428",
    coauthor: "with William W. Grimes & William N. Kring",
    link: "https://academic.oup.com/irap/article-abstract/24/3/399/7424196",
  },
  {
    year: "2023",
    title: "Manifesting the Embedded Developmental State: The Role of South Korea's National Pension Service in Managing Financial Crisis",
    journal: "Review of International Political Economy, 30(5): 1933–1956",
    coauthor: "with William W. Grimes",
    link: "https://www.tandfonline.com/doi/full/10.1080/09692290.2022.2136733",
  },
  {
    year: "2021",
    title: "Riding the Tide: Assessing South Korea's Hedging Strategy through Regional Security Initiatives",
    journal: "The Pacific Review, 36(3): 494–520",
    coauthor: "",
    link: "https://www.tandfonline.com/doi/full/10.1080/09512748.2021.1977685",
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
      transform: vis ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const refs = useRef({});

  useEffect(() => {
    const onScroll = () => {
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

  const C = {
    bg:     "#2B3F6C",
    bg2:    "#243560",
    accent: "#7FA8D4",
    white:  "#F4F6FA",
    dim:    "rgba(244,246,250,0.52)",
    line:   "rgba(244,246,250,0.12)",
    green:  "#a8d4a0",
  };

  const F = "Arial, 'Helvetica Neue', Helvetica, sans-serif";

  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: F, minHeight: "100vh" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(127,168,212,0.3); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #1e2f52; }
        ::-webkit-scrollbar-thumb { background: #4a6a9e; border-radius: 2px; }
        a { color: inherit; text-decoration: none; }
        .nav-item {
          font-family: Arial, sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(244,246,250,0.5);
          cursor: pointer;
          padding: 3px 0;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .nav-item:hover, .nav-item.on {
          color: #F4F6FA;
          border-bottom-color: #7FA8D4;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 6vw;
          min-height: calc(100vh - 56px);
        }
        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 60px 0;
        }
        .hero-name-line {
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          font-size: clamp(48px, 7vw, 96px);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.02em;
        }
        .pub-row {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 0 28px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(244,246,250,0.1);
          transition: background 0.2s;
        }
        .pub-row:hover { background: rgba(127,168,212,0.04); }
        .pub-title {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.5;
          display: block;
          margin-bottom: 6px;
          transition: color 0.2s;
          cursor: pointer;
        }
        .pub-title:hover { color: #7FA8D4; }
        .btn-outline {
          display: inline-block;
          padding: 10px 28px;
          border: 1px solid rgba(244,246,250,0.28);
          border-radius: 2px;
          font-family: Arial, sans-serif;
          font-size: 11px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #F4F6FA;
          transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .btn-outline:hover {
          background: rgba(127,168,212,0.13);
          border-color: #7FA8D4;
        }
        .tag {
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 11px;
          border-radius: 20px;
          border: 1px solid rgba(127,168,212,0.28);
          color: rgba(127,168,212,0.72);
          white-space: nowrap;
        }
        @keyframes slideDown {
          from { opacity:0; transform:translateY(-16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .a1{animation:slideDown 0.9s cubic-bezier(.16,1,.3,1) 0.05s both;}
        .a2{animation:slideDown 0.9s cubic-bezier(.16,1,.3,1) 0.15s both;}
        .a3{animation:slideDown 0.9s cubic-bezier(.16,1,.3,1) 0.25s both;}
        .a4{animation:slideDown 0.9s cubic-bezier(.16,1,.3,1) 0.35s both;}
        .a5{animation:slideDown 0.9s cubic-bezier(.16,1,.3,1) 0.45s both;}
        .a6{animation:slideDown 0.9s cubic-bezier(.16,1,.3,1) 0.55s both;}
        .section-pad { padding: 100px 6vw; }
        .section-inner { max-width: 1100px; margin: 0 auto; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mob-btn { display: flex !important; }
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 40px 6vw 60px;
            min-height: auto;
          }
          .hero-left-col { padding: 0; }
          .hero-right { padding: 0; gap: 16px; }
          .pub-row { grid-template-columns: 1fr; gap: 4px 0; }
          .section-pad { padding: 64px 6vw; }
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
        padding: "0 6vw", height: 56,
        background: "rgba(43,63,108,0.93)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${C.line}`,
      }}>
        <span style={{ fontFamily: F, fontSize: 12, letterSpacing: "0.06em", color: C.dim }}>
          이예찬 · Yaechan Lee
        </span>
        <div className="desktop-nav" style={{ display: "flex", gap: 36 }}>
          {NAV.map(n => (
            <span key={n} className={`nav-item${active === n ? " on" : ""}`} onClick={() => goto(n)}>{n}</span>
          ))}
        </div>
        <button className="mob-btn" onClick={() => setMenuOpen(o => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 6, padding: 4 }}>
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 22, height: 1.5, background: C.dim }} />)}
        </button>
      </nav>

      {menuOpen && (
        <div className="mob-menu" style={{
          position: "fixed", top: 56, left: 0, right: 0, zIndex: 99,
          background: "rgba(36,53,96,0.98)", padding: "22px 6vw",
          display: "flex", flexDirection: "column", gap: 22,
          borderBottom: `1px solid ${C.line}`,
        }}>
          {NAV.map(n => (
            <span key={n} className="nav-item" onClick={() => goto(n)} style={{ fontSize: 15 }}>{n}</span>
          ))}
        </div>
      )}

      {/* HERO */}
      <section
        ref={el => refs.current["About"] = el}
        style={{ paddingTop: 56, background: C.bg, position: "relative", overflow: "hidden" }}
      >
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(244,246,250,0.055) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }} />

        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left-col" style={{ padding: "80px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="a1" style={{ fontFamily: F, fontSize: 11, letterSpacing: "0.18em", color: C.dim, marginBottom: 28, textTransform: "uppercase" }}>
              Assistant Professor · International Relations
            </div>
            <div className="a2 hero-name-line" style={{ color: C.white }}>YAECHAN</div>
            <div className="a3 hero-name-line" style={{ color: C.accent }}>LEE</div>
            <div className="a4" style={{ width: 48, height: 1, background: C.accent, margin: "28px 0" }} />
            <div className="a5" style={{ fontFamily: F, fontSize: 12, letterSpacing: "0.06em", color: C.dim }}>
              Hanyang University GSIS · Seoul, Korea
            </div>
            <div className="a6" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
              {[
                { label: "Google Scholar", href: "https://scholar.google.com/citations?user=crLGqAYAAAAJ" },
                { label: "Email", href: "mailto:yaechanlee@hanyang.ac.kr" },
                { label: "CV", href: "cv.pdf" },
              ].map(l => (
                <a key={l.label} href={l.href} className="btn-outline" target="_blank" rel="noreferrer">{l.label}</a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <p style={{ fontFamily: F, fontSize: 16, lineHeight: 1.9, fontWeight: 400, color: "rgba(244,246,250,0.9)" }}>
              I am an Assistant Professor of International Relations at Hanyang University's Graduate School of International Studies (GSIS) in Seoul. I received my Ph.D. in Political Science from Boston University.
            </p>
            <p style={{ fontFamily: F, fontSize: 15, lineHeight: 1.9, fontWeight: 400, color: "rgba(244,246,250,0.78)" }}>
              My research explores how states — particularly in East Asia — use financial institutions and instruments to pursue political goals. I am interested in the ways that public pension funds, development bonds, and regional financial arrangements shape and are shaped by broader geopolitical dynamics. I have a soft spot for cases where the financial and the political intersect in unexpected ways.
            </p>
            <p style={{ fontFamily: F, fontSize: 14, lineHeight: 1.9, color: C.dim }}>
              My work has appeared or is forthcoming in <em>Review of International Political Economy</em>, <em>The Pacific Review</em>, <em>Geopolitics</em>, <em>Development and Change</em>, <em>Contemporary Politics</em>, <em>International Relations of the Asia-Pacific</em>, and <em>East Asia</em>, among others.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 8 }}>
              {["East Asian IPE", "Financial Statecraft", "Regional Financial Cooperation", "Developmental State", "Geopolitics of Finance"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: C.line }} />

      {/* PUBLICATIONS */}
      <section ref={el => refs.current["Publications"] = el} style={{ background: C.bg2 }}>
        <div className="section-pad">
          <div className="section-inner">
            <FadeIn>
              <span style={{ fontFamily: F, fontSize: 10, letterSpacing: "0.2em", color: C.accent, textTransform: "uppercase", display: "block", marginBottom: 14, fontWeight: 700 }}>Publications</span>
              <h2 style={{ fontFamily: F, fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.1 }}>
                Selected Publications
              </h2>
            </FadeIn>
            <div style={{ borderTop: `1px solid ${C.line}` }}>
              {PUBLICATIONS.map((p, i) => (
                <FadeIn key={i} delay={Math.min(i * 0.04, 0.25)}>
                  <div className="pub-row">
                    <div style={{ paddingTop: 3 }}>
                      <span style={{
                        fontFamily: F, fontSize: 11, fontWeight: 700,
                        color: p.year === "Forthcoming" ? C.green : C.accent,
                        letterSpacing: "0.03em", display: "block",
                      }}>{p.year}</span>
                      {p.chapter && (
                        <span style={{ fontFamily: F, fontSize: 9, color: C.dim, letterSpacing: "0.06em", display: "block", marginTop: 4, textTransform: "uppercase" }}>Book Chapter</span>
                      )}
                    </div>
                    <div>
                      <a href={p.link} target="_blank" rel="noreferrer" className="pub-title">{p.title}</a>
                      {p.coauthor && (
                        <span style={{ fontFamily: F, fontSize: 12, color: C.dim, display: "block", marginBottom: 6 }}>{p.coauthor}</span>
                      )}
                      <span style={{ fontFamily: F, fontSize: 12, color: C.accent, fontStyle: "italic" }}>{p.journal}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: C.line }} />

      {/* CV */}
      <section ref={el => refs.current["CV"] = el} style={{ background: C.bg, textAlign: "center" }}>
        <div className="section-pad">
          <FadeIn>
            <span style={{ fontFamily: F, fontSize: 10, letterSpacing: "0.2em", color: C.accent, textTransform: "uppercase", display: "block", marginBottom: 18, fontWeight: 700 }}>Curriculum Vitae</span>
            <h2 style={{ fontFamily: F, fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 18, lineHeight: 1 }}>
              DOWNLOAD CV
            </h2>
            <p style={{ fontFamily: F, fontSize: 12, color: C.dim, marginBottom: 40, letterSpacing: "0.06em" }}>Last updated January 2025</p>
            <a href="cv.pdf" download className="btn-outline">Download PDF</a>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${C.line}`,
        padding: "22px 6vw",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
        background: C.bg2,
      }}>
        <span style={{ fontFamily: F, fontSize: 11, color: C.dim }}>© 2025 Yaechan Lee · Hanyang University GSIS</span>
        <span style={{ fontFamily: F, fontSize: 11, color: "rgba(244,246,250,0.2)" }}>React · GitHub Pages</span>
      </footer>
    </div>
  );
}
