"use client";

import { motion } from "motion/react";
import type { ComponentType } from "react";
import {
  AgentCard,
  AiCluster,
  AwardBadges,
  BankIcon,
  BarChartIcon,
  BrainIcon,
  CheckIcon,
  DeterministicIcon,
  FacebookIcon,
  FinanceImage,
  GovernanceIcon,
  GovernanceShot,
  LinkedInIcon,
  Logo,
  MCPConnectivityIcon,
  OneStreamMark,
  Orb,
  PlayIcon,
  PlusIcon,
  MinusIcon,
  ResourceCardDark,
  SearchIcon,
  SemanticIcon,
  SparkleIcon,
  TraceabilityIcon,
  TwitterIcon,
  UnifiedDataIcon,
  YouTubeIcon,
} from "./graphics";
import { FaqAccordion, Reveal, StaggerGroup, StaggerItem } from "./motion";

const NAV_ITEMS = ["Solutions", "Industries", "Platform", "Customers", "Resources", "Partners", "About"];

const DIFFERENTIATORS = [
  {
    icon: <BarChartIcon />,
    title: "Built on Financial Truth",
    body: "Agents execute on OneStream's financial close, planning, and reporting engines. Every result is precise, consistent, and grounded in the same data and business context your team already trusts.",
  },
  {
    icon: <BrainIcon />,
    title: "With Financial Intelligence",
    body: "Financial intelligence powers the Agentic Layer, translating natural language into precise financial context across your hierarchies and data. Built on OneStream's core engines, it runs in Finance workflows with full governance and auditability.",
  },
  {
    icon: <BankIcon />,
    title: "Available Where Finance Works",
    body: "SensibleAI Agents work in OneStream and Excel. The same agentic layer extends governed access to Copilot, Claude, ChatGPT and other MCP-compatible tools.",
  },
];

const AGENTS = [
  {
    title: "Finance Analyst",
    eyebrow: "Analysis and reporting, done for you",
    intro:
      "Ask in plain language. Get answers grounded in your financial model.",
    sections: [
      {
        heading: "What it does:",
        items: [
          "Variance and root cause analysis",
          "Anomaly detection",
          "Fully auditable outputs",
        ],
      },
      {
        heading: "Use it to:",
        items: [
          "Explain actuals vs. plan",
          "Investigate cost drivers",
          { strong: "For the CFO:", text: " Board-ready insights" },
          { strong: "For the CAO:", text: " Traceable calculations" },
          { strong: "For Finance IT:", text: " No new infrastructure" },
        ],
      },
    ],
    card: {
      accent: "#a884ff",
      footer: "FINANCIAL INSIGHTS ACCURACY",
      tone: "purple" as const,
    },
  },
  {
    title: "Search",
    eyebrow: "Instant finance knowledge",
    intro:
      "Find trusted answers across policies and documentation.",
    sections: [
      {
        heading: "What it does:",
        items: [
          "Search finance content",
          "Reduce reliance on experts",
        ],
      },
      {
        heading: "Use it to:",
        items: [
          "Find policies fast",
          "Support onboarding",
          { strong: "For the CAO:", text: " Access governing policies" },
          { strong: "For Finance IT:", text: " Fewer support tickets" },
        ],
      },
    ],
    card: {
      accent: "#f5d04a",
      footer: "SPEED & SELF-SERVICE PRODUCTIVITY",
      tone: "yellow" as const,
    },
    reverse: true,
  },
  {
    title: "Deep Analysis",
    eyebrow: "Document intelligence at scale",
    intro:
      "Turn documents into structured financial insight.",
    sections: [
      {
        heading: "What it does:",
        items: [
          "Analyze large document sets",
          "Extract key terms",
        ],
      },
      {
        heading: "Use it to:",
        items: [
          "Review contracts",
          "Support compliance",
          { strong: "For the CFO:", text: " Faster document-driven decisions" },
          { strong: "For the CAO:", text: " Less manual review" },
        ],
      },
    ],
    card: {
      accent: "#7b9bff",
      tone: "blue" as const,
    },
  },
  {
    title: "Forecast",
    eyebrow: "On-demand forecast insights",
    intro:
      "Ask questions and get instant, explainable answers.",
    sections: [
      {
        heading: "What it does:",
        items: [
          "Highlight gaps and risks",
          "Break down drivers",
        ],
      },
      {
        heading: "Use it to:",
        items: [
          "Prepare for reviews",
          "Compare scenarios",
          { strong: "For the CFO:", text: " Walk in with answers" },
          { strong: "For the CAO:", text: " Defensible forecasts" },
          { strong: "For Finance IT:", text: " No BI setup" },
        ],
      },
    ],
    card: {
      label: "Forecast Agent",
      accent: "#7fdca9",
      footer: "FORECAST POWER REAL-TIME INSIGHT",
      tone: "green" as const,
    },
    reverse: true,
  },
];

