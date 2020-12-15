import React, { useContext, useState } from "react";
import HistoryContext from "../../context/historyContext";
import ProductsList from "../../components/productsList";
import Modal from "../../components/modal";
import ModalHistory from "../../components/modalHistory";
import "./History.scss";

function History() {
  const { history, historyActions } = useContext(HistoryContext);
  const [openModal, setOpenModal] = useState(false);

  const deleteHistory = () => {
    historyActions.clear();
    handleClose();
  };

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <section className="history-container">
      {history && history.length > 0 && (
        <>
          <div className="history-title">
            <h2>Productos que visitaste recientemente</h2>
            <p onClick={handleOpen}>Eliminar historial</p>
          </div>

          <div className="history-products">
            <p>Diciembre</p>
            {history && (
              <ProductsList
                items={history}
                canClick={false}
                listType="history-list"
                cardType="history-card"
              />
            )}
          </div>
        </>
      )}

      {history && history.length === 0 && (
        <>
          <div className="no-history">
            <h2>Tu historial está vacío</h2>
            <p>
              Empezá a descubrir todo lo que tenemos para vos. ¡Hay millones de
              productos que te pueden interesar!
            </p>
          </div>
        </>
      )}

      <Modal open={openModal} close={handleClose}>
        <ModalHistory onDelete={deleteHistory} close={handleClose} />
      </Modal>
    </section>
  );
}

export default History;
