import React from 'react';

interface AlertProps extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: () => void;
}

const Alert: React.FC<AlertProps> = ({ show, type, onDismiss, children }) => {
  if (!show) return null;

  return (
    <div className={`alert alert-${type} d-flex justify-content-between align-items-center`}>
      {children}
      {onDismiss && (
        <button type="button" className="btn btn-close ms-2" aria-label="Close" onClick={onDismiss}></button>
      )}
    </div>
  );
};

export default Alert;
