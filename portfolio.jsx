import { useState, useEffect, useRef } from "react";

const PHOTO = "data:image/jpeg;base64,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";

// Smooth scroll hook
function useSmoothScroll() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return scrollTo;
}

// Intersection observer hook for animations
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// Animated counter
function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// Section wrapper with fade-in
function Section({ children, id, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </section>
  );
}

// ─── DATA ──────────────────────────────────────────────
const skills = {
  "Data Engineering": [
    { name: "Python", icon: "⟨py⟩" },
    { name: "SQL", icon: "⟨sql⟩" },
    { name: "Apache Spark", icon: "◇" },
    { name: "Hive / Presto", icon: "⬡" },
    { name: "ETL Pipelines", icon: "⇶" },
    { name: "Data Warehousing", icon: "▣" },
    { name: "AWS", icon: "☁" },
    { name: "Databricks", icon: "◈" },
  ],
  "Software Engineering": [
    { name: "Backend Development", icon: "⚙" },
    { name: "REST APIs", icon: "⇌" },
    { name: "System Design", icon: "◎" },
    { name: "Microservices", icon: "⧉" },
    { name: "Docker / K8s", icon: "▦" },
    { name: "Java / Scala", icon: "⟨jv⟩" },
  ],
  "Web & App Development": [
    { name: "React / Frontend", icon: "⚛" },
    { name: "Full Stack Dev", icon: "▥" },
    { name: "App Development", icon: "📱" },
    { name: "CI/CD Pipelines", icon: "⟳" },
  ],
};

const experience = [
  {
    title: "Software Engineer",
    company: "Syncron",
    location: "Bengaluru",
    period: "May 2025 – Present",
    color: "#6EE7B7",
    highlights: [
      "Supporting Pricing Data Lake for 100+ enterprise clients enabling analytics & ML use cases",
      "Optimized analytics performance — reduced dashboard runtime by 87% (40 min → 5 min)",
      "Implemented AWS-DMS switch from Provisioned to Serverless architecture",
      "Managing MWAA pipelines orchestrating pricing data flows across multi-client environments",
      "Developing AWS Glue jobs transforming raw pricing data into curated S3 data lake",
    ],
  },
  {
    title: "Software Development Engineer I",
    company: "Nineleaps (Client: Uber)",
    location: "Bengaluru",
    period: "Jun 2024 – May 2025",
    color: "#818CF8",
    highlights: [
      "Skip-level promotion MTS II → SDE I based on consistent high performance",
      "Managed 120+ mission-critical Tier 1 datasets with zero downtime",
      "Reduced infrastructure costs by 30% through query optimization",
      "Led on-call rotation maintaining 99.9% uptime for TB-scale pipelines",
      "Recognized with 'Feather on the Hat' award 6 times",
    ],
  },
  {
    title: "Data Engineer",
    company: "Nineleaps (Client: Uber)",
    location: "Bengaluru",
    period: "Sep 2023 – Jun 2024",
    color: "#F472B6",
    highlights: [
      "Built 50+ scalable ETL pipelines using Spark & Glue, processing 10+ TB daily",
      "Designed data models & warehouse schemas — 45% query performance improvement",
      "Automated data validation — reduced quality issues by 60%",
    ],
  },
  {
    title: "Data Engineering Intern",
    company: "Nineleaps",
    location: "Bengaluru",
    period: "Feb 2023 – Sep 2023",
    color: "#FBBF24",
    highlights: [
      "Built data ingestion pipelines processing millions of records",
      "Created Tableau & Power BI dashboards for decision-making",
      "Optimized SQL queries — 50% improvement in reporting",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "NicheSolv",
    location: "Bengaluru",
    period: "Jun 2022 – Nov 2022",
    color: "#67E8F9",
    highlights: [
      "Developed full-stack applications using modern web technologies",
      "Improved usability through UI/UX experimentation",
    ],
  },
];

const projects = [
  {
    title: "Enterprise Pricing Data Lake",
    desc: "Built and maintained a multi-tenant data lake serving 100+ enterprise clients with real-time pricing analytics, ML-driven insights, and automated data quality checks.",
    tags: ["AWS Glue", "MWAA", "S3", "Spark", "Python"],
    accent: "#6EE7B7",
  },
  {
    title: "Uber Tier-1 Pipeline Platform",
    desc: "Managed 120+ mission-critical datasets at Uber-scale with zero downtime, achieving 99.9%+ reliability across TB-scale ETL workflows.",
    tags: ["Spark", "Hive", "Presto", "Python", "Airflow"],
    accent: "#818CF8",
  },
  {
    title: "Stock Market Prediction Engine",
    desc: "End-to-end ML pipeline for stock price prediction using historical data, feature engineering, and model serving with real-time visualization.",
    tags: ["Python", "ML", "Pandas", "React", "PostgreSQL"],
    accent: "#F472B6",
  },
  {
    title: "Health Management Platform",
    desc: "NestRx — A full-stack health management application with appointment scheduling, health tracking, and data-driven insights dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "REST API"],
    accent: "#FBBF24",
  },
];

const stats = [
  { value: 10, suffix: "+ TB", label: "Data Processed Daily" },
  { value: 120, suffix: "+", label: "Production Datasets" },
  { value: 99.9, suffix: "%", label: "Pipeline Uptime" },
  { value: 30, suffix: "%", label: "Cost Reduction" },
];

const techStack = [
  { category: "Data", items: ["Spark", "Hive", "Presto", "Kafka", "Airflow", "Glue", "Databricks"] },
  { category: "Cloud", items: ["S3", "EMR", "Lambda", "Redshift", "CloudFormation", "DMS"] },
  { category: "Backend", items: ["Python", "Java", "Scala", "SQL", "REST APIs"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "Git", "Linux"] },
  { category: "Analytics", items: ["Tableau", "Power BI", "Machine Learning", "Statistical Analysis"] },
];

// ─── PROJECT VISUALS ─────────────────────────────────
function DataLakeVisual({ color }) {
  return (
    <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="dl1" x1="0" y1="0" x2="400" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="180" fill="url(#dl1)" rx="10" />
      {/* Database icons */}
      <rect x="30" y="40" width="50" height="36" rx="6" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.4" strokeWidth="1" />
      <ellipse cx="55" cy="40" rx="25" ry="7" fill={color} fillOpacity="0.2" stroke={color} strokeOpacity="0.4" strokeWidth="1" />
      <rect x="30" y="100" width="50" height="36" rx="6" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.4" strokeWidth="1" />
      <ellipse cx="55" cy="100" rx="25" ry="7" fill={color} fillOpacity="0.2" stroke={color} strokeOpacity="0.4" strokeWidth="1" />
      {/* Flow arrows */}
      <path d="M85 58 L140 58" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M85 118 L140 98" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      {/* ETL Transform box */}
      <rect x="145" y="55" width="70" height="50" rx="8" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" />
      <text x="180" y="75" fill={color} fontSize="9" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">SPARK</text>
      <text x="180" y="90" fill={color} fontSize="9" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">ETL</text>
      {/* Arrow to data lake */}
      <path d="M220 80 L270 80" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      {/* Data Lake */}
      <path d="M275 45 Q340 30 370 50 Q380 90 340 120 Q310 140 280 120 Q265 95 275 45Z" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" />
      <text x="325" y="78" fill={color} fontSize="10" fontFamily="monospace" textAnchor="middle" fillOpacity="0.7">S3</text>
      <text x="325" y="93" fill={color} fontSize="8" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">DATA LAKE</text>
      {/* Small data dots flowing */}
      {[0,1,2,3,4].map(i => (
        <circle key={i} r="2" fill={color} fillOpacity="0.6">
          <animateMotion dur={`${2 + i * 0.3}s`} repeatCount="indefinite" path="M90 58 L140 60 L215 80 L270 80" />
        </circle>
      ))}
    </svg>
  );
}

function PipelineVisual({ color }) {
  const nodes = [
    { x: 40, y: 45, label: "SRC" },
    { x: 120, y: 30, label: "INGEST" },
    { x: 200, y: 55, label: "PROC" },
    { x: 280, y: 35, label: "STORE" },
    { x: 360, y: 55, label: "SERVE" },
    { x: 120, y: 100, label: "LOG" },
    { x: 200, y: 130, label: "MONITOR" },
    { x: 280, y: 110, label: "ALERT" },
  ];
  const edges = [[0,1],[1,2],[2,3],[3,4],[1,5],[2,6],[3,7],[5,6],[6,7]];
  return (
    <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="pl1" x1="0" y1="0" x2="400" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="180" fill="url(#pl1)" rx="10" />
      {edges.map((e, i) => (
        <line key={i} x1={nodes[e[0]].x} y1={nodes[e[0]].y} x2={nodes[e[1]].x} y2={nodes[e[1]].y}
          stroke={color} strokeOpacity="0.25" strokeWidth="1.5" />
      ))}
      {edges.map((e, i) => (
        <circle key={`d${i}`} r="2.5" fill={color} fillOpacity="0.7">
          <animateMotion dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite"
            path={`M${nodes[e[0]].x} ${nodes[e[0]].y} L${nodes[e[1]].x} ${nodes[e[1]].y}`} />
        </circle>
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="18" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 3} fill={color} fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">{n.label}</text>
        </g>
      ))}
      {/* Uptime badge */}
      <rect x="310" y="140" width="75" height="22" rx="11" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
      <text x="347" y="155" fill={color} fontSize="8" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">99.9% UP</text>
    </svg>
  );
}

