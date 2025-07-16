import "./Modal.css";
import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, title, content }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 20);
    } else {
      setIsVisible(false);
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const highlightNumbers = (text) => {
    if (typeof text !== "string") return text;
    const parts = text.split(/(\d[\d,\.]*)/g);
    return parts.map((part, i) =>
      /^\d/.test(part) ? (
        <span key={i} style={{ color: "red", fontWeight: "bold" }}>{part}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div
      className={`modal__overlay ${isVisible ? "is-open" : "is-closed"}`}
      onClick={onClose}
    >
      <div
        className={`modal__content ${isVisible ? "is-open" : "is-closed"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} title="close">
          ✖
        </button>
        <h3 className="modal__title">{title}</h3>
        <p className="modal__text">
          {Array.isArray(content) ? (
            content.map((paragraph, idx) => (
              <p key={idx} className="modal__paragraph">
                {highlightNumbers(paragraph)}
              </p>
            ))
          ) : (
            <p className="modal__paragraph">{highlightNumbers(content)}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default Modal;
