import Link from "next/link";
import { supabase } from "../../lib/supabase";
import AchievementGrid from "./achievement-grid";

export default async function Achievement() {
  const { data: achievements } = await supabase
    .from("achievements")
    .select("*")
    .order("issued_at", {
      ascending: false,
    })
    .limit(4);

  return (
    <section
      id="achievements"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Achievements
          </h2>

          <p className="mt-3 text-slate-400">
            Certifications and milestones that reflect
            my learning journey and continuous growth.
          </p>
        </div>

        <Link
          href="/achievements"
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

      {/* Grid */}
      <AchievementGrid
        achievements={achievements ?? []}
      />
    </section>
  );
}