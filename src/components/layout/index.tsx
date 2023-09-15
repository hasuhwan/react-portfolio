import Header from "../header";
import Footer from "../footer";
import { useMemo } from "react";
import bgSky from "@images/bg-sky.jpeg";
import ScrollToTopButton from "./scrollToTopButton";
interface IonMoveToElmentListValue {
  [key: string]: () => void;
}
interface IpropsValue {
  children: React.ReactNode;
  onMoveToElmentList: IonMoveToElmentListValue;
}
export default function Layout(props: IpropsValue) {
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url('${bgSky}')`,
    };
  }, []);
  return (
    <div
      className="layout w-full flex flex-col items-center  bg-center"
      style={containerStyle}
    >
      <Header onMoveToElmentList={props.onMoveToElmentList} />
      <main className="w-full desktop:w-[1100px] flex flex-col items-center ">
        <div className="h-[50px]"></div>
        {props.children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
export type { IonMoveToElmentListValue };
