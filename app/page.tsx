"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Clapperboard,
  Download,
  Gauge,
  LineChart,
  Mail,
  Menu,
  Play,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Video,
  X,
  Youtube,
} from "lucide-react";
import {
  type ComponentType,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
const channelUrl = "https://www.youtube.com/@Axion_exe";
const businessEmail = "business@axioncreator.com";
const brandCollaborationCount = 3;

const isExternalHref = (href: string) => /^https?:\/\//.test(href);

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Media Kit", href: "#media-kit" },
  { label: "Contact", href: "#contact" },
];

const proofStats = [
  { value: 2500, suffix: "+", label: "Subscribers" },
  { value: 100000, suffix: "+", label: "Lifetime Views" },
  { value: 4, suffix: " Months", label: "Channel Age" },
  { value: brandCollaborationCount, suffix: "", label: "Brand Collaborations" },
];

const features: Array<{
  title: string;
  description: string;
  icon: IconType;
}> = [
  {
    title: "Dedicated Reviews",
    description: "Professional AI software reviews with practical setup, honest tradeoffs and clear product fit.",
    icon: ShieldCheck,
  },
  {
    title: "Tutorial Videos",
    description: "Step-by-step demonstrations that help viewers move from curiosity to working AI workflows.",
    icon: Video,
  },
  {
    title: "Sponsored Integrations",
    description: "Natural product integrations built around useful moments, not interruption-heavy ad reads.",
    icon: Rocket,
  },
  {
    title: "Product Launch Coverage",
    description: "Launch-ready showcases for AI startups that need polished reach and credible explanation.",
    icon: Clapperboard,
  },
];

const videos = [
  {
    title: "This 100% UNCENSORED AI Video Literally Generates Anything on Your PC !![No Monthly Subscription]",
    link: "https://youtu.be/kptdWozyzrM?si=Crsb3I5X6kXJZ3AH",
    thumbnail: "/video-1.jpg",
    eyebrow: "Featured Video",
  },
  {
    title: "This AI Free Tool Literally Generates Anything! [Uncensored + Unlimited]",
    link: "https://youtu.be/Sg1gZ8vvPao?si=NkmygRQTZBvAG35f",
    thumbnail: "/video-2.jpg",
    eyebrow: "Top Video",
  },
  {
    title: "Make Grok AI 100% uncensored in 5 minutes! [No clickbait just watch]",
    link: "https://youtu.be/Z61G0bx8ehI?si=CL8pKqwfnvhdra_f",
    thumbnail: "/video-3.jpg",
    eyebrow: "Creator Tutorial",
  },
];

const performance = [
  { label: "Subscribers", value: 2500, suffix: "+", detail: "2,500+ AI-focused subscribers", icon: TrendingUp },
  { label: "Lifetime Views", value: 100000, suffix: "+", detail: "100,000+ views across AI content", icon: BarChart3 },
  { label: "Channel Age", value: 4, suffix: " Months", detail: "Four months of rapid growth", icon: Gauge },
  { label: "Brand Collaborations", value: brandCollaborationCount, suffix: "", detail: "Simpligen, HitPaw & Magiclight", icon: LineChart },
];

const collaborationTimeline = [
  {
    status: "Previous Collaboration",
    title: "Simpligen",
    description: "Dedicated Sponsored Video. Completed Successfully.",
  },
  {
    status: "Previous Collaboration",
    title: "HitPaw",
    description: "Sponsored AI software showcase. Completed Successfully.",
  },
  {
    status: "Previous Collaboration",
    title: "Magiclight",
    description: "Sponsored AI creator-tool showcase. Completed Successfully.",
  },
];

