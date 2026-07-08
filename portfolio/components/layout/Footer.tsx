import Link from "next/link";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { footer } from "@/data/footer";
import { social } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">

        <div>
          <h3 className="text-lg font-semibold">
            Siddhartha Kumar
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {footer.message}
          </p>

          <p className="mt-2 text-xs text-zinc-500">
            {footer.copyright}
          </p>
        </div>

        <div className="flex items-center gap-5">

          <Link
            href={social.github}
            target="_blank"
            aria-label="GitHub"
          >
            <IconBrandGithub
              className="transition hover:text-indigo-400"
              size={24}
            />
          </Link>

          <Link
            href={social.linkedin}
            target="_blank"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin
              className="transition hover:text-indigo-400"
              size={24}
            />
          </Link>

          <Link
            href={social.email}
            aria-label="Email"
          >
            <IconMail
              className="transition hover:text-indigo-400"
              size={24}
            />
          </Link>

        </div>

      </div>
    </footer>
  );
}