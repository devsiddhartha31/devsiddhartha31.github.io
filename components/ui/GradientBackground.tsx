export default function GradientBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#09090b]" />

      <div className="absolute left-[-150px] top-[120px] -z-20 h-[550px] w-[550px] rounded-full bg-indigo-500/20 blur-[160px]" />

      <div className="absolute right-[-100px] top-[200px] -z-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#fff 1px,transparent 1px),
            linear-gradient(to bottom,#fff 1px,transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </>
  );
}