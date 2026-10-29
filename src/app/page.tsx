
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050D16] text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-8 py-6">
        <h1 className="text-2xl font-bold tracking-[0.2em] text-cyan-400">
          APEX
        </h1>

        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#objetivo">Objetivo</a>
          <a href="#projetos">Projetos</a>
          <a href="#equipe">Equipe</a>
        </nav>
      </header>

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-cyan-400">
          CHALLENGE MOTIVA 2026
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Excelência não é destino.
          <span className="block text-cyan-400">
            É consequência.
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-slate-400">
          Somos a APEX. Transformamos desafios em oportunidades
          por meio de tecnologia, inteligência artificial e inovação.
        </p>

        <a
          href="#objetivo"
          className="mt-10 rounded-lg bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Conheça nosso propósito
        </a>
      </section>
    </main>
  );
}
