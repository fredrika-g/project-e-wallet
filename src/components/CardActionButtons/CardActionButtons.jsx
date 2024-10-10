import styles from "./CardActionButtons.module.css";

function CardActionButtons({ handleAction }) {
  return (
    <>
      <div className={styles.actionBtnGroup}>
        <button onClick={(e) => handleAction("activate")}>Activate Card</button>
        <button onClick={(e) => handleAction("delete")}>Delete Card</button>
      </div>
    </>
  );
}

export default CardActionButtons;
