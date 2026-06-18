import {
  Server,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

const focusAreas = [
  {
    title: "Backend\nEngineering",
    description:
      "Designing APIs and building scalable backend systems.",
    icon: Server,
    color: "text-cyan-400",
  },
  {
    title: "AI\nApplications",
    description:
      "Exploring LLM integrations and intelligent experiences.",
    icon: BrainCircuit,
    color: "text-violet-400",
  },
  {
    title: "Data\nScience",
    description:
      "Developing analytical thinking through machine learning and data exploration.",
    icon: BarChart3,
    color: "text-emerald-400",
  },
];

export default function CurrentFocus() {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-white">
        Current Focus
      </h2>

      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {focusAreas.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                h-full
                flex-col
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/20
                hover:bg-white/[0.04]
              "
            >
              {/* Icon */}
              <Icon
                className={`mb-6 h-10 w-10 ${item.color}`}
                strokeWidth={1.8}
              />

              {/* Title */}
              <h3
                className={`
                  min-h-[72px]
                  whitespace-pre-line
                  text-2xl
                  font-semibold
                  leading-tight
                  ${item.color}
                `}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-5
                  flex-1
                  leading-8
                  text-slate-400
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}