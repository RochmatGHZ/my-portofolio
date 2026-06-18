type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary: `
      bg-cyan-400
      text-black
      hover:bg-cyan-300
      shadow-[0_0_30px_rgba(34,211,238,0.25)]
    `,

    secondary: `
      border
      border-cyan-400
      text-cyan-400
      hover:bg-cyan-400/10
      hover:border-cyan-300
      hover:text-cyan-300
    `,

    ghost: `
      text-slate-300
      hover:bg-white/5
      hover:text-cyan-300
    `,
  };

  return (
    <button
      type="button"
      className={`
        inline-flex
        items-center
        justify-center

        rounded-xl
        px-6
        py-3

        font-semibold

        transition-all
        duration-300

        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400/40
        focus:ring-offset-2
        focus:ring-offset-slate-950

        hover:-translate-y-0.5

        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}