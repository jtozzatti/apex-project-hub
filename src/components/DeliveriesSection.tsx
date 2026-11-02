"use client";



import { useState } from "react";



type DeliveryCategory = "sprint1" | "sprint2";

type MemberId = "joao" | "pedro" | "gabriel";

type DeliveryLink = { label: string; href: string };

type Delivery = {

  id: string;

  category: DeliveryCategory;

  memberId: MemberId;

  subject: string;

  title: string;

  summary: string;

  details: string;

  technologies: string[];

  links: DeliveryLink[];

  note?: string;

};



const categories: { id: DeliveryCategory; title: string; subtitle: string }[] = [

  { id: "sprint1", title: "Sprint 01", subtitle: "Fundamentos e primeiras entregas" },

  { id: "sprint2", title: "Sprint 02", subtitle: "Próxima etapa" },


];



const members: Record<MemberId, { name: string; image: string; initials: string }> = {

  joao: { name: "João Victor Tozzatti Matiro", image: "/images/equipe/joao.png", initials: "JV" },

  pedro: { name: "Pedro Diagro Lopes", image: "/images/equipe/pedro.png", initials: "PD" },

  gabriel: { name: "Gabriel Henrique Pioli", image: "/images/equipe/gabriel.png", initials: "GP" },

};
// Para disponibilizar materiais, adicione { label: "Ver relatório", href: "https\://..." }// ao array links do trabalho correspondente. Não use URLs fictícias.
const deliveries: Delivery[] = [

  {

    id: "neuromorfica", category: "sprint1", memberId: "joao",

    subject: "Cluster Computing, Computação Neuromórfica e Supercomputadores",

    title: "Sinalização Rodoviária Inteligente",

    summary: "Estudo de viabilidade para complementar o triângulo refletivo com sensoriamento de vibrações, processamento local e reforço luminoso temporário.",

    details: "Comparação entre sinalização convencional e uma possível arquitetura com sensor piezoelétrico e LEDs. O relatório discute limitações, acionamentos indevidos, autonomia e integração futura com registros operacionais, sem afirmar eficácia experimental.",

    technologies: ["Smart Roads", "Sensoriamento", "Edge Computing", "Viabilidade técnica"],

    links: [], note: "Estudo conceitual; não houve protótipo físico.",

  },

  {

    id: "genai", category: "sprint1", memberId: "joao",

    subject: "Generative AI & Advanced Nets",

    title: "Blueprint de Arquitetura do Assistente de IA",

    summary: "Planejamento de uma solução de IA generativa para apoiar profissionais da Motiva por meio de linguagem natural e voz.",

    details: "O blueprint contempla o problema operacional, personas, dados, modelos, agentes, interface e fluxo de informações, com atenção à privacidade, rastreabilidade e confirmação humana. A arquitetura orienta a evolução do assistente NEXU.",

    technologies: ["Generative AI", "LLMs", "Agentes de IA", "Arquitetura"],

    links: [], note: "Blueprint arquitetural; não representa a implementação completa do produto.",

  },

  {

    id: "governanca", category: "sprint1", memberId: "joao",

    subject: "Governança em IA e Business Analytics",

    title: "Governança e Segurança da IA Operacional",

    summary: "Definição de critérios de acesso, privacidade, rastreabilidade e confirmação humana para interações por voz nas operações rodoviárias.",

    details: "A documentação aborda permissões por persona, responsabilidades, inventário de dados, LGPD, logs de auditoria, riscos de alucinação e limites para decisões automatizadas. Inclui roteiro de interação governada e defesa da proposta.",

    technologies: ["Governança de IA", "LGPD", "Rastreabilidade", "Human-in-the-loop"],

    links: [], note: "Critérios propostos; não pressupõem implementação integral no MVP.",

  },

  {

    id: "rpa", category: "sprint1", memberId: "pedro",

    subject: "AI for Robotic Process Automation",

    title: "Triagem Inteligente de Ocorrências Rodoviárias",

    summary: "Automação do recebimento e encaminhamento de solicitações operacionais com apoio de IA para interpretação de relatos.",

    details: "O projeto organiza o fluxo de entrada por e-mail e planilhas, classificação e extração de informações, registro estruturado e encaminhamento. A solução prepara a conexão com funções acionáveis por um agente de voz em sprints futuras.",

    technologies: ["Python", "RPA", "LLM", "Automação"],

    links: [],

  },

  {

    id: "quantica", category: "sprint1", memberId: "pedro",

    subject: "Computação Quântica & IA",

    title: "Computação Quântica Aplicada à Mobilidade",

    summary: "Estudo exploratório de possíveis aplicações quânticas em otimização de recursos, análise de ocorrências e proteção de dados rodoviários.",

    details: "A atividade investiga três frentes: distribuição e roteamento de recursos, priorização e padrões de ocorrências e segurança da informação. O relatório final e a frente escolhida pelo grupo ainda serão conferidos.",

    technologies: ["Quantum Computing", "Otimização", "Quantum ML", "Segurança"],

    links: [], note: "Resumo provisório baseado no enunciado; relatório pendente de conferência.",

  },

  {

    id: "visao", category: "sprint1", memberId: "pedro",

    subject: "Visão Computacional",

    title: "Visão Computacional para Monitoramento Rodoviário",

    summary: "Pesquisa de datasets e modelos para identificar objetos e condições relevantes em imagens de ambientes rodoviários.",

    details: "O trabalho prevê arquitetura de captura, inferência e integração com os módulos de voz e interface, além de uma prova de conceito para comparação de modelos pré-treinados. Detecções devem ser confirmadas por operadores antes do registro definitivo.",

    technologies: ["Computer Vision", "Python", "Datasets", "Detecção de objetos"],

    links: [], note: "Pesquisa e prova de conceito; não é um sistema operacional implantado.",

  },

  {

    id: "frontend", category: "sprint1", memberId: "gabriel",

    subject: "Front End & Mobile Development",

    title: "Plataforma Operacional — MVP Front-end",

    summary: "Construção da interface inicial para consultas e histórico de interações de profissionais de campo da Motiva.",

    details: "Projeto preparatório em React e Vite com navegação entre telas, componentes reutilizáveis, listagens de informações operacionais e comandos simulados. A base foi pensada para evoluir nas próximas sprints.",

    technologies: ["React", "Vite", "JavaScript", "Componentização"],

    links: [], note: "Interações simuladas, sem agente de voz integrado nesta etapa.",

  },

  {

    id: "iot", category: "sprint1", memberId: "gabriel",

    subject: "Physical Computing, Embedded AI, Robotics & Cognitive IoT",

    title: "IoT e Ativação por Voz para Operações Rodoviárias",

    summary: "Proposta de interação por palavra de ativação e coleta de dados de sensores com ESP32 para integração futura à plataforma.",

    details: "A atividade envolve arquitetura IoT, coleta de exemplos de áudio para wake word, avaliação do modelo e leitura de sensores em um microcontrolador ESP32. Os materiais incluem código e documentação da proposta.",

    technologies: ["ESP32", "IoT", "Wake Word", "Sistemas embarcados"],

    links: [], note: "Os resultados quantitativos do modelo ainda precisam de conferência.",

  },

  {

    id: "pln", category: "sprint1", memberId: "gabriel",

    subject: "Processamento de Linguagem Natural, Chatbots & Virtual Agents",

    title: "Compreensão de Linguagem para Operações Rodoviárias",

    summary: "Preparação da camada de compreensão de comandos operacionais, considerando intenções, entidades e transcrições de voz.",

    details: "A atividade trabalha taxonomia de intenções, vocabulário rodoviário, corpus anotado, normalização de transcrições e baseline de identificação de intenções e entidades. Os materiais incluem áudios, anotações e notebook de experimentação.",

    technologies: ["Python", "NLP", "NLU", "Speech-to-Text"],

    links: [], note: "Métricas e resultados finais ainda precisam de validação.",

  },

];



