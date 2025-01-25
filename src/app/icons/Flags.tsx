interface FlagsProps {
    className?: string;
  }
export default function Flags({ className }: FlagsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      fill="currentColor"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.115.24a.333.333 0 0 1 .294.171l4.3 7.413-.385.665L4.832.745v.001a.335.335 0 0 1 .283-.505Zm5.56 9.246 1.946 3.353h-.001a.334.334 0 1 1-.577.335l-1.754-3.023.386-.665Zm3.96-7.989-3.102 5.348 4.213 2.421 2.046-3.526v.001a.077.077 0 0 1 .01-.018l.671-1.156a.742.742 0 0 0-.276-1.025l-3.562-2.045Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.364 1.497-3.56 2.046a.744.744 0 0 0-.277 1.024l.671 1.156 2.055 3.543 4.215-2.42-3.104-5.349ZM18.11 6.19l-2.055 3.543a.244.244 0 0 1-.134.11l-2.802.982c.017.015.03.03.05.043l3.56 2.046L20 7.276l-1.89-1.085Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.89 6.19 0 7.278l3.27 5.637 3.56-2.046c.02-.012.032-.029.05-.042l-2.802-.982a.252.252 0 0 1-.133-.11L1.89 6.19Zm12.005 2.59-.88 1.518c-.008.012-.008.025-.014.038l2.239-.785-1.345-.771Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6.104 8.78-1.344.773 2.238.783c-.007-.012-.007-.026-.012-.038L6.104 8.78Zm6.898 5.558v.5h-.667v-.5h.667Zm-1.334 0v.5H11v-.5h.668Zm-4.004 0v.5h-.667v-.5h.667Zm.667.667v.501h-.667v-.5h.667Zm-1.334 0v.501h-.668v-.5h.668ZM14.896.24a.334.334 0 0 1 .272.505l-7.212 12.43a.334.334 0 1 1-.577-.335L14.59.411a.334.334 0 0 1 .305-.17ZM11 14.922v.667h-.667v-.667H11Zm-.667-.667v.667h-.667v-.667h.667Zm-.667.667v.667h-.668v-.667h.668Zm-.667-.667v.667H8.33v-.667H9Zm3.336.667v.667h-.668v-.667h.668Zm1.335 0v.667h-.668v-.667h.667Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
