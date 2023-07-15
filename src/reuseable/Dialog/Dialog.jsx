import { Fragment, useState } from "react";
import { Dialog } from "@material-tailwind/react";

import AddressDialogBody from "./DialogBody";

export default function AddressDialog({ open, handleOpen, address }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen} className="bg-white rounded-lg ">
        <AddressDialogBody
          handleOpen={handleOpen}
          address={address}
          setIsCopied={setIsCopied}
          isCopied={isCopied}
        />
      </Dialog>
    </Fragment>
  );
}
