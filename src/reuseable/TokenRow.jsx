const TokenRow = ({ i, tIcon, tName, tValue }) => (
  <div
    className={`flex justify-between rounded-lg px-4 py-3 ${
      i % 2 == 0 ? "bg-themeClr" : ""
    } `}
  >
    <div className="flex items-center space-x-2">
      <img src={tIcon} alt="token icon" className="w-8 h-8 rounded-full" />
      <h6 className="font-bold text-black ">{tName}</h6>
    </div>
    <h6 className="font-bold text-black ">${tValue}</h6>
  </div>
);

export default TokenRow;
