import { Navigate, Outlet } from "react-router-dom";
import HomeMenu from "components/HomeMenu";
import styles from "./index.module.scss";
import Map from "components/Map";

const PrivateLayoutContainer = ({ uid, openContactModal }) => {
  if (!uid) return <Navigate to="/signIn" />;
  return (
    <>
      <section className={styles.section}>
        <HomeMenu openContactModal={openContactModal} />
        <Outlet />
      </section>
      <section className={styles.rightSection}>
        <Map />
      </section>
    </>
  );
};

export default PrivateLayoutContainer;
