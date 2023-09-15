import { introduceTextArr } from "./introduceData";

const Introduce = () => {
  return (
    <div className="flex flex-col items-center desktop:items-center text-center">
      {introduceTextArr.map((text) => {
        return (
          <span key={text} className=" desktop:text-text mb-2">
            {text}
          </span>
        );
      })}
    </div>
  );
};
export default Introduce;
