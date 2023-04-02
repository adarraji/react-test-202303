
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./userInfo.module.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userId}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <div className={styles.id}>#12345678</div>
      </div>
    </div>
  )
}
