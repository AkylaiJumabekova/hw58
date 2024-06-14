import React from 'react';

interface ButtonConfig {
  type: string;
  label: string;
  onClick: () => void;
}

interface ModalProps extends React.PropsWithChildren {
  show: boolean;
  onClose: () => void;
  buttons?: ButtonConfig[];
}

const Modal: React.FC<ModalProps> = ({ show, onClose, buttons, children }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          {buttons && buttons.length > 0 && (
            <div className="modal-footer">
              {buttons.map((button, index) => (
                <button key={index} type="button" className={`btn btn-${button.type}`} onClick={button.onClick}>
                  {button.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
