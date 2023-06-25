type Props = {
  text: string;
};

function Button(props: Props) {
  return (
    <button className="p-4 bg-rose-400 text-white w-auto">{props.text}</button>
  );
}

export default Button;
