import PropTypes from "prop-types";

import Dot from "assets/icons/oval.svg";

import styles from "./index.module.scss";
import Description from "components/shared/Description";

const PointedListElement = ({ text }) => (
  <>
    <div className={styles.pointedListElement}>
      <img className={styles.dot} src={Dot} alt="Dot" />
      <Description text={text} />
    </div>
  </>
);

PointedListElement.propTypes = { text: PropTypes.string.isRequired };
export default PointedListElement;
