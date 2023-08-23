import Title from "../title";
import { changeTailwind } from "../../util/utilFunc";

export default function Skills() {
  return (
    <div className="introduce w-full flex flex-col items-center ">
      <Title title="Skills" color={changeTailwind("blue")} />
    </div>
  );
}
