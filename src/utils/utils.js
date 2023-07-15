import fuseIcon from "../assets/images/sFuse.svg";
import fusdIcon from "../assets/images/fUSD.svg";
import volIcon from "../assets/images/Union.svg";

const _decConv = (num, dec) => {
  return (num / +dec)?.toFixed(4)?.toString();
};
const decConv = (num, dec) => {
  let res = (num / +dec).toFixed(4).toString();
  if (res.length >= 8) {
    return truncateStr(res, 5);
  }
  return res;
};

const truncateStr = (fullStr, strLen) => {
  if (fullStr.length <= strLen) return fullStr;

  const separator = "...";
  const seperatorLength = separator.length;
  const frontChars = Math.ceil(seperatorLength / 2);
  return (
    fullStr.substring(0, frontChars) +
    separator +
    fullStr.substring(fullStr.length - 3)
  );
};

const getAssetIcon = (_asset) => {
  let asset = _asset?.toLowerCase();
  return asset === "fuse"
    ? fuseIcon
    : asset === "voltage"
    ? volIcon
    : asset === "fusd"
    ? fusdIcon
    : "https://cryptoicons.org/api/icon/eth/200";
};

const capitalize = (input) => {
  if (
    input !== null &&
    input !== "" &&
    input !== undefined &&
    typeof input === "string"
  ) {
    var words = input?.split("_");
    var CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0]?.toUpperCase() + element?.slice(1, element?.length)
      );
    });
    return CapitalizedWords?.join(" ");
  }
  input = "";
  return input;
};

const commaSeperated = (amount) => {
  if (typeof amount === "number" && amount.toString().includes(".")) {
    let amountStr = amount + "";
    let amountArr = amountStr.split(".");
    let amountArr1 = amountArr[0];
    let amountArr2 = amountArr[1];

    return (
      amountArr1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      "." +
      amountArr2
    );
  } else {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export {
  _decConv,
  decConv,
  getAssetIcon,
  truncateStr,
  capitalize,
  commaSeperated,
};
