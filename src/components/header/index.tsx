import Menu from "./menu";
export default function Header() {
  return (
    <div className="header w-full py-4 bg-whiteColor border-b border-blackColor shadow-md flex items-center px-[5%] justify-between">
      <img
        src="/logo.png"
        alt="logo"
        className=" hover:cursor-pointer h-full"
      />
      <Menu />
    </div>
  );
}