const GOVERNANCE: Array<{ title: string; body: string; Icon: ComponentType }> = [
  {
    title: "Unified data model",
    body: "One version of truth across close, planning, consolidation, and reporting.",
    Icon: UnifiedDataIcon,
  },
  {
    title: "Semantic understanding",
    body: "Translates business language into precise financial context across your data, no need to know the underlying model.",
    Icon: SemanticIcon,
  },
  {
    title: "Deterministic computation",
    body: "No guessing. Agents execute on OneStream's financial engines with precision and consistency.",
    Icon: DeterministicIcon,
  },
  {
    title: "MCP connectivity",
    body: "Securely connects governed data, logic, and tools to the AI platforms your team already uses.",
    Icon: MCPConnectivityIcon,
  },
  {
    title: "Automated governance",
    body: "Applies RBAC, period locks, approvals, and audit logging to every action, automatically.",
    Icon: GovernanceIcon,
  },
  {
    title: "Full traceability",
    body: "Every query and workflow is fully audited and traceable, native or third party.",
    Icon: TraceabilityIcon,
  },
];

const DRIVING_CARDS = [
  { title: "SensibleAI™ Studio", cta: "VIEW SOLUTION", image: "/assets/resource-studio.jpg" },
  { title: "SensibleAI Account Reconciliations", cta: "VIEW SOLUTION", image: "/assets/resource-recon.jpg" },
  { title: "AI Planning & Forecasting", cta: "VIEW SOLUTION", image: "/assets/resource-forecast.jpg" },
  { title: "SensibleAI™ Clustering Analysis", cta: "VIEW SOLUTION", image: "/assets/resource-genesis.png" },
];

const CUSTOMER_LOGOS = [
  "AutoNation",
  "BDO",
  "Carhartt",
  "Henry Schein",
  "Polaris",
  "Sun Life",
];

const CUSTOMER_STORIES = [
  {
    name: "Stake Center Locating",
    quote:
      "OneStream gives us a single, governed source of truth so finance can move from monthly close to forward-looking analysis.",
  },
  {
    name: "Endeavor",
    quote:
      "With SensibleAI Agents, our team gets answers grounded in our financial model, not generic guesses.",
  },
];

