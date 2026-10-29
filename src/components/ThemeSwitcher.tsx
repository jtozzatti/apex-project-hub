
"use client";

import { useEffect, useState } from "react";

const themes = [
    { id: "cyan", name: "Cyan Original", color: "#00C8FF" },
    { id: "blue", name: "Azul Elétrico", color: "#3B82F6" },
    { id: "purple", name: "Roxo Nebula", color: "#A78BFA" },
    { id: "green", name: "Esmeralda Tech", color: "#34D399" },
];

export default function ThemeSwitcher() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("cyan");

    useEffect(() => {
        const saved = localStorage.getItem("apex-theme") || "cyan";
        const valid = themes.some((theme) => theme.id === saved);
        const selected = valid ? saved : "cyan";

        document.documentElement.dataset.theme = selected;
        setActive(selected);
    }, []);

    function changeTheme(theme: string) {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("apex-theme", theme);
        setActive(theme);
        setOpen(false);
    }

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label="Escolher tema de cores"
                aria-expanded={open}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:border-white/40"
            >
                ◉
            </button>

            {open && (
                <div className="absolute right-0 top-12 z-[100] w-56 rounded-xl border border-white/15 bg-[#0B1522] p-3 shadow-2xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                        Aparência
                    </p>

                    {themes.map((theme) => (
                        <button
                            type="button"
                            key={theme.id}
                            onClick={() => changeTheme(theme.id)}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-white transition hover:bg-white/10"
                        >
                            <span
                                className="h-4 w-4 rounded-full"
                                style={{ backgroundColor: theme.color }}
                            />

                            <span className="flex-1">{theme.name}</span>

                            {active === theme.id && <span>✓</span>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
