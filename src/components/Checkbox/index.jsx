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
          className={`checkbox-wrapper-19 d-flex align-item-center justify-content-between ${
            checkedIndex === 0 ? "checked" : ""
          }`}
        >
          <div className="d-flex align-item-center w-35">
            <input
              type="checkbox"
              id="cbtest-0"
              checked={checkedIndex === 0}
              onChange={() => handleCheckboxChange(0)}
            />
            <label htmlFor="cbtest-0" className="check-box"></label>
            <span className="ml-2">Tham gia</span>
          </div>
          <small>0 bình chọn</small>
        </span>
      </div>
      <div className="my-2">
        <span
          className={`checkbox-wrapper-19 d-flex align-item-center justify-content-between ${
            checkedIndex === 0 ? "checked" : ""
          }`}
        >
          <div className="d-flex align-item-center">
            <input
              type="checkbox"
              id="cbtest-1"
              checked={checkedIndex === 1}
              onChange={() => handleCheckboxChange(1)}
            />
            <label htmlFor="cbtest-1" className="check-box"></label>
            <span className="ml-2">Không tham gia</span>
          </div>
          <small>0 bình chọn</small>
        </span>
      </div>
      <div className="my-2">
        <span
          className={`checkbox-wrapper-19 d-flex align-item-center justify-content-between ${
            checkedIndex === 0 ? "checked" : ""
          }`}
        >
          <div className="d-flex align-item-center">
            <input
              type="checkbox"
              id="cbtest-2"
              checked={checkedIndex === 2}
              onChange={() => handleCheckboxChange(2)}
            />
            <label htmlFor="cbtest-2" className="check-box"></label>
            <span className="ml-2">Có thể</span>
          </div>
          <small>0 bình chọn</small>
        </span>
      </div>
    </>
  );
};

export default Checkbox;
