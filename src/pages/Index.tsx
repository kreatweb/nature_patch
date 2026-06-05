import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import brochureAsset from "@/assets/brochure.pdf.asset.json";
import logoAsset from "@/assets/nature-patch-logo.jpg.asset.json";
import safetyAsset from "@/assets/safety-guidelines.pdf.asset.json";
import { FallingLeaves } from "@/components/FallingLeaves";
import { Fireflies } from "@/components/Fireflies";
import { VineDivider } from "@/components/VineDivider";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useReveal } from "@/hooks/useReveal";

const HERO_IMG =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80";

const REGISTER_URL = "https://forms.gle/TDTYhJtipXhXdcKL7";
const WHATSAPP_1 = "919741698468";
const WHATSAPP_2 = "917892301439";
const EMAIL = "naturepatch7@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/naturepatch.blr";
const RESORT_URL = "https://nisargaresort.com/";
const RESORT_MAP_URL = "https://maps.app.goo.gl/THBhXjTzc1RnzyV38";

export default function Index() {
  useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FallingLeaves />
      <WhatsAppFloat />

      <Hero scrollY={scrollY} />
      <VineDivider />
      <WhatSection />
      <VineDivider />
      <ActivitiesSection />
      <VineDivider />
      <WhoSection />
      <VineDivider />
      <RegisterSection />
      <WhatsAppStrip />
      <LocationSection />
      <Footer />
    </main>
  );
}

function Hero({ scrollY }: { scrollY: number }) {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-overlay)" }}
      />
      <Fireflies count={22} />

      <div
        aria-hidden
        className="sun-glow absolute right-[-80px] top-[-60px] h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.18 75 / 0.7), oklch(0.7 0.2 50 / 0.2) 50%, transparent 70%)",
        }}
      />

      <span aria-hidden className="absolute left-6 top-24 text-3xl opacity-30">🦋</span>
      <span aria-hidden className="absolute right-10 bottom-32 text-4xl opacity-25">🦌</span>
      <span aria-hidden className="absolute left-1/3 bottom-16 text-2xl opacity-30">🐦</span>

      <div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">
          Nature Patch Camp • Est. Wild
        </p>
        <h1 className="text-5xl leading-[1.05] text-foreground md:text-7xl">
          Less Screen. <span className="text-gradient-ember italic">More Scream.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          A nature-immersive camp experience unlike anything else.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-ember)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[color:var(--ember-foreground)] transition-transform hover:scale-105"
          >
            Reserve a Spot
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/60 bg-background/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:bg-background/40"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/60">
        Scroll ↓
      </div>
    </section>
  );
}

const WHAT = [
  { icon: "🌿", title: "Pure Nature", line: "Forests, rivers, open sky." },
  { icon: "⚔️", title: "Real Adventures", line: "Built for grit and grins." },
  { icon: "🔥", title: "Lifelong Memories", line: "Stories they'll never outgrow." },
];

function WhatSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <header className="reveal mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl">What is Nature Patch Camp?</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Hosted at{" "}
          <a href={RESORT_URL} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline text-[color:var(--gold)]">
            Nisarga Resort
          </a>
          .
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {WHAT.map((w) => (
          <div key={w.title} className="reveal lift glass rounded-2xl p-8 text-center shadow-card">
            <div className="mb-4 text-5xl">{w.icon}</div>
            <h3 className="mb-2 text-2xl text-[color:var(--gold)]">{w.title}</h3>
            <p className="text-sm text-muted-foreground">{w.line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Activity = { icon: string; title: string; desc: string; href?: string };
const ACTIVITIES: Activity[] = [
  { icon: "🌱", title: "Nature Learning & Exploration", desc: "Discover the wild, up close." },
  { icon: "🧭", title: "Outdoor Adventure", desc: "Trails, climbs, untamed thrills." },
  { icon: "🔥", title: "Campfire & Pool Party", desc: "Splash by day, glow by night." },
  { icon: "🤸", title: "Team Games & Fun Activities", desc: "Win together. Laugh louder." },
  { icon: "🎨", title: "Eco-Art & DIY Workshop", desc: "Make magic from the forest." },
  { icon: "📜", title: "View Full Brochure", desc: "Click me to see the full camp brochure.", href: brochureAsset.url },
];

function ActivitiesSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <header className="reveal mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl">What They'll Do</h2>
        <p className="mt-3 text-sm text-muted-foreground">Three days of doing. Zero days of scrolling.</p>
      </header>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {ACTIVITIES.map((a) => {
          const Tag = (a.href ? "a" : "div") as "a" | "div";
          return (
            <Tag
              key={a.title}
              {...(a.href ? { href: a.href, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="reveal lift glass relative block overflow-hidden rounded-2xl p-6 shadow-card"
            >
              <div className="mb-3 text-4xl">{a.icon}</div>
              <h3 className="mb-1 text-lg text-foreground">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-20"
                style={{ background: "var(--gradient-ember)" }}
              />
            </Tag>
          );
        })}
      </div>
    </section>
  );
}

function WhoSection() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-20 text-center">
      <h2 className="reveal text-3xl leading-tight md:text-5xl">
        Ages 8–13.{" "}
        <span className="text-gradient-ember">100% safety. 100% transparency. 100% fun.</span>
      </h2>
      <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4">
        {[
          { icon: "📅", label: "3 Days" },
          { icon: "🌿", label: "100% Outdoors" },
        ].map((s) => (
          <div key={s.label} className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
            <span className="text-xl">{s.icon}</span>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function RegisterSection() {
  return (
    <section id="register" className="relative mx-auto max-w-3xl px-6 py-24 text-center">
      <Fireflies count={10} />
      <p className="reveal text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">Limited Spots</p>
      <h2 className="reveal mt-4 text-4xl md:text-5xl">Spots fill fast.</h2>
      <p className="reveal mt-2 text-lg text-muted-foreground">Secure yours today.</p>
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal cta-pulse mt-10 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-ember)] px-10 py-5 text-base font-semibold uppercase tracking-wider text-[color:var(--ember-foreground)] transition-transform hover:scale-105"
      >
        Reserve a Spot →
      </a>
    </section>
  );
}

function WhatsAppStrip() {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-center" style={{ background: "var(--gradient-ember)" }}>
      <h2 className="text-3xl text-[color:var(--ember-foreground)] md:text-4xl">
        Got questions? We're one message away.
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`https://wa.me/${WHATSAPP_1}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-background px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-transform hover:scale-105"
        >
          WhatsApp 97416 98468
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_2}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-background px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-transform hover:scale-105"
        >
          WhatsApp 78923 01439
        </a>
      </div>
    </section>
  );
}


const DIRECTIONS_URL =
  "https://www.google.com/maps/place/Nisarga+Resort/@12.8202893,77.5037867,17z/data=!4m9!3m8!1s0x3bae41f53050d0df:0xa9ab75430e343593!5m2!4m1!1i2!8m2!3d12.8202893!4d77.5063616!16s%2Fg%2F11rn_kd2jg?entry=tts";

function LocationSection() {
  return (
    <section className="relative px-6 py-20">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
          📍 Where It All Happens
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl text-[color:var(--gold)]">
          Nestled in Nature. Built for Adventure.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-foreground/85">
          Nature Patch Camp takes place at Nisarga Resort — a stunning nature retreat
          surrounded by greenery, open skies, and everything a wild adventure needs.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ember)] px-7 py-3 text-sm font-semibold text-[color:var(--ember-foreground)] shadow-glow transition hover:brightness-110"
          >
            🌐 Visit Resort Website
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--gold)] px-7 py-3 text-sm font-semibold text-[color:var(--gold)] transition hover:bg-[color:var(--gold)] hover:text-[color:var(--primary-foreground)]"
          >
            📍 Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 py-14 text-center">
      <h3 className="text-2xl text-[color:var(--gold)]">Nature Patch Camp</h3>
      <p className="mt-2 text-sm text-muted-foreground">Less Screen. More Scream.</p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-ember)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--ember-foreground)] transition-transform hover:scale-105"
        >
          Reserve a Spot
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-background/30"
        >
          Email Us
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_1}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-background/30"
        >
          WhatsApp 97416 98468
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_2}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-background/30"
        >
          WhatsApp 78923 01439
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-background/30"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          @naturepatch.blr
        </a>
        <a
          href="/safety-guidelines.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-background/30"
        >
          Read Safety Guidelines & Camp Rules
        </a>
      </div>

      <div className="mt-8 space-y-2 text-xs text-muted-foreground">
        <p>
          Email:{" "}
          <a href={`mailto:${EMAIL}`} className="underline-offset-4 hover:underline">
            {EMAIL}
          </a>
        </p>
        <p>
          Resort:{" "}
          <a href={RESORT_URL} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            Nisarga Resort
          </a>{" "}
          •{" "}
          <a href={RESORT_MAP_URL} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            View Location
          </a>
        </p>
      </div>
    </footer>
  );
}
