import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { ContactItem } from "@/types/contact";

interface Props {
  contact: ContactItem;
}

export default function ContactCard({ contact }: Props) {
  const iconMap = {
    github: IconBrandGithub,
    linkedin: IconBrandLinkedin,
    mail: IconMail,
  };

  const Icon = iconMap[contact.icon];

  return (
    <Link
      href={contact.href}
      target="_blank"
      className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-indigo-500"
    >
      <Icon size={28} />

      <div>
        <h3 className="font-semibold">
          {contact.title}
        </h3>

        <p className="text-zinc-400">
          {contact.value}
        </p>
      </div>
    </Link>
  );
}