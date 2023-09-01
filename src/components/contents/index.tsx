import { useMemo } from "react";
import bgNeon from "@images/bg-neon.png";

interface IpropsValue {
  children: React.ReactNode;
  color: string;
  project?: boolean;
}

export default function Contents(props: IpropsValue) {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url('${bgNeon}')`,
    };
  }, []);
  return (
    <div className="flex flex-col w-[90%] desktop:max-w-[1000px] justify-center items-center">
      <div
        className={`flex w-full   justify-center items-center px-7 py-8 border rounded-lg bg-darkgreyColor border-${props.color} drop-shadow-${props.color}  bg-center`}
        style={containerStyle}
      >
        {props.children}
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