function MemberAvatar({ memberId }: { memberId: MemberId }) {

  const member = members[memberId];

  const [failed, setFailed] = useState(false);

  return (

    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--apex-accent)]/30 bg-[var(--apex-accent)]/10">

      {failed ? (

        <span className="apex-accent text-xs font-bold">{member.initials}</span>

      ) : (
// As imagens ficam em public/images/equipe, conforme o componente original.// eslint-disable-next-line @next/next/no-img-element
        <img src={member.image} alt="" className="h-full w-full object-cover" onError={() => setFailed(true)} />

      )}

    </div>

  );

}



export default function DeliveriesSection() {

  const [activeCategory, setActiveCategory] = useState<DeliveryCategory | null>(null);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const visible = deliveries.filter((item) => item.category === activeCategory);



  return (

    <section id="entregas" aria-labelledby="deliveries-title" className="apex-divider scroll-mt-24 border-t px-5 py-24 md:px-8 md:py-28">

      <div className="mx-auto max-w-6xl">

        <div className="mb-12">

          <p className="apex-accent mb-4 text-xs font-bold tracking-[0.26em]">04 / APEX DELIVERIES</p>

          <h2 id="deliveries-title" className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">

            Nosso trabalho,<span className="apex-accent"> nossa evolução.</span>

          </h2>

          <p className="apex-muted mt-6 max-w-2xl leading-relaxed">

            Explore as entregas acadêmicas da APEX. Cada projeto representa uma etapa do nosso desenvolvimento no Challenge Motiva 2026.

          </p>

        </div>



        <div role="group" aria-label="Selecionar etapa acadêmica" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((category, index) => {
            const active = activeCategory === category.id;
            const count = deliveries.filter((item) => item.category === category.id).length;
            return (
              <button
                key={category.id}
                type="button"
                aria-expanded={active}
                aria-controls="apex-deliveries-panel"
                onClick={() => {
                  setActiveCategory(active ? null : category.id);
                  setExpandedId(null);
                }}
                className={`group flex min-h-[148px] flex-col justify-between rounded-2xl border p-5 text-left transition-all duration-300 hover:border-[var(--apex-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--apex-accent)] sm:p-6 ${active ? "apex-soft border-[var(--apex-accent)]" : "apex-neutral-card"}`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="apex-accent text-xs font-bold tracking-widest">{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className={`apex-accent text-xl transition-transform duration-300 ${active ? "rotate-180" : ""}`}>⌄</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    <p className="apex-muted text-xs">{category.subtitle}</p>
                    <span className="apex-accent text-[10px] font-semibold">{count ? `${String(count).padStart(2, "0")} TRABALHOS` : "EM BREVE"}</span>
                  </div>
                  <div className={`mt-5 h-0.5 w-full ${active ? "bg-[var(--apex-accent)]" : "apex-rule"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {activeCategory && (
        <div id="apex-deliveries-panel" className="apex-card mt-6 overflow-hidden rounded-3xl border">

          <div className="apex-divider flex flex-wrap items-center justify-between gap-4 border-b p-6 md:p-8">

            <div>

              <p className="apex-accent mb-2 text-xs font-bold tracking-[0.2em]">ETAPA SELECIONADA</p>

              <h3 className="text-2xl font-bold md:text-3xl">{categories.find((c) => c.id === activeCategory)?.title}</h3>

              <p className="apex-muted mt-2 text-sm">{visible.length ? "Conheça os trabalhos e seus responsáveis." : "As entregas desta etapa serão adicionadas em breve."}</p>

            </div>

            <span className="apex-soft apex-accent rounded-full border px-4 py-2 text-xs font-semibold">

              {String(visible.length).padStart(2, "0")} {visible.length === 1 ? "TRABALHO" : "TRABALHOS"}

            </span>

          </div>



          {visible.length ? (

            <div className="grid grid-cols-1 gap-4 p-4 sm:p-6 md:grid-cols-2 md:p-8 xl:grid-cols-3">

              {visible.map((delivery, index) => {

                const expanded = expandedId === delivery.id;

                const detailId = `delivery-details-${delivery.id}`;

                return (

                  <article key={delivery.id} className="apex-neutral-card flex min-w-0 flex-col rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--apex-accent)] sm:p-6">

                    <div className="mb-4 flex items-center justify-between gap-2">

                      <span className="apex-accent text-[10px] font-bold tracking-[0.2em]">ENTREGA {String(index + 1).padStart(2, "0")}</span>

                      <span className="apex-tag rounded-full border px-3 py-1 text-[10px]">{activeCategory === "sprint1" ? "SPRINT 01" : "SPRINT 02"}</span>

                    </div>

                    <p className="apex-muted mb-2 text-xs font-semibold leading-relaxed">{delivery.subject}</p>

                    <h4 className="text-lg font-bold leading-snug">{delivery.title}</h4>

                    <p className="apex-muted mt-3 text-sm leading-relaxed">{delivery.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {delivery.technologies.map((tech) => <span key={tech} className="apex-tag rounded-lg border px-2.5 py-1.5 text-[11px]">{tech}</span>)}

                    </div>

                    <div className="mt-auto pt-6">

                      <button type="button" aria-expanded={expanded} aria-controls={detailId}

                        onClick={() => setExpandedId(expanded ? null : delivery.id)}

                        className="apex-accent rounded-lg py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apex-accent)]">

                        {expanded ? "Ocultar detalhes −" : "Ver detalhes +"}

                      </button>

                      {expanded && (

                        <div id={detailId} className="apex-divider mt-2 border-t pt-4">

                          <p className="apex-muted text-sm leading-relaxed">{delivery.details}</p>

                          {delivery.note && <p className="apex-muted mt-3 text-xs italic">{delivery.note}</p>}

                          {delivery.links.length > 0 && (

                            <div className="mt-4 flex flex-wrap gap-3">

                              {delivery.links.map((link) => (

                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"

                                  className="apex-accent rounded-lg border border-[var(--apex-accent)]/30 px-3 py-2 text-xs font-semibold hover:border-[var(--apex-accent)]">

                                  {link.label} ↗

                                </a>

                              ))}

                            </div>

                          )}

                        </div>

                      )}

                      <div className="apex-divider mt-4 flex items-center gap-3 border-t pt-4">

                        <MemberAvatar memberId={delivery.memberId} />

                        <div className="min-w-0">

                          <p className="text-xs font-semibold leading-snug">{members[delivery.memberId].name}</p>

                          <p className="apex-muted mt-1 text-[11px]">Responsável pela entrega</p>

                        </div>

                      </div>

                    </div>

                  </article>

                );

              })}

            </div>

          ) : (

            <div className="px-6 py-16 text-center md:px-8">

              <p className="apex-accent text-sm font-bold">PRÓXIMOS CAPÍTULOS</p>

              <p className="apex-muted mx-auto mt-3 max-w-md text-sm leading-relaxed">Estamos construindo essa etapa. Os trabalhos serão publicados conforme a evolução do Challenge.</p>

            </div>

          )}

          <div className="apex-divider border-t px-6 py-5 md:px-8">

            <p className="apex-muted text-xs tracking-[0.08em]">APEX / CHALLENGE MOTIVA 2026 / HISTÓRICO ACADÊMICO</p>

          </div>

        </div>
        )}

      </div>

    </section>

  );

}
