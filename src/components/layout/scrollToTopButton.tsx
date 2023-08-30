import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";

export default function ScrollToTopButton() {
  const [showBtn, setShowBtn] = useState(false);
  const onShowHandle = useCallback(() => {
    if (window.scrollY > 400) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, []);
  const scrollToTopHandle = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      onShowHandle();
    });
    return window.removeEventListener("scroll", () => {
      onShowHandle();
    });
  }, [onShowHandle]);

  return (
    <div
      className={`${
        showBtn === false ? "hidden" : null
      } w-[50px] h-[50px] flex justify-center bg-blackColor rounded-full items-center  z-49 right-6 bottom-10 fixed  hover:cursor-pointer animate-dropDown `}
      onClick={scrollToTopHandle}
    >
      <FaArrowUp size={35} className="text-whiteColor drop-shadow-whiteColor" />
    </div>
  );
}
