import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Box } from "../../reuseable/Container";
import Loader from "../../reuseable/Loader";
import {
  capitalize,
  commaSeperated,
  decConv,
  _decConv,
} from "../../utils/utils";
import { getTokenProfile } from "../WalletDetails/reducers";

export default function TokenDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addressHash } = useParams();
  const { loading, tokenProfile = {} } = useSelector(
    (state) => state.walletDetails
  );

  useEffect(() => {
    dispatch(getTokenProfile({ addressHash }));
  }, [addressHash, dispatch]);

  const TokenRow = ({ _key, value, styles }) => {
    return (
      <div
        className={`flex justify-between items-center rounded-lg px-4 py-3 cursor-pointer ${styles} `}
      >
        <h6 className="font-bold text-black capitalize">{_key}</h6>
        {_key !== "Total Supply" ? (
          <h6 className=" text-black">{value}</h6>
        ) : (
          <Tooltip
            content={commaSeperated(_decConv(value, 18))}
            placement="top"
          >
            <h6 className=" text-black">
              {decConv(value, tokenProfile?.decimals)}
            </h6>
          </Tooltip>
        )}
      </div>
    );
  };

  return (
    <div className="w-full sm:max-w-2xl mx-auto pt-16 space-y-4 px-4">
      <h1 className="text-3xl font-bold text-black ">
        <ChevronLeftIcon
          className="w-6 h-6 mr-2 mb-1 inline-block cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <span>Details</span>
      </h1>

      {loading ? (
        <Box styles="w-full bg-white">
          <Loader />
        </Box>
      ) : (
        <Box styles="w-full bg-white">
          <h6 className="font-bold text-black mb-4">
            {capitalize(tokenProfile?.name)}
          </h6>
          {tokenProfile?.result && tokenProfile?.symbol ? (
            <>
              <TokenRow
                _key="Symbol"
                value={tokenProfile?.symbol?.toUpperCase()}
                styles="bg-themeClr"
              />
              <TokenRow _key="Name" value={capitalize(tokenProfile?.name)} />
              <TokenRow
                _key="Total Supply"
                value={tokenProfile?.result}
                styles="bg-themeClr"
              />
              <TokenRow _key="Decimals" value={tokenProfile?.decimals} />
            </>
          ) : (
            <h6 className="font-bold text-black mb-4 text-center">
              No Data Found
            </h6>
          )}
        </Box>
      )}
    </div>
  );
}
