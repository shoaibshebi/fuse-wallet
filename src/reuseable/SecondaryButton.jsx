import { Button } from "@material-tailwind/react";
import React from "react";

export default function SecondaryButton({ children, handleClick, style }) {
  return (
    <Button
      className={`bg-black font-normal rounded-lg ${style} shadow-none hover:shadow-none`}
      onClick={() => handleClick()}
    >
      {children}
    </Button>
  );
}
