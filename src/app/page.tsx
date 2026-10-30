
import { project } from "@/config/project";

import ApexLogo from "@/components/ApexLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import NexuDashboard from "@/components/NexuDashboard";
import RoadToNext from "@/components/RoadToNext";
import DeliveriesSection from "@/components/DeliveriesSection";
import TeamSection from "@/components/TeamSection";

// ==========================================
// INDICADORES INTERATIVOS
// ==========================================

const indicators = [
  {
    number: "03",
    label: "INTEGRANTES",
    href: "#equipe",
  },
  {
    number: "01",
    label: "PROJETO",
    href: "#projetos",
  },
  {
    number: "01",
    label: "SPRINT CONCLUÍDA",
    href: "#entregas",
  },
  {
    number: "∞",
    label: "NOSSA AMBIÇÃO",
    href: "#jornada",
  },
];

// ==========================================
// TECNOLOGIAS DO NEXU
// ==========================================

const technologies = [
  "Python",
  "FastAPI",
  "Gemini",
  "Streamlit",
  "SQLite",
];

// ==========================================
// NAVEGAÇÃO
// ==========================================

const navigation = [
  { label: "Objetivo", href: "#objetivo" },
  { label: "NEXU", href: "#projetos" },
  { label: "Road to NEXT", href: "#jornada" },
  { label: "Entregas", href: "#entregas" },
  { label: "Equipe", href: "#equipe" },
];

// ==========================================
// PÁGINA PRINCIPAL
// ==========================================

