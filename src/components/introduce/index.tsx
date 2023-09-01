import Title from "../title";
import Contents from "../contents";
import { forwardRef, useMemo, ForwardedRef } from "react";
import { containerCssData } from "../common/commonCssData";
import { introduceTextArr } from "./introduceData";

const Introduce = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const color = useMemo(() => "purpleColor", []);
  return (
    <div className={containerCssData}>
      <Title title={"Front-end Developer"} color={color} />
      <Contents color={color}>
        <div className="flex flex-col items-center desktop:items-center text-center">
          {introduceTextArr.map((text) => {
            return (
              <span key={text} className=" desktop:text-text mb-2">
                {text}
              </span>
            );
          })}
        </div>
      </Contents>
    </div>
  );
});
export default Introduce;
