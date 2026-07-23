import Image from "next/image";
import Link from "next/link";

import { companies } from "@/data/companies";

export default function TrustedCompanies() {
  return (
    <div className="mt-20">
      <div className="mb-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Trusted By
        </p>

        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12">
        {companies.map((company) => {
          const logo = (
            <Image
              src={company.logo}
              alt={company.name}
              width={140}
              height={48}
              className="h-10 w-auto opacity-60 md:grayscale transition-all duration-300 hover:opacity-100 md:hover:grayscale-0"
            />
          );

          return company.url ? (
            <Link
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {logo}
            </Link>
          ) : (
            <div key={company.id}>
              {logo}
            </div>
          );
        })}
      </div>
    </div>
  );
}