function StockVisual({ color }) {
  const candles = [
    { x: 30, o: 100, c: 70, h: 60, l: 110, up: true },
    { x: 58, o: 70, c: 85, h: 60, l: 95, up: false },
    { x: 86, o: 85, c: 60, h: 50, l: 95, up: true },
    { x: 114, o: 60, c: 75, h: 55, l: 85, up: false },
    { x: 142, o: 75, c: 50, h: 40, l: 85, up: true },
    { x: 170, o: 50, c: 55, h: 35, l: 65, up: false },
    { x: 198, o: 55, c: 40, h: 30, l: 65, up: true },
    { x: 226, o: 45, c: 60, h: 35, l: 70, up: false },
    { x: 254, o: 55, c: 35, h: 25, l: 65, up: true },
    { x: 282, o: 40, c: 50, h: 30, l: 60, up: false },
    { x: 310, o: 48, c: 32, h: 22, l: 55, up: true },
    { x: 338, o: 35, c: 42, h: 25, l: 50, up: false },
    { x: 366, o: 38, c: 28, h: 18, l: 48, up: true },
  ];
  return (
    <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="sm1" x1="0" y1="0" x2="400" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="smline" x1="30" y1="100" x2="366" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="180" fill="url(#sm1)" rx="10" />
      {/* Grid lines */}
      {[40, 70, 100, 130].map(y => (
        <line key={y} x1="15" y1={y} x2="390" y2={y} stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
      ))}
      {/* Candlesticks */}
      {candles.map((c, i) => (
        <g key={i}>
          <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.up ? "#6EE7B7" : color} strokeOpacity="0.5" strokeWidth="1" />
          <rect x={c.x - 8} y={Math.min(c.o, c.c)} width="16" height={Math.abs(c.c - c.o)}
            fill={c.up ? "#6EE7B7" : color} fillOpacity={c.up ? 0.3 : 0.2}
            stroke={c.up ? "#6EE7B7" : color} strokeOpacity="0.5" strokeWidth="0.8" rx="2" />
        </g>
      ))}
      {/* MA line */}
      <polyline points="30,90 58,78 86,72 114,70 142,62 170,55 198,48 226,52 254,45 282,45 310,40 338,38 366,33"
        stroke="url(#smline)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" from="0 1000" to="1000 0" dur="3s" fill="freeze" />
      </polyline>
      {/* Prediction zone */}
      <rect x="310" y="10" width="85" height="165" fill={color} fillOpacity="0.04" stroke={color} strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" rx="4" />
      <text x="352" y="165" fill={color} fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">PREDICTED</text>
      {/* ML badge */}
      <rect x="15" y="148" width="60" height="20" rx="10" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
      <text x="45" y="162" fill={color} fontSize="8" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8">ML MODEL</text>
    </svg>
  );
}

