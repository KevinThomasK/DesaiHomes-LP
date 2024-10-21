import React from "react";
import Image from "next/image";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null; // If modal is not open, don't render it

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-modal"
          style={{ color: "black" }}
          onClick={onClose}
        >
          &times;
        </button>
        <Image src={imageSrc} width={780} height={861} alt="Selected Image" />
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .modal-content {
          position: relative;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          max-width: 90vw; /* Prevents the modal from overflowing the screen width */
          max-height: 90vh; /* Prevents the modal from overflowing the screen height */
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .modal-content img {
          max-width: 100%; /* Makes sure the image never overflows its container */
          max-height: 80vh; /* Ensures the image doesn't exceed the viewport height */
          object-fit: contain; /* Ensures the image maintains its aspect ratio */
        }
        .close-modal {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ImageModal;
