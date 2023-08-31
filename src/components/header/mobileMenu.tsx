import type { IpropsValue } from ".";
import { menuData } from "./headerData";
interface ImobilePropsValue extends IpropsValue {
  menuOpen: boolean;
  openHandle: (temp: boolean) => void;
}
export default function MobileMenu(props: ImobilePropsValue) {
  return (
    <div
      className={`${
        props.menuOpen === true ? null : "hidden"
      } flex menu-container flex-col items-center w-full py-7 `}
    >
      {menuData.map((menu, idx) => {
        return (
          <button
            key={menu}
            className={`menu  font-emphasizeEN ${
              idx !== menuData.length - 1 ? "mb-4" : null
            } text-menu hover:cursor-pointer text-whiteColor hover:drop-shadow-whiteColor animate-dropDown `}
            onClick={() => {
              props.onMoveToElmentList[menu]();
              props.openHandle(props.menuOpen);
            }}
          >
            {menu}
          </button>
        );
      })}
    </div>
  );
}
