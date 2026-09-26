import Nav from "./Nav";
import RoamingCat from "./RoamingCat";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">{children}</main>
      <footer className="border-t border-[var(--border)] py-6 text-center font-mono-tag text-xs text-[var(--text-dim)]">
        © {new Date().getFullYear()} Pallavi Jain
      </footer>
      <RoamingCat />
    </div>
  );
}
