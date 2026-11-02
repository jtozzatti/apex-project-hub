"use client";

import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Objetivo", href: "#objetivo" },
  { label: "NEXU", href: "#projetos" },
  { label: "Road to NEXT", href: "#jornada" },
  { label: "Entregas", href: "#entregas" },
  { label: "Equipe", href: "#equipe" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="apex-mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="apex-soft apex-accent flex h-10 w-10 items-center justify-center rounded-lg border transition hover:brightness-125"
      >
        <span aria-hidden="true" className="text-xl leading-none">{open ? "×" : "☰"}</span>
      </button>
      {open && (
        <nav
          id="apex-mobile-navigation"
          aria-label="Navegação mobile"
          className="apex-card absolute right-0 top-12 z-[100] w-[min(17rem,calc(100vw-2rem))] rounded-xl border p-3 shadow-2xl"
        >
          <p className="apex-muted px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-widest">Explorar APEX</p>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-[var(--apex-soft)] focus-visible:outline-2 focus-visible:outline-[var(--apex-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
