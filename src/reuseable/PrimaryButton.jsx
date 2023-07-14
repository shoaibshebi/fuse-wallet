import { Button } from "@material-tailwind/react";
import React from "react";

export default function PrimaryButton({ children, size, style }) {
  return (
    <Button
      size={size}
      className={`hidden lg:inline-block bg-black rounded-full font-normal shadow-none hover:shadow-none ${style} `}
    >
      <span>{children}</span>
    </Button>
  );
}
