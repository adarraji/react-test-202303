
import styles from "./userInfo.module.scss";

export const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <div>
        <i className="fal fa-light fa-user" />
        <span>#12345678</span>
      </div>
      <div>
        <i className="fal fa-light fa-user" />
        <span>248-555-3000</span>
      </div>
      <div>
        <i className="fal fa-light fa-user" />
        <span>248-555-2000</span>
      </div>
      <div>
        <i className="fal fa-light fa-user" />
        <span>248-555-1000</span>
      </div>
      <div>
        <i className="fal fa-light fa-user" />
        <span>joe.smith@testemail.com</span>
      </div>

    </div>
  )
}
