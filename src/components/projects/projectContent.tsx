import Slider from "react-slick";
import MiddleDot from "../archiving/middleDot";
import type { IprojectValue } from "./projectsData";

interface IpropsValue {
  project: IprojectValue;
}
export default function ProjectContent(props: IpropsValue) {
  const settings = {
    fade: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "custom-dots",
  };
  return (
    <div className="flex flex-col w-full h-full justify-between items-center py-">
      <div className="w-full h-1/4 flex flex-col justify-center items-center mb-10 text-center">
        <h1 className="text-mediumBold desktop:text-title drop-shadow-whiteColor mb-4">
          {props.project.title}
        </h1>
        <span className="text-textBold">{props.project.during}</span>
      </div>
      <div className="flex flex-col desktop:flex-row w-full gap-6 justify-between items-center">
        <div className="w-full desktop:w-1/2 h-[500px] justify-center items-start ">
          <div>
            <Slider {...settings}>
              {props.project.image.map((image, idx) => {
                return (
                  <img
                    key={idx}
                    src={image}
                    alt="webtoon"
                    className="object-contain w-full h-[450px] "
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-full h-full justify-start items-center flex flex-col desktop:w-1/2">
          <div className="w-full flex flex-col items-start justify-center mb-6">
            {props.project.summary.map((str, idx) => {
              return (
                <span className="text-textSmall mb-4" key={idx}>
                  {str}
                </span>
              );
            })}
          </div>
          <div className="w-full">
            <ul className="w-full">
              {props.project.info.map(([name, body], idx) => {
                return (
                  <li key={idx} className="flex items-center">
                    <MiddleDot>
                      <div className="flex flex-col desktop:flex-row items-center justify-center w-full">
                        <span className="text-textSmallBold  block w-full  desktop:w-1/5 desktop:mr-6">
                          {name}
                        </span>
                        {name === "GitHub" ? (
                          <a
                            className="block hover:drop-shadow-orangeColor w-full desktop:w-4/5"
                            href={`https://${body}`}
                            rel="noopener noreferrer"
                          >
                            {body}
                          </a>
                        ) : (
                          <span className="block w-full desktop:w-4/5">
                            {body}
                          </span>
                        )}
                      </div>
                    </MiddleDot>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
