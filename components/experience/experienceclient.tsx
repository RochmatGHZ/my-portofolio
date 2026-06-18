"use client";

import Link from "next/link";
import { useState } from "react";
import type { Experience } from "@/types/experience";

type Props = {
  experiences: Experience[];
};

export default function ExperienceClient({
  experiences,
}: Props) {
  const [selectedId, setSelectedId] = useState(
    experiences[0]?.id
  );

  const selectedExperience =
    experiences.find(
      (item) => item.id === selectedId
    ) ?? experiences[0];

    const groupedExperiences = experiences.reduce(
        (acc, experience) => {
            const year = experience.year;
            const category =
            experience.experience_type;

            if (!acc[year]) {
            acc[year] = {};
            }

            if (!acc[year][category]) {
            acc[year][category] = [];
            }

            acc[year][category].push(experience);

            return acc;
        },
        {} as Record<
            number,
            Record<string, Experience[]>
        >
        );

  if (!selectedExperience) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-slate-400">
          No experiences found.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      {/* Back */}
      <Link
        href="/#experience"
        className="
          inline-flex
          text-cyan-400
          transition-colors
          hover:text-cyan-300
        "
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="mt-12">
        <h1 className="text-5xl font-bold text-white">
          Experience
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          A complete timeline of my learning journey,
          projects, and professional growth.
        </p>
      </div>

      {/* Experience Explorer */}
      <div className="mt-20">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* LEFT */}
          <aside
            className="
              lg:border-r
              lg:border-white/10
              lg:pr-10
            "
          >
            <p
              className="
                mb-8
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-slate-500
              "
            >
              Milestone
            </p>

            <div className="space-y-8">
                {Object.entries(groupedExperiences)
                    .sort(
                    ([yearA], [yearB]) =>
                        Number(yearB) - Number(yearA)
                    )
                    .map(([year, categories]) => (
                    <div key={year}>
                        {/* Year */}
                        <div className="mb-4">
                        <h3
                            className="
                            text-lg
                            font-bold
                            text-white
                            "
                        >
                            {year}
                        </h3>

                        <div
                            className="
                            mt-2
                            h-px
                            bg-white/10
                            "
                        />
                        </div>

                        {/* Categories */}
                        <div className="space-y-5">
                        {Object.entries(categories).map(
                            ([category, items]) => (
                            <div key={category}>
                                <p
                                className="
                                    mb-3
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-slate-500
                                "
                                >
                                {category}
                                </p>

                                <div className="space-y-2">
                                {items.map((item) => {
                                    const active =
                                    item.id ===
                                    selectedExperience.id;

                                    return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() =>
                                        setSelectedId(
                                            item.id
                                        )
                                        }
                                        className={`
                                        w-full
                                        border-l-2
                                        py-3
                                        pl-4
                                        text-left
                                        transition-all
                                        duration-300

                                        ${
                                            active
                                            ? `
                                                border-cyan-400
                                            `
                                            : `
                                                border-transparent
                                                hover:border-white/20
                                            `
                                        }
                                        `}
                                    >
                                        <h4
                                        className={`
                                            font-medium
                                            leading-relaxed

                                            ${
                                            active
                                                ? "text-white"
                                                : "text-slate-400"
                                            }
                                        `}
                                        >
                                        {item.title}
                                        </h4>

                                        <p
                                        className={`
                                            mt-1
                                            text-sm

                                            ${
                                            active
                                                ? "text-cyan-400"
                                                : "text-slate-500"
                                            }
                                        `}
                                        >
                                        {item.date_label}
                                        </p>
                                    </button>
                                    );
                                })}
                                </div>
                            </div>
                            )
                        )}
                        </div>
                    </div>
                    ))}
                </div>
          </aside>

          {/* RIGHT */}
          <section>
            {/* Top */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                <span
                    className="
                    inline-flex
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-400/5
                    px-4
                    py-1.5
                    text-sm
                    font-medium
                    text-cyan-400
                    "
                >
                    {selectedExperience.experience_type}
                </span>

                {selectedExperience.github_url && (
                    <a
                    href={selectedExperience.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-cyan-400
                        transition-colors
                        hover:text-cyan-300
                    "
                    >
                    GitHub ↗
                    </a>
                )}
                </div>

                {/* Title */}
                <h2
                className="
                    mt-8
                    text-4xl
                    font-bold
                    leading-tight
                    text-white

                    lg:text-5xl
                "
                >
                {selectedExperience.title}
                </h2>

                {/* Organization */}
                <p
                className="
                    mt-5
                    text-lg
                    font-medium
                    text-slate-300
                "
                >
                {selectedExperience.organization}
                </p>

                {/* Date */}
                <p className="mt-2 text-slate-500">
                {selectedExperience.date_label}
                </p>

            {/* Description */}
            {/* Description */}
            {(() => {
              const lines = selectedExperience.description
                .split("\n")
                .filter((line) => line.trim() !== "");

              const intro = lines.filter(
                (line) => !line.trim().startsWith("•")
              );

              const bullets = lines.filter(
                (line) => line.trim().startsWith("•")
              );

              return (
                <div className="mt-10 max-w-4xl">
                  {/* Intro */}
                  <div className="space-y-3">
                    {intro.map((line, index) => (
                      <p
                        key={index}
                        className="
                          text-base
                          leading-8
                          text-slate-400
                        "
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  {bullets.length > 0 && (
                    <ul
                      className="
                        mt-6
                        list-disc
                        space-y-3
                        pl-6
                        text-lg
                        leading-8
                        text-slate-300
                        marker:text-cyan-400
                      "
                    >
                      {bullets.map((line, index) => (
                        <li key={index}>
                          {line.replace("•", "").trim()}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })()}

            {/* Technologies */}
            {selectedExperience.technologies?.length >
              0 && (
              <div className="mt-12 flex flex-wrap gap-3">
                {selectedExperience.technologies.map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-lg
                        border
                        border-cyan-400/15
                        bg-cyan-400/[0.04]
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300

                        hover:border-cyan-400/30
                        hover:text-cyan-300
                      "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}