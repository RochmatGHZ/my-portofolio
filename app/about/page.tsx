import Link from "next/link";

import Button from "@/components/ui/button";
import ProfileImage from "@/components/ui/ProfileImage";

import CurrentFocus from "@/data/currentfocus";
import TechnicalSkills from "@/data/technicalskills";

import {
  MapPin,
  GraduationCap,
  CalendarDays,
  BriefcaseBusiness,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-10 lg:self-start">
          <div className="flex flex-col">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <ProfileImage
                src="/profile.png"
                alt="R Iqbal Al-Ghazaly"
                className="
                  h-48
                  w-48

                  rounded-2xl
                  object-cover

                  border-2
                  border-cyan-400

                  shadow-[0_0_30px_rgba(34,211,238,0.18)]

                  transition-all
                  duration-300

                  hover:shadow-[0_0_45px_rgba(34,211,238,0.28)]
                "
              />
            </div>

            {/* Name */}
            <div className="mt-6 text-center lg:text-left">
              <h1 className="text-3xl font-bold text-white">
                R Iqbal Al-Ghazaly
              </h1>

              <p className="mt-3 text-sm leading-7 text-cyan-400">
                 • Data Enthusiast • 
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-white/10" />

            {/* Information */}
            <div className="space-y-5 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Bandung, Indonesia</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-cyan-400" />
                <span>Data Science, Telkom University</span>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays className="h-4 w-4 text-cyan-400" />
                <span>Graduation 2026</span>
              </div>

              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-4 w-4 text-emerald-400" />
                <span className="font-medium text-emerald-400">
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-white/10" />

            {/* Social */}
            <div className="flex gap-3">
              <Link
                href="https://github.com/RochmatGHZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="secondary"
                  className="w-full"
                >
                  GitHub
                </Button>
              </Link>

              <Link
                href="https://linkedin.com/in/rochmatiqbalalghazaly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="ghost"
                  className="w-full"
                >
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="space-y-20">
          {/* Back */}
          <div>
            <Link href="/">
              <Button variant="ghost">
                ← Back to Home
              </Button>
            </Link>
          </div>

          {/* About Me */}
          <section>
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                About
              </p>

              <h2 className="mt-3 text-4xl font-bold text-white">
                Get to know Myself
              </h2>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >
              <p className="leading-8 text-slate-300">
                My journey in technology began with curiosity about how software works behind the scenes — and that curiosity never stopped. 
                Over time, it evolved into a passion for backend engineering, intelligent systems, and data-driven problem solving. 
                I enjoy building solutions that are not only functional, but also meaningful: from government irrigation dashboards to AI-powered skincare analysis tools. 
                Currently, I'm looking to bring that same drive into a team where I can keep building, learning, and contributing to something real.
              </p>
            </div>
          </section>

          {/* Current Focus */}
          <CurrentFocus />

          {/* Technical Skills */}
          <TechnicalSkills />

          {/* Education */}
          <section>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Education
            </h2>

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <h3 className="text-xl font-semibold text-white">
                Telkom University
              </h3>

              <p className="mt-2 text-cyan-400">
                Bachelor's Degree in Data Science
              </p>

              <p className="mt-2 text-slate-400">
                Graduation 2026
              </p>

              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold text-cyan-400">
                  Relevant Coursework
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Artificial Intelligence",
                    "Big Data Analytics",
                    "Business Intelligence",
                    "Database Systems",
                    "Data Mining",
                    "Data Warehouse",
                    "Data Visualization",
                    "Machine Learning",
                    "Statistics"
                  ].map((course) => (
                    <span
                      key={course}
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-4
                        py-2
                        text-sm
                        text-slate-300
                      "
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Open to Opportunities */}
          <section className="pb-10">
            <div
              className="
                rounded-3xl
                border
                border-cyan-400/15
                bg-cyan-400/[0.03]
                p-10
              "
            >
              <h2 className="text-3xl font-bold text-white">
                Open to Opportunities
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-slate-300">
                I am currently seeking internship/work opportunities where I
                can contribute, learn, and grow through meaningful
                projects involving backend systems, AI-powered
                applications, or data-driven solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#connect">
                  <Button variant="primary">
                    Let's Connect
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}