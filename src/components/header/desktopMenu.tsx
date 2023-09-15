import type { IheaderPropsValue } from "src/types";
import { menuData } from "./headerData";

export default function DesktopMenu(props: IheaderPropsValue) {
  return (
    <div className="hidden desktop:flex menu-container  items-center ">
      {menuData.map((menu, idx) => {
        return (
          <button
            key={menu}
            className={`menu  font-emphasizeEN ${
              idx !== menuData.length - 1 ? "mr-10" : null
            } text-menu hover:cursor-pointer text-whiteColor hover:drop-shadow-whiteColor `}
            onClick={() => {
              props.onMoveToElmentList[menu]();
            }}
          >
            {menu}
          </button>
        );
      })}
    </div>
  );
}
