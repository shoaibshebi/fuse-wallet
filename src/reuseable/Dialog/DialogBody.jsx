import React from "react";
import { Alert } from "@material-tailwind/react";
import {
  CheckIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import SecondaryButton from "../SecondaryButton";

function AddressDialogBody({ handleOpen, address, setIsCopied, isCopied }) {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between ">
        <DialogHeader className="px-auto py-0 sm:p-4">
          Your Public Address
        </DialogHeader>
        <XMarkIcon
          className="mr-5 text h-6 w-6 cursor-pointer hidden sm:block "
          onClick={handleOpen}
        />
      </div>
      <div className="w-full h-0.5 bg-themeClr hidden sm:block"></div>
      <DialogBody className="space-y-2">
        <div className=" flex justify-between bg-themeClr rounded-lg px-4 py-3  w-full bg-slate-400">
          <span className="text-black">{address}</span>
          {isCopied ? (
            <CheckIcon strokeWidth={2} className="h-6 w-6 text-green-400" />
          ) : (
            <DocumentDuplicateIcon
              strokeWidth={2}
              className="h-6 w-6 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(address);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              }}
            />
          )}
        </div>
        <Alert
          className="bg-[#FFF8C5] text-black border-[#9a670055] border-2 rounded-lg flex items-center  "
          icon={
            <ExclamationTriangleIcon
              strokeWidth={2}
              className="h-6 w-6 text-[#9A6700]"
            />
          }
        >
          Please make sure you are sending assets on the Fuse network
        </Alert>
      </DialogBody>
      <DialogFooter className="pt-0 sm:p-auto ">
        <SecondaryButton
          handleClick={handleOpen}
          styles={"w-full h-12  justify-self-end mb-24 sm:mb-0"}
        >
          Close
        </SecondaryButton>
      </DialogFooter>
    </React.Fragment>
  );
}

export default AddressDialogBody;
