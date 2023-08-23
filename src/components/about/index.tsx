import Title from "../title";
import { changeTailwind } from "../../util/utilFunc";

export default function About() {
  return (
    <div className="introduce w-full flex flex-col items-center ">
      <Title title="About" color={changeTailwind("red")} />
    </div>
  );
}
