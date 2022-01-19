import React from "react";
import ReactDOM from "react-dom"; //porque vamos a usar portales
import "./styles/Modal.css";

//exportamos una función que se llama Modal, que recibe props

function Modal(props) {
  //si isOpen es falso, regresamos null.
  //si está true, lo vemos, sino
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
export default Modal;
