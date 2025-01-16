interface Props {
  className?: string;
}
export default function Cross({ className }: Props) {
  return (
    <svg
      width="14"
      height="14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m7 .96.08 12m5.96-6.04L1.04 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
