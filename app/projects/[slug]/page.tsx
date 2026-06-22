import Image from "next/image";
import Link from "next/link";

import Gallery from "@/components/project/Gallery";
import { Project } from "@/types/project";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch project detail
  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!projectRes.ok) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-bold">
          Project Not Found
        </h1>

        <Link
          href="/"
          className="mt-8 inline-block text-cyan-400"
        >
          ← Back to Home
        </Link>
      </main>
    );
  }

  const project: Project = await projectRes.json();

  // Fetch gallery
  const galleryRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${slug}/gallery`,
    {
      cache: "no-store",
    }
  );

  const gallery = galleryRes.ok
    ? await galleryRes.json()
    : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-24 text-white">

      {/* Back */}
      <Link
        href="/#projects"
        className="
          mb-10
          inline-flex
          items-center
          text-cyan-400
          transition
          hover:text-cyan-300
        "
      >
        ← Back to Home
      </Link>

      {/* Hero Image */}
      <div
        className="
          relative
          mb-10
          h-[300px]
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          md:h-[450px]
        "
      >
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Category */}
      <span
        className="
          rounded-full
          bg-cyan-400/10
          px-4
          py-2
          text-sm
          text-cyan-400
        "
      >
        {project.category}
      </span>

      {/* Title */}
      <h1 className="mt-6 text-4xl font-bold md:text-5xl">
        {project.title}
      </h1>

      {/* Tools */}
      {project.tools && project.tools.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-slate-300
              "
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Overview */}
      {/* Project Case Study */}
      <section className="mt-16">

        {/* Overview */}
        <div className="max-w-4xl">
          <h2
            className="
              mb-6
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-slate-400
            "
          >
            Overview
          </h2>

          <p
            className="
              text-justify
              text-lg
              leading-10
              text-slate-300
            "
          >
            {project.overview}
          </p>
        </div>

        {/* Bottom Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Challenge & Solution */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            "
          >
            <h2
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Challenge & Solution
            </h2>

            <p
              className="
                leading-8
                text-slate-300
              "
            >
              {project.challenge_solution}
            </p>
          </div>

          {/* Key Features */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            "
          >
            <h2
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Key Features
            </h2>

            <ul className="space-y-4">
              {project.key_features
                ?.split("\n")
                .filter(Boolean)
                .map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex
                      items-start
                      gap-3
                      text-slate-300
                    "
                  >
                    <span
                      className="
                        mt-2
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        bg-cyan-400
                      "
                    />

                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
          </div>

        </div>

      </section>

      {/* Gallery */}
      <Gallery items={gallery} />

      {/* Explore */}
      {(project.github_url ||
        project.demo_url ||
        project.article_url) && (
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">
            Explore Project
          </h2>

          <div className="flex flex-wrap gap-4">

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/5
                  px-6
                  py-3
                  text-cyan-400
                  transition
                  hover:bg-cyan-400/10
                "
              >
                GitHub
              </a>
            )}

            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/5
                  px-6
                  py-3
                  text-cyan-400
                  transition
                  hover:bg-cyan-400/10
                "
              >
                Live Demo
              </a>
            )}

            {project.article_url && (
              <a
                href={project.article_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/5
                  px-6
                  py-3
                  text-cyan-400
                  transition
                  hover:bg-cyan-400/10
                "
              >
                Medium Article
              </a>
            )}

          </div>
        </section>
      )}

    </main>
  );
}