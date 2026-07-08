export interface NavigationItem {
  id: string;
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    id: "projects",
    name: "Projects",
    href: "#projects",
  },
  {
    id: "experience",
    name: "Experience",
    href: "#experience",
  },
  {
    id: "research",
    name: "Research",
    href: "#research",
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
  },
];