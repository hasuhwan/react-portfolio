import webtoon1 from "./../../img/webtoon/webtoon1.png";
import webtoon2 from "./../../img/webtoon/webtoon2.png";
import sns1 from "./../../img/sns/sns1.png";
import sns2 from "./../../img/sns/sns2.png";
import sns3 from "./../../img/sns/sns3.png";
import sns4 from "./../../img/sns/sns4.png";
import challenge1 from "./../../img/challenge/challenge1.png";
import challenge2 from "./../../img/challenge/challenge2.png";
import challenge3 from "./../../img/challenge/challenge3.png";
import challenge4 from "./../../img/challenge/challenge4.png";
import challenge5 from "./../../img/challenge/challenge5.png";
import challenge6 from "./../../img/challenge/challenge6.png";
import challenge7 from "./../../img/challenge/challenge7.png";
import challenge8 from "./../../img/challenge/challenge8.png";
import stackoverflow1 from "./../../img/stackoverflow/stackoverflow1.png";
import stackoverflow2 from "./../../img/stackoverflow/stackoverflow2.png";
import kakao1 from "./../../img/kakao/kakao1.png";
import kakao2 from "./../../img/kakao/kakao2.png";
import kakao3 from "./../../img/kakao/kakao3.png";
import kakao4 from "./../../img/kakao/kakao4.png";
import kakao5 from "./../../img/kakao/kakao5.png";
import kakao6 from "./../../img/kakao/kakao6.png";

