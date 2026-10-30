
import Image from "next/image";

const milestones = [
  {
    number: "01",
    label: "O QUE CONQUISTAMOS",
    title: "NEXT / 2º lugar",
    description:
      "Uma conquista para celebrar o trabalho em equipe e tudo o que aprendemos até aqui.",
  },
  {
    number: "02",
    label: "NOSSO PRESENTE",
    title: "Challenge Motiva 2026",
    description:
      "Um novo desafio para transformar ideias em soluções reais, com tecnologia e colaboração.",
  },
  {
    number: "03",
    label: "NOSSA AMBIÇÃO",
    title: "Em busca do 1º lugar",
    description:
      "Seguimos evoluindo. O próximo capítulo ainda está sendo escrito.",
  },
];

export default function RoadToNext() {
  return (
    <section
      id="jornada"
      aria-labelledby="road-to-next-title"
      className="apex-divider scroll-mt-24 border-t px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* CABEÇALHO */}
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="apex-accent mb-4 text-xs font-semibold tracking-[0.28em] md:text-sm">
              03 / ROAD TO NEXT
            </p>

            <h2
              id="road-to-next-title"
              className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight md:text-6xl"
            >
              Não chegamos até aqui
              <span className="apex-accent block">
                para parar aqui.
              </span>
            </h2>
          </div>

          <p className="apex-muted max-w-sm text-sm leading-relaxed md:text-base">
            Cada conquista deixa uma marca. Cada novo desafio nos dá
            mais um motivo para continuar.
          </p>
        </div>

        {/* FOTO + HISTÓRIA */}
        <div className="apex-card grid overflow-hidden rounded-[1.75rem] border shadow-2xl lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">

          {/* FOTOGRAFIA ORIGINAL */}
          <div className="relative min-w-0 bg-[#090b17]">

            <Image
              src="/images/next-team-team.jpg"
              alt="Gabriel, João Victor e Pedro comemorando juntos no NEXT da FIAP, segurando os shapes do evento"
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="block h-auto w-full"
              quality={90}
            />

            {/* IDENTIFICAÇÃO DA CONQUISTA */}
            <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">

              <span className="rounded-full border border-white/30 bg-black/65 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-md sm:text-xs">
                FIAP NEXT
              </span>

              <span className="rounded-full border border-white/30 bg-black/65 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-md sm:text-xs">
                2º LUGAR
              </span>

            </div>
          </div>

          {/* TEXTO DA CONQUISTA */}
          <div className="flex min-w-0 flex-col justify-center p-7 sm:p-10 lg:p-12">

            <div className="mb-7 h-1 w-14 rounded-full bg-[var(--apex-accent)]" />

            <p className="apex-accent mb-5 text-xs font-bold tracking-[0.22em]">
              UMA CONQUISTA. UM NOVO COMEÇO.
            </p>

            <h3 className="text-3xl font-black leading-[1.12] tracking-tight sm:text-4xl xl:text-5xl">
              O segundo lugar foi uma conquista.

              <span className="apex-accent mt-3 block">
                O primeiro é a nossa próxima missão.
              </span>
            </h3>

            <p className="apex-muted mt-7 max-w-lg text-sm leading-relaxed sm:text-base">
              Celebramos o que construímos juntos no NEXT.
              Agora, levamos essa experiência para novos desafios,
              com a mesma vontade de aprender, criar e ir além.
            </p>

            <div className="apex-rule my-9 h-px w-full" />

            <p className="apex-accent text-xs font-semibold tracking-[0.2em]">
              APEX / NEXT / 2026
            </p>

            <p className="apex-muted mt-2 text-sm">
              Três mentes. Uma mesma direção.
            </p>

          </div>
        </div>

        {/* LINHA DO TEMPO */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">

          {milestones.map((item, index) => (
            <div
              key={item.number}
              className="apex-neutral-card relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--apex-accent)] md:p-7"
            >

              <div className="mb-7 flex items-center justify-between gap-3">

                <span className="apex-accent text-3xl font-black tracking-tight">
                  {item.number}
                </span>

                <span className="apex-muted text-[10px] font-semibold tracking-[0.14em]">
                  {index === 0 ? "✓" : index === 1 ? "●" : "↗"}
                </span>

              </div>

              <p className="apex-accent mb-3 text-[10px] font-bold tracking-[0.18em]">
                {item.label}
              </p>

              <h4 className="mb-3 text-xl font-bold tracking-tight">
                {item.title}
              </h4>

              <p className="apex-muted text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* ASSINATURA */}
        <p className="apex-muted mt-8 text-center text-xs tracking-[0.1em]">
          APEX / TRÊS MENTES, UMA MESMA DIREÇÃO.
        </p>

      </div>
    </section>
  );
}
