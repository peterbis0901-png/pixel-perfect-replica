import { useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import * as C from "@/lib/tour-content";
import heroImg from "@/assets/hero-halong.jpg";
import trangAn from "@/assets/trang-an.jpg";
import hanoi from "@/assets/hanoi.jpg";

function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({ kicker, children }: { kicker?: string; children: ReactNode }) {
  return (
    <div className="mb-12 max-w-2xl">
      {kicker && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{kicker}</p>}
      <h2 className="font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">{children}</h2>
    </div>
  );
}

function Header() {
  const { lang, setLang, t } = useLang();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-display text-xl font-bold text-primary">Di Sản<span className="text-accent"> · </span>Heritage</a>
        <nav className="hidden gap-6 text-sm lg:flex">
          {C.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-muted-foreground transition-colors hover:text-primary">{t(n.label)}</a>
          ))}
        </nav>
        <div className="flex rounded-full border border-border p-1 text-xs font-semibold" role="group" aria-label="Language">
          {(["vi", "en"] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
              className={`rounded-full px-3 py-1 uppercase transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}>
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const h = C.hero;
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      <img src={heroImg} alt="Ha Long Bay" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-hero-foreground animate-fade-up">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t(h.eyebrow)}</p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
          {t(h.title)}<span className="block italic text-gold">{h.route}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg opacity-90">{t(h.slogan)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {h.badges.map((b) => (
            <div key={b.k.en} className="rounded-xl border border-hero-foreground/25 bg-hero-foreground/10 px-4 py-2 backdrop-blur">
              <p className="text-[10px] uppercase tracking-widest opacity-70">{t(b.k)}</p>
              <p className="text-sm font-semibold">{t(b.v)}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5">{t(h.book)}</a>
          <a href="#itinerary" className="rounded-full border border-hero-foreground/60 px-7 py-3.5 font-semibold transition-colors hover:bg-hero-foreground/10">{t(h.view)}</a>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  const { t } = useLang();
  const o = C.overview;
  return (
    <Section id="overview">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Heading kicker="01">{t(o.title)}</Heading>
          <p className="-mt-4 text-lg leading-relaxed text-muted-foreground">{t(o.body)}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={hanoi} alt="Hanoi" loading="lazy" width={1280} height={720} className="aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
          <img src={trangAn} alt="Trang An" loading="lazy" width={1280} height={960} className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
        </div>
      </div>
      <h3 className="mb-8 mt-20 font-display text-3xl font-semibold text-primary">{t(o.hlTitle)}</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {o.highlights.map((h, i) => (
          <div key={i} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
            <span className="font-display text-4xl text-accent/40">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-accent">{t(h.tag)}</p>
            <h4 className="mt-1 font-display text-2xl font-semibold text-primary">{t(h.t)}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{t(h.d)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function RouteMap({ active }: { active: number }) {
  const pts = [
    { x: 60, y: 60, n: "Hà Nội", d: [0, 3] },
    { x: 90, y: 200, n: "Ninh Bình", d: [1, 2] },
    { x: 250, y: 90, n: "Hạ Long", d: [2, 3] },
  ];
  return (
    <svg viewBox="0 0 320 260" className="w-full" role="img" aria-label="Route map">
      <path d="M60 60 C 40 120, 70 170, 90 200 S 220 170, 250 90 S 120 40, 60 60" fill="none" className="stroke-primary/40" strokeWidth="2" strokeDasharray="6 6" />
      {pts.map((p) => {
        const on = p.d.includes(active);
        return (
          <g key={p.n}>
            <circle cx={p.x} cy={p.y} r={on ? 12 : 7} className={on ? "fill-accent" : "fill-primary"} />
            {on && <circle cx={p.x} cy={p.y} r="20" className="fill-accent/20" />}
            <text x={p.x + 18} y={p.y + 5} className="fill-foreground font-display text-[15px] font-semibold">{p.n}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Itinerary() {
  const { t, lang } = useLang();
  const [day, setDay] = useState(0);
  const d = C.days[day]!;
  return (
    <Section id="itinerary" className="bg-secondary">
      <Heading kicker="02">{lang === "vi" ? "Lịch trình chi tiết" : "Detailed itinerary"}</Heading>
      <div className="mb-10 flex flex-wrap gap-2">
        {C.days.map((x, i) => (
          <button key={i} onClick={() => setDay(i)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${i === day ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-primary"}`}>
            {t(x.label)}
          </button>
        ))}
      </div>
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div key={day} className="animate-fade-up">
          <h3 className="mb-6 font-display text-3xl font-semibold text-primary">{t(d.title)}</h3>
          <ol className="relative border-l-2 border-primary/20 pl-6">
            {d.stops.map((s, i) => (
              <li key={i} className="mb-8 last:mb-0">
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent" />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-primary px-2 py-0.5 font-mono text-xs text-primary-foreground">{s.time}</span>
                  {s.buffer && <span className="rounded-md border border-gold bg-gold/15 px-2 py-0.5 text-xs font-medium text-foreground">⏱ {t(s.buffer)}</span>}
                </div>
                <p className="mt-2 font-semibold text-foreground">{t(s.t)}</p>
                <p className="text-sm text-muted-foreground">{t(s.d)}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="h-fit rounded-2xl border border-border bg-card p-5 shadow-soft lg:sticky lg:top-24">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">{lang === "vi" ? "Bản đồ hành trình" : "Route map"}</p>
          <RouteMap active={day} />
        </div>
      </div>
    </Section>
  );
}

function Pricing() {
  const { t } = useLang();
  const p = C.pricing;
  return (
    <Section id="pricing">
      <Heading kicker="03">{t(p.title)}</Heading>
      <div className="grid gap-6 md:grid-cols-3">
        {p.packages.map((k) => (
          <div key={k.price} className={`rounded-2xl border p-8 ${k.featured ? "border-primary bg-primary text-primary-foreground shadow-glow md:-translate-y-3" : "border-border bg-card"}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest ${k.featured ? "text-gold" : "text-accent"}`}>{t(k.name)}</p>
            <p className="mt-4 font-display text-4xl font-semibold">{k.price}<span className="ml-1 font-sans text-sm font-normal opacity-70">{t(p.per)}</span></p>
            <p className="mt-2 text-sm opacity-80">{t(k.note)}</p>
            <a href="#contact" className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold ${k.featured ? "bg-accent text-accent-foreground" : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}>{t(C.hero.book)}</a>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <List title={t(p.incTitle)} items={p.included.map(t)} mark="✓" good />
        <List title={t(p.excTitle)} items={p.excluded.map(t)} mark="✕" />
      </div>
    </Section>
  );
}

function List({ title, items, mark, good }: { title: string; items: string[]; mark: string; good?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      <h4 className="mb-4 font-display text-2xl font-semibold text-primary">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className={`font-bold ${good ? "text-primary" : "text-destructive"}`}>{mark}</span>{i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Video() {
  const { t } = useLang();
  const [play, setPlay] = useState(false);
  return (
    <Section id="video" className="bg-primary text-primary-foreground">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">04</p>
        <h2 className="font-display text-4xl font-semibold md:text-5xl">{t(C.video.title)}</h2>
        <p className="mt-3 opacity-80">{t(C.video.body)}</p>
      </div>
      <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-2xl shadow-glow">
        {play ? (
          <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${C.video.youtubeId}?autoplay=1`} title="Tour trailer" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
        ) : (
          <button onClick={() => setPlay(true)} className="group relative h-full w-full" aria-label="Play trailer">
            <img src={trangAn} alt="" loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute inset-0 bg-hero-overlay opacity-60" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-3xl text-accent-foreground transition-transform group-hover:scale-110">▶</span>
          </button>
        )}
      </div>
    </Section>
  );
}

function Accordion({ items }: { items: { q: { vi: string; en: string }; a: { vi: string; en: string } }[] }) {
  const { t } = useLang();
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((it, i) => (
        <details key={i} className="group p-6" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
            {t(it.q)}
            <span className="text-xl text-accent transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(it.a)}</p>
        </details>
      ))}
    </div>
  );
}

function Policies() {
  const { t } = useLang();
  return (
    <Section id="policies">
      <div className="grid gap-12 lg:grid-cols-2">
        <div><Heading kicker="05">{t(C.policies.title)}</Heading><Accordion items={C.policies.items} /></div>
        <div id="faq" className="scroll-mt-20"><Heading kicker="06">{t(C.faq.title)}</Heading><Accordion items={C.faq.items} /></div>
      </div>
    </Section>
  );
}

function Contact() {
  const { t } = useLang();
  const c = C.contact;
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary";
  return (
    <Section id="contact" className="bg-secondary">
      <div className="grid gap-10 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:grid-cols-2 md:p-12">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">07</p>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">{t(c.title)}</h2>
          <p className="mt-4 opacity-80">{t(c.body)}</p>
          <div className="mt-8 space-y-3">
            {c.hotlines.map((h, i) => (
              <a key={i} href="tel:" className="flex items-center gap-3 font-display text-3xl font-semibold text-gold">☎ {h}</a>
            ))}
          </div>
          <div className="mt-8 space-y-1 text-sm opacity-85">
            <p className="font-semibold">{t(c.agency)}</p>
            <p>{t(c.address)}</p>
            <p>{c.email}</p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3 rounded-2xl bg-card p-6 text-card-foreground">
          {sent ? (
            <p className="py-16 text-center font-display text-2xl text-primary">{t(c.form.thanks)}</p>
          ) : (
            <>
              <input required className={input} placeholder={t(c.form.name)} />
              <input required type="tel" className={input} placeholder={t(c.form.phone)} />
              <div className="grid grid-cols-2 gap-3">
                <input type="number" min={1} className={input} placeholder={t(c.form.guests)} />
                <input type="date" className={input} aria-label={t(c.form.date)} />
              </div>
              <button className="w-full rounded-full bg-accent py-3.5 font-semibold text-accent-foreground">{t(c.form.submit)}</button>
            </>
          )}
        </form>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">© 2026 {t(c.agency)}</p>
    </Section>
  );
}

export function TourPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <Hero />
      <Overview />
      <Itinerary />
      <Pricing />
      <Video />
      <Policies />
      <Contact />
    </div>
  );
}
