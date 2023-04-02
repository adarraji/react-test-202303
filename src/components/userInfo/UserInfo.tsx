
import styles from "./userInfo.module.scss";

export const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userId}>
        <i className="fal fa-light fa-user"/>       
        <span>#12345678</span>
      </div>
    </div>
  )
}
