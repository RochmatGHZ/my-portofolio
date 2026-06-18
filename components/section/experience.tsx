import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function Experience() {
  const { data: experiences } = await supabase
    .from("experiences")
    .select("*")
    .order("year", {
      ascending: false,
    })
    .limit(3);

  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Experience
          </h2>

          <p className="mt-3 text-slate-400">
            A roadmap of my learning journey and
            professional growth.
          </p>
        </div>

        <Link
          href="/experience"
          className="
            shrink-0
            text-cyan-400
            transition-colors
            hover:text-cyan-300
          "
        >
          View All →
        </Link>
      </div>

      {/* Roadmap */}
      <div className="relative mt-20">
        {/* Timeline Line */}
        <div
          className="
            absolute
            top-2
            left-[16.66%]
            right-[16.66%]
            hidden
            h-px
            bg-cyan-400/40
            md:block
          "
        />

        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {experiences?.map((item) => (
            <div
              key={item.id}
              className="
                relative
                flex
                flex-col
              "
            >
              {/* Timeline Node */}
              <div className="mb-8 flex justify-center">
                <div
                  className="
                    z-10
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-cyan-400
                    bg-slate-950
                    shadow-[0_0_15px_rgba(34,211,238,0.6)]
                  "
                />
              </div>

              {/* Card */}
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                "
              >
                {/* Year */}
                <span
                  className="
                    text-sm
                    font-semibold
                    text-cyan-400
                  "
                >
                  {item.year}
                </span>

                {/* Experience Type */}
                <div className="mt-4">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-400/5
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-cyan-400
                    "
                  >
                    {item.experience_type}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    leading-snug
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Organization */}
                <p
                  className="
                    mt-3
                    text-lg
                    text-slate-400
                  "
                >
                  {item.organization}
                </p>

                {/* Description */}
                <p
                  className="
                    mt-6
                    flex-1
                    leading-8
                    text-slate-400
                    line-clamp-3
                  "
                >
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}