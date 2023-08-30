import Header from "../header";
import { useMemo } from "react";
import bgCity from "./../../img/bg-city.png";
export default function Layout(props: { children: React.ReactNode }) {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url('${bgCity}')`,
    };
  }, []);
  return (
    <div
      className="layout w-full flex flex-col items-center  bg-center"
      style={containerStyle}
    >
      <Header />
      <main className="w-[1100px] flex flex-col items-center ">
        <div className="h-[100px]"></div>
        {props.children}
      </main>
    </div>
  );
}
