import Title from "../title";
import { changeTailwind } from "../../util/utilFunc";

export default function Projects() {
  return (
    <div className="introduce w-full flex flex-col items-center ">
      <Title title="Projects" color={changeTailwind("orange")} />
    </div>
  );
}