export default function Home() {
  return (
    <main className="apex-bg min-h-screen">

      {/* ======================================
          HEADER / NAVEGAÇÃO
      ====================================== */}

      <header className="apex-header apex-divider sticky top-0 z-50 border-b backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-6">

          {/* LOGOTIPO APEX */}
          <a
            href="#inicio"
            className="group flex shrink-0 items-center gap-3"
            aria-label="APEX — Voltar ao início"
          >
            <ApexLogo
              size={58}
              className="transition duration-300 group-hover:scale-105"
            />

            <span className="text-lg font-bold tracking-[0.25em] sm:text-xl">
              APEX
            </span>
          </a>

          {/* LINKS DE NAVEGAÇÃO */}
          <nav
            className="hidden items-center gap-6 text-sm apex-muted lg:flex"
            aria-label="Navegação principal"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition-colors duration-300 hover:text-[var(--apex-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* AÇÕES DO HEADER */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            <ThemeSwitcher />

            <a
              href="#projetos"
              className="apex-soft apex-accent hidden rounded-lg border px-4 py-2.5 text-sm font-semibold transition hover:brightness-110 xl:inline-flex"
            >
              Explorar projeto
            </a>

          </div>
        </div>
      </header>

      {/* ======================================
          HERO / APRESENTAÇÃO APEX
      ====================================== */}

      <section
        id="inicio"
        className="apex-hero relative isolate flex min-h-[82vh] scroll-mt-24 items-center overflow-hidden px-6 py-28 md:px-12 lg:px-20"
      >

        {/* FOTOGRAFIA DA RODOVIA */}
        <div
          aria-hidden="true"
          className="apex-road-photo absolute inset-0 z-0"
        />

        {/* CAMADAS DE COR E CONTRASTE */}
        <div
          aria-hidden="true"
          className="apex-road-tint absolute inset-0 z-0"
        />

        <div
          aria-hidden="true"
          className="apex-hero-overlay absolute inset-0 z-0"
        />

        <div
          aria-hidden="true"
          className="apex-hero-bottom absolute inset-0 z-0"
        />

        {/* CONTEÚDO DA HERO */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--apex-accent)]" />

              <p className="apex-accent text-xs font-semibold tracking-[0.25em] md:text-sm">
                CHALLENGE MOTIVA 2026
              </p>
            </div>

            <h1 className="max-w-4xl text-[clamp(2.65rem,6.2vw,5.5rem)] font-black uppercase leading-[1.08] tracking-tight text-white">
              Excelência

              <span className="block">
                não é destino.
              </span>

              <span className="apex-accent block">
                É consequência.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
              Três mentes. Uma mesma direção.

              <span className="block">
                Tecnologia aplicada a desafios reais.
              </span>
            </p>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

              <a
                href="#projetos"
                className="apex-button rounded-lg px-7 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                Explorar o projeto ↗
              </a>

              <a
                href="#jornada"
                className="rounded-lg border border-white/25 bg-black/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[var(--apex-accent)]"
              >
                Nossa jornada →
              </a>

            </div>
          </div>
        </div>

        {/* ASSINATURA VISUAL */}
        <div className="absolute bottom-10 right-8 z-10 hidden flex-col items-end gap-2 text-[10px] tracking-[0.2em] text-slate-300/70 lg:flex">
          <span>APEX / 2026</span>
          <span>TECHNOLOGY &amp; INNOVATION</span>
          <span className="apex-accent">/// FUTURE AHEAD</span>
        </div>

        {/* INDICADOR DE ROLAGEM */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-[var(--apex-accent)] to-transparent" />
        </div>

      </section>

      {/* ======================================
          INDICADORES INTERATIVOS
      ====================================== */}

      <section className="relative z-20 -mt-8 px-6 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">

          {indicators.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={`Explorar ${item.label.toLowerCase()}`}
              className="apex-card group relative block rounded-2xl border p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--apex-accent)] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--apex-accent)] md:p-6"
            >

              <div className="flex items-start justify-between gap-2">

                <p className="apex-accent text-3xl font-bold tracking-tight md:text-4xl">
                  {item.number}
                </p>

                <span
                  aria-hidden="true"
                  className="apex-accent text-lg opacity-40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  ↗
                </span>

              </div>

              <p className="apex-muted mt-2 text-xs font-semibold tracking-[0.12em]">
                {item.label}
              </p>

              <div className="apex-rule mt-5 h-px w-full transition-all duration-300 group-hover:bg-[var(--apex-accent)]" />

            </a>
          ))}

        </div>
      </section>

      {/* ======================================
          01 / NOSSO OBJETIVO
      ====================================== */}

      <section
        id="objetivo"
        className="apex-divider scroll-mt-24 border-t px-6 py-24 md:py-28"
      >
        <div className="mx-auto max-w-6xl">

          <p className="apex-accent mb-4 text-sm font-semibold tracking-[0.25em]">
            01 / NOSSO OBJETIVO
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Transformando desafios reais em
            <span className="apex-accent">
              {" "}soluções inteligentes.
            </span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* DESAFIO */}
            <div className="apex-neutral-card rounded-2xl border p-7 md:p-8">

              <p className="apex-accent mb-4 text-sm font-semibold">
                O DESAFIO
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Operações que exigem agilidade.
              </h3>

              <p className="apex-muted leading-relaxed">
                O registro de ocorrências rodoviárias exige atenção,
                organização e precisão. Nosso desafio é explorar
                como a tecnologia pode apoiar esse processo,
                reduzindo tarefas manuais e facilitando a
                estruturação das informações.
              </p>

            </div>

            {/* PROPOSTA */}
            <div className="apex-soft rounded-2xl border p-7 md:p-8">

              <p className="apex-accent mb-4 text-sm font-semibold">
                NOSSA PROPOSTA
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Inteligência artificial como copiloto.
              </h3>

              <p className="apex-muted leading-relaxed">
                Estamos desenvolvendo uma solução que utiliza
                inteligência artificial para interpretar relatos
                por texto ou voz, organizar dados de ocorrências
                e permitir a revisão humana antes do registro.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================
          02 / NEXU — PROJETO PRINCIPAL
      ====================================== */}

      <section
        id="projetos"
        className="apex-divider scroll-mt-24 border-t px-6 py-24 md:py-28"
      >
        <div className="mx-auto max-w-6xl">

          <p className="apex-accent mb-4 text-sm font-semibold tracking-[0.25em]">
            02 / NOSSO PROJETO
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Da ideia à
            <span className="apex-accent"> execução.</span>
          </h2>

          <p className="apex-muted mt-6 max-w-2xl leading-relaxed">
            Conheça a solução que estamos desenvolvendo
            para transformar desafios em aplicações reais
            de tecnologia e inteligência artificial.
          </p>

          {/* CARD PRINCIPAL NEXU */}
          <div className="apex-card mt-12 overflow-hidden rounded-3xl border transition duration-300 hover:border-[var(--apex-accent)]">

            <div className="grid gap-8 p-7 md:grid-cols-2 md:p-12">

              {/* DESCRIÇÃO DO PROJETO */}
              <div className="flex flex-col justify-center">

                <span className="apex-soft apex-accent mb-6 w-fit rounded-full border px-4 py-2 text-xs font-semibold">
                  MVP DESENVOLVIDO
                </span>

                <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
                  {project.name}
                </h3>

                <p className="apex-muted mt-6 leading-relaxed">
                  Assistente de inteligência artificial desenvolvido
                  para apoiar profissionais de operações rodoviárias
                  no registro de ocorrências, utilizando processamento
                  de linguagem natural e interação por voz.
                </p>

                {/* TECNOLOGIAS */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="apex-tag rounded-lg border px-3 py-2 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GITHUB */}
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apex-button mt-10 w-fit rounded-lg px-6 py-3 font-semibold transition hover:brightness-110"
                >
                  Ver projeto no GitHub ↗
                </a>

              </div>

              {/* PAINEL DEMONSTRATIVO */}
              <NexuDashboard />

            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          03 / ROAD TO NEXT
      ====================================== */}

      <RoadToNext />

      {/* ======================================
          04 / ENTREGAS ACADÊMICAS
      ====================================== */}

      <DeliveriesSection />

      {/* ======================================
          05 / EQUIPE APEX
      ====================================== */}

      <TeamSection />

    </main>
  );
}
