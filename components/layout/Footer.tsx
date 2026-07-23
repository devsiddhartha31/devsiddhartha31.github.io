import Link from "next/link";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { footer } from "@/data/footer";
import { companySocial } from "@/data/companySocial";
import { personalSocial } from "@/data/personalSocial";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Navigation */}

          <div className="grid w-full grid-cols-3">

            <div>

              <h4 className="mb-4 font-semibold text-white">
                Navigate
              </h4>

              <div className="space-y-3 text-zinc-400">

                <Link href="#about" className="block hover:text-white">
                  About
                </Link>

                <Link href="#projects" className="block hover:text-white">
                  Projects
                </Link>

                <Link href="#experience" className="block hover:text-white">
                  Experience
                </Link>

                <Link href="#skills" className="block hover:text-white">
                  Skills
                </Link>

              </div>

            </div>

            <div>

              <h4 className="mb-4 font-semibold text-white">
                Personal
              </h4>

              <div className="space-y-3">

                <Link
                  href={personalSocial.github}
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  <IconBrandGithub size={18} />
                  <span>GitHub</span>
                </Link>

                <Link
                  href={personalSocial.linkedin}
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  <IconBrandLinkedin size={18} />
                  <span>LinkedIn</span>
                </Link>

                <Link
                  href={personalSocial.email}
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  <IconMail size={18} />
                  <span>Email</span>
                </Link>

              </div>

            </div>

            <div>

              <h4 className="mb-4 font-semibold text-white">
                KridAstra
              </h4>

              <div className="space-y-3">

                <Link
                  href={companySocial.github}
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  <IconBrandGithub size={18} />
                  <span>GitHub</span>
                </Link>

                <Link
                  href={companySocial.linkedin}
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  <IconBrandLinkedin size={18} />
                  <span>LinkedIn</span>
                </Link>

                <Link
                  href={companySocial.email}
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  <IconMail size={18} />
                  <span>Email</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-zinc-500">

          <p>
            {footer.copyright}
          </p>

          <p>
            {footer.updated}
          </p>

        </div>

      </div>
    </footer>
  );
}