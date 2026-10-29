import ApexLogo from "@/components/ApexLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050D16] text-white">

      {/* HEADER — Navegação principal */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050D16]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Identidade oficial da APEX */}
          <a
            href="#"
            className="group flex items-center gap-3"
            aria-label="APEX — Voltar ao início"
          >
            <ApexLogo
              size={58}
              className="transition duration-300 group-hover:scale-105"
            />

            <span className="text-xl font-bold tracking-[0.25em] text-white">
              APEX
            </span>
          </a>

          {/* Menu de navegação */}
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#objetivo" className="transition hover:text-cyan-400">
              Objetivo
            </a>

            <a href="#projetos" className="transition hover:text-cyan-400">
              Projetos
            </a>

            <a href="#jornada" className="transition hover:text-cyan-400">
              Road to NEXT
            </a>

            <a href="#equipe" className="transition hover:text-cyan-400">
              Equipe
            </a>
          </nav>

          {/* Botão de destaque */}
          <a
            href="#projetos"
            className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            {/* Ações do Header */}
<div className="flex items-center gap-3">
  <ThemeSwitcher />

  <a
    href="#projetos"
    className="rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:brightness-125 apex-soft apex-accent"
  >
                {/* Ações do Header */}
                <div className="flex items-center gap-3">
                  <ThemeSwitcher />

                  <a
                    href="#projetos"
                    className="rounded-lg border px-5 py-2.5 text-sm font-semibold transition hover:brightness-125 apex-soft apex-accent"
                  >
                    Explorar projeto
                  </a>
                </div>
  </a>
</div>

      {/* HERO — Apresentação cinematográfica */}
      <section className="relative isolate flex min-h-[88vh] scroll-mt-24 items-center overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        {/* Imagem de fundo: public/images/apex-hero.webp */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/apex-hero.webp')" }}
        />

        {/* Sobreposições para manter o texto legível */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050D16]/95 via-[#050D16]/65 to-[#050D16]/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#050D16] via-transparent to-[#050D16]/30"
        />
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <p className="text-xs font-semibold tracking-[0.35em] text-cyan-300 md:text-sm">
                CHALLENGE MOTIVA 2026
              </p>
            </div>

            <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Excelência
              <span className="block">não é destino.</span>
              <span className="block text-cyan-400">É consequência.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Três mentes. Uma mesma direção.
              <span className="block">Tecnologia aplicada a desafios reais.</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="rounded-lg bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              >
                Explorar o projeto ↗
              </a>
              <a
                href="#jornada"
                className="rounded-lg border border-white/25 bg-black/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10"
              >
                Nossa jornada →
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-8 hidden flex-col items-end gap-2 text-[10px] tracking-[0.2em] text-cyan-200/60 lg:flex">
          <span>APEX / 2026</span>
          <span>TECHNOLOGY & INNOVATION</span>
          <span className="text-cyan-400">/// FUTURE AHEAD</span>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
          <div className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* INDICADORES — Resumo da APEX */}
      <section className="relative z-10 -mt-8 px-6 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">

          {[
            { number: "03", label: "INTEGRANTES" },
            { number: "01", label: "PROJETO" },
            { number: "01", label: "SPRINT CONCLUÍDA" },
            { number: "∞", label: "NOSSA AMBIÇÃO" },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-cyan-400/20 bg-[#0B1B2A]/95 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <p className="text-3xl font-bold tracking-tight text-cyan-400 md:text-4xl">
                {item.number}
              </p>

              <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-slate-400">
                {item.label}
              </p>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-400/40 to-transparent" />
            </div>
          ))}

        </div>
      </section>

      {/* OBJETIVO — Nosso propósito */}
      <section
        id="objetivo"
        className="relative scroll-mt-24 border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-400">
            01 / NOSSO OBJETIVO
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Transformando desafios reais em
            <span className="text-cyan-400"> soluções inteligentes.</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* Problema */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="mb-4 text-sm font-semibold text-cyan-400">
                O DESAFIO
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Operações que exigem agilidade.
              </h3>

              <p className="leading-relaxed text-slate-400">
                O registro de ocorrências rodoviárias exige atenção,
                organização e precisão. Nosso desafio é explorar
                como a tecnologia pode apoiar esse processo,
                reduzindo tarefas manuais e facilitando a
                estruturação das informações.
              </p>
            </div>

            {/* Solução */}
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8">
              <p className="mb-4 text-sm font-semibold text-cyan-400">
                NOSSA PROPOSTA
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Inteligência artificial como copiloto.
              </h3>

              <p className="leading-relaxed text-slate-400">
                Estamos desenvolvendo uma solução que utiliza
                inteligência artificial para interpretar relatos
                por texto ou voz, organizar dados de ocorrências
                e permitir a revisão humana antes do registro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS — Soluções desenvolvidas */}
      <section
        id="projetos"
        className="relative scroll-mt-24 border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          {/* Cabeçalho */}
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-400">
            02 / NOSSOS PROJETOS
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Da ideia à
            <span className="text-cyan-400"> execução.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">
            Conheça as soluções que estamos desenvolvendo
            para transformar desafios em aplicações reais
            de tecnologia e inteligência artificial.
          </p>

          {/* Card do projeto */}
          <div className="group mt-12 overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0B1B2A] transition duration-300 hover:border-cyan-400/50">

            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">

              {/* Informações */}
              <div className="flex flex-col justify-center">

                <span className="mb-6 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                  MVP DESENVOLVIDO
                </span>

                <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
                  ROUTE <span className="text-cyan-400">AI</span>
                </h3>

                <p className="mt-6 leading-relaxed text-slate-400">
                  Assistente de inteligência artificial desenvolvido
                  para apoiar profissionais de operações rodoviárias
                  no registro de ocorrências, utilizando processamento
                  de linguagem natural e interação por voz.
                </p>

                {/* Tecnologias */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Python", "FastAPI", "Gemini", "Streamlit", "SQLite"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-cyan-200"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* GitHub */}
                <a
                  href="https://github.com/jtozzatti/motiva-challenge-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 w-fit rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Ver projeto no GitHub ↗
                </a>
              </div>
              {/* Representação visual */}
              <div className="flex min-h-72 items-center justify-center rounded-2xl border border-cyan-400/10 bg-[#07121E] p-8">

                <div className="w-full max-w-sm rounded-xl border border-cyan-400/20 bg-[#0D2535] p-6 shadow-[0_0_60px_rgba(0,200,255,0.06)]">

                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-cyan-300">
                      ROUTE AI / CONSOLE
                    </span>

                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded bg-cyan-400/20" />
                    <div className="h-3 w-full rounded bg-white/10" />
                    <div className="h-3 w-2/3 rounded bg-white/10" />
                  </div>

                  <div className="mt-8 rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
                    <p className="text-xs text-cyan-300">
                      STATUS DO SISTEMA
                    </p>

                    <p className="mt-2 text-sm text-slate-300">
                      Interface de apoio ao registro de ocorrências
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

