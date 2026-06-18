export function SunIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.25 12h-1.5M12.25 19.5V21M4.75 12h-1.5M17.127 6.873l1.06-1.06M5.31 18.81l1.062-1.06M17.127 17.69l1.06 1.06M5.31 5.69l1.062 1.06"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="stroke-faint transition group-hover:stroke-yellow-500"
      />
    </svg>
  );
}
