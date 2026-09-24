import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Landmark, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="archive-container flex h-18 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Ganpati Dharohar home">
          <span className="flex size-10 items-center justify-center rounded-full border border-gold/50 bg-secondary text-primary"><Landmark aria-hidden="true" /></span>
          <span><strong className="block font-display text-lg leading-none text-primary">Ganpati Dharohar</strong><small className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Digital Heritage Archive</small></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} className={`nav-link ${pathname === item.to ? "nav-link-active" : ""}`}>{item.label}</Link>)}
        </nav>
        <div className="hidden lg:block"><Button asChild><Link to="/explore">Explore Heritage <ArrowUpRight /></Link></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-md flex-col gap-1">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={`nav-link py-3 ${pathname === item.to ? "nav-link-active" : ""}`}>{item.label}</Link>)}</div></nav>}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-primary text-primary-foreground"><div className="archive-container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]"><div><div className="flex items-center gap-3"><Landmark /><h2 className="font-display text-2xl">Ganpati Dharohar</h2></div><p className="mt-4 max-w-xl text-sm leading-7 text-primary-foreground/75">A college Community Engagement Project documenting and preserving Mumbai's Ganpati heritage through research, field work and community participation.</p><p className="mt-6 text-xs uppercase tracking-[0.16em] text-gold-light">College Community Engagement Project · [Add project year]</p></div><nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">{navItems.map((item) => <Link key={item.to} to={item.to} className="text-primary-foreground/75 hover:text-primary-foreground">{item.label}</Link>)}<Link to="/survey-results" className="text-primary-foreground/75 hover:text-primary-foreground">Survey Results</Link></nav></div><div className="border-t border-primary-foreground/15"><div className="archive-container py-4 text-xs text-primary-foreground/60">Document → Digitize → Share → Create Awareness → Preserve</div></div></footer>;
}
