import Modal from "../../utils/Modal";
import React, { useState } from "react";
import "../CSS/ElementsModal.css";

function ElementsModal() {
  const [isElementsModalOpen, setIsElementsModalOpen] = useState(false);
  const openElementsModal = () => {
    setIsElementsModalOpen(true);
  };

  const closeElementsModal = () => {
    setIsElementsModalOpen(false);
  };
  return (
    <>
      <div className="element-container">
        <div class="search-icon" onClick={openElementsModal}>
          <i class="fa fa-search"></i>
        </div>{" "}
        <Modal isOpen={isElementsModalOpen} onClose={closeElementsModal}>
          <h2>Modal Content</h2>
          <p>This is the content of the modal ELEMENTs.</p>
        </Modal>
      </div>
    </>
  );
}

export default ElementsModal;
