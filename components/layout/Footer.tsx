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

          <div className="grid grid-cols-2 gap-10 text-sm">

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
                KridAstra
              </h4>

              <div className="flex items-center gap-4">

                <Link
                  href={companySocial.github}
                  target="_blank"
                  aria-label="GitHub"
                >
                  <IconBrandGithub
                    size={22}
                    className="text-zinc-400 transition hover:text-indigo-400"
                  />
                </Link>

                <Link
                  href={companySocial.linkedin}
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin
                    size={22}
                    className="text-zinc-400 transition hover:text-indigo-400"
                  />
                </Link>

                <Link
                  href={companySocial.email}
                  aria-label="Email"
                >
                  <IconMail
                    size={22}
                    className="text-zinc-400 transition hover:text-indigo-400"
                  />
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-zinc-500 md:flex-row">

          <p>
            {footer.copyright}
          </p>

        </div>

      </div>
    </footer>
  );
}