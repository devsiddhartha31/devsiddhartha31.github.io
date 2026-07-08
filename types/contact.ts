export interface ContactItem {
  id: number;
  title: string;
  value: string;
  href: string;
  icon: "mail" | "github" | "linkedin";
}