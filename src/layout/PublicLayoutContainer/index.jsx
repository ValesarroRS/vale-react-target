import { Outlet, Navigate } from "react-router-dom";
import DownloadApp from "components/DownloadApp";
import styles from "./index.module.scss";
import HomeMenu from "components/HomeMenu";

const PublicLayoutContainer = ({ uid }) => {
  if (uid) {
    return <Navigate to="/welcome" replace />;
  }
  return (
    <>
      <section className={styles.section}>
        <HomeMenu />
        <Outlet />
      </section>
      <section className={styles.rightSection}>
        <DownloadApp />
      </section>
    </>
  );
};

export default PublicLayoutContainer;
