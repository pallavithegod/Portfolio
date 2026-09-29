import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import RoamingCat from "./RoamingCat";
import ScrollToneController from "./ScrollToneController";
import SmoothScroll from "./SmoothScroll";
import { profile } from "../data/content";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const linkedIn = profile.socials.find((social) => social.label === "LinkedIn");

  return (
    <div className="min-h-screen">
      <Nav />
      <ScrollToneController />
      <SmoothScroll>
        <div className="flex min-h-screen flex-col">
          <main className={`mx-auto w-full max-w-3xl flex-1 px-6 pb-12 ${isHome ? "pt-12" : "pt-24"}`}>{children}</main>
          <footer className="border-t border-[var(--border)] py-6 font-mono-tag text-xs text-[var(--text-dim)]">
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Pallavi Jain</span>
              <div className="flex items-center gap-3">
                <a href={`mailto:${profile.email}`} className="font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent)]">
                  Say hello ↗
                </a>
                <span aria-hidden="true" className="text-[var(--border)]">·</span>
                <a href={linkedIn?.url} target="_blank" rel="noreferrer" className="font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent)]">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </footer>
        </div>
      </SmoothScroll>
      <RoamingCat />
    </div>
  );
}
