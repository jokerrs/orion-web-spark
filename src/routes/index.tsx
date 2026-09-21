import { createFileRoute } from "@tanstack/react-router";
import datacenterHero from "@/assets/datacenter-hero.jpg";
import fiberMacro from "@/assets/fiber-macro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orion Telekom — VPS, shared i dedicated hosting u Srbiji" },
      {
        name: "description",
        content:
          "Hosting u telekom klasi: NVMe serveri, 99,9% uptime SLA, DDoS zaštita i podrška na srpskom 24/7. Data centar u Beogradu.",
      },
      {
        property: "og:title",
        content: "Orion Telekom — VPS, shared i dedicated hosting u Srbiji",
      },
      {
        property: "og:description",
        content:
          "Hosting u telekom klasi: NVMe serveri, 99,9% uptime SLA, DDoS zaštita i podrška na srpskom 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-48 -left-40 h-[560px] w-[560px] -rotate-12 bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[520px] w-[520px] rotate-12 bg-accent/10 blur-3xl" />

      {/* nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
              O
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Orion Telekom
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#cene" className="transition-colors hover:text-foreground">
              Hosting
            </a>
            <a
              href="#infrastruktura"
              className="transition-colors hover:text-foreground"
            >
              Infrastruktura
            </a>
            <a href="#cene" className="transition-colors hover:text-foreground">
              Cene
            </a>
          </nav>
          <a
            href="#kontakt"
            className="rounded-lg bg-primary py-2 pr-3 pl-2 text-sm font-semibold text-primary-foreground ring-1 ring-primary/50 transition-colors hover:bg-accent"
          >
            <span className="mr-1 inline-block translate-y-0.5">→</span>
            Naruči
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
              <span className="size-1.5 rounded-full bg-primary" />
              Uptime garantovan 99,9% — Beograd DC
            </p>
            <h1 className="max-w-[42ch] font-display text-4xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Hosting koji diše u ritmu <span className="text-accent">mreže</span>.
            </h1>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-pretty text-muted-foreground">
              Orion Telekom pokreće servere u data centru telekom klase sa
              hladnom preciznošću. VPS, shared i dedicated — signal, kablovi,
              tihi rad. Bez drama.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#cene"
                className="rounded-lg bg-primary py-3 pr-4 pl-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/50 transition-colors hover:bg-accent"
              >
                Pogledaj planove{" "}
                <span className="ml-1 inline-block translate-y-0.5">→</span>
              </a>
              <a
                href="#infrastruktura"
                className="rounded-lg bg-card px-4 py-3 text-sm font-medium text-foreground/90 ring-1 ring-border transition-colors hover:text-foreground"
              >
                Infrastruktura
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-faint">
              <span>DDoS filtracija</span>
              <span>•</span>
              <span>NVMe diskovi</span>
              <span>•</span>
              <span>24/7 podrška na srpskom</span>
            </div>
          </div>

          {/* kinetic glass panel */}
          <div className="md:col-span-5">
            <div className="relative h-[420px]">
              <div className="kg-panel absolute inset-0 -rotate-6 rounded-[min(2vw,18px)] ring-1 ring-border backdrop-blur-xl" />
              <div className="kg-panel-2 absolute -right-6 top-10 h-[340px] w-[340px] rotate-6 rounded-[min(2vw,18px)] ring-1 ring-border backdrop-blur-xl" />
              <img
                src={datacenterHero}
                alt="Data centar Orion Telekom"
                width={1024}
                height={1280}
                className="absolute top-16 left-4 h-[300px] w-[300px] rotate-3 rounded-[min(2vw,14px)] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="cene" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 max-w-[48ch]">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-foreground">
              Izaberi snagu mreže
            </h2>
            <p className="mt-3 text-base text-pretty text-muted-foreground">
              Transparentni paketi. Migracija besplatna, otkazivanje kad god
              želiš.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* shared */}
            <div className="rounded-[min(1.2vw,14px)] bg-card p-6 ring-1 ring-border">
              <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                Hosting
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                Shared
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Za web stranice i projekte na startu.
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-foreground">
                  4.99
                </span>
                <span className="text-sm text-muted-foreground">€/mes</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> 25 GB NVMe prostora
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Neograničen promet
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> SSL sertifikat uključen
                </li>
              </ul>
              <a
                href="#kontakt"
                className="mt-7 block rounded-lg py-2.5 text-center text-sm font-medium text-foreground/90 ring-1 ring-border transition-colors hover:text-foreground"
              >
                Odaberi
              </a>
            </div>
            {/* VPS featured */}
            <div className="kg-panel relative rounded-[min(1.2vw,14px)] p-6 ring-1 ring-primary/30">
              <span className="absolute top-4 right-4 rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-accent uppercase">
                Najtraženije
              </span>
              <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                VPS
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                VPS Cloud
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Puna kontrola, skalabilnost po minutu.
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-foreground">
                  14.99
                </span>
                <span className="text-sm text-muted-foreground">€/mes</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-foreground/90">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> 8 vCPU · 16 GB RAM
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> 200 GB NVMe SSD
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Root pristup i backup
                </li>
              </ul>
              <a
                href="#kontakt"
                className="mt-7 block rounded-lg bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground ring-1 ring-primary/50 transition-colors hover:bg-accent"
              >
                Odaberi VPS
              </a>
            </div>
            {/* dedicated */}
            <div className="rounded-[min(1.2vw,14px)] bg-card p-6 ring-1 ring-border">
              <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
                Server
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                Dedicated
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Posvećen hardver za velika opterećenja.
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-foreground">
                  49.99
                </span>
                <span className="text-sm text-muted-foreground">€/mes</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> 2× Xeon · 128 GB RAM
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> 2× 2TB NVMe
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Posvećena IP adresa
                </li>
              </ul>
              <a
                href="#kontakt"
                className="mt-7 block rounded-lg py-2.5 text-center text-sm font-medium text-foreground/90 ring-1 ring-border transition-colors hover:text-foreground"
              >
                Odaberi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* infrastructure trust */}
      <section id="infrastruktura" className="relative z-10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
          <img
            src={fiberMacro}
            alt="Fiber optički kablovi u data centru"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover"
          />
          <div>
            <h2 className="max-w-[36ch] font-display text-3xl font-semibold tracking-tight text-balance text-foreground">
              Infrastruktura od telekom klase
            </h2>
            <p className="mt-3 max-w-[50ch] text-base text-pretty text-muted-foreground">
              Hladna preciznost iza svakog paketa podataka. Naš data centar u
              Beogradu radi 24/7 sa višestrukim napajanjem.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["99,9%", "Uptime SLA"],
                ["4ms", "Latencija u regionu"],
                ["N+1", "Višestruko napajanje"],
                ["24/7", "Podrška na srpskom"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[min(1vw,12px)] bg-card p-5 ring-1 ring-border"
                >
                  <p className="font-display text-2xl font-semibold text-accent">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* contact CTA */}
      <section id="kontakt" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="kg-panel relative overflow-hidden rounded-[min(1.6vw,20px)] p-8 ring-1 ring-primary/25 md:p-14">
            <div className="pointer-events-none absolute -top-24 -right-20 size-72 rotate-12 bg-accent/15 blur-3xl" />
            <div className="relative max-w-[40ch]">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
                Spremni da pustite signal?
              </h2>
              <p className="mt-4 text-base text-pretty text-foreground/90">
                Pošaljite upit i naš tim za infrastrukturu javi se u roku od
                jednog radnog dana.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:prodaja@oriontelekom.rs"
                  className="rounded-lg bg-primary py-3 pr-4 pl-3 text-sm font-semibold text-primary-foreground ring-1 ring-primary/50 transition-colors hover:bg-accent"
                >
                  prodaja@oriontelekom.rs{" "}
                  <span className="ml-1 inline-block translate-y-0.5">→</span>
                </a>
                <a
                  href="tel:+381110000000"
                  className="rounded-lg bg-background/40 px-4 py-3 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:text-accent"
                >
                  +381 11 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-border px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-md bg-primary/80 font-display text-xs font-bold text-primary-foreground">
              O
            </span>
            <span className="font-display font-medium text-foreground/80">
              Orion Telekom
            </span>
          </div>
          <p>© 2026 Orion Telekom · Beograd, Srbija</p>
        </div>
      </footer>
    </div>
  );
}
