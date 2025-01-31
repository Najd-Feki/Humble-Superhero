import React from "react";
import "./index.css";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: "middle" | "top";
  color?: string;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = "middle",
  color,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const dialogContentClass =
    position === "top" ? "dialog-content-top" : "dialog-content-middle";

  return (
    <div className="dialog-overlay" onClick={handleOverlayClick}>
      <div
        className={`dialog-content ${dialogContentClass} ${
          color ? `dialog-${color}` : ""
        }`}
      >
        {title && <h2>{title}</h2>}
        {children}
        <button className="dialog-close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Dialog;
