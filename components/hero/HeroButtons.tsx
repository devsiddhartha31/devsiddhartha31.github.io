import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";

import { profile } from "@/data/profile";
import { routes } from "@/data/routes";

export default function HeroButtons() {

  const showResumeDownloadBtn = false;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">

      <Link href={routes.projects}>
        <Button>
          Explore My Work
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>

      {(showResumeDownloadBtn) && (
        <Link href={profile.resume} target="_blank" download>
          <Button variant="secondary">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </Link>
      )}

    </div>
  );
}