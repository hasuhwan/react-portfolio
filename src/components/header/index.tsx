import Menu from "./menu";
export default function Header() {
  return (
    <div className="header w-full py-4 bg-mainBgColor flex items-center px-[5%] justify-between fixed z-50 ">
      <h1 className=" font-emphasizeEN  text-medium hover:cursor-pointer animate-fliker">
        HASUHWAN
      </h1>
      <Menu />
    </div>
  );
}
