import Title from "../title";
import { changeTailwind } from "../../util/utilFunc";

export default function Archiving() {
  return (
    <div className="introduce w-full flex flex-col items-center ">
      <Title title="Archiving" color={changeTailwind("green")} />
    </div>
  );
}
