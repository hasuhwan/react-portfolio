import { useMemo } from "react";
import MiddleDot from "./middleDot";
import { SiNotion, SiGithub } from "react-icons/si";
import type { IarchivingObjData } from "src/types";
const Archiving = ({ color, inView }: { color: string; inView: boolean }) => {
  const archivingDataArr: string[] = useMemo(() => {
    return ["GitHub", "Notion"];
  }, []);

  const iconCss = useMemo(() => {
    return `text-whiteColor text-medium ${
      inView ? `drop-shadow-${color}` : null
    } mr-4`;
  }, [color, inView]);
  const archivingDataObj: IarchivingObjData = useMemo(() => {
    return {
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
  }, [iconCss]);
  return (
    <div className="w-full flex flex-col gap-10 desktop:flex-row desktop:gap-0 items-center justify-between">
      {archivingDataArr.map((keyword) => {
        const data = archivingDataObj[keyword];
        return (
          <a
            href={data.link} // 이동하고자 하는 외부 페이지의 URL
            rel="noopener noreferrer" // 보안을 위한 속성
            key={keyword}
            className="w-full  desktop:w-1/2   h-full flex flex-col items-center hover:cursor-pointer hover:drop-shadow-whiteColor   "
          >
            <div className="flex justify-center items-center leading-none mb-6">
              {data.icon}
              <h1
                className={`text-medium ${
                  inView ? `drop-shadow-${color}` : null
                } `}
              >
                {keyword}
              </h1>
            </div>
            <div className="flex flex-col  justify-center">
              <ul className="w-full">
                {data.contents.map((content, idx) => {
                  return (
                    <li className="text-text" key={idx}>
                      {" "}
                      <MiddleDot inView={inView}>{content}</MiddleDot>
                    </li>
                  );
                })}
              </ul>
            </div>
          </a>
        );
      })}
    </div>
  );
};
export default Archiving;
