export default function GradientBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#09090b]" />

      {/* Purple Glow */}
      <div className="absolute left-0 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute right-0 top-40 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}