const workReasons = [
  {
    title: "Authentic Reviews",
    description: "Viewers get the product story with setup clarity, tested use cases and candid limitations.",
    icon: ShieldCheck,
  },
  {
    title: "AI Focused Audience",
    description: "The channel reaches creators and builders actively searching for practical AI software.",
    icon: BrainCircuit,
  },
  {
    title: "Professional Editing",
    description: "Every sponsored moment is packaged with sharp pacing, premium visuals and direct takeaways.",
    icon: Clapperboard,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Axion",
  url: "https://axioncreator.com",
  sameAs: [channelUrl],
  jobTitle: "AI software reviewer and tutorial creator",
  knowsAbout: [
    "AI software reviews",
    "local AI tools",
    "video generation",
    "creator tutorials",
    "sponsored product showcases",
  ],
  email: businessEmail,
};

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), reducedMotion ? 180 : 900);
    return () => window.clearTimeout(timeout);
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-[#050505]"
          initial={reducedMotion ? false : { opacity: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: premiumEase }}
        >
          <div className="relative">
            <div className="absolute inset-[-28px] rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/8 blur-2xl motion-safe:[animation:axion-pulse_1.8s_var(--ease-axion)_infinite]" />
            <motion.div
              className="relative border border-white/12 bg-white/[0.03] px-8 py-5 font-mono text-xs uppercase tracking-[0.42em] text-[#E8E8E8]"
              initial={reducedMotion ? false : { letterSpacing: "0.52em", opacity: 0 }}
              animate={{ letterSpacing: "0.42em", opacity: 1 }}
              transition={{ duration: 0.55, ease: premiumEase }}
            >
              AXION
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="axion-mesh absolute inset-[-18%] opacity-75 motion-safe:[animation:axion-mesh-drift_22s_var(--ease-axion)_infinite_alternate]" />
      <div className="axion-grid absolute inset-0 opacity-35 motion-safe:[animation:axion-grid-pan_30s_var(--ease-axion)_infinite_alternate]" />
      <div className="axion-noise absolute inset-0 opacity-[0.035]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/45 to-transparent" />
    </div>
  );
}

