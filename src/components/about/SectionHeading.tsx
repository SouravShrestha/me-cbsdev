export default function SectionHeading({
  number,
  label,
  separatorClassName = "text-accent",
}: {
  number: string;
  label: string;
  separatorClassName?: string;
}) {
  return (
    <div className="inline-flex items-center rounded-md border border-accent/70 px-3 py-2 sm:py-1.5 text-sm font-medium text-accent">
      <span className="font-mono tabular-nums">{number}</span>
      <span className={`mx-3 ${separatorClassName}`}>|</span>
      <span>{label}</span>
    </div>
  );
}
