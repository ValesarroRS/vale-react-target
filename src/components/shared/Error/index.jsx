import styles from "./index.module.scss";

const Error = ({ children }) => <p className={styles.error}>{children}</p>;

export default Error;
