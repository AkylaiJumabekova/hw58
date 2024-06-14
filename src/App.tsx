import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-3" onClick={handleOpen}>
        Показать модальное окно
      </button>
      <Modal
        show={showModal}
        onClose={handleClose}
        buttons={[
          { type: 'primary', label: 'Продолжить', onClick: () => alert('clicked continue') },
          { type: 'danger', label: 'Закрыть', onClick: handleClose },
        ]}
      >
        <p>Это содержание модального окна</p>
      </Modal>
    </div>
  );
};

export default App;
