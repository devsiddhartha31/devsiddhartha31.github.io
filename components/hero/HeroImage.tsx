import Image from "next/image";
import { profile } from "@/data/profile";

export default function HeroImage() {
  const focusItems = [
    "Medical AI Research",
    "Full-Stack Engineering",
    "Android Development",
    "Building KridAstra",
  ];

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative w-full max-w-sm">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[2rem] bg-indigo-500/20 blur-3xl" />

        {/* Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 backdrop-blur-xl shadow-2xl">
          {/* Image */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src="/images/profile/profile.jpg"
              alt="Siddhartha Kumar"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-6">

            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Current Focus
            </p>

            <div className="mt-4 space-y-3">
              {profile.focus.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-indigo-400" />

                  <span className="text-sm text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}