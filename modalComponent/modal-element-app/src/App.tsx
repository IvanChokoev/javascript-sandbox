import React, { useState } from 'react';
import Modal from './Modal.tsx';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-content">
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        {/* Dynamic modal content */}
        <h2>Modal Content</h2>
        <p>This is an example modal with dynamic content:</p>
        {/* Pass any content you want */}
        <input type="text" placeholder="Enter your name" />
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;