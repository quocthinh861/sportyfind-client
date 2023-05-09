import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Popup(props) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    props.onConfirm();
  }

  const handleCancel = () => {
    setShowModal(false);
    props.onCancel();
  }

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}
      disabled={props.disabled}>
        {props.buttonText}
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faCircleCheck} style={{
              color: "#42b983",
              fontSize: "2rem",
              marginRight: "1rem",
            }}/>
            {props.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>{props.content}</Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleCancel}>
            Hủy
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Popup;
