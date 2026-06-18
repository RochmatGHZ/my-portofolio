import { supabase } from "@/lib/supabase";
import ExperienceClient from "../../components/experience/experienceclient";

export default async function ExperiencePage() {
  const { data: experiences } = await supabase
    .from("experiences")
    .select("*")
    .order("year", {
      ascending: false,
    });

  return (
    <ExperienceClient
      experiences={experiences ?? []}
    />
  );
}