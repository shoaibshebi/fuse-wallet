import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Box } from "../../reuseable/Container";
import AddressDialog from "../../reuseable/Dialog";
import SecondaryButton from "../../reuseable/SecondaryButton";
import TokenRow from "../../reuseable/TokenRow";

export default function WalletDetails() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const Tokens = ["Fuse Dollar", "Fuse", "Voltage"];

  const handleOpen = () => setOpen((val) => !val);

  return (
    <>
      <div className="w-full sm:max-w-2xl mx-auto pt-16 space-y-4 px-4">
        <h1 className="text-3xl font-bold text-black ">Wallet</h1>
        <Box style="w-full bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 space-y-2 ">
            <div className="flex flex-col space-y-2 justify-self-start">
              <h6 className=" font-bold text-black">Balance</h6>
              <h6 className=" font-bold text-black">$60</h6>
            </div>
            <SecondaryButton
              handleClick={handleOpen}
              style="w-full sm:w-4/5 h-10  justify-self-end"
            >
              {/* <ArrowLongDownIcon strokeWidth={2} className="h-6 m-0" /> */}
              <span className="text-white ">Receive</span>
            </SecondaryButton>
          </div>
        </Box>
        <Box style="w-full bg-white">
          <h6 className="font-bold text-black mb-4">Your Coins</h6>
          {Tokens.map((t, i) => (
            <TokenRow
              i={i}
              key={i}
              tIcon="https://via.placeholder.com/50"
              tName={t}
              tValue="0.00"
            />
          ))}
        </Box>
        <AddressDialog open={open} handleOpen={handleOpen} />
      </div>
    </>
  );
}
