import { React, useState } from "react";
import Modal from "react-modal";
import "reactjs-popup/dist/index.css";

import ModalComponent from "./ModalComponent";

function AddNote() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="grid content-center mx-auto max-w-xl">
      <button
        className="bg-waikawa-gray-300 hover:bg-waikawa-gray-50 rounded-md p-3 h-20 w-80 font-serif text-3xl"
        onClick={openModal}
      >
        Add Note
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-waikawa-gray-200"
      >
        <ModalComponent />
      </Modal>
    </div>
  );
}

export default AddNote;
