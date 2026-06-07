import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <div className={`flex max-w-3xl flex-col space-y-3 sm:space-y-4 ${alignment}`}>
      {eyebrow ? <Badge variant="soft" className="w-fit">{eyebrow}</Badge> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 md:text-lg">{description}</p>
    </div>
  );
}
