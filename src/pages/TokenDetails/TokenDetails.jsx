import React from "react";
import { Box } from "../../reuseable/Container";
import TokenRow from "../../reuseable/TokenRow";

export default function TokenDetails() {
  const Tokens = ["Fuse Dollar", "Fuse", "Voltage"];

  return (
    <div className="w-full sm:max-w-2xl mx-auto pt-16 space-y-4 px-4">
      <h1 className="text-3xl font-bold text-black ">Details</h1>
      <Box style="w-full bg-white">
        <h6 className="font-bold text-black mb-4">Fuse</h6>
        {Tokens.map((t, i) => (
          <TokenRow
            key={i}
            i={i}
            tIcon="https://via.placeholder.com/50"
            tName={t}
            tValue="0.00"
          />
        ))}
      </Box>
    </div>
  );
}
