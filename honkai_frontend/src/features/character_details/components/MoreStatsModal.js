import Modal from "../../utils/Modal";
import React, { useState } from "react";

function MoreStatsModal() {
  const [isMoreStatsModalOpen, setisMoreStatsModalOpen] = useState(false);
  const openStatsModal = () => {
    setisMoreStatsModalOpen(true);
  };

  const closeStatsModal = () => {
    setisMoreStatsModalOpen(false);
  };
  return (
    <>
      <div>
        <button onClick={openStatsModal}>More Stats</button>
        <Modal isOpen={isMoreStatsModalOpen} onClose={closeStatsModal}>
          <h2>Modal Content</h2>
          <p>This is the content of the modal MORE STATS.</p>
        </Modal>
      </div>
    </>
  );
}

export default MoreStatsModal;
