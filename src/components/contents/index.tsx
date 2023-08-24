interface IpropsValue {
  children: React.ReactNode;
  color: string;
  direction: string;
}

export default function Contents(props: IpropsValue) {
  return (
    <div className="flex w-full justify-center relative items-center">
      <div
        className={`absolute h-[80%] flex w-[10px] bg-bodyBgColor ${
          props.direction === "right" ? "right-0" : "left-0"
        } `}
      ></div>
      <div
        className={`absolute h-[60%] w-[50%]  flex flex-col justify-between ${
          props.direction === "right" ? "right-[10px]" : "left-[10px]"
        }`}
      >
        <div className=" h-[16px] w-full bg-silverColor"></div>
        <div className=" h-[16px] w-full bg-silverColor"></div>
      </div>

      <div
        className={`flex  justify-center items-center px-7 py-8 border rounded-lg bg-darkgreyColor border-${props.color} drop-shadow-${props.color} bg-neon bg-center`}
      >
        {props.children}
      </div>
    </div>
  );
}
