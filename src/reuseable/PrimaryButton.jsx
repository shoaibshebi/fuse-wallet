import { Button } from "@material-tailwind/react";
import React from "react";

export default function PrimaryButton({ children, size, styles }) {
  return (
    <Button
      size={size}
      className={`hidden lg:inline-block bg-black rounded-full shadow-none hover:shadow-none normal-case ${styles} `}
    >
      {children}
    </Button>
  );
}
