import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { personalSocial } from "@/data/personalSocial";

export default function HeroSocial() {
  return (
    <div className="mt-4 flex items-center gap-5">
      <Link
        href={personalSocial.github}
        target="_blank"
        aria-label="GitHub"
        className="transition hover:text-indigo-400"
      >
        <IconBrandGithub size={24} />
      </Link>

      <Link
        href={personalSocial.linkedin}
        target="_blank"
        aria-label="LinkedIn"
        className="transition hover:text-indigo-400"
      >
        <IconBrandLinkedin size={24} />
      </Link>

      <Link
        href={personalSocial.email}
        aria-label="Email"
        className="transition hover:text-indigo-400"
      >
        <IconMail size={24} />
      </Link>
    </div>
  );
}