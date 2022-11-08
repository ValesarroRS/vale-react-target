import { Navigate, Outlet } from "react-router-dom";
import styles from "./index.module.scss";

const PrivateLayoutContainer = ({ uid }) => {
  if (!uid) return <Navigate to="/signIn" />;
  return (
    <>
      <section className={styles.section}>
        <Outlet />
      </section>
      <section className={styles.rightSection}>
        <p> Aca va el mapita </p>
      </section>
    </>
  );
};

export default PrivateLayoutContainer;
