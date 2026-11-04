"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const members = [
  {
    name: "Gabriel Henrique Pioli",
    image: "/images/equipe/gabriel.png",
    alt: "Gabriel Henrique Pioli no evento NEXT da FIAP",
    role: "Integrante da equipe APEX",
    bio: [
      "Minha trajetória começou na área de marketing, onde tive contato com criatividade, comunicação e diferentes formas de resolver problemas. Hoje, estou explorando novas possibilidades na tecnologia, com vontade de aprender, experimentar e descobrir em qual área quero me especializar.",
      "Acredito que estar aberto ao conhecimento é uma das melhores formas de crescer. Gosto da ideia de enfrentar novos desafios, desenvolver habilidades e aproveitar cada experiência como uma oportunidade de evolução. Na APEX, quero contribuir com dedicação, novas ideias e disposição para aprender junto com a equipe.",
    ],
    linkedin: "https://www.linkedin.com/in/gabriel-pioli-a52b89409/",
    github: "https://github.com/gabrielpiolifernandes-afk",
  },
  {
    name: "João Victor Tozzatti Matiro",
    image: "/images/equipe/joao.png",
    alt: "João Victor Tozzatti Matiro no evento NEXT da FIAP",
    role: "Scrum Master · APEX",
    bio: [
      "Minha trajetória profissional começou no Exército Brasileiro, onde atuei por quase um ano e vivi experiências que levo comigo até hoje, principalmente sobre disciplina, responsabilidade e trabalho em equipe. Atualmente, trabalho com logística na Mobility Brasil, enquanto busco uma oportunidade de estágio para iniciar minha transição para a área de tecnologia, com interesse especial em Dados e Inteligência Artificial.",
      "Sou uma pessoa proativa, criativa e que gosta de colocar as ideias em prática. Na APEX, tenho o privilégio de atuar como Scrum Master, uma experiência que tem sido muito divertida e enriquecedora. Organizar nossas atividades, acompanhar a evolução do grupo e aprender com cada desafio tem me mostrado o quanto gosto de colaborar, construir soluções e evoluir junto com outras pessoas.",
    ],
    linkedin: "https://www.linkedin.com/in/joão-victor-tozzatti-matiro/",
    github: "https://github.com/jtozzatti",
  },
  {
    name: "Pedro Diagro Lopes",
    image: "/images/equipe/pedro.png",
    alt: "Pedro Diagro Lopes no evento NEXT da FIAP",
    role: "Integrante da equipe APEX",
    bio: [
      "Sou movido pela curiosidade, pela vontade de crescer e pelo desejo de transformar ideias em realidade. Gosto de explorar novas possibilidades, aprender com os desafios e buscar oportunidades que me façam evoluir.",
      "Tenho uma mentalidade empreendedora e gosto de pensar no futuro, tanto pessoal quanto profissionalmente. Valorizo a independência, a iniciativa e a coragem de sair da zona de conforto. Meu objetivo é construir uma trajetória significativa, desenvolver minhas habilidades e, com o tempo, assumir novos desafios e responsabilidades de liderança.",
    ],
    linkedin: "https://www.linkedin.com/in/pedro-diagro-lopes-7a57b3350/",
    github: "https://github.com/PedroDiagro",
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const member = selected === null ? null : members[selected];

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section id="equipe" className="apex-divider scroll-mt-24 border-t px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="apex-accent mb-4 text-sm font-semibold tracking-[0.25em]">05 / NOSSA EQUIPE</p>
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          As mentes por trás da <span className="apex-accent">APEX.</span>
        </h2>
        <p className="apex-muted mt-6 max-w-2xl leading-relaxed">
          Três integrantes, uma mesma direção. Conheça quem está construindo este projeto.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((person, index) => (
            <button
              key={person.name}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Abrir perfil de ${person.name}`}
              className="apex-card group overflow-hidden rounded-2xl border text-left transition-all duration-300 hover:-translate-y-2 hover:border-[var(--apex-accent)] hover:shadow-[0_18px_55px_-28px_var(--apex-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--apex-accent)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black/20">
                <Image src={person.image} alt={person.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">APEX / TEAM</span>
              </div>
              <div className="flex items-center justify-between gap-3 p-5 md:p-6">
                <div>
                  <p className="apex-muted mb-2 text-[11px] font-semibold tracking-[0.18em]">INTEGRANTE 0{index + 1}</p>
                  <h3 className="text-lg font-bold leading-snug">{person.name}</h3>
                </div>
                <span aria-hidden="true" className="apex-soft apex-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl transition-transform group-hover:translate-x-1">↗</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {member && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#020711]/80 p-4 backdrop-blur-xl sm:p-8"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
        >
          <div role="dialog" aria-modal="true" aria-label={`Perfil de ${member.name}`} className="apex-card relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border shadow-2xl">
            <button type="button" onClick={() => setSelected(null)} aria-label="Fechar perfil" autoFocus className="apex-soft apex-accent absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border text-xl transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-[var(--apex-accent)]">×</button>
            <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="relative min-h-[240px] md:min-h-[520px]">
                <Image src={member.image} alt={member.alt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="apex-accent mb-4 text-xs font-bold tracking-[0.25em]">APEX / TEAM PROFILE</p>
                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{member.name}</h3>
                <p className="apex-muted mt-3 text-sm">{member.role}</p>
                <div className="apex-rule my-6 h-px" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]">Sobre o integrante</p>
                <div className="space-y-4">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph} className="apex-muted text-sm leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                <div className="apex-divider mt-7 flex flex-wrap gap-3 border-t pt-5">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="apex-soft apex-accent rounded-lg border px-4 py-2 text-sm font-semibold transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-[var(--apex-accent)]" aria-label={`LinkedIn de ${member.name} (abre em nova aba)`}>LinkedIn ↗</a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="apex-soft apex-accent rounded-lg border px-4 py-2 text-sm font-semibold transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-[var(--apex-accent)]" aria-label={`GitHub de ${member.name} (abre em nova aba)`}>GitHub ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
