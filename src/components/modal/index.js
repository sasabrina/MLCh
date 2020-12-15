import React from "react";
import Dialog from "@material-ui/core/Dialog";

function Modal({ children, open, close }) {
  return (
    <Dialog open={open} onClose={close}>
      {children}
    </Dialog>
  );
}

export default Modal;
