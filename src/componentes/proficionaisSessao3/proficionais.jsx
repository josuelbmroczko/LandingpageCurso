import React, { useState } from "react";
import Modal from "react-modal";
import { ModalStyled, StyleProficionais } from "./profiStyle";
import { data } from "../data";

export default function Proficionais() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProfissional, setSelectedProfissional] = useState(null);

  const openModal = (profissional) => {
    setSelectedProfissional(profissional);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProfissional(null);
    setModalIsOpen(false);
  };

  // Coletando todos os profissionais dinamicamente
  const profissionais = Object.values(data.profissionais).filter((item) =>
    item?.nome
  );

  return (
    <StyleProficionais>
      <div className="time">
        <span>{data.profissionais.texto1}</span>
        <h2>{data.profissionais.titulo}</h2>
        <p>{data.profissionais.texto}</p>
      </div>
      <ul>
        {profissionais.map((profissional, index) => (
          <li key={index} onClick={() => openModal(profissional)}>
            <img src={profissional.foto} alt={profissional.nome} />
            <div className="timeDescricao">
              <h3>{profissional.nome}</h3>
              <p>{profissional.especialidade}</p>
              <span className="textoProficional">{profissional.texto}</span>
            </div>
          </li>
        ))}
      </ul>

      {selectedProfissional && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "10%",
              width: "70%",
              height: "80%",
              left: "10%",
              textAlign: "center",
            },
          }}
        >
          <ModalStyled>
            <img
              className="modal-image"
              src={selectedProfissional.foto}
              alt={selectedProfissional.nome}
            />
            <div className="textosModal">
              <h2>{selectedProfissional.nome}</h2>
              <p>{selectedProfissional.especialidade}</p>
              <p>{selectedProfissional.texto}</p>
            </div>
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
          </ModalStyled>
        </Modal>
      )}
    </StyleProficionais>
  );
}
