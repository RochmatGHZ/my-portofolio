import Link from "next/link";
import { supabase } from "../../lib/supabase";
import AchievementGrid from "../../components/section/achievement-grid";

export default async function AchievementsPage() {
  const { data: achievements } = await supabase
    .from("achievements")
    .select("*")
    .order("issued_at", {
      ascending: false,
    });

  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      {/* Back Button */}
      <Link
        href="/"
        scroll
        className="
          mb-10
          inline-flex
          items-center
          gap-2
          text-cyan-400
          transition-colors
          hover:text-cyan-300
        "
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-white">
          All Achievements
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Certifications, competitions,
          internships, and organizations
          collected throughout my learning
          and professional journey.
        </p>
      </div>

      {/* Grid */}
      <AchievementGrid
        achievements={achievements ?? []}
      />
    </main>
  );
}