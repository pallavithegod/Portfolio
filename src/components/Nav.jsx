import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  // close menu on navigation
  const handleNav = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-mono-tag text-sm text-[var(--text)]" onClick={handleNav}>
          pallavi<span className="text-[var(--accent)]">.</span>
        </NavLink>

        {/* desktop links */}
        <ul className="hidden gap-5 font-mono-tag text-[13px] sm:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* hamburger */}
        <button
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-[var(--text)] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-[var(--text)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-[var(--text)] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <ul className="flex flex-col border-t border-[var(--border)] px-6 py-4 font-mono-tag text-sm sm:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={handleNav}
                className={({ isActive }) =>
                  `block py-2.5 ${isActive ? "text-[var(--accent)]" : "text-[var(--text-dim)]"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
