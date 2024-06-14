import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const toggleAlert = () => setIsAlertVisible(prev => !prev);
  const closeAlert = () => setIsAlertVisible(false);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={openModal}>
          Открыть модальное окно
        </button>
        <button className="btn btn-secondary" onClick={toggleAlert}>
          Показать уведомления
        </button>
      </div>

      <Modal
        show={isModalVisible}
        onClose={closeModal}
        buttons={[
          { type: 'primary', label: 'Продолжить', onClick: () => alert('clicked continue') },
          { type: 'danger', label: 'Закрыть', onClick: closeModal },
        ]}
      >
        <p>Это содержание модального окна</p>
      </Modal>

      <Alert show={isAlertVisible} type="warning" onDismiss={closeAlert}>
        Угроза
      </Alert>
      <Alert show={isAlertVisible} type="success">
        Поздравление
      </Alert>
    </div>
  );
};

export default App;
