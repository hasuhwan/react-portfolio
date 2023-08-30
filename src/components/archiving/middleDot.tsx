export default function MiddleDot(props: { children: React.ReactNode }) {
  return (
    <div className=" flex items-center mb-2 w-full">
      <span className="text-text drop-shadow-greenColor mr-4">&#9679;</span>
      {props.children}
    </div>
  );
}
