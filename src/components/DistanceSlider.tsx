import React, { useState } from 'react';

function DistanceSlider() {
  const [distance, setDistance] = useState(20);

  const handleDistanceChange = (event) => {
    setDistance(Number(event.target.value));
  };

  return (
    <div className="mt-4">
      <p className="fw-bold my-0 mb-1">Khoảng cách <span className="float-end px-1">{distance} KM</span></p>
      <input
        type="range"
        id="distance"
        name="distance"
        step="10"
        min="20"
        max="200"
        value={distance}
        onChange={handleDistanceChange}
      />
    </div>
  );
}

export default DistanceSlider;