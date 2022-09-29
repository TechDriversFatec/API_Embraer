import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Calculos from '../controller/calculo';

export default function ModalResultado() {
  const [show, setShow] = useState(false);

  const fecharModal = () => setShow(false);
  const abrirModal = () => setShow(true);
  const calcular = new Calculos();
  let result = 254;
  return (
    <>
      <Button variant="primary" onClick={abrirModal}>
        Calcular
      </Button>

      <Modal
        show={show}
        onHide={fecharModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Boaaaa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result.valueOf()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={fecharModal}>
            Fechar
          </Button>
          <Button variant="primary">Tranquileba</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
