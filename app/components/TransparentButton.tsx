import React from "react";
type props = {
  text: string;
};
const TransparentButton = (prop: props) => {
  return (
    <div className="bg-[#e9ebfb] rounded-lg flex justify-center px-2">
      <p className="text-[#7354AA]">{prop.text}</p>
    </div>
  );
};

export default TransparentButton;
