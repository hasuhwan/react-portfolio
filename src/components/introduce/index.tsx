import Title from "../title";
import { changeTailwind } from "../../util/utilFunc";
const introduceTitle: string = "프론트엔드 개발자 하수환";
const introduceTextArr: string[] = [
  "안녕하세요.",
  "소 같은 개발자 하수환입니다.",
  "소가 되새김질을 하는 이유는 입에 들어온 음식을 잘 소화시키기 위함입니다.",
  "새롭게 알게 된 내용을 잘 소화시키기 위해 왜 필요한가에 대하여 한 번 더 생각하는 행동이 저의 장점입니다.",
];

export default function Introduce() {
  return (
    <div className="introduce w-full flex flex-col items-center ">
      <Title title={"Front-end Developer"} color={changeTailwind("white")} />
      <div className="flex flex-col items-center px-7 py-8 border-2 rounded-lg bg-darkgreyColor border-orangeColor">
        {introduceTextArr.map((text) => {
          return (
            <span
              key={text}
              className="introduce-text text-text mb-1 text-whiteColor"
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
