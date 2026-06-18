"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-3 text-slate-400">
            Selected works across Backend, AI, and Data Science.
          </p>
        </div>

        <Link
          href="/projects"
          className="
            shrink-0
            text-cyan-400
            transition
            hover:text-cyan-300
          "
        >
          View All →
        </Link>
      </div>

      {/* Projects */}
      <div
        className="
          mt-12
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {projects.slice(0, 4).map((project) => (
          <div
            key={project.id}
            className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-sm
              transition-all
              hover:border-cyan-400/20
              hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]
            "
          >
            {/* Thumbnail */}
            <div className="relative h-52 w-full">
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1280px) 50vw,
                  25vw
                "
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span
                className="
                  rounded-full
                  bg-cyan-400/10
                  px-3
                  py-1
                  text-xs
                  text-cyan-400
                "
              >
                {project.category}
              </span>

              <h3 className="mt-4 text-xl font-bold text-white">
                {project.title}
              </h3>

              <p
                className="
                  mt-4
                  min-h-[4.5rem]
                  line-clamp-2
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-400/5
                    px-4
                    py-2
                    text-sm
                    text-cyan-400
                    transition
                    hover:bg-cyan-400/10
                  "
                >
                  View Details →
                </Link>

                {project.github_url && (
                  <Link
                    href={project.github_url}
                    target="_blank"
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-4
                      py-2
                      text-sm
                      text-slate-300
                      transition
                      hover:border-white/20
                    "
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}