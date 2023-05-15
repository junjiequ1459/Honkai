import Modal from "../../utils/Modal";
import React, { useState } from "react";

function MoreStatsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <button onClick={openModal}>More Stats</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is the content of the modal MORE STATS MODAL.</p>
        </Modal>
      </div>
    </>
  );
}

export default MoreStatsModal;
