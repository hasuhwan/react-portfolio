export default function MiddleDot(props: {
  children: React.ReactNode;
  inView: boolean;
}) {
  return (
    <div className=" flex items-center mb-2 w-full">
      <span
        className={`text-text ${
          props.inView ? `drop-shadow-greenColor` : null
        } mr-4`}
      >
        &#9679;
      </span>
      {props.children}
    </div>
  );
}
