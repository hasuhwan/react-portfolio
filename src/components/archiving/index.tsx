import Title from "../title";
import { useMemo } from "react";
import { containerCssData } from "../common/commonCssData";
export default function Archiving() {
  const color = useMemo(() => "greenColor", []);
  return (
    <div className={containerCssData}>
      <Title title="Archiving" color={color} />
    </div>
  );
}
