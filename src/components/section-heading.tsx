import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? <Badge variant="soft" className="w-fit">{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}