function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(-240);
  const y = useMotionValue(-240);
  const springX = useSpring(x, { stiffness: 95, damping: 24, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 95, damping: 24, mass: 0.35 });

  useEffect(() => {
    if (reducedMotion) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 144);
      y.set(event.clientY - 144);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reducedMotion, x, y]);

  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.16),rgba(79,141,255,0.08)_38%,transparent_68%)] mix-blend-screen blur-xl"
      style={{ x: springX, y: springY }}
    />
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-px w-full origin-left bg-gradient-to-r from-[#00F0FF] via-[#4F8DFF] to-white"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-[var(--ease-axion)] ${
        scrolled ? "px-3 pt-3" : "px-4 pt-5"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-7xl items-center justify-between border border-white/[0.08] bg-[#050505]/70 px-4 backdrop-blur-2xl transition-all duration-300 ease-[var(--ease-axion)] ${
          scrolled ? "min-h-14 rounded-lg" : "min-h-16 rounded-lg"
        }`}
      >
        <a
          href="#home"
          className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 place-items-center border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[10px] font-bold text-[#00F0FF] transition-colors duration-200 group-hover:border-[#00F0FF]/60">
            AX
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.34em] text-white">AXION</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-white/68 transition-colors duration-200 ease-[var(--ease-axion)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#contact"
            className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#00F0FF]/25 bg-[#00F0FF]/10 px-4 py-2 text-sm font-medium text-[#E8E8E8] transition-all duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#00F0FF]/60 hover:bg-[#00F0FF]/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
          >
            Get in Touch
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-grid size-10 cursor-pointer place-items-center rounded-md border border-white/[0.08] bg-white/[0.04] text-white transition-colors duration-200 hover:border-[#00F0FF]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-2 max-w-7xl rounded-lg border border-white/[0.08] bg-[#050505]/92 p-2 backdrop-blur-2xl lg:hidden"
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reducedMotion ? 0 : 0.22, ease: premiumEase }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-3 text-sm text-white/75 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function RevealSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-14% 0px" }}
      transition={{ duration: 0.72, ease: premiumEase }}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({
  marker,
  title,
  copy,
}: {
  marker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto mb-10 grid max-w-7xl gap-5 md:grid-cols-[0.34fr_0.66fr] md:items-end">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#00F0FF]">{marker}</p>
      <div>
        <h2 className="text-balance max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/66 sm:text-lg">{copy}</p>
      </div>
    </div>
  );
}

function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  download,
}: {
  href: string;
  children: ReactNode;
  icon: IconType;
  variant?: "primary" | "secondary";
  download?: boolean;
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]";
  const styles =
    variant === "primary"
      ? "border border-[#00F0FF]/45 bg-[#00F0FF] text-[#050505] shadow-[0_18px_70px_rgba(0,240,255,0.24)] hover:bg-[#8AB4FF] hover:shadow-[0_20px_80px_rgba(0,240,255,0.34)]"
      : "border border-white/[0.12] bg-white/[0.04] text-[#E8E8E8] hover:border-[#00F0FF]/40 hover:bg-white/[0.08]";
  const external = isExternalHref(href);

  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
      <Icon className="size-4" aria-hidden={true} />
    </a>
  );
}

function HeroDeck() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/[0.08] bg-[#0E0E10]/68 p-4 shadow-[0_32px_120px_rgba(0,0,0,0.48)] backdrop-blur-2xl"
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.8, ease: premiumEase }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(0,240,255,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(79,141,255,0.12),transparent_30%)]" />
      <div className="axion-grid absolute inset-0 opacity-20" />
      <div className="relative grid h-full min-h-[390px] content-between gap-5">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/46">Creator Signal</p>
            <p className="mt-1 text-sm font-medium text-white">AI market coverage</p>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-[#00F0FF]/24 bg-[#00F0FF]/10 px-3 py-2 text-xs text-[#00F0FF]">
            <span className="size-1.5 rounded-full bg-[#00F0FF]" />
            Live
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {["AI Tools", "Local AI", "Reviews", "Guides"].map((label, index) => (
            <motion.div
              key={label}
              className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.035] p-4"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 + index * 0.07, duration: 0.52, ease: premiumEase }}
            >
              <div className="signal-scan absolute inset-y-0 left-0 w-full motion-safe:[animation:axion-scan_4.8s_var(--ease-axion)_infinite]" />
              <p className="relative font-mono text-[10px] uppercase tracking-[0.24em] text-white/48">Track</p>
              <p className="relative mt-3 text-xl font-semibold tracking-[-0.02em] text-white">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 border-t border-white/[0.08] pt-5 sm:grid-cols-[0.68fr_0.32fr]">
          <div>
            <div className="mb-4 flex items-center justify-between text-xs text-white/48">
              <span>Audience signal</span>
              <span>+18.4%</span>
            </div>
            <svg viewBox="0 0 420 140" className="h-36 w-full" role="img" aria-label="Rising channel signal graph">
              <defs>
                <linearGradient id="heroLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="60%" stopColor="#4F8DFF" />
                  <stop offset="100%" stopColor="#E8E8E8" />
                </linearGradient>
              </defs>
              <path
                d="M4 124 C48 116 78 118 112 109 C148 100 174 104 206 96 C240 88 268 91 300 82 C334 74 368 76 416 64"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <motion.path
                d="M4 124 C48 116 78 118 112 109 C148 100 174 104 206 96 C240 88 268 91 300 82 C334 74 368 76 416 64"
                fill="none"
                stroke="url(#heroLine)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: premiumEase }}
              />
            </svg>
          </div>

          <div className="grid content-between gap-3">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/42">Sponsor fit</p>
              <p className="mt-2 whitespace-nowrap text-xl font-semibold text-white">AI Companies</p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/42">Response</p>
              <p className="mt-2 whitespace-nowrap text-xl font-semibold text-white">24–48 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  const reducedMotion = useReducedMotion();
  const heroWords = ["AI Software Reviews", "Local AI", "Video Generation", "Tutorials"];

  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pt-28">
      <div className="relative z-10">
        <motion.p
          className="mb-6 inline-flex rounded-md border border-[#00F0FF]/24 bg-[#00F0FF]/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.32em] text-[#00F0FF]"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: premiumEase }}
        >
          Premium creator intelligence
        </motion.p>
        <motion.h1
          className="axion-wordmark text-balance text-[clamp(4.7rem,17vw,13rem)] font-black leading-[0.78] tracking-[-0.075em] text-white"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: premiumEase }}
        >
          AXION
        </motion.h1>

        <motion.div
          className="mt-7 flex flex-wrap gap-2"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.65, ease: premiumEase }}
        >
          {heroWords.map((word) => (
            <span
              key={word}
              className="rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-sm text-white/72"
            >
              {word}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="mt-7 max-w-2xl text-balance text-lg leading-8 text-white/72 sm:text-xl"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.65, ease: premiumEase }}
        >
          Helping creators discover powerful AI tools through practical demonstrations, honest reviews and
          high-quality tutorials.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.65, ease: premiumEase }}
        >
          <ButtonLink href={channelUrl} icon={Youtube}>
            Watch on YouTube
          </ButtonLink>
          <ButtonLink href="/axion-media-kit.pdf" icon={ArrowDownToLine} variant="secondary" download>
            Download Media Kit
          </ButtonLink>
        </motion.div>
      </div>

      <HeroDeck />
    </section>
  );
}

function TrustedBy() {
  const trustedBrands = ["Simpligen", "HitPaw", "Magiclight"];

  return (
    <RevealSection className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg border border-white/[0.08] bg-[#0E0E10]/60 px-5 py-5 backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/42">Trusted By</p>
          <div className="flex flex-wrap items-center gap-3">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="inline-flex items-center gap-3 rounded-md border border-[#00F0FF]/24 bg-[#00F0FF]/10 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_70px_rgba(0,240,255,0.08)]"
              >
                <ShieldCheck className="size-5 text-[#00F0FF]" aria-hidden="true" />
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function useReliableInView<T extends HTMLElement>(ref: RefObject<T | null>) {
  const motionInView = useInView(ref, { once: true, amount: 0.1 });
  const [fallbackInView, setFallbackInView] = useState(false);

  useEffect(() => {
    if (motionInView || fallbackInView) return;

    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const checkVisibility = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.visualViewport?.height ?? document.documentElement.clientHeight;
      const visible = rect.top <= viewportHeight * 0.95 && rect.bottom >= viewportHeight * 0.05;

      if (visible) setFallbackInView(true);
    };
    const scheduleCheck = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(checkVisibility);
    };

    checkVisibility();
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);
    window.addEventListener("orientationchange", scheduleCheck);
    window.addEventListener("pageshow", scheduleCheck);
    document.addEventListener("visibilitychange", scheduleCheck);
    window.visualViewport?.addEventListener("resize", scheduleCheck);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      window.removeEventListener("orientationchange", scheduleCheck);
      window.removeEventListener("pageshow", scheduleCheck);
      document.removeEventListener("visibilitychange", scheduleCheck);
      window.visualViewport?.removeEventListener("resize", scheduleCheck);
    };
  }, [fallbackInView, motionInView, ref]);

  return motionInView || fallbackInView;
}

function AnimatedCounter({
  value,
  suffix = "",
  prefix,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useReliableInView(ref);
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(value <= 2 ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (prefix) {
      setDisplay(value);
      return;
    }
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let start: number | null = null;
    const duration = value <= 4 ? 550 : 1350;

    const animate = (timestamp: number) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, prefix, reducedMotion, value]);

  return (
    <span ref={ref}>
      {prefix ? prefix : display.toLocaleString()}
      {prefix ? "" : suffix}
    </span>
  );
}

function DashboardCounter({
  value,
  suffix = "",
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!active || completedRef.current) return;

    if (reducedMotion) {
      setDisplay(value);
      completedRef.current = true;
      return;
    }

    let frame = 0;
    let start: number | null = null;
    const duration = value <= 2 ? 1400 : 1650;

    const animate = (timestamp: number) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
        return;
      }

      completedRef.current = true;
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [active, reducedMotion, value]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function ProofSection() {
  const reducedMotion = useReducedMotion();

  return (
    <RevealSection className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {proofStats.map((stat, index) => (
          <motion.article
            key={stat.label}
            className="group cursor-pointer rounded-lg border border-white/[0.08] bg-[#0E0E10]/72 p-6 backdrop-blur-xl transition-all duration-300 ease-[var(--ease-axion)] hover:-translate-y-1 hover:border-[#00F0FF]/38 hover:bg-white/[0.055]"
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reducedMotion ? 0 : index * 0.06, duration: reducedMotion ? 0 : 0.55, ease: premiumEase }}
          >
            <p className="text-4xl font-semibold tracking-[-0.04em] text-white">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm text-white/58">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </RevealSection>
  );
}

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(rotateY, { stiffness: 180, damping: 22 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(py * -5);
    rotateY.set(px * 5);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      className={`group relative cursor-pointer overflow-hidden rounded-lg border border-white/[0.08] bg-[#0E0E10]/74 p-6 shadow-[0_24px_84px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ease-[var(--ease-axion)] hover:-translate-y-1 hover:border-[#00F0FF]/35 hover:shadow-[0_24px_92px_rgba(0,240,255,0.11)] focus-within:border-[#00F0FF]/60 ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX: smoothX, rotateY: smoothY, transformStyle: "preserve-3d" }}
      tabIndex={0}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.article>
  );
}

