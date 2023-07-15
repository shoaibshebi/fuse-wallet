import { Button } from "@material-tailwind/react";
import React from "react";

export default function SecondaryButton({ children, handleClick, styles }) {
  return (
    <Button
      className={`bg-black font-normal rounded-lg ${styles} shadow-none hover:shadow-none normal-case`}
      onClick={() => handleClick()}
    >
      {children}
    </Button>
  );
}
