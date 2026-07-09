import Link from "next/link";
import Button from "@/components/ui/Button";

import { profile } from "@/data/profile";
import { routes } from "@/data/routes";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Link href={routes.projects} target="_blank">
        <Button variant="secondary">
          Explore My Work
        </Button>
      </Link>

      <Link href={profile.resume} target="_blank">
        <Button variant="secondary">
          Download Resume
        </Button>
      </Link>

    </div>
  );
}