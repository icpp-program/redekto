import { useState } from "react";
import { CrueShowing } from "./crueShowing";
import { crueData } from "./crueData";

export const CrueOptionBox = () => {
  const [crue, setCrue] = useState(null);
  const [stat, setStat] = useState(false);

  const onClck = (obj) => {
    setStat(true);
    setTimeout(() => {
      const person = {
        nama: obj.nama,
        quote: obj.motto,
        skill: obj.skill,
      };
      setCrue(person);
      setTimeout(() => {
        setStat(false);
      }, 0);
    }, 500);
  };

  return (
    <>
      <div className="crue-option-box">
        {crueData.map((obj, i) => (
          <div
            key={i}
            onClick={() => {
              onClck(obj);
            }}
            className="crue-option-item"
          ></div>
        ))}
      </div>
      <CrueShowing item={crue} state={stat}></CrueShowing>
    </>
  );
};
