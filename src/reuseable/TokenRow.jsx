import { Tooltip } from "@material-tailwind/react";
import { commaSeperated, decConv, _decConv } from "../utils/utils";

const TokenRow = ({ i, tIcon, tName, tValue, tDecimals }) => {
  return (
    <div
      className={`flex justify-between items-center rounded-lg px-4 py-3 cursor-pointer ${
        i % 2 === 0 ? "bg-themeClr" : ""
      } `}
    >
      <div className="flex items-center space-x-2">
        {tIcon && (
          <img src={tIcon} alt="token icon" className="w-8 h-8 rounded-full" />
        )}
        <h6 className="font-bold text-black ">{tName}</h6>
      </div>
      <h6 className="font-bold text-black ">
        <Tooltip
          content={commaSeperated(_decConv(tValue, tDecimals))}
          placement="top"
        >
          <span>{decConv(tValue, 18)}</span>
        </Tooltip>
      </h6>
    </div>
  );
};

export default TokenRow;
