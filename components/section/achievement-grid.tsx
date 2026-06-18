import Image from "next/image";
import { Achievement } from "../../types/achievement";

type Props = {
  achievements: Achievement[];
};

export default function AchievementGrid({
  achievements,
}: Props) {
  return (
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
      {achievements.slice(0, 4).map((item) => (
        <article
          key={item.id}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-cyan-400/30
            hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
          "
        >
          {/* Certificate */}
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={item.image_url}
              alt={item.title}
              fill
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1280px) 50vw,
                25vw
              "
              className="
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center justify-between">
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
                {item.category}
              </span>

              <span className="text-xs text-slate-500">
                {new Date(item.issued_at).getFullYear()}
              </span>
            </div>

            <h3
              className="
                mt-4
                line-clamp-2
                text-lg
                font-bold
                text-white
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                line-clamp-1
                text-sm
                text-slate-400
              "
            >
              {item.issuer}
            </p>

            {item.summary && (
              <p
                className="
                  mt-3
                  min-h-[4.5rem]
                  line-clamp-3
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                {item.summary}
              </p>
            )}

            <a
              href={item.certificate_url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                text-sm
                text-cyan-400
                transition
                hover:text-cyan-300
              "
            >
              View Certificate →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}