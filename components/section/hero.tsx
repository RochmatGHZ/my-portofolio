"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Button from "@/components/ui/button";
import ForceGraph from "@/components/effects/ForceGraph";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
      "
    >
      {/* Background */}
      <ForceGraph />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-4xl
          flex-col
          items-center
          text-center
        "
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-cyan-300
            backdrop-blur-sm
          "
        >
          ✦ Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            font-space

            mt-8
            text-5xl
            font-extrabold
            leading-[0.9]
            tracking-[-0.04em]

            md:text-7xl
            lg:text-8xl

            bg-gradient-to-r
            from-white
            via-cyan-300
            to-cyan-500

            bg-clip-text
            text-transparent
          "
        >
          R IQBAL AL-GHAZALY
        </motion.h1>

        {/* Roles */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-8
            text-lg
            font-medium
            text-slate-300

            md:text-2xl
          "
        >
          <span className="mx-3 text-cyan-400">•</span>
          Data Enthusiast
          <span className="mx-3 text-cyan-400">•</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-8
            max-w-2xl
            text-base
            leading-8
            text-slate-400

            md:text-lg
          "
        >
          Informatics Graduate from Telkom University with proven experience in backend development, data analytics, and AI-powered solutions. 
          Passionate about building systems and turning complex data into actionable insights.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <Link href="/projects">
            <Button>
              View Projects
            </Button>
          </Link>

          <a
            href="/cv/myCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              Download CV
            </Button>
          </a>

          <Link href="/about">
            <Button variant="ghost">
              View Full Profile
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: 1,
            },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            mt-20
            flex
            flex-col
            items-center
            gap-2
            text-sm
            text-slate-500
          "
        >
          <span>Scroll to Explore</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}