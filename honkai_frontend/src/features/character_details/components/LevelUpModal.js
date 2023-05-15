import Modal from "../../utils/Modal";
import React, { useState } from "react";
import "../CSS/LevelUpModal.css";

function LevelUpModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="element-container">
        <i class="fa fa-search" onClick={openModal}></i>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is the content of the modal LevelUp Modal.</p>
        </Modal>
      </div>
    </>
  );
}

export default LevelUpModal;
