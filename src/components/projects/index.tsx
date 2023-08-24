import Title from "../title";
import { useMemo } from "react";
import { containerCssData } from "../common/commonCssData";
export default function Projects() {
  const color = useMemo(() => "orangeColor", []);
  return (
    <div className={containerCssData}>
      <Title title="Projects" color={color} />
    </div>
  );
}
