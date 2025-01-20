interface CornerRightProps {
    className?: string
}
export default function CornerRight({ className }: CornerRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4" />
    </svg>
  );
}
