interface CornerRightProps {
  className?: string;
  strokeWidth?: number;
}
export default function CornerRight({
  className,
  strokeWidth = 2,
}: CornerRightProps) {
  return (
    <svg
      id="Arrow - Right"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4885 4.56152L12.0775 5.97852L17.1205 10.9995H3.5415V12.9995H17.1195L12.0775 18.0215L13.4885 19.4385L20.9585 11.9995L13.4885 4.56152Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
