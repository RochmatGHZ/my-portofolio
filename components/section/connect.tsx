import SectionTitle from "@/components/ui/sectiontittle";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const email = {
  address: "rochmatiqbalalghazaly@gmail.com",
  link: "mailto:rochmatiqbalalghazaly@gmail.com",
};

const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/rochmatiqbalalghazaly",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/RochmatGHZ",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/rochmat.ghz",
  },
  {
    name: "Medium",
    icon: FaMedium,
    link: "https://medium.com/@rochmatiqbalalghazaly",
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="mx-auto max-w-5xl px-6 py-32 text-center"
    >
      <SectionTitle
        title="Let's Connect"
        subtitle="Interested in collaborating, discussing opportunities, or simply saying hello? My inbox is always open."
      />

      {/* Hero Email */}
      <div className="mt-14 flex justify-center">
        <a
          href={email.link}
          className="
            group
            w-full
            max-w-2xl
            rounded-3xl
            border
            border-cyan-400/20
            bg-white/[0.03]
            p-10
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400/40
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
          "
        >
          <div className="flex flex-col items-center">
            <MdEmail
              size={52}
              className="
                text-cyan-400
                transition
                group-hover:scale-110
              "
            />

            <h3 className="mt-6 text-3xl font-bold text-white">
              Gmail
            </h3>

            <p className="mt-3 text-slate-400">
              {email.address}
            </p>

            <span
              className="
                mt-8
                text-cyan-400
                font-medium
              "
            >
              Send me an email →
            </span>
          </div>
        </a>
      </div>

      {/* Divider */}
      <div className="my-14 h-px bg-white/10" />

      {/* Social Links */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:text-cyan-400
                hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]
              "
            >
              <Icon size={20} />

              <span className="font-medium">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}