function HealthVisual({ color }) {
  return (
    <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="hv1" x1="0" y1="0" x2="400" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="180" fill="url(#hv1)" rx="10" />
      {/* Heart rate line */}
      <polyline points="20,90 50,90 65,90 75,50 85,130 95,90 110,90 140,90 155,90 165,45 175,135 185,90 200,90 230,90"
        stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7">
        <animate attributeName="stroke-dasharray" from="0 600" to="600 0" dur="3s" fill="freeze" />
      </polyline>
      {/* Dashboard panels */}
      <rect x="240" y="20" width="70" height="45" rx="8" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
      <text x="275" y="38" fill={color} fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">HEART RATE</text>
      <text x="275" y="55" fill={color} fontSize="16" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8" fontWeight="bold">72</text>
      <rect x="320" y="20" width="70" height="45" rx="8" fill="#6EE7B7" fillOpacity="0.1" stroke="#6EE7B7" strokeOpacity="0.3" strokeWidth="1" />
      <text x="355" y="38" fill="#6EE7B7" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">BLOOD O2</text>
      <text x="355" y="55" fill="#6EE7B7" fontSize="16" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8" fontWeight="bold">98%</text>
      <rect x="240" y="75" width="70" height="45" rx="8" fill="#818CF8" fillOpacity="0.1" stroke="#818CF8" strokeOpacity="0.3" strokeWidth="1" />
      <text x="275" y="93" fill="#818CF8" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">BP</text>
      <text x="275" y="110" fill="#818CF8" fontSize="13" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8" fontWeight="bold">120/80</text>
      <rect x="320" y="75" width="70" height="45" rx="8" fill="#F472B6" fillOpacity="0.1" stroke="#F472B6" strokeOpacity="0.3" strokeWidth="1" />
      <text x="355" y="93" fill="#F472B6" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">TEMP</text>
      <text x="355" y="110" fill="#F472B6" fontSize="14" fontFamily="monospace" textAnchor="middle" fillOpacity="0.8" fontWeight="bold">98.6°</text>
      {/* Pill icon */}
      <rect x="20" y="120" width="90" height="40" rx="8" fill={color} fillOpacity="0.06" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
      <text x="65" y="137" fill={color} fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">NEXT APPOINTMENT</text>
      <text x="65" y="152" fill={color} fontSize="10" fontFamily="monospace" textAnchor="middle" fillOpacity="0.7">10:30 AM</text>
      {/* Calendar mini */}
      <rect x="130" y="120" width="90" height="40" rx="8" fill="#6EE7B7" fillOpacity="0.06" stroke="#6EE7B7" strokeOpacity="0.2" strokeWidth="1" />
      <text x="175" y="137" fill="#6EE7B7" fontSize="7" fontFamily="monospace" textAnchor="middle" fillOpacity="0.5">MEDICATIONS</text>
      <text x="175" y="152" fill="#6EE7B7" fontSize="10" fontFamily="monospace" textAnchor="middle" fillOpacity="0.7">3 Active</text>
      {/* Cross icon */}
      <rect x="85" y="10" width="3" height="20" rx="1.5" fill={color} fillOpacity="0.2" />
      <rect x="77" y="18" width="19" height="3" rx="1.5" fill={color} fillOpacity="0.2" />
    </svg>
  );
}

const ProjectVisuals = [DataLakeVisual, PipelineVisual, StockVisual, HealthVisual];

