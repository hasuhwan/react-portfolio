import { SiNotion, SiGithub } from "react-icons/si";
import type { IarchivingObjData } from "src/types";
const archivingDataArr: string[] = ["GitHub", "Notion"];

const iconCss = "text-whiteColor text-medium drop-shadow-greenColor mr-4";
const archivingDataObj: IarchivingObjData = {
  GitHub: {
    icon: <SiGithub className={iconCss} />,
    link: "https://github.com/hasuhwan",
    contents: [
      "소스 코드 저장소입니다.",
      "프로젝트의 소스 코드",
      "혼자서 연습을 위해 사용한 소스 코드",
      "알고리즘 문제풀이 소스 코드",
    ],
  },
  Notion: {
    icon: <SiNotion className={iconCss} />,
    link: "https://hasuhwan.notion.site/Notion-dbf047ec4aac4837b6c9afb4d7dd0420",

    contents: [
      "공부 내용 저장소입니다.",
      "공부 내용을 잊지 않기 위한 키워드 저장",
      "기본적인 내용 저장",
      "알고리즘 문제풀이 저장",
    ],
  },
};

export { archivingDataArr, archivingDataObj };
