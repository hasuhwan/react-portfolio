export default function Title(props: any) {
  return (
    <div className=" relative">
      <div
        className={`absolute -inset-1 rounded-lg blur-lg bg-${props.color}`}
      ></div>
      <div
        className={` relative px-7 py-4 bg-darkgreyColor flex items-center justify-center rounded-lg leading-none border-2 border-${props.color} `}
      >
        <h1
          className={`introduce-title text-title font-emphasizeEN text-whiteColor drop-shadow-${props.color}`}
        >
          {props.title}
        </h1>
      </div>
    </div>
  );
}
