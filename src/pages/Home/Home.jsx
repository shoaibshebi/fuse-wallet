import { QrCodeIcon } from "@heroicons/react/24/outline";
import { Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";

import { Box, Container } from "../../reuseable/Container";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect, connectors, error, isLoading } = useConnect();

  let connector = connectors[0];
  const qrCodeHandler = async () => {
    connect({ connector });
  };
  const disconnectHandler = () => {
    disconnect();
    setWalletAddress("");
  };

  useEffect(() => {
    setWalletAddress(address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <Container>
      <Box styles="w-full">
        <h1 className="text-3xl font-bold text-black">Add Wallet Address</h1>
        <div className="flex flex-col space-y-4 ">
          <div className="w-full relative">
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter or past wallet address"
              className="bg-themeClr rounded-lg p-2 mt-4 w-full bg-slate-400"
            />

            {isLoading ? (
              <Spinner className="w-6 h-6 absolute top-6 right-2 text-black cursor-pointer" />
            ) : (
              <QrCodeIcon
                className="w-6 h-6 absolute top-6 right-2 text-black cursor-pointer"
                disabled={!connector?.ready}
                onClick={qrCodeHandler}
              />
            )}
          </div>
          {error && address && (
            <div className="flex  items-center">
              <div>You are already connected.</div>
              <button
                className="bg-black rounded-full px-2 py-1 ml-2   text-white "
                onClick={disconnectHandler}
              >
                Disconnect
              </button>
            </div>
          )}

          <Link to={`/wallet-details/${walletAddress}`}>
            <button className="bg-black rounded-lg p-2 w-full text-white ">
              Continue
            </button>
          </Link>
        </div>
      </Box>
    </Container>
  );
}
