"use client";

import { useMemo, useState } from "react";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiDocker,
} from "react-icons/si";

import {
  TbApi,
  TbSparkles,
} from "react-icons/tb";

const categories = [
  "All",
  "Languages",
  "Backend",
  "Database",
  "AI & Data",
  "Tools",
] as const;

type Category = (typeof categories)[number];

const skills = [
  {
    name: "Python",
    category: "Languages",
    icon: SiPython,
    color: "text-yellow-400",
  },

  {
    name: "JavaScript",
    category: "Languages",
    icon: SiJavascript,
    color: "text-yellow-300",
  },

  {
    name: "TypeScript",
    category: "Languages",
    icon: SiTypescript,
    color: "text-blue-400",
  },

  {
    name: "Java",
    category: "Languages",
    icon: SiOpenjdk,
    color: "text-orange-400",
  },

  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "text-green-400",
  },

  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "text-slate-300",
  },

  {
    name: "Spring Boot",
    category: "Backend",
    icon: SiSpringboot,
    color: "text-green-500",
  },

  {
    name: "REST API",
    category: "Backend",
    icon: TbApi,
    color: "text-cyan-400",
  },

  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    color: "text-blue-400",
  },

  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    color: "text-sky-400",
  },

  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "text-green-500",
  },

  {
    name: "Pandas",
    category: "AI & Data",
    icon: SiPandas,
    color: "text-violet-300",
  },

  {
    name: "NumPy",
    category: "AI & Data",
    icon: SiNumpy,
    color: "text-cyan-300",
  },

  {
    name: "Scikit-Learn",
    category: "AI & Data",
    icon: SiScikitlearn,
    color: "text-orange-400",
  },

  {
    name: "Gemini API",
    category: "AI & Data",
    icon: TbSparkles,
    color: "text-cyan-400",
  },

  {
    name: "Git",
    category: "Tools",
    icon: SiGit,
    color: "text-orange-500",
  },

  {
    name: "Docker",
    category: "Tools",
    icon: SiDocker,
    color: "text-blue-400",
  },
];

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Technical Skills
        </h2>

        <p className="mt-3 text-slate-400">
          Technologies I have used through academic projects,
          personal projects, and continuous learning.
        </p>
      </div>

      <div
        className="
          rounded-[2rem]
          border
          border-white/10
          bg-white/[0.03]
          p-6
          backdrop-blur-xl
        "
      >
        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border-cyan-400
                        bg-cyan-400
                        text-slate-950
                        shadow-[0_0_25px_rgba(34,211,238,0.25)]
                      `
                      : `
                        border-white/10
                        bg-transparent
                        text-slate-300
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/5
                        hover:text-cyan-300
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/40
                  p-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-cyan-400/20
                  hover:bg-cyan-400/[0.03]
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]
                "
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl
                      bg-white/5

                      transition-all
                      duration-300

                      group-hover:bg-cyan-400/10
                    "
                  >
                    <Icon
                      className={`
                        h-7
                        w-7
                        ${skill.color}
                      `}
                    />
                  </div>

                  {/* Skill Name */}
                  <div>
                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {skill.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-500
                      "
                    >
                      {skill.category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}