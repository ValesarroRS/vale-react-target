import Button from "components/shared/Button";
import { Fade as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import styles from "./index.module.scss";

const HomeMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.homeMenu}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen ? (
        <div className={styles.menuOptions}>
          <Button variant="mediumLink" text="ABOUT" />
          <Button variant="mediumLink" text="CONTACT" />
        </div>
      ) : null}
    </div>
  );
};

export default HomeMenu;
