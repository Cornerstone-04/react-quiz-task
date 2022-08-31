import React from "react";
import "../styles/results.css"

const Modal = ({
  desc,
  icon,
  name,
  checkModal,
  setModal,
  cont,
  emailVerify,
  emailMsg,
}) => {
  return (
    <section
      className={
        checkModal ? "modal-container show-modal" : "modal-container hide-modal"
      }
    >
      <div className="modal">
        <button onClick={() => setModal(!checkModal)} className="close">
          X
        </button>
        <div className="modal-contents">
          <h2>{name}</h2>
          <img src={icon} alt="Logo feedback" />
          <p>{desc}</p>
        </div>
        <p>
          <span>{emailVerify}</span>
          <span>{emailMsg}&nbsp;</span>
          <span>
            <button className="verify">Resend verification email &nbsp;</button>
          </span>
          <span>{cont}</span>
        </p>
      </div>
    </section>
  );
};

export default Modal;
