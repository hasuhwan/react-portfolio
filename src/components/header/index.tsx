import DesktopMenu from "./desktopMenu";
import MobileMenu from "./mobileMenu";
import { scrollToTopHandle } from "../common/utilFunc";
import type { IonMoveToElmentListValue } from "../layout";
import { useCallback, useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
interface IpropsValue {
  onMoveToElmentList: IonMoveToElmentListValue;
}
export default function Header(props: IpropsValue) {
  const [menuOpen, setMenuOpen] = useState(false);
  const extra = useRef<HTMLElement>(null);
  const openHandle = useCallback((temp: boolean) => {
    setMenuOpen(!temp);
  }, []);
  const extraCheckHandle = useCallback(
    (e: MouseEvent) => {
      if (menuOpen && !extra.current?.contains(e.target as HTMLElement)) {
        setMenuOpen(false);
      }
    },
    [menuOpen]
  );
  useEffect(() => {
    window.addEventListener("click", (e) => {
      extraCheckHandle(e);
    });
    return () => {
      window.removeEventListener("click", (e) => {
        extraCheckHandle(e);
      });
    };
  });
  return (
    <nav
      ref={extra}
      className="header w-full flex flex-col  bg-mainBgColor  px-[5%]  py-4 fixed z-50 "
    >
      <div className="w-full flex items-center justify-between relative">
        <h1
          className=" font-emphasizeEN text-medium hover:cursor-pointer animate-fliker"
          onClick={() => {
            scrollToTopHandle();
          }}
        >
          HASUHWAN
        </h1>
        <DesktopMenu onMoveToElmentList={props.onMoveToElmentList} />
        <AiOutlineMenu
          className="text-medium text-whiteColor drop-shadow-whiteColor desktop:hidden"
          onClick={() => openHandle(menuOpen)}
        />
      </div>
      <MobileMenu
        onMoveToElmentList={props.onMoveToElmentList}
        menuOpen={menuOpen}
        openHandle={openHandle}
      />
    </nav>
  );
}
export type { IpropsValue };
