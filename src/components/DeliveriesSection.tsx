
"use client";

import { useState } from "react";

type DeliveryCategory = "sprint1" | "sprint2" | "gs";

const categories: {
  id: DeliveryCategory;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "sprint1",
    title: "Sprint 01",
    subtitle: "Primeira etapa",
  },
  {
    id: "sprint2",
    title: "Sprint 02",
    subtitle: "Segunda etapa",
  },
  {
    id: "gs",
    title: "Global Solution",
    subtitle: "GS",
  },
];

const members = [
  {
    id: "gabriel",
    name: "Gabriel Henrique Pioli",
    image: "/images/equipe/gabriel.png",
    initials: "GP",
  },
  {
    id: "joao",
    name: "João Victor Tozzatti Matiro",
    image: "/images/equipe/joao.png",
    initials: "JV",
  },
  {
    id: "pedro",
    name: "Pedro Diagro Lopes",
    image: "/images/equipe/pedro.png",
    initials: "PD",
  },
];

export default function DeliveriesSection() {
  const [activeCategory, setActiveCategory] =
    useState<DeliveryCategory>("sprint1");

  const [expandedMember, setExpandedMember] =
    useState<string | null>(null);

  function changeCategory(category: DeliveryCategory) {
    setActiveCategory(category);
    setExpandedMember(null);
  }

  const currentCategory = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section
      id="entregas"
      aria-labelledby="deliveries-title"
      className="apex-divider scroll-mt-24 border-t px-5 py-24 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* CABEÇALHO */}
        <div className="mb-12">
          <p className="apex-accent mb-4 text-xs font-bold tracking-[0.26em]">
            04 / APEX DELIVERIES
          </p>

          <h2
            id="deliveries-title"
            className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl"
          >
            Nosso trabalho,
            <span className="apex-accent"> nossa evolução.</span>
          </h2>

          <p className="apex-muted mt-6 max-w-2xl leading-relaxed">
            Explore a jornada acadêmica da APEX. Cada etapa
            reúne as entregas individuais da equipe,
            organizadas por Sprint e Global Solution.
          </p>
        </div>

        {/* ABAS */}
        <div
          role="group"
          aria-label="Selecionar etapa acadêmica"
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {categories.map((category, index) => {
            const active = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => changeCategory(category.id)}
                aria-pressed={active}
                className={[
                  "group relative overflow-hidden rounded-2xl border p-5 text-left",
                  "transition-all duration-300",
                  "hover:-translate-y-1",
                  "focus-visible:outline-2 focus-visible:outline-offset-4",
                  "focus-visible:outline-[var(--apex-accent)]",
                  active
                    ? "apex-soft border-[var(--apex-accent)]"
                    : "apex-neutral-card hover:border-[var(--apex-accent)]",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span className="apex-accent text-xs font-bold tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden="true"
                    className={[
                      "text-lg transition-transform duration-300",
                      active
                        ? "apex-accent translate-x-0 opacity-100"
                        : "apex-muted opacity-50 group-hover:translate-x-1",
                    ].join(" ")}
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight">
                  {category.title}
                </h3>

                <p className="apex-muted mt-1 text-xs">
                  {category.subtitle}
                </p>

                <div
                  className={[
                    "mt-5 h-0.5 w-full transition-all duration-300",
                    active
                      ? "bg-[var(--apex-accent)]"
                      : "apex-rule",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>

        {/* CONTEÚDO DA ABA SELECIONADA */}
        <div className="apex-card mt-6 overflow-hidden rounded-3xl border">

          <div className="apex-divider flex flex-wrap items-center justify-between gap-4 border-b p-6 md:p-8">
            <div>
              <p className="apex-accent mb-2 text-xs font-bold tracking-[0.2em]">
                ETAPA SELECIONADA
              </p>

              <h3 className="text-2xl font-bold md:text-3xl">
                {currentCategory?.title}
              </h3>

              <p className="apex-muted mt-2 text-sm">
                Selecione um integrante para visualizar suas entregas.
              </p>
            </div>

            <span className="apex-soft apex-accent rounded-full border px-4 py-2 text-xs font-semibold">
              03 INTEGRANTES
            </span>
          </div>

          {/* INTEGRANTES */}
          <div className="space-y-3 p-4 sm:p-6 md:p-8">
            {members.map((member) => {
              const expanded = expandedMember === member.id;
              const panelId = `delivery-${activeCategory}-${member.id}`;

              return (
                <div
                  key={member.id}
                  className={[
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    expanded
                      ? "apex-soft border-[var(--apex-accent)]"
                      : "apex-neutral-card hover:border-[var(--apex-accent)]",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() =>
                      setExpandedMember(
                        expanded ? null : member.id
                      )
                    }
                    className="flex w-full items-center gap-4 p-4 text-left focus-visible:outline-2 focus-visible:outline-[var(--apex-accent)] sm:p-5"
                  >
                    {/* AVATAR */}
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-[var(--apex-accent)]/30 bg-[var(--apex-accent)]/10">
                      <img
                        src={member.image}
                        alt=""
                        className="h-full w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                          const fallback =
                            event.currentTarget.nextElementSibling;
                          fallback?.classList.remove("hidden");
                        }}
                      />

                      <div className="apex-accent hidden h-full w-full items-center justify-center text-sm font-bold">
                        {member.initials}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold leading-snug">
                        {member.name}
                      </p>

                      <p className="apex-muted mt-1 text-xs">
                        Visualizar entregas
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={[
                        "apex-accent flex h-9 w-9 shrink-0 items-center justify-center",
                        "rounded-full border border-[var(--apex-accent)]/30",
                        "text-xl transition-transform duration-300",
                        expanded ? "rotate-45" : "",
                      ].join(" ")}
                    >
                      +
                    </span>
                  </button>

                  {/* PAINEL EXPANSÍVEL */}
                  {expanded && (
                    <div
                      id={panelId}
                      className="apex-divider border-t px-4 pb-5 pt-5 sm:px-5"
                    >
                      <div className="rounded-xl border border-dashed border-[var(--apex-accent)]/30 p-5 sm:p-6">
                        <p className="apex-accent mb-3 text-[10px] font-bold tracking-[0.2em]">
                          REGISTRO DE ENTREGA
                        </p>

                        <h4 className="text-lg font-bold">
                          Trabalho ainda não cadastrado
                        </h4>

                        <p className="apex-muted mt-3 max-w-2xl text-sm leading-relaxed">
                          Aqui serão apresentados o título do
                          trabalho, sua descrição, as tecnologias
                          utilizadas e os arquivos ou links
                          correspondentes.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          <span className="apex-tag rounded-lg border px-3 py-2 text-xs">
                            Descrição pendente
                          </span>

                          <span className="apex-tag rounded-lg border px-3 py-2 text-xs">
                            Arquivo pendente
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RODAPÉ DO PAINEL */}
          <div className="apex-divider border-t px-6 py-5 md:px-8">
            <p className="apex-muted text-xs tracking-[0.08em]">
              APEX / CHALLENGE MOTIVA 2026 / HISTÓRICO ACADÊMICO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
