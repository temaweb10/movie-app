import React from "react";

function HaveIs({ children, obj, keyObj }) {
  return (
    <>
      {obj.hasOwnProperty(keyObj) && obj.key1 !== undefined && !isNaN(obj.key1)
        ? children
        : ""}
    </>
  );
}

export default HaveIs;
