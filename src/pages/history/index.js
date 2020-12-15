import React, { useContext } from "react";
import HistoryContext from "../../context/historyContext";
import ProductsList from "../../components/productsList";
import "./History.scss";

function History() {
  const { history, historyActions } = useContext(HistoryContext);

  const deleteHistory = () => historyActions.clear();

  return (
    <section className="history-container">
      <div className="history-title">
        <h2>Productos que visitaste recientemente</h2>
        <p onClick={deleteHistory}>Eliminar historial</p>
      </div>

      <div className="history-products">
        {history && history.length > 0 && <p>Diciembre</p>}
        {history && (
          <ProductsList
            items={history}
            canClick={false}
            listType="history-list"
            cardType="history-card"
          />
        )}
      </div>
    </section>
  );
}

export default History;
