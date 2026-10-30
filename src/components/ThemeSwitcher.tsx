"use client";

import { useEffect, useRef, useState } from "react";

const themes = [
  { id: "cyan", name: "Cyan Original", color: "#00C8FF" },
  { id: "blue", name: "Azul Elétrico", color: "#60A5FA" },
  { id: "purple", name: "Roxo Nebula", color: "#A78BFA" },
  { id: "green", name: "Esmeralda Tech", color: "#34D399" },
  { id: "charcoal", name: "Cinza Chumbo", color: "#7E8794" },
  { id: "black", name: "Preto Absoluto", color: "#171717" },
  { id: "white", name: "Branco Minimalista", color: "#F4F5F7" },
  { id: "monochrome", name: "Monochrome", color: "#F5F5F5" },
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("cyan");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("apex-theme") || "cyan";
    const selected = themes.some((theme) => theme.id === saved) ? saved : "cyan";
    document.documentElement.dataset.theme = selected;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(selected);
  }, []);

  useEffect(() => {
    if (!open) return;
    function closeOnOutside(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function changeTheme(theme: string) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("apex-theme", theme);
    setActive(theme);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button type="button" onClick={() => setOpen(!open)} aria-label="Escolher tema de cores" aria-expanded={open} aria-haspopup="menu" className="apex-soft flex h-10 w-10 items-center justify-center rounded-lg border apex-accent transition hover:brightness-125">◉</button>
      {open && (
        <div role="menu" aria-label="Aparência" className="apex-card absolute right-0 top-12 z-[100] w-60 rounded-xl border p-3 shadow-2xl">
          <p className="apex-muted mb-3 text-xs font-semibold uppercase tracking-widest">Aparência</p>
          {themes.map((theme) => (
            <button role="menuitemradio" aria-checked={active === theme.id} type="button" key={theme.id} onClick={() => changeTheme(theme.id)} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-[var(--apex-soft)]">
              <span className="h-4 w-4 shrink-0 rounded-full border border-black/10" style={{ backgroundColor: theme.color }} />
              <span className="flex-1">{theme.name}</span>
              {active === theme.id && <span aria-hidden="true">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
