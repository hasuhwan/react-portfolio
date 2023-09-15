import { useMemo } from "react";
import bgNeon from "@images/bg-neon.png";
import type { ItitleValue } from "src/types";

export default function Title(props: ItitleValue) {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url('${bgNeon}')`,
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={` px-7 py-7  flex items-center justify-center rounded-lg leading-none ${
          props.inView
            ? `border-2 border-${props.color} drop-shadow-${props.color}`
            : null
        }   bg-center text-center`}
        style={containerStyle}
      >
        <h1
          className={`text-title font-emphasizeEN ${
            props.inView ? `drop-shadow-${props.color}` : "text-blackColor"
          } `}
        >
          {props.title}
        </h1>
      </div>
      <div className="h-[50px] w-full flex justify-between px-8">
        <div className="h-full w-[8px] bg-gradient-to-r from-silverColor via-whiteColor to-silverColor"></div>
        <div className="h-full w-[8px] bg-gradient-to-r from-silverColor via-whiteColor to-silverColor"></div>
      </div>
    </div>
  );
}
