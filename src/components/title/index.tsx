import { useMemo } from "react";
import bgNeon from "./../../img/bg-neon.png";

interface IpropsValue {
  title: string;
  color: string;
}

export default function Title(props: IpropsValue) {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url('${bgNeon}')`,
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={` px-7 py-7  flex items-center justify-center rounded-lg leading-none border-2 border-${props.color} drop-shadow-${props.color}  bg-center `}
        style={containerStyle}
      >
        <h1 className={`neon-title  drop-shadow-${props.color}`}>
          {props.title}
        </h1>
      </div>
      <div className="h-[50px] w-full flex justify-between px-4">
        <div className="h-full w-[6px] bg-silverColor"></div>
        <div className="h-full w-[6px] bg-silverColor"></div>
      </div>
    </div>
  );
}
