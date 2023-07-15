import React, { useState } from "react";
import { Drawer } from "@material-tailwind/react";

import AddressDialogBody from "./Dialog/DialogBody";

function AddressDrawer({ open, handleOpen, address }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        open={open}
        placement="bottom"
        onClose={handleOpen}
        className="p-4 rounded-t-xl"
      >
        <AddressDialogBody
          handleOpen={handleOpen}
          address={address}
          setIsCopied={setIsCopied}
          isCopied={isCopied}
        />
      </Drawer>
    </React.Fragment>
  );
}

export default AddressDrawer;
