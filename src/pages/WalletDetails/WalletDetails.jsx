import {
  ArrowLongDownIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box } from "../../reuseable/Container";
import AddressDialog from "../../reuseable/Dialog/Dialog";
import AddressDrawer from "../../reuseable/Drawer";
import Loader from "../../reuseable/Loader";
import SecondaryButton from "../../reuseable/SecondaryButton";
import TokenRow from "../../reuseable/TokenRow";
import {
  capitalize,
  commaSeperated,
  decConv,
  getAssetIcon,
  _decConv,
} from "../../utils/utils";
import { getWalletProfile } from "./reducers";

export default function WalletDetails() {
  const dispatch = useDispatch();
  const { addressHash } = useParams();
  const navigate = useNavigate();
  const [assets, setAssets] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [chevIcon, setChevIcon] = useState(false);
  const [open, setOpen] = useState(false);
  const { loading, walletAssets = [] } = useSelector(
    (state) => state.walletDetails
  );

  const isSmallerScreen = window.innerWidth < 640;

  useEffect(() => {
    if (walletAssets?.length > 3) {
      setShowMore(true);
      let temp = walletAssets.slice(0, 3);
      setAssets(temp);
    } else {
      setShowMore(false);
      setAssets(walletAssets);
    }
  }, [walletAssets]);

  useEffect(() => {
    dispatch(getWalletProfile({ addressHash }));
  }, [addressHash, dispatch]);

  const handleOpen = () => setOpen((val) => !val);
  const showMoreHandler = () => {
    setChevIcon((val) => !val);
    setAssets(walletAssets);
  };

  let balance = walletAssets.reduce((acc, curr) => {
    return acc + +curr.balance;
  }, 0);

  return (
    <>
      <div className="w-full sm:max-w-2xl mx-auto pt-16 space-y-4 px-4 ">
        <h1 className="text-3xl font-bold text-black  ">
          <ChevronLeftIcon
            className="w-6 h-6 mr-2 mb-1 inline-block cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span className="font-mona">Wallet</span>
        </h1>
        {loading ? (
          <Box styles="w-full bg-white">
            <Loader />
          </Box>
        ) : (
          <Box styles="w-full bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 space-y-2 ">
              <div className="flex flex-col space-y-2 justify-self-start">
                <h6 className=" font-bold text-black">Balance</h6>
                <h6 className="font-bold text-black">
                  <Tooltip
                    content={commaSeperated(_decConv(balance, 18))}
                    placement="top"
                  >
                    <span>${balance ? decConv(balance, 18) : "0"}</span>
                  </Tooltip>
                </h6>
              </div>
              <SecondaryButton
                handleClick={handleOpen}
                styles="w-full sm:w-4/5 h-10  justify-self-end "
              >
                <div className="flex justify-center">
                  <ArrowLongDownIcon className="w-4 h-4 mr-1" />
                  <span className="text-white normal-case font-bold">
                    Receive
                  </span>
                </div>
              </SecondaryButton>
            </div>
          </Box>
        )}
        {loading ? (
          <Box styles="w-full bg-white">
            <Loader />
          </Box>
        ) : (
          <Box styles="w-full bg-white relative max-h-[500px] overflow-y-scroll">
            <h6 className="font-bold text-black mb-4">Your Coins</h6>
            {assets?.length ? (
              assets?.map((t, i) => (
                <>
                  <Link to={`/token-details/${t.contractAddress}`}>
                    <TokenRow
                      i={i}
                      key={i}
                      tIcon={getAssetIcon(t.symbol)}
                      tName={capitalize(t.name)}
                      tValue={t.balance}
                      tDecimals={t.decimals}
                    />
                  </Link>
                </>
              ))
            ) : (
              <p className="text-center text-black w-full p-8 pb-16 ">
                No Data Available
              </p>
            )}
            {!showMore && (
              <div className="w-full items-center absolute left-0 bottom-5">
                <p className="w-full h-0.5 bg-gray-100"></p>
                <p
                  onClick={showMoreHandler}
                  className="flex justify-center items-center mt-2 font-bold cursor-pointer"
                >
                  <span>Show More </span>
                  {!chevIcon ? (
                    <ChevronDownIcon className="w-5 h-5" />
                  ) : (
                    <ChevronUpIcon className="w-5 h-5" />
                  )}
                </p>
              </div>
            )}
          </Box>
        )}
        {!isSmallerScreen ? (
          <AddressDialog
            address={addressHash}
            open={open}
            handleOpen={handleOpen}
          />
        ) : (
          <AddressDrawer
            address={addressHash}
            open={open}
            handleOpen={handleOpen}
          />
        )}
      </div>
    </>
  );
}
