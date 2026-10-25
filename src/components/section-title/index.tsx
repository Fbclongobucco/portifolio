type SectionTitleProps = {
  index: string;
  title: string;
};

export function SectionTitle({ index, title }: SectionTitleProps) {
  return (
    <h2 className="reveal flex items-center gap-4 text-2xl font-bold text-white sm:text-3xl">
      <span className="font-mono text-base text-emerald-400">{index}.</span>
      {title}
      <span className="h-px flex-1 bg-white/10" aria-hidden />
    </h2>
  );
}
