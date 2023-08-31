import { footerData } from "./footerData";
export default function Footer() {
  return (
    <div className="footer w-full flex flex-col gap-4  justify-center items-center  bg-mainBgColor  px-[5%]  py-[35px] ">
      <div className="flex gap-12 justify-center items-center">
        {footerData.map(([icon, link], idx) => {
          return (
            <a key={idx} href={link}>
              {icon}
            </a>
          );
        })}
      </div>
      <span className="text-text drop-shadow-whiteColor">
        © 2023. Ha Su Hwan. All rights reserved.
      </span>
    </div>
  );
}
