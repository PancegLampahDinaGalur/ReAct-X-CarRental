import React from "react";

const Overlay = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
      style={{ zIndex: 1050 }}
    >
      <div className="bg-white p-4 rounded shadow">
        {children}
        <button className="btn btn-secondary mt-3" onClick={onClose}>
          Tutup
        </button>
      </div>
    </div>
  );
};

export default Overlay;
