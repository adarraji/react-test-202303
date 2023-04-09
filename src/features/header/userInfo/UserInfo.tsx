
import styles from "./userInfo.module.scss";
import { useAppSelector } from "../../../app/hooks"

export const UserInfo = () => {
  const summary = useAppSelector(state => state.header.summary)

  return (
    <div className={styles.userInfo}>
      <div>
        <i className="fal fa-user" />
        <span>#{summary.id}</span>
      </div>
      <div>
        <i className="fal fa-mobile" />
        <span>{summary.mobile_phone}</span>
      </div>
      <div>
        <i className="fal fa-building" />
        <span>{summary.work_phone}</span>
      </div>
      <div>
        <i className="fal fa-house" />
        <span>{summary.home_phone}</span>
      </div>
      <div>
        <i className="fal fa-at" />
        <span>{summary.email}</span>
      </div>

    </div>
  )
}
