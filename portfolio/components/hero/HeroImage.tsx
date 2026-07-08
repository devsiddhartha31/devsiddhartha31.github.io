import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">

        <div className="overflow-hidden rounded-2xl">

          <Image
            src="/images/profile/profile.jpg"
            alt="Siddhartha Kumar"
            width={500}
            height={600}
            className="h-auto w-full"
            priority
          />

        </div>

        <div className="mt-8">

          <h3 className="text-lg font-semibold">
            Current Focus
          </h3>

          <ul className="mt-4 space-y-3 text-zinc-400">

            <li>🧠 Medical AI Research</li>

            <li>💻 Full-Stack Engineering</li>

            <li>📱 Android Development</li>

            <li>🚀 Building KridAstra</li>

          </ul>

        </div>

      </div>

    </div>
  );
}