const FAQS = [
  {
    q: "What is MCP, and why does it matter for finance?",
    a: "MCP (Model Context Protocol) is an open standard that lets AI agents securely connect to external systems. Think of it as a universal adapter. Instead of building custom integrations for every AI tool your team uses, OneStream's MCP connection gives any compatible agent governed access to your financial data, logic, and tools. One connection. Every agent. Full governance.",
    open: true,
  },
  {
    q: "Do I need to replace the AI tools my team already uses?",
    a: "No. That's the point. Your team can keep using ChatGPT, Claude, Copilot, or any MCP-compatible tool they already rely on. OneStream's Finance agentic layer gives those tools the financial context and governance they're missing today. You're not replacing your AI stack. You're giving it a governed financial backbone.",
  },
  {
    q: "How is this different from asking ChatGPT a finance question?",
    a: "General-purpose AI tools are powerful, but they don't know your chart of accounts, your hierarchies, your business rules, or which numbers are final. They generate probable answers. OneStream agents execute deterministic calculations on your actual financial data. The difference is the difference between \"this looks about right\" and \"here's the auditable answer with full traceability.\"",
  },
  {
    q: "Is my financial data used to train AI models?",
    a: "No. Your data stays within your governed OneStream environment. It is not used to train any external AI models. When third-party agents connect through MCP, they receive governed outputs. Your underlying data never leaves the platform.",
  },
  {
    q: 'What does "long-running agent" mean?',
    a: "Most AI agents respond to a single prompt and stop. SensibleAI Agents like Finance Analyst can run complex, multi-step analysis workflows on a schedule in the background. Set it up once, and results are ready when you need them. Think of it as an analyst who works overnight so the answers are on your desk in the morning.",
  },
  {
    q: "Who controls what the agents can access?",
    a: "Your existing OneStream administrators. Every agent interaction, native or third-party, inherits the same role-based access controls, period locks, and approval gates your team already manages. No separate security model to configure. No reliance on the AI model to self-govern. If a user doesn't have access to a data set in OneStream, neither does their agent.",
  },
  {
    q: "Do I need technical skills to use SensibleAI Agents?",
    a: "No. Agents are designed for Finance professionals, not data scientists. Ask questions in plain business language. \"What drove the variance in EMEA operating expenses last quarter?\" Finance Analyst understands the financial context and returns a grounded, auditable answer. No SQL. No code. No dashboard configuration.",
  },
  {
    q: "How do agents work in Excel?",
    a: "SensibleAI Agents are available directly in Excel, so your team can access financial analysis, forecasts, and search results without leaving the spreadsheet. The same governance, auditability, and deterministic computation apply whether the agent runs inside OneStream or in Excel.",
  },
  {
    q: "Can I audit what agents do?",
    a: "Yes. Every query, every workflow execution, and every output is logged with a complete audit trail. This applies to native SensibleAI Agents and third-party agents connecting through MCP. Full traceability is not optional. It's built into every interaction by default.",
  },
  {
    q: "How do I get started?",
    a: "Request a demo and our team will walk you through SensibleAI Agents and the finance agentic layer in the context of your environment. Whether you want to start with a single agent or connect your existing AI tools through MCP, we'll help you find the fastest path to value.",
  },
];

const FOOTER_COLS = [
  ["Platform", "Solution Exchange", "Support", "Training"],
  ["Implementation", "Customer Success", "Resources", "Blog"],
  ["Events", "User Groups", "Partners", "News & Press"],
  ["Bug Bounty", "Careers", "Contact Us", "CPM Software"],
];

