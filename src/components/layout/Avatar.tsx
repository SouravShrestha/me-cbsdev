/** Dummy placeholder avatar — a gradient circle with initials. */
export function AvatarCircle({
  className = "",
  textClassName = "",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-black ring-2 ring-surface ${className}`}
    >
      <span className={`font-bold text-white ${textClassName}`}>SS</span>
    </span>
  );
}
