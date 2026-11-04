import MobileMenu from "@/components/MobileMenu";

import { project } from "@/config/project";

import ApexLogo from "@/components/ApexLogo";

import ThemeSwitcher from "@/components/ThemeSwitcher";

import RoadToNext from "@/components/RoadToNext";

import DeliveriesSection from "@/components/DeliveriesSection";

import TeamSection from "@/components/TeamSection";

// Section

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

// Section

// Section

const navigation = [

  { label: "Objetivo", href: "#objetivo" },

  { label: "NEXU", href: "#projetos" },

  { label: "Road to NEXT", href: "#jornada" },

  { label: "Entregas", href: "#entregas" },

  { label: "Equipe", href: "#equipe" },

];

// Section

export default function Home() {

  return (

    <main className="apex-bg min-h-screen">

      {/* Section */}

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

            <MobileMenu />

            <a

              href="#projetos"

              className="apex-soft apex-accent hidden rounded-lg border px-4 py-2.5 text-sm font-semibold transition hover:brightness-110 xl:inline-flex"

            >

              Explorar projeto

            </a>

          </div>

        </div>

      </header>

      {/* Section */}

      <section

        id="inicio"

        className="apex-hero relative isolate flex min-h-[72svh] scroll-mt-24 items-center overflow-hidden px-5 py-16 sm:px-6 sm:py-20 md:min-h-[82vh] md:px-12 md:py-28 lg:px-20"

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

                CHALLENGE MOTIVA 2026–2027

              </p>

            </div>

            <h1 className="max-w-4xl text-[clamp(2.2rem,9vw,2.65rem)] font-black uppercase leading-[1.08] tracking-tight text-white md:text-[clamp(2.65rem,6.2vw,5.5rem)]">

              Excelência

              <span className="block">

                não é destino.

              </span>

              <span className="apex-accent block">

                É consequência.

              </span>

            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base md:mt-8 md:text-lg">

              Três mentes. Uma mesma direção.

              <span className="block">

                Tecnologia aplicada a desafios reais.

              </span>

            </p>

            {/* BOTÕES */}

            <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">

              <a

                href="#projetos"

                className="apex-button rounded-lg px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:brightness-110 md:px-7 md:py-4"

              >

                Explorar o projeto ↗

              </a>

              <a

                href="#jornada"

                className="rounded-lg border border-white/25 bg-black/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[var(--apex-accent)] md:px-7 md:py-4"

              >

                Nossa jornada →

              </a>

            </div>

          </div>

        </div>

        {/* ASSINATURA VISUAL */}

        <div className="absolute bottom-10 right-8 z-10 hidden flex-col items-end gap-2 text-[10px] tracking-[0.2em] text-slate-300/70 lg:flex">

          <span>APEX / 2026–2027</span>

          <span>TECHNOLOGY & INNOVATION</span>

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

      {/* Section */}

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

      {/* Section */}

            <section id="objetivo" className="apex-divider scroll-mt-24 border-t px-6 py-24 md:py-28">

        <div className="mx-auto max-w-6xl">

          <p className="apex-accent mb-4 text-sm font-semibold tracking-[0.25em]">01 / NOSSO OBJETIVO</p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">

            Mais do que desenvolver tecnologia. <span className="apex-accent">Queremos transformar ideias em impacto.</span>

          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div className="apex-neutral-card rounded-2xl border p-7 md:p-8">

              <p className="apex-accent mb-4 text-sm font-semibold">O DESAFIO</p>

              <h3 className="mb-4 text-2xl font-semibold">Tecnologia para problemas reais.</h3>

              <p className="apex-muted leading-relaxed">

                Nosso ponto de partida é desenvolver uma assistente de inteligência artificial para apoiar as operações rodoviárias da Motiva, tornando o registro de ocorrências mais ágil, organizado e inteligente.

              </p>

            </div>

            <div className="apex-soft rounded-2xl border p-7 md:p-8">

              <p className="apex-accent mb-4 text-sm font-semibold">NOSSA AMBIÇÃO</p>

              <h3 className="mb-4 text-2xl font-semibold">Ir além do que foi pedido.</h3>

              <p className="apex-muted leading-relaxed">

                Não queremos apenas cumprir requisitos. Queremos explorar novas tecnologias, testar ideias, aprender com os erros e desafiar nossos próprios limites. Cada projeto é uma oportunidade de evoluir como equipe e como futuros profissionais.

              </p>

            </div>

          </div>

          <div className="apex-rule mt-10 h-px w-full" />

          <p className="mt-8 text-center text-lg font-semibold leading-relaxed">

            Nosso objetivo não é apenas apresentar uma solução.

            <span className="apex-accent block">É construir algo que faça sentido fora da sala de aula.</span>

          </p>

        </div>

      </section>

      {/* Section */}

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

                      {/* CARD PRINCIPAL NEXU — apresentação visual conceitual */}

            <div className="apex-card mt-12 overflow-hidden rounded-3xl border transition duration-300 hover:border-[var(--apex-accent)]">

              <div className="grid items-center gap-10 p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:p-12">

                <div className="flex min-w-0 flex-col justify-center">

                  <span className="apex-soft apex-accent mb-6 w-fit rounded-full border px-4 py-2 text-xs font-semibold">

                    MVP DESENVOLVIDO

                  </span>

                  <h3 className="text-4xl font-bold tracking-tight md:text-5xl">{project.name}</h3>

                  <p className="apex-muted mt-6 max-w-lg leading-relaxed">

                    Assistente de inteligência artificial desenvolvido para apoiar profissionais de operações rodoviárias no registro de ocorrências, utilizando processamento de linguagem natural e interação por voz.

                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="apex-button rounded-lg px-5 py-3 text-sm font-semibold transition hover:brightness-110">

                      Explorar solução ↗

                    </a>

                    <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="apex-soft apex-accent rounded-lg border px-5 py-3 text-sm font-semibold transition hover:brightness-110">

                      Ver no GitHub ↗

                    </a>

                  </div>

                </div>

                {/* Ilustração decorativa: não representa uma tela funcional do NEXU */}

                <div aria-label="Ilustração conceitual de uma central rodoviária com áudio e mapa de conexões" role="img" className="relative min-w-0 overflow-hidden rounded-2xl border border-cyan-400/30 bg-[#030d17] p-3 text-white shadow-[0_0_45px_-20px_rgba(0,200,255,0.65)] sm:p-5">

                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50" style={{backgroundImage:"linear-gradient(rgba(0,200,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,.055) 1px,transparent 1px)",backgroundSize:"22px 22px"}} />

                  <div className="relative mb-4 flex items-center justify-between gap-3 border-b border-cyan-400/15 pb-3">

                    <div className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"/><span className="text-[10px] font-bold tracking-[0.2em] text-cyan-200">NEXU / OPERATIONS</span></div>

                    <span className="text-[9px] tracking-wider text-cyan-200/50">VISUAL CONCEITUAL</span>

                  </div>

                  <div className="relative flex gap-3">

                    <div className="flex w-9 shrink-0 flex-col items-center gap-4 rounded-xl border border-cyan-400/20 bg-[#081c2a] py-4 text-cyan-300 sm:w-11">

                      <span aria-hidden="true">◉</span><span aria-hidden="true">▤</span><span aria-hidden="true">⌁</span><span aria-hidden="true">⌖</span>

                    </div>

                    <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2">

                      <div className="flex min-h-[215px] min-w-0 flex-col rounded-xl border border-cyan-400/25 bg-[#071a29]/95 p-3">

                        <div className="flex items-center justify-between gap-2"><span className="text-[10px] text-cyan-100">Gravando ocorrência...</span><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400"/></div>

                        <div className="my-auto flex h-24 items-center justify-center gap-[3px] overflow-hidden">

                          {Array.from({length:35},(_,i)=>(<span key={i} className="nexu-wave-bar w-[3px] shrink-0 rounded-full bg-cyan-400/85" style={{height:`${14 + ((i*17+11)%65)}%`,animationDelay:`${(i%9)*-0.13}s`}}/>))}

                        </div>

                        <div className="flex items-center justify-between border-t border-cyan-400/10 pt-3 text-[9px] text-cyan-200/65"><span>ÁUDIO / ENTRADA</span><span>00:24</span></div>

                        <div className="mt-3 rounded-lg border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-center text-[10px] font-medium text-cyan-200"><span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400"/>Processando com IA...</div>

                      </div>

                      <div className="relative min-h-[215px] overflow-hidden rounded-xl border border-cyan-400/25 bg-[#071a29]/95">

                        <div className="absolute left-3 top-3 z-10 text-[10px] text-cyan-100">Mapa de conexões</div>

                        <svg aria-hidden="true" viewBox="0 0 240 240" className="h-full min-h-[215px] w-full" fill="none" xmlns="http://www.w3.org/2000/svg">

                          <g stroke="#12405a" strokeWidth="1.3"><path d="M0 52L55 79L107 37L174 61L240 19M0 148L62 122L107 37L141 135L212 107L240 145M25 240L62 122L141 135L176 209L240 184M55 79L141 135L174 61L212 107L176 209M0 194L62 122L107 195L176 209"/></g>

                          <g stroke="#00c8ff" strokeWidth="2" strokeLinecap="round" opacity=".85"><path d="M55 79L107 37L174 61L212 107L176 209"/><path d="M62 122L141 135L212 107"/></g>

                          <g fill="#00c8ff"><circle cx="55" cy="79" r="4"/><circle cx="107" cy="37" r="5"/><circle cx="174" cy="61" r="4"/><circle cx="212" cy="107" r="7"/><circle cx="141" cy="135" r="6"/><circle cx="176" cy="209" r="4"/><circle cx="62" cy="122" r="4"/></g>

                          <g fill="#00c8ff" opacity=".16"><circle cx="212" cy="107" r="17"/><circle cx="141" cy="135" r="14"/><circle cx="107" cy="37" r="12"/></g>

                        </svg>

                        <span className="absolute bottom-3 right-3 text-[9px] tracking-widest text-cyan-200/60">NETWORK / LIVE</span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

</section>

      {/* Section */}

      <RoadToNext />

      {/* Section */}

      <DeliveriesSection />

      {/* Section */}

      <TeamSection />

    </main>

  );

}
