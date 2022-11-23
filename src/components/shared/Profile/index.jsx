import { useDeleteLogOutMutation } from "services/targetApi";
import { revokeCredentials } from "store/auth.reducer";
import { useDispatch } from "react-redux";
import Title from "components/shared/Title";
import styles from "./index.module.scss";
import profileIcon from "../../../assets/icons/profileIcon.svg";
import profileBackground from "../../../assets/icons/profileBackground.svg";
import Button from "components/shared/Button";
import SplitBar from "components/shared/SplitBar";
import Description from "components/shared/Description";

const Profile = () => {
  const dispatch = useDispatch();

  const [logOutRequest] = useDeleteLogOutMutation();

  async function logOut() {
    try {
      await logOutRequest();
    } catch (error) {
      return;
    }
    dispatch(revokeCredentials());
  }
  return (
    <div className={styles.profileContainer}>
      <Title text="target" />
      <div className={styles.profilePic}>
        <img
          src={profileBackground}
          alt="profileBackground"
          className={styles.profileBackground}
        />
        <img
          src={profileIcon}
          alt="profileIcon"
          className={styles.profileIcon}
        />
      </div>
      <Description variant="medium"> cbrum</Description>
      <div className={styles.options}>
        <Button variant="mediumLinkBlue" text="Edit" className={styles} />
        <p className={styles.split}> / </p>
        <Button variant="mediumLink" text="Logout" onClick={logOut} />
      </div>
      <SplitBar />
    </div>
  );
};

export default Profile;
