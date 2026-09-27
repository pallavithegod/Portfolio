import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import RoamingCat from "./RoamingCat";
import ScrollToneController from "./ScrollToneController";
import SmoothScroll from "./SmoothScroll";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen">
      <Nav />
      <ScrollToneController />
      <SmoothScroll>
        <div className="flex min-h-screen flex-col">
          <main className={`mx-auto w-full max-w-3xl flex-1 px-6 pb-12 ${isHome ? "pt-12" : "pt-24"}`}>{children}</main>
          <footer className="border-t border-[var(--border)] py-6 text-center font-mono-tag text-xs text-[var(--text-dim)]">
            © {new Date().getFullYear()} Pallavi Jain
          </footer>
        </div>
      </SmoothScroll>
      <RoamingCat />
    </div>
  );
}
