import { useMemo } from "react";
import bgNeon from "./../../img/bg-neon.png";

interface IpropsValue {
  children: React.ReactNode;
  color: string;
  direction: string;
  project?: boolean;
}

export default function Contents(props: IpropsValue) {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url('${bgNeon}')`,
    };
  }, []);
  return (
    <div className="flex flex-col w-full justify-center items-center">
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
          <div className=" h-[16px] w-full bg-gradient-to-r from-silverColor to-whiteColor"></div>
          <div className=" h-[16px] w-full bg-gradient-to-r from-silverColor to-whiteColor"></div>
        </div>
        <div
          className={`flex min-w-[800px]  justify-center items-center px-7 py-8 border rounded-lg bg-darkgreyColor border-${props.color} drop-shadow-${props.color}  bg-center`}
          style={containerStyle}
        >
          {props.children}
        </div>
      </div>
      {props.project && (
        <div className="h-[60px] w-full flex justify-center gap-[200px]">
          <div className="h-full w-[12px] bg-silverColor"></div>
          <div className="h-full w-[12px] bg-silverColor"></div>
        </div>
      )}
    </div>
  );
}
