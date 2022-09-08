import { Modal, Button } from "antd";
import React, { useState } from "react";

type IModalProps = {
  openModal: boolean;
};

const PopUpModal = (props: IModalProps) => {
  const { openModal } = props;
  const [open, setOpen] = useState(openModal);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default PopUpModal;
