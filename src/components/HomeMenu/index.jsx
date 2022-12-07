import Button from "components/shared/Button";
import { Fade as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "store/auth.reducer";

const HomeMenu = ({ openContactModal, openAboutModal }) => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = useAuth();

  return (
    <div className={styles.homeMenu}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen ? (
        <div className={styles.menuOptions}>
          <Button
            variant="mediumLink"
            text="ABOUT"
            onClick={!user.uid ? () => navigate("/about") : openAboutModal}
          />
          <Button
            variant="mediumLink"
            text="CONTACT"
            onClick={openContactModal}
          />
        </div>
      ) : null}
    </div>
  );
};

//onClick=
export default HomeMenu;