function ListItem({
  item,
}: {
  item: string | { strong: string; text: string };
}) {
  if (typeof item === "string") {
    return (
      <li>
        <CheckIcon />
        <span>{item}</span>
      </li>
    );
  }
  return (
    <li>
      <CheckIcon />
      <span>
        <strong>{item.strong}</strong>
        {item.text}
      </span>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="nav-wrap">
          <a className="brand" href="#">
            <Logo />
          </a>
          <nav className="primary-nav">
            {NAV_ITEMS.map((item) => (
              <a key={item} href="#">
                {item}
                <span className="caret">▾</span>
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <span className="search">
              <SearchIcon />
              Search
            </span>
            <button className="btn ghost">LOGIN ▾</button>
            <button className="btn dark">DEMO SIGN UP</button>
          </div>
        </div>
      </motion.header>

      <section className="hero">
        <motion.div
          className="hero-grid"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
        />
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] } },
              }}
            >
              Governed Agentic
              <br />
              AI for Finance
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
              }}
            >
              OneStream delivers Finance AI with SensibleAI™ Agents built in or connected to your AI tools of choice. A governed agentic layer adds auditability and financial intelligence across Copilot, Claude, &amp; ChatGPT.
            </motion.p>
            <motion.div
              className="hero-cta-row"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
              }}
            >
              <motion.button
                className="btn light"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                WATCH DEMO
              </motion.button>
              <motion.button
                className="btn ghost-light"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                REQUEST A DEMO
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-video"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.2, 0.7, 0.2, 1], delay: 0.3 }}
          >
            <div className="video-frame">
              <FinanceImage variant="video" />
              <button className="play-pill">
                <PlayIcon /> Play Video
              </button>
              <span className="watch-label">Watch Demo (4:13)</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="different">
        <div className="section-inner">
          <Reveal as="h2">Why OneStream agents are different</Reveal>
          <StaggerGroup className="diff-grid" amount={0.25}>
            {DIFFERENTIATORS.map((d) => (
              <StaggerItem key={d.title}>
                <article className="diff-card">
                  <div className="diff-icon">{d.icon}</div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="accuracy">
        <div className="section-inner two-col">
          <Reveal>
            <h2>
              80% accurate is 0%
              <br />
              useful in Finance
            </h2>
            <p>Your team already uses AI for analysis, summaries, and research.</p>
            <p>
              But general-purpose tools don&rsquo;t know your chart of accounts, hierarchies, business rules, or which numbers are final. In Finance, answers need to be transparent and defensible.
            </p>
            <p>OneStream fixes that with built-in Finance agents and an agentic layer that extends the same controls to your favorite AI tools.</p>
          </Reveal>
          <Reveal delay={0.15} y={20}>
            <AiCluster />
          </Reveal>
        </div>
      </section>

      <section className="suite">
        <div className="suite-aura" aria-hidden="true" />
        <div className="suite-dots" aria-hidden="true" />
        <div className="suite-rule" aria-hidden="true" />
        <div className="section-inner suite-grid">
          <Reveal y={20}>
            <Orb />
          </Reveal>
          <Reveal delay={0.15}>
            <h2>Finance-first AI agents for real work</h2>
            <p>Introducing 4 specialized SensibleAI Agents.</p>
          </Reveal>
        </div>
      </section>

      {AGENTS.map((agent) => (
        <section className="agent-section" key={agent.title}>
          <div className={`section-inner agent-grid${agent.reverse ? " reverse" : ""}`}>
            <Reveal className="agent-copy">
              <h2>{agent.title}</h2>
              <p className="eyebrow">{agent.eyebrow}</p>
              <p className="lead">{agent.intro}</p>
              {agent.sections.map((sec) => (
                <div className="agent-list" key={sec.heading}>
                  <h3>{sec.heading}</h3>
                  <ul>
                    {sec.items.map((item, i) => (
                      <ListItem key={i} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
            <div className="agent-card-wrap">
              <motion.div
                whileHover={{ y: -6, rotate: -0.5 }}
                transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <AgentCard {...agent.card} />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="governance">
        <div className="governance-dots" aria-hidden="true" />
        <div className="section-inner two-col">
          <Reveal>
            <h2>
              More than agents, a governed
              <br />
              agentic platform for Finance
            </h2>
            <p>
              SensibleAI Agents run on OneStream&rsquo;s Finance agentic layer, the governed foundation for every interaction. The same layer powers Copilot, Claude, ChatGPT, and other tools you already use.
            </p>
            <p>
              Native and third-party agents operate with the same business rules, permissions, and full auditability. OneStream enforces business rules, permissions, and audit trails for every interaction, native or external.
            </p>
            <motion.button
              className="btn dark"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            >
              READ THE BLOG
            </motion.button>
          </Reveal>
          <Reveal delay={0.15} y={20}>
            <GovernanceShot />
          </Reveal>
        </div>
        <StaggerGroup className="section-inner gov-grid" amount={0.2}>
          {GOVERNANCE.map(({ title, body, Icon }) => (
            <StaggerItem key={title}>
              <article>
                <span className="gov-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="customers">
        <div className="section-inner">
          <Reveal as="h2">Join over 1,800+ companies leading finance forward</Reveal>
          <Reveal delay={0.1} y={16}>
            <div className="customer-logos" aria-label="Customer logos">
              {CUSTOMER_LOGOS.map((name) => (
                <span key={name} className="customer-logo">{name}</span>
              ))}
            </div>
          </Reveal>
          <StaggerGroup className="customer-stories" amount={0.2}>
            {CUSTOMER_STORIES.map((story) => (
              <StaggerItem key={story.name}>
                <article className="customer-card">
                  <div className="customer-card-mark">{story.name}</div>
                  <p className="customer-card-quote">{story.quote}</p>
                  <div className="customer-card-meta">
                    <span className="customer-card-name">{story.name}</span>
                    <span className="customer-card-cta">READ THE STORY →</span>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="awards">
        <div className="section-inner">
          <Reveal>
            <div className="awards-eyebrow">
              <span className="line" aria-hidden="true" />
              <span>Industry Recognition</span>
              <span className="line" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal as="h2">The leader in Modern Finance you can trust</Reveal>
          <Reveal delay={0.1} y={16}>
            <AwardBadges />
          </Reveal>
        </div>
      </section>

      <section className="dark-band">
        <div className="darkband-grid" aria-hidden="true" />
        <div className="section-inner">
          <Reveal as="h2">Driving Finance Forward With AI</Reveal>
          <StaggerGroup className="card-row" amount={0.15}>
            {DRIVING_CARDS.map((c) => (
              <StaggerItem key={c.title}>
                <ResourceCardDark {...c} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="faq">
        <div className="section-inner">
          <Reveal as="h2">Frequently asked questions</Reveal>
          <FaqAccordion items={FAQS} PlusIcon={PlusIcon} MinusIcon={MinusIcon} />
        </div>
      </section>

      <section className="take" aria-labelledby="take-heading">
        <div className="take-grid" aria-hidden="true" />
        <div className="take-tick tl" aria-hidden="true" />
        <div className="take-tick tr" aria-hidden="true" />
        <div className="take-tick bl" aria-hidden="true" />
        <div className="take-tick br" aria-hidden="true" />

        <svg
          className="take-flow"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="takeGradL" gradientUnits="userSpaceOnUse" x1="-40" y1="640" x2="800" y2="640">
              <stop offset="0%" stopColor="#a884ff" stopOpacity="0" />
              <stop offset="30%" stopColor="#7b4ed8" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#a884ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#d4bfff" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="takeGradR" gradientUnits="userSpaceOnUse" x1="1640" y1="640" x2="800" y2="640">
              <stop offset="0%" stopColor="#a884ff" stopOpacity="0" />
              <stop offset="30%" stopColor="#7b4ed8" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#a884ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#d4bfff" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="takeGradLsoft" gradientUnits="userSpaceOnUse" x1="-40" y1="640" x2="800" y2="640">
              <stop offset="0%" stopColor="#5a2db0" stopOpacity="0" />
              <stop offset="60%" stopColor="#9670e3" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#d4bfff" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="takeGradRsoft" gradientUnits="userSpaceOnUse" x1="1640" y1="640" x2="800" y2="640">
              <stop offset="0%" stopColor="#5a2db0" stopOpacity="0" />
              <stop offset="60%" stopColor="#9670e3" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#d4bfff" stopOpacity="0.7" />
            </linearGradient>
            <radialGradient id="takeNodeGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#a884ff" stopOpacity="0.55" />
              <stop offset="35%" stopColor="#a884ff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#a884ff" stopOpacity="0" />
            </radialGradient>
            <filter id="takeSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>

            {/* all streams confined to lower band so they stay below the heading + copy + buttons */}
            <path id="takeTL1" d="M -40,580 C 320,585 580,615 800,640" />
            <path id="takeTL2" d="M -40,640 C 320,640 580,640 800,640" />
            <path id="takeTL3" d="M -40,700 C 320,695 580,665 800,640" />
            <path id="takeTL4" d="M -40,760 C 300,745 560,690 800,640" />
            <path id="takeTL5" d="M -40,820 C 280,790 540,710 800,640" />
            <path id="takeTL6" d="M -40,880 C 260,830 520,725 800,640" />
            <path id="takeTR1" d="M 1640,580 C 1280,585 1020,615 800,640" />
            <path id="takeTR2" d="M 1640,640 C 1280,640 1020,640 800,640" />
            <path id="takeTR3" d="M 1640,700 C 1280,695 1020,665 800,640" />
            <path id="takeTR4" d="M 1640,760 C 1300,745 1040,690 800,640" />
            <path id="takeTR5" d="M 1640,820 C 1320,790 1060,710 800,640" />
            <path id="takeTR6" d="M 1640,880 C 1340,830 1080,725 800,640" />
          </defs>

          <line
            x1="0"
            y1="640"
            x2="1600"
            y2="640"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />

          <g fill="none" strokeWidth="1" strokeLinecap="round" opacity="0.55">
            <path d="M -40,580 C 320,585 580,615 800,640" stroke="url(#takeGradLsoft)" className="take-stream slow" />
            <path d="M -40,640 C 320,640 580,640 800,640" stroke="url(#takeGradLsoft)" className="take-stream slow reverse" />
            <path d="M -40,820 C 280,790 540,710 800,640" stroke="url(#takeGradLsoft)" className="take-stream" />
            <path d="M -40,880 C 260,830 520,725 800,640" stroke="url(#takeGradLsoft)" className="take-stream slow" />
            <path d="M 1640,580 C 1280,585 1020,615 800,640" stroke="url(#takeGradRsoft)" className="take-stream slow reverse" />
            <path d="M 1640,640 C 1280,640 1020,640 800,640" stroke="url(#takeGradRsoft)" className="take-stream slow" />
            <path d="M 1640,820 C 1320,790 1060,710 800,640" stroke="url(#takeGradRsoft)" className="take-stream" />
            <path d="M 1640,880 C 1340,830 1080,725 800,640" stroke="url(#takeGradRsoft)" className="take-stream slow reverse" />
          </g>

          <g fill="none" strokeWidth="1.4" strokeLinecap="round">
            <path d="M -40,580 C 320,585 580,615 800,640" stroke="url(#takeGradL)" className="take-stream" />
            <path d="M -40,640 C 320,640 580,640 800,640" stroke="url(#takeGradL)" className="take-stream fast" />
            <path d="M -40,700 C 320,695 580,665 800,640" stroke="url(#takeGradL)" className="take-stream slow" />
            <path d="M -40,760 C 300,745 560,690 800,640" stroke="url(#takeGradL)" className="take-stream" />
            <path d="M -40,820 C 280,790 540,710 800,640" stroke="url(#takeGradL)" className="take-stream fast" />
            <path d="M -40,880 C 260,830 520,725 800,640" stroke="url(#takeGradL)" className="take-stream slow" />
            <path d="M 1640,580 C 1280,585 1020,615 800,640" stroke="url(#takeGradR)" className="take-stream slow" />
            <path d="M 1640,640 C 1280,640 1020,640 800,640" stroke="url(#takeGradR)" className="take-stream" />
            <path d="M 1640,700 C 1280,695 1020,665 800,640" stroke="url(#takeGradR)" className="take-stream fast" />
            <path d="M 1640,760 C 1300,745 1040,690 800,640" stroke="url(#takeGradR)" className="take-stream slow" />
            <path d="M 1640,820 C 1320,790 1060,710 800,640" stroke="url(#takeGradR)" className="take-stream" />
            <path d="M 1640,880 C 1340,830 1080,725 800,640" stroke="url(#takeGradR)" className="take-stream fast" />
          </g>

          <g className="take-node-glow">
            <circle cx="800" cy="640" r="220" fill="url(#takeNodeGlow)" />
            <circle cx="800" cy="640" r="110" fill="url(#takeNodeGlow)" />
            <circle cx="800" cy="640" r="48" fill="url(#takeNodeGlow)" />
          </g>

          <g stroke="rgba(168,132,255,0.4)" fill="none" strokeWidth="1">
            <circle cx="800" cy="640" r="32" />
            <circle cx="800" cy="640" r="58" strokeOpacity="0.55" strokeDasharray="2 6" />
          </g>
          <circle cx="800" cy="640" r="4.5" fill="#d4bfff" filter="url(#takeSoftBlur)" />

          <circle r="2.6" fill="#d4bfff" filter="url(#takeSoftBlur)">
            <animateMotion dur="4.2s" repeatCount="indefinite">
              <mpath href="#takeTL1" />
            </animateMotion>
          </circle>
          <circle r="2.2" fill="#a884ff" filter="url(#takeSoftBlur)">
            <animateMotion dur="5.6s" begin="1.1s" repeatCount="indefinite">
              <mpath href="#takeTL3" />
            </animateMotion>
          </circle>
          <circle r="2" fill="#FFB266" filter="url(#takeSoftBlur)">
            <animateMotion dur="6.4s" begin="2.4s" repeatCount="indefinite">
              <mpath href="#takeTL5" />
            </animateMotion>
          </circle>
          <circle r="2.4" fill="#d4bfff" filter="url(#takeSoftBlur)">
            <animateMotion dur="3.8s" begin="0.6s" repeatCount="indefinite">
              <mpath href="#takeTL4" />
            </animateMotion>
          </circle>
          <circle r="2.6" fill="#d4bfff" filter="url(#takeSoftBlur)">
            <animateMotion dur="4.6s" begin="0.3s" repeatCount="indefinite">
              <mpath href="#takeTR2" />
            </animateMotion>
          </circle>
          <circle r="2.2" fill="#a884ff" filter="url(#takeSoftBlur)">
            <animateMotion dur="5.2s" begin="1.8s" repeatCount="indefinite">
              <mpath href="#takeTR4" />
            </animateMotion>
          </circle>
          <circle r="2" fill="#FFB266" filter="url(#takeSoftBlur)">
            <animateMotion dur="6.0s" begin="3.0s" repeatCount="indefinite">
              <mpath href="#takeTR6" />
            </animateMotion>
          </circle>
          <circle r="2.4" fill="#d4bfff" filter="url(#takeSoftBlur)">
            <animateMotion dur="3.6s" begin="0.9s" repeatCount="indefinite">
              <mpath href="#takeTR1" />
            </animateMotion>
          </circle>

          <g
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="9.5"
            fill="rgba(220,205,255,0.4)"
            letterSpacing="1.5"
          >
            <text x="20" y="575">FINANCIAL</text>
            <text x="20" y="635">OPERATIONAL</text>
            <text x="20" y="695">PEOPLE</text>
            <text x="20" y="755">SUPPLY</text>
            <text x="20" y="815">ESG</text>
            <text x="20" y="875">ML / AI</text>
            <text x="1580" y="575" textAnchor="end">PLAN</text>
            <text x="1580" y="635" textAnchor="end">CONSOLIDATE</text>
            <text x="1580" y="695" textAnchor="end">FORECAST</text>
            <text x="1580" y="755" textAnchor="end">REPORT</text>
            <text x="1580" y="815" textAnchor="end">ANALYZE</text>
            <text x="1580" y="875" textAnchor="end">DECIDE</text>
          </g>
        </svg>

        <div className="take-inner">
          <Reveal delay={0.08}>
            <h2 id="take-heading">
              See Finance AI <em>in action</em>
              <span className="period">.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p>
              See how <strong>built-in Finance agents</strong> and the same{" "}
              <span className="ai">governed agentic layer</span> extend{" "}
              <strong>trusted intelligence</strong> across your AI stack.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="take-actions">
              <span className="take-cta-glow">
                <motion.button
                  className="take-cta-primary"
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  Request a Demo
                  <span className="arrow" aria-hidden="true">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                      <path
                        d="M1 7 H16 M10.5 1.5 L16 7 L10.5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </motion.button>
              </span>
            </div>
          </Reveal>

        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-curve" aria-hidden="true" />
        <div className="section-inner footer-brand-row">
          <div className="footer-brand">
            <OneStreamMark />
            onestream
          </div>
        </div>
        <div className="section-inner footer-grid">
          {FOOTER_COLS.map((col, i) => (
            <ul key={i}>
              {col.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="section-inner footer-bottom">
          <p>© 2026 OneStream. All rights reserved.&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Accessibility Statement&nbsp;&nbsp;|&nbsp;&nbsp;Cookie Policy&nbsp;&nbsp;|&nbsp;&nbsp;Trust &amp; Compliance</p>
          <div className="socials">
            <a href="#" aria-label="YouTube"><YouTubeIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