// ─── MAIN COMPONENT ──────────────────────────────────
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useSmoothScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // Load LinkedIn Badge Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => { try { document.body.removeChild(script); } catch(e) {} };
  }, []);

  const navItems = ["about", "skills", "experience", "projects", "tech", "contact"];

  return (
    <div style={{ background: "#0A0A0F", color: "#E2E8F0", minHeight: "100vh", fontFamily: "'Sora', 'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        ::selection { background: #818CF880; color: #fff; }

        .nav-link {
          color: #94A3B8; text-decoration: none; font-size: 13px;
          font-weight: 500; letter-spacing: 1.2px; text-transform: uppercase;
          transition: color 0.3s; position: relative; padding: 4px 0;
          font-family: 'JetBrains Mono', monospace;
        }
        .nav-link:hover { color: #E2E8F0; }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1.5px; background: #818CF8;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover::after { width: 100%; }

        .hero-gradient {
          position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
          width: 900px; height: 900px; border-radius: 50%;
          background: radial-gradient(circle, #818CF815 0%, #6EE7B708 40%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .grid-bg {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(#ffffff05 1px, transparent 1px),
            linear-gradient(90deg, #ffffff05 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
        }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 12px; font-weight: 600;
          font-size: 14px; cursor: pointer; transition: all 0.3s;
          text-decoration: none; border: none; font-family: 'Sora', sans-serif;
        }
        .cta-primary {
          background: linear-gradient(135deg, #818CF8, #6366F1);
          color: #fff; box-shadow: 0 4px 24px #818CF840;
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px #818CF860; }
        .cta-secondary {
          background: #ffffff08; color: #CBD5E1;
          border: 1px solid #ffffff15;
        }
        .cta-secondary:hover { background: #ffffff12; border-color: #ffffff25; transform: translateY(-2px); }

        .glass-card {
          background: linear-gradient(135deg, #ffffff08, #ffffff03);
          border: 1px solid #ffffff10;
          border-radius: 16px; padding: 28px;
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
          border-color: #ffffff20; transform: translateY(-4px);
          box-shadow: 0 20px 60px -20px #00000080;
        }

        .skill-chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px; border-radius: 10px;
          background: #ffffff06; border: 1px solid #ffffff10;
          font-size: 13px; color: #CBD5E1; transition: all 0.3s;
          font-family: 'JetBrains Mono', monospace;
        }
        .skill-chip:hover { background: #ffffff12; border-color: #818CF850; color: #E2E8F0; transform: translateY(-2px); }

        .section-label {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          letter-spacing: 3px; text-transform: uppercase; color: #818CF8;
          margin-bottom: 12px; font-weight: 500;
        }
        .section-title {
          font-size: clamp(28px, 5vw, 42px); font-weight: 700;
          color: #F1F5F9; line-height: 1.2; margin-bottom: 20px;
        }

        .timeline-line {
          position: absolute; left: 23px; top: 48px; bottom: 0;
          width: 2px; background: linear-gradient(to bottom, #ffffff15, transparent);
        }

        .tag {
          display: inline-block; padding: 4px 12px; border-radius: 6px;
          font-size: 11px; font-family: 'JetBrains Mono', monospace;
          background: #ffffff08; color: #94A3B8; border: 1px solid #ffffff10;
          letter-spacing: 0.5px;
        }

        .stat-card {
          text-align: center; padding: 32px 20px;
        }

        /* Stats: apply gradient to the actual text node (Counter renders a <span>) */
        .stat-value {
          font-size: clamp(32px, 6vw, 42px);
          font-weight: 800;
          line-height: 1;
          color: #E2E8F0; /* readable fallback */
        }
        .stat-value > span {
          display: inline-block;
          color: #E2E8F0; /* fallback if gradient text isn't supported */
        }
        @supports (-webkit-background-clip: text) {
          .stat-value > span {
            background: linear-gradient(135deg, #818CF8, #6EE7B7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        .stat-label { font-size: 13px; color: #94A3B8; margin-top: 8px; font-weight: 500; }

        .tech-node {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 8px 16px; border-radius: 8px; font-size: 12px;
          font-family: 'JetBrains Mono', monospace;
          background: #ffffff05; border: 1px solid #ffffff10; color: #94A3B8;
          transition: all 0.3s;
        }
        .tech-node:hover { background: #818CF815; border-color: #818CF840; color: #E2E8F0; }

        .photo-glow {
          position: relative;
        }
        .photo-glow::before {
          content: ''; position: absolute; inset: -5px; border-radius: 28px;
          background: linear-gradient(135deg, #818CF8, #6EE7B7, #F472B6, #818CF8);
          background-size: 300% 300%;
          z-index: -1; opacity: 0.7; filter: blur(12px);
          animation: gradient-rotate 6s ease infinite;
        }
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .mobile-menu {
          position: fixed; inset: 0; background: #0A0A0FEE;
          z-index: 100; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 32px;
          backdrop-filter: blur(20px);
        }

        .hamburger { display: none; cursor: pointer; z-index: 101; }
        .hamburger div {
          width: 24px; height: 2px; background: #CBD5E1;
          margin: 6px 0; transition: all 0.3s;
        }

        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse-glow { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }

        .floating { animation: float 6s ease-in-out infinite; }

        input, textarea {
          width: 100%; padding: 14px 18px; border-radius: 12px;
          background: #ffffff06; border: 1px solid #ffffff10;
          color: #E2E8F0; font-size: 14px; font-family: 'Sora', sans-serif;
          outline: none; transition: border-color 0.3s;
        }
        input:focus, textarea:focus { border-color: #818CF850; }
        input::placeholder, textarea::placeholder { color: #475569; }

        @media (max-width: 768px) {
          .hamburger { display: block; }
          .desktop-nav { display: none !important; }
        }
      `}</style>

      {/* ─── NAV ─── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "#0A0A0FCC", backdropFilter: "blur(20px)",
        borderBottom: "1px solid #ffffff08",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "16px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, fontWeight: 700, color: "#F1F5F9", letterSpacing: -0.5 }}>
            <span style={{ color: "#818CF8" }}>V</span>S<span style={{ color: "#64748B", fontSize: 14 }}>.dev</span>
          </div>
          <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {navItems.map((item) => (
              <a key={item} className="nav-link" onClick={() => scrollTo(item)} style={{ cursor: "pointer" }}>
                {item}
              </a>
            ))}
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div style={menuOpen ? { transform: "rotate(45deg) translate(5px,6px)" } : {}} />
            <div style={menuOpen ? { opacity: 0 } : {}} />
            <div style={menuOpen ? { transform: "rotate(-45deg) translate(5px,-6px)" } : {}} />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a key={item} className="nav-link" style={{ fontSize: 20, cursor: "pointer" }}
              onClick={() => { scrollTo(item); setMenuOpen(false); }}>
              {item}
            </a>
          ))}
        </div>
      )}

      {/* ─── HERO ─── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", overflow: "hidden" }}>
        <div className="hero-gradient" />
        <div className="grid-bg" />

        {/* Animated Data Flow Background SVG */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.5 }} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="heroGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Constellation lines */}
          {[[100,150,300,200],[300,200,500,120],[500,120,700,180],[700,180,900,100],[900,100,1100,200],
            [200,400,400,350],[400,350,600,420],[600,420,800,380],[800,380,1000,450],
            [150,600,350,550],[350,550,550,630],[550,630,750,580],[750,580,950,650],[950,650,1100,600],
            [300,200,200,400],[500,120,400,350],[700,180,600,420],[900,100,800,380],[1100,200,1000,450],
            [200,400,150,600],[400,350,350,550],[600,420,550,630],[800,380,750,580],[1000,450,950,650]
          ].map(([x1,y1,x2,y2], i) => (
            <line key={`cl${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#818CF8" strokeOpacity="0.08" strokeWidth="1" />
          ))}
          {/* Animated dots on lines */}
          {[
            {path:"M100 150 L300 200 L500 120 L700 180 L900 100 L1100 200", dur:"8s"},
            {path:"M200 400 L400 350 L600 420 L800 380 L1000 450", dur:"9s"},
            {path:"M150 600 L350 550 L550 630 L750 580 L950 650 L1100 600", dur:"10s"},
            {path:"M300 200 L200 400 L150 600", dur:"6s"},
            {path:"M700 180 L600 420 L550 630", dur:"7s"},
            {path:"M1100 200 L1000 450 L950 650", dur:"8s"},
          ].map((p, i) => (
            <circle key={`ad${i}`} r="2.5" fill={["#818CF8","#6EE7B7","#F472B6","#FBBF24","#67E8F9","#818CF8"][i]} fillOpacity="0.6">
              <animateMotion dur={p.dur} repeatCount="indefinite" path={p.path} />
            </circle>
          ))}
          {/* Constellation nodes */}
          {[[100,150],[300,200],[500,120],[700,180],[900,100],[1100,200],
            [200,400],[400,350],[600,420],[800,380],[1000,450],
            [150,600],[350,550],[550,630],[750,580],[950,650],[1100,600]
          ].map(([cx,cy], i) => (
            <g key={`cn${i}`}>
              <circle cx={cx} cy={cy} r="3" fill="#818CF8" fillOpacity="0.2" />
              <circle cx={cx} cy={cy} r="1.5" fill="#818CF8" fillOpacity="0.5">
                <animate attributeName="fillOpacity" values="0.3;0.7;0.3" dur={`${3+i%4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          {/* Hexagon decorations */}
          {[[80,300,"#818CF8"],[1050,350,"#6EE7B7"],[600,700,"#F472B6"]].map(([x,y,c], i) => (
            <polygon key={`hex${i}`} points={`${x},${y-20} ${x+17},${y-10} ${x+17},${y+10} ${x},${y+20} ${x-17},${y+10} ${x-17},${y-10}`}
              fill="none" stroke={c} strokeOpacity="0.12" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" values={`0 ${x} ${y};360 ${x} ${y}`} dur="30s" repeatCount="indefinite" />
            </polygon>
          ))}
        </svg>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
          <div style={{
            display: "inline-block", padding: "6px 16px", borderRadius: 8,
            background: "#818CF815", border: "1px solid #818CF830",
            fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
            color: "#818CF8", letterSpacing: 1.5, marginBottom: 28,
          }}>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1 style={{
            fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: -2,
            background: "linear-gradient(135deg, #F1F5F9 0%, #94A3B8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", marginBottom: 20,
          }}>
            Vaibhav<br />Shekhar
          </h1>

          <p style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(13px, 2vw, 16px)",
            color: "#64748B", letterSpacing: 2, marginBottom: 24,
          }}>
            DATA ENGINEER · SOFTWARE ENGINEER · SYSTEM BUILDER
          </p>

          <p style={{ fontSize: "clamp(15px, 2.5vw, 18px)", color: "#94A3B8", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px", fontWeight: 300 }}>
            Building scalable data platforms, intelligent systems, and modern applications that power enterprise decisions at scale.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="cta-btn cta-primary" onClick={() => scrollTo("projects")}>
              View Projects <span style={{ fontSize: 18 }}>→</span>
            </button>
            <button className="cta-btn cta-secondary" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </div>

          {/* Stats bar */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 1, marginTop: 80, background: "#ffffff08", borderRadius: 16,
            border: "1px solid #ffffff10", overflow: "hidden",
          }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value"><Counter end={s.value} suffix={s.suffix} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <Section id="about">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.5fr)", gap: 60, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
              <div className="photo-glow" style={{ width: 320, height: 400, borderRadius: 24, overflow: "hidden", position: "relative" }}>
                <img src={PHOTO} alt="Vaibhav Shekhar" style={{
                  width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top",
                  borderRadius: 20, display: "block",
                  filter: "contrast(1.05) brightness(1.05)",
                }} />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                  background: "linear-gradient(transparent, #0A0A0F80)",
                  borderRadius: "0 0 20px 20px", pointerEvents: "none",
                }} />
              </div>
              {/* LinkedIn Badge Embed */}
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="dark"
                data-type="HORIZONTAL"
                data-vanity="vaibhavshekhar293"
                data-version="v1"
                style={{ borderRadius: 12, overflow: "hidden" }}
              />
            </div>
            <div>
              <div className="section-label">// About Me</div>
              <h2 className="section-title">Engineering data systems that drive real business impact.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: 15 }}>
                  I'm a Data & Software Engineer with 3+ years of experience building and operating large-scale data platforms processing <span style={{ color: "#6EE7B7", fontWeight: 600 }}>10+ TB of data daily</span> across enterprise environments. Currently at Syncron, powering pricing analytics for 100+ global clients.
                </p>
                <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: 15 }}>
                  Previously at <span style={{ color: "#818CF8", fontWeight: 600 }}>Uber</span>, where I managed 120+ mission-critical Tier-1 datasets with zero downtime and 99.9%+ pipeline reliability. I'm passionate about building systems that are not just functional, but <span style={{ color: "#F472B6", fontWeight: 600 }}>elegant, scalable, and cost-efficient</span>.
                </p>
                <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: 15 }}>
                  Beyond data engineering, I build full-stack web & mobile applications, and explore AI-driven solutions. I believe great engineering is about ownership — from cloud ingestion to BI visualization.
                </p>
              </div>
              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <span className="tag">Databricks Certified</span>
                <span className="tag">B.Tech CS — GITAM University</span>
                <span className="tag">Bengaluru, India</span>
              </div>
              {/* LinkedIn Badge */}
              <div style={{ marginTop: 24 }}>
                <a href="https://in.linkedin.com/in/vaibhavshekhar293" target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 12,
                    padding: "12px 20px", borderRadius: 12,
                    background: "linear-gradient(135deg, #0A66C210, #0A66C205)",
                    border: "1px solid #0A66C230", textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0A66C260"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#0A66C230"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: 10, color: "#0A66C2", fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, textTransform: "uppercase" }}>LinkedIn Profile</div>
                    <div style={{ fontSize: 14, color: "#CBD5E1", fontWeight: 600 }}>Vaibhav Shekhar</div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── SKILLS ─── */}
      <Section id="skills">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">// Skills & Expertise</div>
            <h2 className="section-title">Tools & technologies I work with</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
            {Object.entries(skills).map(([category, items], catIdx) => (
              <div key={category} className="glass-card">
                {/* Category SVG illustration */}
                <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 14 }}>
                  {catIdx === 0 && (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                      <rect x="1" y="1" width="40" height="40" rx="10" stroke="#6EE7B7" strokeOpacity="0.3" strokeWidth="1" />
                      <rect x="6" y="10" width="12" height="9" rx="2" fill="#6EE7B7" fillOpacity="0.2" stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="0.8" />
                      <rect x="6" y="23" width="12" height="9" rx="2" fill="#6EE7B7" fillOpacity="0.2" stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="0.8" />
                      <path d="M20 14.5H26L30 21L26 27.5H20" stroke="#6EE7B7" strokeOpacity="0.6" strokeWidth="1" fill="none" />
                      <rect x="32" y="16" width="5" height="10" rx="2" fill="#6EE7B7" fillOpacity="0.3" />
                      <circle cx="22" cy="14.5" r="1.5" fill="#6EE7B7" fillOpacity="0.6">
                        <animate attributeName="fillOpacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="22" cy="27.5" r="1.5" fill="#6EE7B7" fillOpacity="0.6">
                        <animate attributeName="fillOpacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                  {catIdx === 1 && (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                      <rect x="1" y="1" width="40" height="40" rx="10" stroke="#818CF8" strokeOpacity="0.3" strokeWidth="1" />
                      <circle cx="14" cy="14" r="5" fill="#818CF8" fillOpacity="0.15" stroke="#818CF8" strokeOpacity="0.5" strokeWidth="0.8" />
                      <circle cx="28" cy="14" r="5" fill="#818CF8" fillOpacity="0.15" stroke="#818CF8" strokeOpacity="0.5" strokeWidth="0.8" />
                      <circle cx="21" cy="28" r="5" fill="#818CF8" fillOpacity="0.15" stroke="#818CF8" strokeOpacity="0.5" strokeWidth="0.8" />
                      <line x1="17" y1="17" x2="19" y2="24" stroke="#818CF8" strokeOpacity="0.4" strokeWidth="0.8" />
                      <line x1="25" y1="17" x2="23" y2="24" stroke="#818CF8" strokeOpacity="0.4" strokeWidth="0.8" />
                      <line x1="19" y1="14" x2="23" y2="14" stroke="#818CF8" strokeOpacity="0.4" strokeWidth="0.8" />
                      <text x="14" y="16" fontSize="5" fill="#818CF8" fillOpacity="0.7" textAnchor="middle" fontFamily="monospace">API</text>
                      <text x="28" y="16" fontSize="5" fill="#818CF8" fillOpacity="0.7" textAnchor="middle" fontFamily="monospace">SVC</text>
                      <text x="21" y="30" fontSize="5" fill="#818CF8" fillOpacity="0.7" textAnchor="middle" fontFamily="monospace">DB</text>
                      <circle cx="21" cy="21" r="1" fill="#818CF8" fillOpacity="0.8">
                        <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                  {catIdx === 2 && (
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                      <rect x="1" y="1" width="40" height="40" rx="10" stroke="#F472B6" strokeOpacity="0.3" strokeWidth="1" />
                      <rect x="7" y="8" width="28" height="18" rx="3" fill="#F472B6" fillOpacity="0.08" stroke="#F472B6" strokeOpacity="0.4" strokeWidth="0.8" />
                      <line x1="7" y1="13" x2="35" y2="13" stroke="#F472B6" strokeOpacity="0.3" strokeWidth="0.5" />
                      <circle cx="10" cy="10.5" r="1" fill="#FF6B6B" fillOpacity="0.6" />
                      <circle cx="13.5" cy="10.5" r="1" fill="#FBBF24" fillOpacity="0.6" />
                      <circle cx="17" cy="10.5" r="1" fill="#6EE7B7" fillOpacity="0.6" />
                      <text x="10" y="19" fontSize="3.5" fill="#F472B6" fillOpacity="0.7" fontFamily="monospace">{"<div>"}</text>
                      <text x="12" y="23" fontSize="3.5" fill="#67E8F9" fillOpacity="0.6" fontFamily="monospace">{"<App/>"}</text>
                      <rect x="14" y="30" width="14" height="4" rx="2" fill="#F472B6" fillOpacity="0.15" stroke="#F472B6" strokeOpacity="0.3" strokeWidth="0.5" />
                      <line x1="21" y1="26" x2="21" y2="30" stroke="#F472B6" strokeOpacity="0.3" strokeWidth="0.5" />
                    </svg>
                  )}
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#F1F5F9", fontFamily: "'JetBrains Mono', monospace" }}>
                    {category}
                  </h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {items.map((s) => (
                    <div key={s.name} className="skill-chip">
                      <span style={{ opacity: 0.5 }}>{s.icon}</span> {s.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── EXPERIENCE ─── */}
      <Section id="experience">
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">// Experience</div>
            <h2 className="section-title">Where I've built & shipped</h2>
            {/* Career journey SVG */}
            <div style={{ maxWidth: 500, margin: "0 auto 10px", opacity: 0.5 }}>
              <svg viewBox="0 0 500 50" fill="none" style={{ width: "100%" }}>
                <line x1="30" y1="25" x2="470" y2="25" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />
                {[
                  { x: 60, yr: "'22", c: "#67E8F9" },
                  { x: 150, yr: "'23", c: "#FBBF24" },
                  { x: 260, yr: "'24", c: "#F472B6" },
                  { x: 360, yr: "'24-25", c: "#818CF8" },
                  { x: 450, yr: "'25+", c: "#6EE7B7" },
                ].map((n, i) => (
                  <g key={i}>
                    <circle cx={n.x} cy="25" r="8" fill={n.c} fillOpacity="0.1" stroke={n.c} strokeOpacity="0.4" strokeWidth="1.5" />
                    <circle cx={n.x} cy="25" r="3" fill={n.c} fillOpacity="0.6">
                      <animate attributeName="fillOpacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                    <text x={n.x} y="44" fontSize="7" fill={n.c} fillOpacity="0.6" textAnchor="middle" fontFamily="monospace">{n.yr}</text>
                  </g>
                ))}
                {/* Traveling dot */}
                <circle r="2.5" fill="#818CF8" fillOpacity="0.8">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M30 25 L470 25" />
                </circle>
              </svg>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {experience.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: 28, marginBottom: 48, position: "relative" }}>
                {/* Timeline dot */}
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: "50%",
                    background: exp.color, boxShadow: `0 0 20px ${exp.color}40`,
                    marginTop: 6,
                  }} />
                  {i < experience.length - 1 && (
                    <div style={{ width: 2, flexGrow: 1, background: "#ffffff10", marginTop: 8 }} />
                  )}
                </div>
                {/* Content */}
                <div className="glass-card" style={{ flex: 1, padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: "#F1F5F9" }}>{exp.title}</h3>
                      <p style={{ fontSize: 14, color: exp.color, fontWeight: 500 }}>{exp.company}</p>
                    </div>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                      color: "#64748B", padding: "4px 10px", borderRadius: 6,
                      background: "#ffffff06", border: "1px solid #ffffff08",
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ fontSize: 13.5, color: "#94A3B8", lineHeight: 1.6, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: exp.color, fontSize: 10 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── PROJECTS ─── */}
      <Section id="projects">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">// Featured Projects</div>
            <h2 className="section-title">Things I've built</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {projects.map((p, i) => {
              const Visual = ProjectVisuals[i];
              return (
              <div key={i} className="glass-card" style={{ display: "flex", flexDirection: "column" }}>
                {/* Project visual */}
                <div style={{
                  height: 180, borderRadius: 10, marginBottom: 20,
                  overflow: "hidden",
                }}>
                  <Visual color={p.accent} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#F1F5F9", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: "#94A3B8", lineHeight: 1.7, marginBottom: 16, flexGrow: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map((t) => (
                    <span key={t} className="tag" style={{ borderColor: `${p.accent}30`, color: p.accent }}>{t}</span>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ─── TECH STACK ─── */}
      <Section id="tech">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">// Tech Stack</div>
            <h2 className="section-title">My engineering toolkit</h2>
            {/* Animated tech network SVG */}
            <div style={{ maxWidth: 600, margin: "0 auto 20px", opacity: 0.6 }}>
              <svg viewBox="0 0 600 80" fill="none" style={{ width: "100%" }}>
                {/* Central bus line */}
                <line x1="50" y1="40" x2="550" y2="40" stroke="#818CF8" strokeOpacity="0.15" strokeWidth="1" />
                {/* Tech nodes along the bus */}
                {[
                  { x: 80, label: "Python", c: "#6EE7B7" },
                  { x: 150, label: "Spark", c: "#F472B6" },
                  { x: 220, label: "AWS", c: "#FBBF24" },
                  { x: 290, label: "Docker", c: "#67E8F9" },
                  { x: 360, label: "SQL", c: "#818CF8" },
                  { x: 430, label: "React", c: "#6EE7B7" },
                  { x: 500, label: "K8s", c: "#F472B6" },
                ].map((n, i) => (
                  <g key={i}>
                    <line x1={n.x} y1="40" x2={n.x} y2={i % 2 === 0 ? 18 : 62} stroke={n.c} strokeOpacity="0.3" strokeWidth="1" />
                    <circle cx={n.x} cy={i % 2 === 0 ? 14 : 66} r="10" fill={n.c} fillOpacity="0.08" stroke={n.c} strokeOpacity="0.35" strokeWidth="1" />
                    <text x={n.x} y={i % 2 === 0 ? 17 : 69} fontSize="6" fill={n.c} fillOpacity="0.7" textAnchor="middle" fontFamily="monospace">{n.label}</text>
                    <circle cx={n.x} cy="40" r="3" fill={n.c} fillOpacity="0.4">
                      <animate attributeName="fillOpacity" values="0.2;0.6;0.2" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
                {/* Traveling data packet */}
                <circle r="3" fill="#818CF8" fillOpacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M50 40 L550 40" />
                </circle>
                <circle r="3" fill="#6EE7B7" fillOpacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M550 40 L50 40" />
                </circle>
              </svg>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {techStack.map((cat, catIdx) => (
              <div key={cat.category} className="glass-card" style={{ textAlign: "center" }}>
                {/* Category SVG icon */}
                <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}>
                  {catIdx === 0 && (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect x="4" y="8" width="10" height="7" rx="2" fill="#6EE7B7" fillOpacity="0.2" stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="0.8" />
                      <rect x="4" y="19" width="10" height="7" rx="2" fill="#6EE7B7" fillOpacity="0.2" stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="0.8" />
                      <path d="M16 11.5H20L24 18L20 24.5H16" stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="1" fill="none" />
                      <rect x="26" y="14" width="6" height="8" rx="2" fill="#6EE7B7" fillOpacity="0.3" />
                      <circle r="1.5" fill="#6EE7B7" fillOpacity="0.7"><animateMotion dur="2s" repeatCount="indefinite" path="M9 15 L20 18 L26 18" /></circle>
                    </svg>
                  )}
                  {catIdx === 1 && (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8 26L14 12L20 22L26 8L32 18" stroke="#818CF8" strokeOpacity="0.5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      <path d="M8 26L14 12L20 22L26 8L32 18L32 30L8 30Z" fill="#818CF8" fillOpacity="0.05" />
                      <circle cx="14" cy="12" r="2" fill="#818CF8" fillOpacity="0.4" />
                      <circle cx="26" cy="8" r="2" fill="#818CF8" fillOpacity="0.4" />
                    </svg>
                  )}
                  {catIdx === 2 && (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <text x="18" y="18" fontSize="8" fill="#F472B6" fillOpacity="0.7" textAnchor="middle" fontFamily="monospace">{"{ }"}</text>
                      <rect x="5" y="5" width="26" height="26" rx="6" fill="none" stroke="#F472B6" strokeOpacity="0.3" strokeWidth="1" />
                      <line x1="5" y1="11" x2="31" y2="11" stroke="#F472B6" strokeOpacity="0.15" strokeWidth="0.5" />
                      <text x="18" y="26" fontSize="5" fill="#F472B6" fillOpacity="0.5" textAnchor="middle" fontFamily="monospace">backend</text>
                    </svg>
                  )}
                  {catIdx === 3 && (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect x="6" y="6" width="24" height="16" rx="3" fill="#FBBF24" fillOpacity="0.08" stroke="#FBBF24" strokeOpacity="0.3" strokeWidth="1" />
                      <text x="18" y="17" fontSize="6" fill="#FBBF24" fillOpacity="0.6" textAnchor="middle" fontFamily="monospace">$_</text>
                      <line x1="12" y1="26" x2="24" y2="26" stroke="#FBBF24" strokeOpacity="0.3" strokeWidth="1" />
                      <line x1="14" y1="29" x2="22" y2="29" stroke="#FBBF24" strokeOpacity="0.2" strokeWidth="0.8" />
                      <circle cx="18" cy="17" r="10" fill="none" stroke="#FBBF24" strokeOpacity="0.1" strokeWidth="0.5">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 17" to="360 18 17" dur="15s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                  {catIdx === 4 && (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect x="10" y="8" width="16" height="12" rx="2" fill="#67E8F9" fillOpacity="0.1" stroke="#67E8F9" strokeOpacity="0.3" strokeWidth="1" />
                      <rect x="6" y="24" width="10" height="6" rx="1.5" fill="#67E8F9" fillOpacity="0.1" stroke="#67E8F9" strokeOpacity="0.25" strokeWidth="0.8" />
                      <rect x="20" y="24" width="10" height="6" rx="1.5" fill="#67E8F9" fillOpacity="0.1" stroke="#67E8F9" strokeOpacity="0.25" strokeWidth="0.8" />
                      <line x1="11" y1="20" x2="11" y2="24" stroke="#67E8F9" strokeOpacity="0.3" strokeWidth="0.8" />
                      <line x1="25" y1="20" x2="25" y2="24" stroke="#67E8F9" strokeOpacity="0.3" strokeWidth="0.8" />
                      <line x1="18" y1="12" x2="18" y2="15" stroke="#67E8F9" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="18" cy="11" r="1" fill="#67E8F9" fillOpacity="0.6">
                        <animate attributeName="fillOpacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                </div>
                <h4 style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  letterSpacing: 2, textTransform: "uppercase", color: "#818CF8",
                  marginBottom: 16,
                }}>
                  {cat.category}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                  {cat.items.map((item) => (
                    <span key={item} className="tech-node">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CERTIFICATIONS ─── */}
      <Section id="certifications">
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">// Achievements</div>
            <h2 className="section-title">Certifications & Milestones</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { id: "cert", title: "Databricks Certified", sub: "Data Engineer Associate", color: "#FF3621" },
              { id: "award", title: "6× Award Winner", sub: "'Feather on the Hat' at Uber", color: "#FBBF24" },
              { id: "promo", title: "Skip-Level Promotion", sub: "MTS II → SDE I at Uber", color: "#818CF8" },
              { id: "uptime", title: "Zero Downtime", sub: "120+ Tier-1 production datasets", color: "#6EE7B7" },
            ].map((a, i) => (
              <div key={i} className="glass-card" style={{ textAlign: "center", padding: 32 }}>
                <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
                  {a.id === "cert" && (
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="22" r="16" fill={a.color} fillOpacity="0.08" stroke={a.color} strokeOpacity="0.4" strokeWidth="1.5" />
                      <path d="M20 22L26 28L36 16" stroke={a.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
                      <path d="M22 36L28 42L34 36" stroke={a.color} strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
                      <line x1="22" y1="36" x2="22" y2="28" stroke={a.color} strokeOpacity="0.3" strokeWidth="1.5" />
                      <line x1="34" y1="36" x2="34" y2="28" stroke={a.color} strokeOpacity="0.3" strokeWidth="1.5" />
                      <circle cx="28" cy="22" r="10" fill="none" stroke={a.color} strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 2">
                        <animateTransform attributeName="transform" type="rotate" from="0 28 22" to="360 28 22" dur="20s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                  {a.id === "award" && (
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <polygon points="28,6 32,18 44,18 34,26 38,38 28,30 18,38 22,26 12,18 24,18" fill={a.color} fillOpacity="0.12" stroke={a.color} strokeOpacity="0.5" strokeWidth="1.5" />
                      <circle cx="28" cy="22" r="6" fill={a.color} fillOpacity="0.15" stroke={a.color} strokeOpacity="0.3" strokeWidth="1" />
                      <text x="28" y="25" fontSize="8" fill={a.color} fillOpacity="0.8" textAnchor="middle" fontWeight="bold" fontFamily="monospace">6×</text>
                      <line x1="22" y1="42" x2="28" y2="48" stroke={a.color} strokeOpacity="0.3" strokeWidth="1.5" />
                      <line x1="34" y1="42" x2="28" y2="48" stroke={a.color} strokeOpacity="0.3" strokeWidth="1.5" />
                      <circle cx="28" cy="22" r="16" fill="none" stroke={a.color} strokeOpacity="0.1" strokeWidth="1">
                        <animate attributeName="r" values="16;18;16" dur="3s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                  {a.id === "promo" && (
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <rect x="10" y="10" width="36" height="36" rx="8" fill={a.color} fillOpacity="0.06" stroke={a.color} strokeOpacity="0.3" strokeWidth="1" />
                      <path d="M20 36L28 16L36 36" stroke={a.color} strokeOpacity="0.6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="23" y1="28" x2="33" y2="28" stroke={a.color} strokeOpacity="0.4" strokeWidth="1.5" />
                      <polygon points="28,10 31,16 25,16" fill={a.color} fillOpacity="0.5">
                        <animate attributeName="fillOpacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                      </polygon>
                      <path d="M16 40L20 36" stroke={a.color} strokeOpacity="0.2" strokeWidth="1" />
                      <path d="M40 40L36 36" stroke={a.color} strokeOpacity="0.2" strokeWidth="1" />
                    </svg>
                  )}
                  {a.id === "uptime" && (
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="20" fill={a.color} fillOpacity="0.06" stroke={a.color} strokeOpacity="0.3" strokeWidth="1" />
                      <path d="M16 28C16 28 20 18 28 18C36 18 40 28 40 28C40 28 36 38 28 38C20 38 16 28 16 28Z" fill="none" stroke={a.color} strokeOpacity="0.5" strokeWidth="1.5">
                        <animate attributeName="strokeOpacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                      </path>
                      <path d="M40 28C40 28 36 18 28 18C20 18 16 28 16 28" fill="none" stroke={a.color} strokeOpacity="0.2" strokeWidth="1" transform="rotate(90 28 28)" />
                      <circle cx="28" cy="28" r="3" fill={a.color} fillOpacity="0.4">
                        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="28" y="49" fontSize="6" fill={a.color} fillOpacity="0.6" textAnchor="middle" fontFamily="monospace">∞ UPTIME</text>
                    </svg>
                  )}
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: "#F1F5F9", marginBottom: 6 }}>{a.title}</h4>
                <p style={{ fontSize: 13, color: "#64748B" }}>{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CONTACT ─── */}
      <Section id="contact">
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
          <div className="section-label">// Get in Touch</div>
          <h2 className="section-title">Let's build something impactful together.</h2>
          {/* Decorative connection SVG */}
          <div style={{ maxWidth: 300, margin: "0 auto 32px", opacity: 0.5 }}>
            <svg viewBox="0 0 300 60" fill="none" style={{ width: "100%" }}>
              {/* Mail envelope */}
              <rect x="120" y="10" width="60" height="40" rx="6" fill="#818CF8" fillOpacity="0.08" stroke="#818CF8" strokeOpacity="0.4" strokeWidth="1" />
              <polyline points="120,14 150,32 180,14" stroke="#818CF8" strokeOpacity="0.4" strokeWidth="1" fill="none" />
              {/* Left connection lines */}
              <line x1="30" y1="20" x2="115" y2="25" stroke="#6EE7B7" strokeOpacity="0.2" strokeWidth="1" />
              <line x1="50" y1="45" x2="115" y2="35" stroke="#F472B6" strokeOpacity="0.2" strokeWidth="1" />
              <circle cx="30" cy="20" r="6" fill="#6EE7B7" fillOpacity="0.1" stroke="#6EE7B7" strokeOpacity="0.3" strokeWidth="1" />
              <circle cx="50" cy="45" r="6" fill="#F472B6" fillOpacity="0.1" stroke="#F472B6" strokeOpacity="0.3" strokeWidth="1" />
              {/* Right connection lines */}
              <line x1="185" y1="25" x2="260" y2="18" stroke="#FBBF24" strokeOpacity="0.2" strokeWidth="1" />
              <line x1="185" y1="35" x2="245" y2="48" stroke="#67E8F9" strokeOpacity="0.2" strokeWidth="1" />
              <circle cx="260" cy="18" r="6" fill="#FBBF24" fillOpacity="0.1" stroke="#FBBF24" strokeOpacity="0.3" strokeWidth="1" />
              <circle cx="245" cy="48" r="6" fill="#67E8F9" fillOpacity="0.1" stroke="#67E8F9" strokeOpacity="0.3" strokeWidth="1" />
              {/* Pulsing center */}
              <circle cx="150" cy="30" r="4" fill="#818CF8" fillOpacity="0.3">
                <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="fillOpacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Signal arcs */}
              {[8,14,20].map((r,i) => (
                <circle key={i} cx="150" cy="30" r={r} fill="none" stroke="#818CF8" strokeOpacity={0.15 - i*0.04} strokeWidth="0.5">
                  <animate attributeName="r" values={`${r};${r+4};${r}`} dur={`${2+i*0.5}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
          </div>
          <p style={{ color: "#94A3B8", fontSize: 15, marginBottom: 40, lineHeight: 1.7 }}>
            Open to exciting opportunities in Data Engineering, Software Engineering, and building scalable systems. Let's connect.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <textarea placeholder="Your Message" rows={5} style={{ resize: "vertical" }} />
            <button className="cta-btn cta-primary" style={{ alignSelf: "center", marginTop: 8 }}>
              Send Message <span style={{ fontSize: 18 }}>→</span>
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Email", value: "shekharvaibhav57@gmail.com", href: "mailto:shekharvaibhav57@gmail.com",
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="3"/><polyline points="2,6 12,14 22,6"/></svg>
              },
              { label: "LinkedIn", value: "vaibhavshekhar293", href: "https://linkedin.com/in/vaibhavshekhar293",
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              },
              { label: "Phone", value: "+91 7389452289", href: "tel:+917389452289",
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                style={{
                  textDecoration: "none", padding: "14px 24px", borderRadius: 12,
                  background: "#ffffff06", border: "1px solid #ffffff10",
                  display: "flex", alignItems: "center", gap: 12,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#818CF850"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ffffff10"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {c.icon}
                <div style={{ textAlign: "left" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#64748B", display: "block" }}>{c.label}</span>
                  <span style={{ fontSize: 13, color: "#CBD5E1" }}>{c.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        borderTop: "1px solid #ffffff08", padding: "32px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: "#475569" }}>
            © 2025 Vaibhav Shekhar
          </div>
          <div style={{ fontSize: 13, color: "#334155" }}>
            Built with ❤️ & Engineering mindset
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="https://linkedin.com/in/vaibhavshekhar293" target="_blank" rel="noopener noreferrer" style={{ color: "#64748B", transition: "color 0.3s", display: "flex" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#0A66C2"} onMouseLeave={(e) => e.currentTarget.style.color = "#64748B"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" style={{ color: "#64748B", transition: "color 0.3s", display: "flex" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#E2E8F0"} onMouseLeave={(e) => e.currentTarget.style.color = "#64748B"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="mailto:shekharvaibhav57@gmail.com" style={{ color: "#64748B", transition: "color 0.3s", display: "flex" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#818CF8"} onMouseLeave={(e) => e.currentTarget.style.color = "#64748B"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="3"/><polyline points="2,6 12,14 22,6"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
