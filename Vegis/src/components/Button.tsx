import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  large?: boolean;
  blacktext?: boolean;
  black?: boolean;
  onClick?: () => void;
};

function Button({
  large = true,
  children,
  onClick,
  blacktext = false,
  black = true,
}: Props) {
  return (
    <button
      className={clsx(
        "p-4  uppercase descriptionsmall",
        large === true ? "w-[17rem]" : "w-[15rem]",
        blacktext === true ? "text-black" : "text-white",
        black === true
          ? "bg-black hover:bg-rose-400 hover:text-black text-white "
          : "bg-rose-400 hover:bg-black hover:text-white"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