const projectListArr: string[] = [
  "webtoon",
  "sns",
  "challenge",
  "stackoverflow",
  "kakao",
];
interface IprojectValue {
  image: string[];
  title: string;
  during: string;
  summary: string[];
  info: string[][];
}
interface IprojectsListValue {
  [key: string]: IprojectValue;
}
const projectObj: IprojectsListValue = {
  webtoon: {
    image: [webtoon1, webtoon2],
    title: "오늘의 웹툰 리스트",
    during: "2023.08 (1인)",
    summary: [
      "웹툰을 즐겨보는 본인이 Flutter 학습을 위해 오늘의 웹툰 정보 제공을 해주는 서비스를 개발한 프로젝트 입니다.",
      "Dart 및 Flutter의 기본적인 학습이 된 프로젝트 입니다.",
    ],
    info: [
      ["주요 기능", "네이버 웹툰으로 링크, 웹툰 정보 노출"],
      ["GitHub", "https://github.com/hasuhwan/webtoon-flutter"],
      ["Frontend", "Dart", "Flutter"],
    ],
  },
  sns: {
    image: [sns1, sns2, sns3, sns4],
    title: "SNS 기본 구현하기",
    during: "2023.06 (1인)",
    summary: [
      " 이전에 진행했던, 팀 프로젝트에서의 아쉬운 점과 모르고 넘어갔던 내용을 채우기 위한 프로젝트 입니다. ",
      "이전 팀 프로젝트에서 이유없는 Next.js 프레임워크의 사용 대신 CSR과 SSR의 차이 숙지를 바탕으로 필요시 SSR을 적용 시켰습니다.",
      "기존 팀프로젝트에서 백엔드 개발자들과 원활하지 않은 소통이 있었습니다. 그 이유는 동료 개발자의 개발 내용에 대한 무지가 가장 컸다고 생각했습니다. 그래서 node.js 환경에서 express 프레임워크를 이용하여 통신을 하였고, DB에 대해서 무지하지만,  sequelize를 이용하여 테이블을 구축하였습니다.",
      "리덕스 툴킷을 사용하지 않고, 리듀서와 액션을 만들어보고, immer를 적용하여 불변성 유지의 어려움에서 벗어나 보고, 마지막으로 리듀서 툴킷을 사용하여 이점을 알수 있었습니다. 또한 이번에는 리덕스 성크를 이용하지 않고 리덕스 사가를 이용하여 두 미들웨어의 차이를 알수 있었습니다.",
    ],
    info: [
      ["주요 기능", "팔로잉, 상대방 글 리트윗, 댓글 작성, 회원가입 및 로그인"],
      ["GitHub", "https://github.com/hasuhwan/next-nodebird"],
      [
        "Frontend",
        "JavaScript, Next.js, React.js, styled Components, Redux, Ant Design",
      ],
      ["Backend", "Node.js, Express.js, Sequelize, Passport"],
    ],
  },
  challenge: {
    image: [
      challenge1,
      challenge2,
      challenge3,
      challenge4,
      challenge5,
      challenge6,
      challenge7,
      challenge8,
    ],
    title: "66 Challenge",
    during: "2023.01 - 2023.02 (7인)",
    summary: [
      "어떠한 행동을 66일 동안 꾸준히 반복하게 된다면, 그것은 습관이 된다는 이야기를 바탕으로 좋은 습관 만들기 챌린지 애플리케이션을 개발하고자 시작했습니다.",
      "Tailwind CSS를 처음 사용해보며 유용성을 느꼈습니다.",
      "Next.js를 적용시키며, SEO를 상향시킬 수 있었습니다.",
      "많은 데이터를 한번에 받는 것이 아닌 Intersection Observer API를 이용하여 무한 스크롤을 처음 구현해본 프로젝트입니다.",
    ],
    info: [
      [
        "주요 기능",
        "습관 게시글 CRUD, 습관 인증하기, 후기 등록, 마이페이지 내 현황 확인, 북마크",
      ],
      ["GitHub", "https://github.com/codestates-seb/66Challenge"],
      [
        "Frontend",
        "TypeScript, React.js, Next.js, PWA, styled Components, Tailwind CSS, Redux, Chart.js",
      ],
      [
        "Backend",
        "Spring, Spring Security, Spring Boot, Tomcat, Github Actions, NGINX, Amazon AWS, MySQL",
      ],
    ],
  },
  stackoverflow: {
    image: [stackoverflow1, stackoverflow2],
    title: "Stackoverflow cloning",
    during: "2022.12 - 2023.01 (6인)",
    summary: [
      "게시글 CRUD를 기반으로 복잡하지 않으며, 세계적으로 인기있는 stack overflow를 백엔드 개발자와 협업을 함으로써 협업 유의사항 및 프로세스를 습득하기 위한 프로젝트입니다.",
      "처음으로 Git을 이용하여 다른 사람들과 협업을 해보고, 학습했던 내용을 바탕으로 React를 배우면서 웹 개발의 기본 지식을 쌓을 수 있었던 프로젝트입니다.",
    ],
    info: [
      ["주요 기능", "회원가입, 로그인, 게시글 CRUD, 답변 CRUD 및 투표 기능"],
      ["GitHub", "https://github.com/codestates-seb/seb41_pre_018"],
      ["Frontend", "HTML, CSS, Styled-Component, React, Redux, Javascript"],
      [
        "Backend",
        "Java, Java Spring, Spring Security, Spring Boot, Spring Data JPA, MySQL",
      ],
    ],
  },
  kakao: {
    image: [kakao1, kakao2, kakao3, kakao4, kakao5, kakao6],
    title: "kakao talk html, css cloning",
    during: "2022.08 (1인)",
    summary: [
      "인터넷 강의를 보며 카카오톡 디자인을 모방하는 내용의 프로젝트 입니다.",
      "처음 웹 개발자에 흥미가 생기게 된 프로젝트 입니다.",
      "HTML 및 CSS로만 구성되어 있으며, 화면에 어떻게 렌더링 되는지 학습하게 된 프로젝트 입니다.",
    ],
    info: [
      ["GitHub", "https://github.com/hasuhwan/kokoa-clone-2022"],
      ["Frontend", "HTML, CSS"],
    ],
  },
};

export { projectListArr, projectObj };

export type { IprojectValue };