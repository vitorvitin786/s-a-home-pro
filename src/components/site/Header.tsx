import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const links = [
  ["Home", "/"],
  ["Services", "/#services"],
  ["Residential", "/#residential"],
  ["Commercial", "/#commercial"],
  ["About", "/about"],
  ["Reviews", "/#reviews"],
  ["Contact", "/#estimate"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="lux-header">
      <div className="container-x header-inner">
        <Link to="/" onClick={() => setOpen(false)}>
          <BrandLogo className="header-logo" />
        </Link>
        <nav className={open ? "nav-open" : ""}>
          {links.map(([label, to]) => (
            <a key={label} href={to} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a href="/#estimate" className="header-cta">
          Get a Free Estimate
        </a>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
