import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { social } from "@/data/social";

export default function HeroSocial() {
  return (
    <div className="mt-10 flex items-center gap-5">
      <Link
        href={social.github}
        target="_blank"
        aria-label="GitHub"
        className="transition hover:text-indigo-400"
      >
        <IconBrandGithub size={24} />
      </Link>

      <Link
        href={social.linkedin}
        target="_blank"
        aria-label="LinkedIn"
        className="transition hover:text-indigo-400"
      >
        <IconBrandLinkedin size={24} />
      </Link>

      <Link
        href={social.email}
        aria-label="Email"
        className="transition hover:text-indigo-400"
      >
        <IconMail size={24} />
      </Link>
    </div>
  );
}