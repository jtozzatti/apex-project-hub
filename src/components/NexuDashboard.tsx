"use client";

import { useState } from "react";

type View = "audio" | "data" | "review";
const bars = Array.from({ length: 45 }, (_, i) => 9 + Math.abs(Math.sin(i * 1.31) * Math.cos(i * .43)) * 47);
const tabs: { id: View; label: string; symbol: string }[] = [
  { id: "audio", label: "Áudio", symbol: "◉" },
  { id: "data", label: "Dados", symbol: "▤" },
  { id: "review", label: "Revisão", symbol: "✓" },
];

export default function NexuDashboard() {
  const [view, setView] = useState<View>("audio");
  return (
    <div className="nexu-demo relative w-full overflow-hidden rounded-2xl border p-3 shadow-2xl sm:p-4" aria-label="Demonstração visual do painel NEXU">
      <div className="mb-3 flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--apex-accent)] shadow-[0_0_12px_var(--apex-accent)]" />
          <span className="text-[11px] font-bold tracking-[.16em] text-white">NEXU / OPERATIONS</span>
        </div>
        <span className="rounded-full border border-white/15 px-2 py-1 text-[9px] font-semibold tracking-widest text-slate-300">DEMO VISUAL</span>
      </div>
      <div className="grid min-h-[305px] grid-cols-[42px_minmax(0,1fr)] gap-2 sm:grid-cols-[44px_minmax(0,1fr)_minmax(0,.95fr)] sm:gap-3">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-black/30 p-1.5">
          {tabs.map((tab) => (
            <button key={tab.id} type="button" onClick={() => setView(tab.id)} aria-label={`Visualizar ${tab.label}`} aria-pressed={view === tab.id} title={tab.label} className={`flex h-9 w-9 items-center justify-center rounded-lg border text-lg transition ${view === tab.id ? "border-[var(--apex-accent)] bg-[var(--apex-soft)] text-[var(--apex-accent)]" : "border-transparent text-slate-400 hover:border-white/20 hover:text-white"}`}>
              {tab.symbol}
            </button>
          ))}
          <span className="mt-auto pb-2 text-[9px] font-bold text-slate-500 [writing-mode:vertical-rl]">NEXU AI</span>
        </div>
        <div className="flex min-w-0 flex-col gap-3">
          <div className="nexu-demo-panel flex min-h-[150px] flex-1 flex-col rounded-xl border p-3">
            {view === "audio" ? (
              <>
                <div className="flex items-center justify-between gap-2"><span className="text-[11px] font-semibold text-slate-200">Relato por áudio</span><span className="text-[10px] text-[var(--apex-accent)]">● Exemplo</span></div>
                <p className="mt-2 text-[10px] text-slate-400">Visualização ilustrativa de uma gravação</p>
                <div className="my-auto flex h-20 items-center justify-center gap-[2px] overflow-hidden" aria-label="Forma de onda ilustrativa">
                  {bars.map((height, index) => <span key={index} className="nexu-wave-bar w-[3px] shrink-0 rounded-full bg-[var(--apex-accent)]" style={{ height: `${height}px`, animationDelay: `${(index % 9) * -0.13}s` }} />)}
                </div>
                <div className="flex justify-between text-[10px] text-slate-400"><span>00:00</span><span>00:24</span></div>
              </>
            ) : view === "data" ? (
              <>
                <p className="text-[11px] font-semibold text-slate-200">Informações estruturadas</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                  {[ ["Rodovia", "BR-116"], ["KM", "402"], ["Sentido", "Sul"], ["Tipo", "Pane"] ].map(([label,value]) => <div key={label} className="rounded-lg border border-white/10 bg-black/20 p-2"><p className="text-slate-400">{label}</p><p className="mt-1 font-semibold text-white">{value}</p></div>)}
                </div>
              </>
            ) : (
              <>
                <p className="text-[11px] font-semibold text-slate-200">Confirmação humana</p>
                <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3"><p className="text-[10px] text-slate-400">Relato ilustrativo</p><p className="mt-2 text-xs leading-relaxed text-white">Veículo parado no acostamento. Possível pane mecânica.</p></div>
                <div className="mt-auto pt-3 text-[10px] text-slate-400">A revisão pelo operador faz parte do fluxo do produto.</div>
              </>
            )}
          </div>
          <div className="nexu-demo-panel rounded-xl border p-3">
            <div className="flex items-center gap-2"><span className="nexu-spin text-lg text-[var(--apex-accent)]">✦</span><span className="text-[11px] font-semibold text-white">Processamento com IA</span></div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="nexu-progress h-full w-2/3 rounded-full bg-[var(--apex-accent)]" /></div>
            <p className="mt-2 text-[10px] text-slate-400">Animação demonstrativa • Sem processamento real</p>
          </div>
        </div>
        <div className="nexu-demo-panel relative col-span-2 min-h-[220px] overflow-hidden rounded-xl border sm:col-span-1 sm:min-h-0">
          <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "linear-gradient(25deg, transparent 47%, rgba(255,255,255,.06) 48%, transparent 49%),linear-gradient(120deg, transparent 46%, rgba(255,255,255,.05) 47%, transparent 48%)", backgroundSize: "42px 52px, 55px 40px" }} />
          <svg viewBox="0 0 260 320" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g fill="none" stroke="rgba(148,163,184,.22)" strokeWidth="1.2"><path d="M-10 38L90 70 175 22 275 52M-10 115L75 90 155 135 275 92M-10 205L80 180 170 220 275 188M-10 290L85 250 155 280 275 265"/><path d="M40 -10L80 90 45 180 95 330M145 -10L120 90 180 175 155 330M230 -10L205 105 240 215 215 330"/></g>
            <path d="M42 24 C180 35 58 105 127 132 S230 182 171 220 S85 273 230 311" fill="none" stroke="var(--apex-accent)" strokeWidth="3.5" strokeLinecap="round" />
            {[ [42,24], [127,132], [171,220], [230,311] ].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="15" fill="var(--apex-accent)" opacity=".15"/><circle cx={x} cy={y} r="7" fill="var(--apex-accent)"/><circle cx={x} cy={y} r="3" fill="#fff"/></g>)}
          </svg>
          <div className="absolute left-3 top-3 rounded-md border border-white/15 bg-[#07121e]/90 px-2.5 py-1.5 text-[10px] text-white">BR-116 · MAPA ILUSTRATIVO</div>
          <div className="absolute bottom-3 right-3 rounded-md border border-white/15 bg-[#07121e]/90 px-2 py-1 text-[10px] text-slate-300">4 pontos</div>
        </div>
      </div>
    </div>
  );
}
