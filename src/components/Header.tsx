// src/components/Header.tsx
import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, ChevronRight } from "lucide-react";
import Logo from "../assets/header-logo.png.jpg";
import MarylandFlag from "../assets/maryland-flag.png.jpg";

export default function Header() {
  // open/close state
  const [openRoot, setOpenRoot] = useState(false);            // “Services” dropdown
  const [openRes, setOpenRes]   = useState(false);            // Residential submenu
  const closeTimers = useRef<{root?: number; res?: number}>({});

  // refs so we can move focus with arrow keys
  const btnServices = useRef<HTMLButtonElement>(null);
  const rootMenu    = useRef<HTMLUListElement>(null);

  const resLink     = useRef<HTMLAnchorElement>(null);
  const comLink     = useRef<HTMLAnchorElement>(null);
  const airbnbLink  = useRef<HTMLAnchorElement>(null);

  const resMenu     = useRef<HTMLUListElement>(null);
  const stdLink     = useRef<HTMLAnchorElement>(null);
  const deepLink    = useRef<HTMLAnchorElement>(null);
  const moveLink    = useRef<HTMLAnchorElement>(null);

  // helpers
  const clearTimer = (key: "root" | "res") => {
    if (closeTimers.current[key]) {
      window.clearTimeout(closeTimers.current[key]);
      closeTimers.current[key] = undefined;
    }
  };
  const scheduleClose = (key: "root" | "res", ms = 120) => {
    clearTimer(key);
    closeTimers.current[key] = window.setTimeout(() => {
      if (key === "root") { setOpenRoot(false); setOpenRes(false); }
      else setOpenRes(false);
    }, ms);
  };

  // close all on ESC anywhere
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenRes(false);
        setOpenRoot(false);
        btnServices.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // keyboard on the Services trigger button
  const onBtnKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenRoot(true);
      // focus first item (Residential)
      setTimeout(() => resLink.current?.focus(), 0);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpenRoot(true);
      setTimeout(() => airbnbLink.current?.focus(), 0);
    }
    if (e.key === "Escape") {
      setOpenRoot(false);
      setOpenRes(false);
    }
  };

  // utility: move focus vertically within a list of refs
  const move = (refs: React.RefObject<HTMLElement>[], dir: 1 | -1, current: EventTarget | null) => {
    const i = refs.findIndex(r => r.current === current);
    const next = (i + dir + refs.length) % refs.length;
    refs[next].current?.focus();
  };

  // keyboard inside ROOT menu (Residential/Commercial/Airbnb)
  const onRootItemKeyDown: React.KeyboardEventHandler<HTMLAnchorElement | HTMLDivElement> = (e) => {
    const list = [resLink, comLink, airbnbLink];
    if (e.key === "ArrowDown") { e.preventDefault(); move(list as any, 1, e.currentTarget); }
    if (e.key === "ArrowUp")   { e.preventDefault(); move(list as any, -1, e.currentTarget); }
    if (e.key === "Home")      { e.preventDefault(); (list[0].current as any)?.focus(); }
    if (e.key === "End")       { e.preventDefault(); (list[list.length-1].current as any)?.focus(); }
    if (e.key === "ArrowRight" && e.currentTarget === resLink.current) {
      // open Residential submenu
      setOpenRes(true);
      setTimeout(() => stdLink.current?.focus(), 0);
    }
    if (e.key === "ArrowLeft") {
      // go back to trigger
      btnServices.current?.focus();
      setOpenRes(false);
    }
  };

  // keyboard inside Residential submenu
  const onResItemKeyDown: React.KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    const list = [stdLink, deepLink, moveLink];
    if (e.key === "ArrowDown") { e.preventDefault(); move(list as any, 1, e.currentTarget); }
    if (e.key === "ArrowUp")   { e.preventDefault(); move(list as any, -1, e.currentTarget); }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setOpenRes(false);
      resLink.current?.focus();
    }
  };

  // close menus when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !rootMenu.current?.contains(target) &&
        !btnServices.current?.contains(target)
      ) {
        setOpenRoot(false);
        setOpenRes(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="relative z-[200] bg-white shadow-md">
      {/* Tier 1: Utility Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-clean-blue text-white text-sm">
        <div className="flex items-center space-x-2">
          <img
            src={MarylandFlag}
            alt="Maryland Flag"
            className="w-10 h-6 object-cover rounded"
            width={40}
            height={24}
            loading="lazy"
            decoding="async"
          />
          <span className="text-white/90 text-sm md:text-base">Proudly Serving Maryland</span>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="https://www.instagram.com/ClearSpacePros" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
          {/* Removed Blog */}
          <Link to="/newsletter">Newsletter</Link>
        </div>
      </div>

      {/* Tier 2: Main Header */}
      <div className="flex flex-col items-center justify-center py-4 bg-white border-b">
        <Link to="/" className="block">
          <img
            src={Logo}
            alt="ClearSpace Pros Logo"
            className="h-8 md:h-7 w-auto"
            width={160}
            height={56}
            loading="eager"
          />
        </Link>
        <p className="text-clean-blue text-sm mt-2">
          <a href="tel:6672188008" className="hover:underline">CALL FOR MORE INFO: (667) 218-8008</a>
        </p>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex justify-center py-3 bg-white" role="navigation" aria-label="Main">
        <ul className="flex space-x-6 items-center" role="menubar">
          <li><Link to="/about" className="text-navy hover:text-clean-blue" role="menuitem">About</Link></li>

          {/* Services (dropdown) */}
          <li
            className="relative"
            onMouseEnter={() => { clearTimer("root"); setOpenRoot(true); }}
            onMouseLeave={() => scheduleClose("root")}
          >
            <button
              ref={btnServices}
              aria-haspopup="true"
              aria-expanded={openRoot}
              aria-controls="menu-services"
              className="text-navy hover:text-clean-blue"
              role="menuitem"
              onKeyDown={onBtnKeyDown}
              onClick={() => setOpenRoot((v) => !v)}
            >
              Services
            </button>

            {/* Root dropdown */}
            <div
              id="menu-services"
              className={`absolute left-0 top-full -mt-px w-64 bg-white shadow-lg rounded-md border border-gray-100 z-[300]
                         ${openRoot ? "opacity-100 visible" : "opacity-0 invisible"} transition duration-150`}
              onMouseEnter={() => clearTimer("root")}
              onMouseLeave={() => scheduleClose("root")}
            >
              <ul ref={rootMenu} className="py-2" role="menu" aria-label="Services">
                {/* Residential (has submenu) */}
                <li
                  className="relative"
                  onMouseEnter={() => { clearTimer("res"); setOpenRes(true); }}
                  onMouseLeave={() => scheduleClose("res")}
                >
                  <div
                    className="flex items-center justify-between px-4 py-2 hover:bg-clean-blue/10 cursor-pointer"
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={openRes}
                    aria-controls="menu-residential"
                    tabIndex={-1}
                    ref={resLink as any}
                    onKeyDown={onRootItemKeyDown}
                    onClick={() => setOpenRes((v) => !v)}
                  >
                    <Link to="/services/residential" className="flex-1">Residential Cleaning</Link>
                    <ChevronRight className="w-4 h-4 text-clean-gray ml-3" />
                  </div>

                  {/* Residential submenu */}
                  <div
                    id="menu-residential"
                    className={`absolute top-0 left-full -ml-px w-64 bg-white shadow-lg rounded-md border border-gray-100 z-[300]
                               ${openRes ? "opacity-100 visible" : "opacity-0 invisible"} transition duration-150`}
                    onMouseEnter={() => clearTimer("res")}
                    onMouseLeave={() => scheduleClose("res")}
                  >
                    <ul ref={resMenu} className="py-2" role="menu" aria-label="Residential">
                      <li role="none">
                        <Link
                          to="/services/residential/standard"
                          className="block px-4 py-2 hover:bg-clean-blue/10"
                          role="menuitem"
                          ref={stdLink as any}
                          tabIndex={-1}
                          onKeyDown={onResItemKeyDown}
                        >
                          Standard Cleaning
                        </Link>
                      </li>
                      <li role="none">
                        <Link
                          to="/services/residential/deep"
                          className="block px-4 py-2 hover:bg-clean-blue/10"
                          role="menuitem"
                          ref={deepLink as any}
                          tabIndex={-1}
                          onKeyDown={onResItemKeyDown}
                        >
                          Deep Cleaning
                        </Link>
                      </li>
                      <li role="none">
                        <Link
                          to="/services/residential/move-out"
                          className="block px-4 py-2 hover:bg-clean-blue/10"
                          role="menuitem"
                          ref={moveLink as any}
                          tabIndex={-1}
                          onKeyDown={onResItemKeyDown}
                        >
                          Move‑In / Move‑Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="mt-2 border-t border-gray-100" role="separator" />

                <li role="none">
                  <Link
                    to="/services/commercial"
                    className="block px-4 py-2 hover:bg-clean-blue/10"
                    role="menuitem"
                    ref={comLink as any}
                    tabIndex={-1}
                    onKeyDown={onRootItemKeyDown}
                  >
                    Commercial Cleaning
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/services/airbnb"
                    className="block px-4 py-2 hover:bg-clean-blue/10"
                    role="menuitem"
                    ref={airbnbLink as any}
                    tabIndex={-1}
                    onKeyDown={onRootItemKeyDown}
                  >
                    Airbnb Cleaning
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li><Link to="/why-choose-us" className="text-navy hover:text-clean-blue" role="menuitem">Why Choose Us</Link></li>
          <li><Link to="/contact" className="text-navy hover:text-clean-blue" role="menuitem">Contact</Link></li>
          {/* Removed Blog */}
          <li><Link to="/newsletter" className="text-navy hover:text-clean-blue" role="menuitem">Newsletter</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu (unchanged except Blog removed) */}
      <div className="md:hidden flex justify-end px-4 py-2 bg-white">
        <details className="relative">
          <summary className="cursor-pointer text-navy font-semibold">☰</summary>
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-[300]">
            <Link to="/about" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">About</Link>
            <Link to="/services" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Services</Link>
            <Link to="/why-choose-us" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Why Choose Us</Link>
            <Link to="/contact" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Contact</Link>
            {/* Removed Blog */}
            <Link to="/newsletter" className="block px-4 py-2 text-navy hover:bg-clean-blue/10">Newsletter</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
