import { useMemo } from "react";
import {
  AiFillPhone,
  AiFillCalendar,
  AiFillMail,
  AiFillHome,
  AiOutlineUser,
} from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import type { IaboutValue } from "src/types";
const About = ({ inView }: { inView: boolean }) => {
  const iconCss: string = useMemo(() => {
    return `text-whiteColor text-medium mr-3 ${
      inView ? `drop-shadow-redColor` : null
    }`;
  }, [inView]);

  const aboutData: IaboutValue[] = useMemo(() => {
    return [
      {
        icon: <AiOutlineUser className={iconCss} />,
        title: "이름",
        body: "하수환",
      },
      {
        icon: <AiFillCalendar className={iconCss} />,
        title: "생년월일",
        body: "95.02.15",
      },
      {
        icon: <AiFillHome className={iconCss} />,
        title: "주소지",
        body: "경기도 안산시 단원구",
      },
      {
        icon: <AiFillPhone className={iconCss} />,
        title: "연락처",
        body: "010-3060-8791",
      },
      {
        icon: <AiFillMail className={iconCss} />,
        title: "이메일",
        body: "hapung215@gmail.com",
      },
      {
        icon: <MdSchool className={iconCss} />,
        title: "학력",
        body: "한국공학대학교 기계설계공학",
      },
    ];
  }, [iconCss]);
  return (
    <div className="flex flex-col  desktop:grid grid-cols-3">
      {aboutData.map((data) => {
        return (
          <div key={data.title} className="flex leading-none items-center py-7">
            {data.icon}
            <div className="ml-4">
              <h1 className="text-textBold mb-2">{data.title}</h1>
              <span className="text-text">{data.body}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
