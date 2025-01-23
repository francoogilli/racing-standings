interface Props {
  className?: string;
}
export default function Medal({ className }: Props) {
  return (
    <svg
      width="24"
      height="24"
      strokeWidth="2.1"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      color="#000"
    >
      <path
        d="M14.2718 10.445 18 2m-8.68388 8.6323L5 2m7.7615 8.0479L8.835 2m5.525 0-1.04 2.5M6 16c0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6s-2.6863-6-6-6c-3.31371 0-6 2.6863-6 6Z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
