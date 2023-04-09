import styles from "./commActivity.module.scss";
import { useAppSelector } from "../../../app/hooks"

export const CommActivity = () => {
    const summary = useAppSelector(state => state.header.summary)
    return (
        <div className={styles.commActivity}>
            <div className={styles.header}>
                <span>90-Day COMMUNICATION ACTIVITY</span>
            </div>
            <div className={styles.info}>
                <div className={styles.activityCotainer}>
                    <div className={styles.number}>{summary.activity?.sms}</div>
                    <div className={styles.activity}>SMS</div>
                </div>
                <div className={styles.activityCotainer}>
                    <div className={styles.number}>{summary.activity?.email}</div>
                    <div className={styles.activity}>EMAIL</div>
                </div>
                <div className={styles.activityCotainer}>
                    <div className={styles.number}>{summary.activity?.orders}</div>
                    <div className={styles.activity}>ORDERS</div>
                </div>
            </div>

        </div>
    )
}
