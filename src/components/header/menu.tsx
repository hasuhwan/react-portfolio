const MenuArr: string[] = ["About", "Skills", "Archiving", "Projects"];

export default function Menu() {
  return (
    <div className="menu-container flex items-center">
      {MenuArr.map((menu, idx) => {
        return (
          <button
            key={menu}
            className={`menu  font-emphasizeEN ${
              idx !== MenuArr.length - 1 ? "mr-10" : null
            } text-menu hover:cursor-pointer hover:text-darkgreyColor`}
          >
            {menu}
          </button>
        );
      })}
    </div>
  );
}
