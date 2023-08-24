import {
  AiFillPhone,
  AiFillCalendar,
  AiFillMail,
  AiFillHome,
  AiOutlineUser,
} from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { iconCss } from "./aboutCss";
interface IaboutValue {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const aboutData: IaboutValue[] = [
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
export { aboutData };