function FeatureSection() {
  const reducedMotion = useReducedMotion();

  return (
    <RevealSection id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        marker="01 / Focus"
        title="A creator brand built like a product channel."
        copy="Axion packages AI tools with the structure sponsors expect: clear positioning, useful demos and polished delivery."
      />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reducedMotion ? 0 : index * 0.05, duration: reducedMotion ? 0 : 0.55, ease: premiumEase }}
          >
            <TiltCard className="h-full">
              <feature.icon className="mb-8 size-6 text-[#00F0FF]" aria-hidden={true} />
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/62">{feature.description}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
}

function VideoCard({ video, index }: { video: (typeof videos)[number]; index: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open YouTube video: ${video.title}`}
      className="group block cursor-pointer overflow-hidden rounded-lg border border-white/[0.08] bg-[#0E0E10]/74 shadow-[0_24px_84px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 ease-[var(--ease-axion)] hover:-translate-y-1 hover:border-[#00F0FF]/35 hover:bg-white/[0.055] hover:shadow-[0_28px_100px_rgba(0,240,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: reducedMotion ? 0 : index * 0.06, duration: reducedMotion ? 0 : 0.56, ease: premiumEase }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-axion)] group-hover:scale-[1.035]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-[#050505]/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-md border border-white/12 bg-black/24 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
          {video.eyebrow}
        </div>
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid size-14 place-items-center rounded-full border border-white/18 bg-[#050505]/50 text-white backdrop-blur-xl transition-transform duration-300 group-hover:scale-105 group-hover:border-[#00F0FF]/45">
            <Play className="ml-0.5 size-6 fill-current" aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-balance text-xl font-semibold tracking-[-0.02em] text-white">{video.title}</h3>
        <div className="mt-5 flex items-center justify-between gap-4 text-sm text-white/52">
          <span>Top YouTube video</span>
          <span className="inline-flex items-center gap-2 rounded-md border border-[#00F0FF]/20 bg-[#00F0FF]/10 px-3 py-2 text-[#00F0FF] transition-colors duration-200 group-hover:border-[#00F0FF]/45">
            View
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function LatestVideos() {
  return (
    <RevealSection id="videos" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        marker="02 / Videos"
        title="Top videos for AI-curious creators."
        copy="Real thumbnails, direct YouTube links and concise product-led packaging for the strongest current uploads."
      />
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        {videos.map((video, index) => (
          <VideoCard key={video.title} video={video} index={index} />
        ))}
      </div>
    </RevealSection>
  );
}

function AnalyticsDashboard() {
  const reducedMotion = useReducedMotion();
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const dashboardInView = useReliableInView(dashboardRef);
  const dashboardActive = Boolean(reducedMotion || dashboardInView);
  const bars = [38, 54, 44, 72, 68, 84, 78, 92];
  const progressValues = [91, 84, 78];
  const statsDelay = 0.12;
  const chartDelay = 0.76;
  const rightDelay = 1.02;

  return (
    <RevealSection className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        marker="03 / Performance"
        title="Channel proof presented like a SaaS analytics view."
        copy="2,500+ subscribers, 100,000+ lifetime views, four months of growth and three completed brand collaborations."
      />

      <div ref={dashboardRef} className="mx-auto overflow-hidden rounded-lg border border-white/[0.08] bg-[#0E0E10]/74 shadow-[0_32px_120px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
        <div className="flex flex-col gap-5 border-b border-white/[0.08] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#00F0FF]">Axion Analytics</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">Creator growth dashboard</h3>
          </div>
          <div className="rounded-md border border-[#00F0FF]/24 bg-[#00F0FF]/10 px-3 py-2 text-sm text-[#00F0FF]">
            Growing
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
          <div className="grid border-b border-white/[0.08] lg:border-b-0 lg:border-r">
            {performance.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex transform-gpu items-start gap-4 border-b border-white/[0.08] p-5 will-change-transform last:border-b-0"
                initial={reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
                animate={
                  dashboardActive
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        boxShadow: [
                          "inset 0 0 0 rgba(0,240,255,0)",
                          "inset 0 0 44px rgba(0,240,255,0.09)",
                          "inset 0 0 0 rgba(0,240,255,0)",
                        ],
                      }
                    : { opacity: 0, y: 20, scale: 0.96 }
                }
                transition={{
                  delay: reducedMotion ? 0 : index * statsDelay,
                  duration: reducedMotion ? 0 : 0.62,
                  ease: premiumEase,
                }}
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-md border border-white/[0.08] bg-white/[0.04] text-[#00F0FF]">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-white/48">{item.label}</p>
                  <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white">
                    <DashboardCounter value={item.value} suffix={item.suffix} active={dashboardActive} />
                  </p>
                  <p className="mt-1 text-sm text-white/55">{item.detail}</p>
                </div>
                <span className="ml-auto font-mono text-xs text-white/32">0{index + 1}</span>
              </motion.div>
            ))}
          </div>

          <div className="p-5 sm:p-7">
            <div className="grid gap-5 md:grid-cols-[0.62fr_0.38fr]">
              <motion.div
                className="min-h-[280px] transform-gpu rounded-lg border border-white/[0.08] bg-white/[0.03] p-5 will-change-transform"
                initial={reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
                animate={dashboardActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
                transition={{ delay: reducedMotion ? 0 : chartDelay, duration: reducedMotion ? 0 : 0.62, ease: premiumEase }}
              >
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/46">Lifetime views by content format</p>
                    <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-white">100,000+</p>
                  </div>
                  <span className="rounded-md border border-[#00F0FF]/24 bg-[#00F0FF]/10 px-3 py-2 text-xs text-[#00F0FF]">
                    Top videos
                  </span>
                </div>
                <div className="flex h-48 items-end gap-3">
                  {bars.map((bar, index) => (
                    <motion.div
                      key={`${bar}-${index}`}
                      className="min-w-0 flex-1 origin-bottom transform-gpu rounded-t-md bg-gradient-to-t from-[#4F8DFF] via-[#00F0FF] to-white will-change-transform"
                      style={{ height: `${bar}%` }}
                      initial={reducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
                      animate={dashboardActive ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{
                        delay: reducedMotion ? 0 : chartDelay + 0.14 + index * 0.07,
                        duration: reducedMotion ? 0 : 0.72,
                        ease: premiumEase,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="grid transform-gpu gap-5 will-change-transform"
                initial={reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
                animate={dashboardActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
                transition={{ delay: reducedMotion ? 0 : rightDelay, duration: reducedMotion ? 0 : 0.62, ease: premiumEase }}
              >
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-5">
                  <p className="text-sm text-white/46">Audience intent</p>
                  <div className="mt-5 space-y-4">
                    {["AI tools", "Creator workflow", "Product demos"].map((item, index) => (
                      <div key={item}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-white/64">{item}</span>
                          <span className="text-white/42">{progressValues[index]}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            className="h-full origin-left transform-gpu rounded-full bg-[#00F0FF] will-change-transform"
                            style={{ width: `${progressValues[index]}%` }}
                            initial={reducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
                            animate={dashboardActive ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{
                              duration: reducedMotion ? 0 : 0.82,
                              delay: reducedMotion ? 0 : rightDelay + 0.14 + index * 0.1,
                              ease: premiumEase,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">Sponsor runway</p>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.02em] text-white">
                    Dedicated review, launch coverage and tutorial integrations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function Collaborations() {
  const reducedMotion = useReducedMotion();

  return (
    <RevealSection id="collaborations" className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        marker="04 / Collaborations"
        title="A clean sponsorship path for AI products."
        copy="Current and future partnerships are organized as a launch pipeline, so sponsor conversations start with context."
      />
      <div className="mx-auto max-w-5xl">
        {collaborationTimeline.map((item, index) => (
          <motion.div
            key={item.title}
            className="grid gap-5 border-l border-white/[0.12] pb-10 pl-6 last:pb-0 md:grid-cols-[0.24fr_0.76fr]"
            initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reducedMotion ? 0 : index * 0.06, duration: reducedMotion ? 0 : 0.55, ease: premiumEase }}
          >
            <div className="relative">
              <span className="absolute -left-[31px] top-1 size-3 rounded-full border border-[#00F0FF] bg-[#050505] shadow-[0_0_24px_rgba(0,240,255,0.45)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#00F0FF]">{item.status}</span>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-[#0E0E10]/72 p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/64">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
}

function WhyWorkWithMe() {
  const reducedMotion = useReducedMotion();

  return (
    <RevealSection className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        marker="05 / Sponsor Fit"
        title="Why AI startups work with Axion."
        copy="The channel is focused, practical and built for software audiences who want to see tools in motion."
      />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {workReasons.map((reason, index) => (
          <motion.article
            key={reason.title}
            className="rounded-lg border border-white/[0.08] bg-[#0E0E10]/72 p-7 transition-all duration-300 ease-[var(--ease-axion)] hover:-translate-y-1 hover:border-[#00F0FF]/35"
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reducedMotion ? 0 : index * 0.06, duration: reducedMotion ? 0 : 0.55, ease: premiumEase }}
          >
            <reason.icon className="size-7 text-[#00F0FF]" aria-hidden="true" />
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">{reason.title}</h3>
            <p className="mt-4 text-base leading-7 text-white/62">{reason.description}</p>
          </motion.article>
        ))}
      </div>
    </RevealSection>
  );
}

function Testimonials() {
  return (
    <RevealSection className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        marker="06 / Testimonials"
        title="Sponsor quotes will sit inside the same premium system."
        copy="Until campaigns ship with public quotes, Axion keeps this area intentionally quiet and ready for proof."
      />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <article
            key={item}
            className="rounded-lg border border-dashed border-white/[0.12] bg-white/[0.025] p-7"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Coming Soon</p>
            <p className="mt-8 text-lg leading-8 text-white/58">
              Brand testimonials will appear here as collaborations grow.
            </p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}

function MediaKit() {
  return (
    <RevealSection id="media-kit" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-lg border border-white/[0.08] bg-[#0E0E10]/74 p-5 shadow-[0_32px_120px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:grid-cols-[0.48fr_0.52fr] md:p-8">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#00F0FF]">Media Kit</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Send the numbers, formats and sponsor details in one clean PDF.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              The downloadable kit includes audience profile, collaboration formats, channel stats and contact details.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/axion-media-kit.pdf" icon={Download} download>
              Download PDF
            </ButtonLink>
            <ButtonLink href="#contact" icon={Mail} variant="secondary">
              Email Sponsorship
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/[0.08] bg-[#050505] p-5 transition-transform duration-300 ease-[var(--ease-axion)] hover:-translate-y-1">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,240,255,0.16),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(79,141,255,0.12),transparent_28%)]" />
          <div className="relative mx-auto max-w-sm rounded-lg border border-white/[0.1] bg-white/[0.04] p-5 shadow-[0_20px_90px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <span className="font-mono text-xs uppercase tracking-[0.34em] text-white">AXION</span>
              <span className="rounded-md border border-[#00F0FF]/25 bg-[#00F0FF]/10 px-2 py-1 text-xs text-[#00F0FF]">
                2026
              </span>
            </div>
            <div className="py-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">Creator Media Kit</p>
              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">AI Software Reviews</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["2,500+ subs", "100K+ views", "4 months", "Typically replies within 24-48 hours"].map((item) => (
                <div key={item} className="rounded-md border border-white/[0.08] bg-white/[0.04] p-3 text-sm text-white/72">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 h-24 rounded-md border border-white/[0.08] bg-gradient-to-br from-[#00F0FF]/20 via-[#4F8DFF]/12 to-white/[0.06]" />
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function ContactSection() {
  return (
    <RevealSection id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.56fr_0.44fr] md:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#00F0FF]">Contact</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Put your AI product in front of a focused creator audience.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">
            Sponsor inquiries, product launches and review opportunities. Typically replies within 24-48 hours.
          </p>
        </div>

        <div className="grid gap-3">
          <a
            href={`mailto:${businessEmail}?subject=Sponsor%20Inquiry%20for%20Axion`}
            className="group flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-white/[0.08] bg-[#0E0E10]/74 p-5 transition-all duration-300 ease-[var(--ease-axion)] hover:-translate-y-1 hover:border-[#00F0FF]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
          >
            <span className="min-w-0">
              <span className="block text-sm text-white/46">Business Email</span>
              <span className="mt-1 block break-all text-lg font-semibold text-white">{businessEmail}</span>
            </span>
            <Mail className="size-5 text-[#00F0FF]" aria-hidden="true" />
          </a>
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-white/[0.08] bg-[#0E0E10]/74 p-5 transition-all duration-300 ease-[var(--ease-axion)] hover:-translate-y-1 hover:border-[#00F0FF]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
          >
            <span className="min-w-0">
              <span className="block text-sm text-white/46">YouTube</span>
              <span className="mt-1 block break-all text-lg font-semibold text-white">https://www.youtube.com/@Axion_exe</span>
            </span>
            <Youtube className="size-5 text-[#00F0FF]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.34em] text-white">AXION</p>
          <p className="mt-3 text-sm text-white/48">AI software reviews, tutorials and sponsored showcases.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/54">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm text-white/48">
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-grid size-10 place-items-center rounded-md border border-white/[0.08] bg-white/[0.03] text-white transition-colors duration-200 hover:border-[#00F0FF]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
            aria-label="Open Axion on YouTube"
          >
            <Youtube className="size-5" aria-hidden="true" />
          </a>
          <span>© 2026 Axion</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LoadingScreen />
      <ScrollProgress />
      <BackgroundSystem />
      <CursorGlow />
        <Navigation />
      <main>
        <HeroSection />
        <TrustedBy />
        <ProofSection />
        <FeatureSection />
        <LatestVideos />
        <AnalyticsDashboard />
        <Collaborations />
        <WhyWorkWithMe />
        <Testimonials />
        <MediaKit />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
