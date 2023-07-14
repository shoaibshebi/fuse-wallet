import { Fragment } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Alert,
} from "@material-tailwind/react";
import {
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import SecondaryButton from "./SecondaryButton";

export default function AddressDialog({ open, handleOpen }) {
  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} className="bg-white">
        <div className="flex items-center justify-between">
          <DialogHeader>Your Public Address</DialogHeader>
          <XMarkIcon
            className="mr-3 h-5 w-5 cursor-pointer"
            onClick={handleOpen}
          />
        </div>
        <div className="w-full h-0.5 bg-themeClr"></div>
        <DialogBody className="space-y-2">
          <div className=" flex justify-between bg-themeClr rounded-lg px-4 py-3  w-full bg-slate-400">
            <span>0xe3A133EC46aB6625342eA4465AF38fC0A7769d31</span>
            <DocumentDuplicateIcon strokeWidth={2} className="h-6 w-6" />
          </div>
          <Alert
            className="bg-[#FFF8C5] text-black border-[#9a670055] border-2 rounded-lg "
            icon={
              <ExclamationTriangleIcon
                strokeWidth={2}
                className="h-6 w-6 text-[#9A6700]"
              />
            }
          >
            A simple alert with icon for showing message
          </Alert>
        </DialogBody>
        <DialogFooter>
          <SecondaryButton
            handleClick={handleOpen}
            style="w-full h-12  justify-self-end"
          >
            Close
          </SecondaryButton>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
