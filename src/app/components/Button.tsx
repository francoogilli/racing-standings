export const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="px-5 py-3 font-clash font-[450] border flex justify-center w-full md:w-auto gap-2 transition items-center effect01 bg-[#1e78f7] "
    >
      <slot name="icon-left" />
      <span>
        {text}
      </span>
      <slot name="icon-right" />
    </button>
  );
};
