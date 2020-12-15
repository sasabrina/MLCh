import React from "react";
import Button from "@material-ui/core/Button";
import "./ModalHistory.scss";

function ModalHistory({ onDelete, close }) {
  return (
    <div className="history-modal-container">
      <h2>¿Estás seguro que querés borrar tu historial?</h2>
      <p>Tené en cuenta que vas a perder tus recomendaciones actuales.</p>

      <div className="actions-container">
        <Button variant="contained" className="btn-confirm" onClick={onDelete}>
          Eliminar historial
        </Button>
        <Button className="btn-cancel" onClick={close}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}

export default ModalHistory;
