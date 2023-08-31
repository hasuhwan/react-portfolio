import { SiGithub, SiInstagram, SiNotion } from "react-icons/si";
const iconCss =
  "text-whiteColor drop-shadow-whiteColor text-medium hover:drop-shadow-orangeColor";

const footerData: [JSX.Element, string][] = [
  [<SiGithub className={iconCss} />, "https://github.com/hasuhwan"],
  [
    <SiNotion className={iconCss} />,
    "https://hasuhwan.notion.site/Notion-dbf047ec4aac4837b6c9afb4d7dd0420",
  ],
  [
    <SiInstagram className={iconCss} />,
    "https://www.instagram.com/hasuhwan215/",
  ],
];

export { footerData };
