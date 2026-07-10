export type AboutIcon =
  | "users"
  | "building"
  | "rocket"
  | "brain"
  | "experience";

export type AboutCardSize =
  | "normal"
  | "span-c2-r1"
  | "span-c1-r2";

export interface AboutHighlight {
  id: number;
  value: string;
  title: string;
  subtitle: string;
  icon: AboutIcon;
  size: AboutCardSize;
}

export interface About {
  title: string;
  subtitle: string;
  highlights: AboutHighlight[];
}