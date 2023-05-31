import React, { useState } from "react";
import "./style.css";

const Checkbox = () => {
  const [checkedIndex, setCheckedIndex] = useState(-1);

  const handleCheckboxChange = (index) => {
    setCheckedIndex(index === checkedIndex ? -1 : index);
  };

  return (
    <>
      <div className="my-2">
        <span
          className={`checkbox-wrapper-19 flex items-center ${
            checkedIndex === 0 ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            id="cbtest-0"
            checked={checkedIndex === 0}
            onChange={() => handleCheckboxChange(0)}
          />
          <label htmlFor="cbtest-0" className="check-box"></label>
          <span className="ml-2">Tham gia</span>
        </span>
      </div>
      <div className="my-2">
        <span
          className={`checkbox-wrapper-19 flex items-center ${
            checkedIndex === 0 ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            id="cbtest-1"
            checked={checkedIndex === 1}
            onChange={() => handleCheckboxChange(1)}
          />
          <label htmlFor="cbtest-1" className="check-box"></label>
          <span className="ml-2">Không tham gia</span>
        </span>
      </div>
      <div className="my-2">
        <span
          className={`checkbox-wrapper-19 flex items-center ${
            checkedIndex === 0 ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            id="cbtest-2"
            checked={checkedIndex === 2}
            onChange={() => handleCheckboxChange(2)}
          />
          <label htmlFor="cbtest-2" className="check-box"></label>
          <span className="ml-2">Có thể</span>
        </span>
      </div>
    </>
  );
};

export default Checkbox;
