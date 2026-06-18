"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects/all")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  const filteredProjects = projects;

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 text-white">

      <Link
        href="/#projects"
        className="
          mb-8
          inline-block
          text-cyan-400
        "
      >
        ← Back to Home
      </Link>

      <h1 className="text-5xl font-bold">
        All My Projects
      </h1>

      {/* Project Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">

        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              transition
              hover:border-cyan-400/20
              hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]
            "
          >
            <span className="text-sm text-cyan-400">
              {project.category}
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              {project.title}
            </h2>

            <p className="mt-4 text-slate-400">
              {project.summary}
            </p>

            <div className="mt-6 text-cyan-400">
              View Details →
            </div>
          </Link>
        ))}

      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div
          className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/5
            py-20
            text-center
          "
        >
          <h3 className="text-2xl font-semibold">
            No projects found
          </h3>

          <p className="mt-4 text-slate-400">
            No projects have been added yet..
          </p>
        </div>
      )}

    </main>
  );
}