import React from "react";
import { Box, Container } from "../../reuseable/Container";

export default function Home() {
  return (
    <Container>
      <Box style="w-full">
        <h1 className="text-3xl font-bold text-black">Add Wallet Address</h1>
        <div className="flex flex-col space-y-4 ">
          <input
            type="text"
            placeholder="Enter or past wallet address"
            className="bg-themeClr rounded-lg p-2 mt-4 w-full bg-slate-400"
          />
          <button className="bg-black rounded-lg p-2 w-full text-white ">
            Continue
          </button>
        </div>
      </Box>
    </Container>
  );
}
