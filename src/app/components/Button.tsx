export const Button = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="px-5 py-3 font-clash font-medium flex justify-center w-full md:w-auto gap-2 transition items-center effect01 bg-black text-white "
    >
      <slot name="icon-left" />
      <span>{text}</span>
      <slot name="icon-right" />
    </a>
  );
};
