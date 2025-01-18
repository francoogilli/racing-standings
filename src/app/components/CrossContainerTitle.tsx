import Cross from "../icons/Cross";

interface CrossContainerTitleProps {
  children: React.ReactNode;
}
export const CrossContainerTitle: React.FC<CrossContainerTitleProps> = ({
  children,
}) => {
  return (
    <div className="relative inline-block align-baseline m-0 pl-4 pr-4 bg-[#0808080a] border border-dotted border-neutral-700/80 text-javascript">
      <Cross className="absolute -top-2 -left-2 w-4 h-4 " />
      <Cross className="absolute -top-2 -right-2 w-4 h-4 " />
      <Cross className="absolute -bottom-2 -left-2 w-4 h-4 " />
      <Cross className="absolute -bottom-2 -right-2 w-4 h-4 " />

      <span className="relative z-10 font-medium">{children}</span>
    </div>
  );
};
