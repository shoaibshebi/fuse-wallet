import React from "react";

export function Container({ children, style }) {
  return (
    <div
      className={` flex flex-col w-full overflow-hidden px-4 absolute sm:max-w-2xl
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
       ${style} `}
    >
      {children}
    </div>
  );
}
export function Box({ children, style }) {
  return (
    <div
      className={` flex flex-col w-full bg-white p-6 rounded-lg overflow-hidden 
       ${style} `}
    >
      {children}
    </div>
  );
}
