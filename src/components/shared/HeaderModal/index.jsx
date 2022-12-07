import backIcon from "../../../assets/icons/backButton.svg";
import styles from "./index.module.scss";

const HeaderModal = ({ title, onClick }) => (
  <div className={styles.headerModalContainer}>
    <button onClick={onClick}>
      <img src={backIcon} alt="backButton" />
    </button>
    <label className={styles.headerModalTitle}> {title} </label>
  </div>
);

export default HeaderModal;
