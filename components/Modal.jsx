"use client";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm"; // Import your ContactModal

const FullScreenModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Toggle body no-scroll class when modal is opened or closed
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Clean up on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="unique-modal-backdrop" onClick={onClose}>
      <div
        className="unique-modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <div className="unique-modal-content">
          <div
            className="unique-modal-header d-flex justify-content-end"
            style={{ maxHeight: "30px" }}
          >
            <img src="/assets/images/dd/logo.png" style={{position:"absolute",left:"13px",top:"10px",maxWidth:"42px"}}/>
            <button
              type="button"
              className="unique-close-btn"
              aria-label="Close"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="unique-modal-body">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated ModalTrigger to take isOpen and onClose props
export const ModalTrigger = ({ isOpen, onClose }) => {
  return (
    <>
      <FullScreenModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
