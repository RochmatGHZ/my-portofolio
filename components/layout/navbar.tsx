"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        z-50
        w-full
        transition-all
        duration-300

        ${
          isScrolled
            ? `
              border-b
              border-white/5
              bg-black/20
              backdrop-blur-xl
            `
            : `
              bg-transparent
            `
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="
            text-xl
            font-bold
            tracking-widest

            bg-gradient-to-r
            from-cyan-300
            to-cyan-500

            bg-clip-text
            text-transparent

            transition-opacity
            duration-300
            hover:opacity-80
          "
        >
          rochmat.ghz
        </a>

        {/* Navigation */}
        <ul
          className="
            hidden
            gap-8
            text-sm
            text-slate-300
            md:flex
          "
        >
          <li>
            <Link
              href="/about"
              className="
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              About
            </Link>
          </li>

          <li>
            <a
              href="#experience"
              className="
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#achievements"
              className="
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              Achievements
            </a>
          </li>

          <li>
            <a
              href="#connect"
              className="
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}