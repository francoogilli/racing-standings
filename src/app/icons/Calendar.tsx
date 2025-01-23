interface Props {
  className?: string;
}

export default function Calendar({ className }: Props) {
  return (
    <svg
      width="40"
      height="40"
      strokeWidth="2.1"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 4V2m0 2v2m0-2h-4.5M3 10v9c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2v-9H3ZM3 10V6c0-1.10457.89543-2 2-2h2M7 2v4M21 10V6c0-1.10457-.8954-2-2-2h-.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
