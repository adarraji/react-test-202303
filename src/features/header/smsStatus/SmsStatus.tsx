import styles from "./smsStatus.module.scss";
import { useAppSelector } from "../../../app/hooks"

export const SmsStatus = () => {
    const summary = useAppSelector(state => state.header.summary)
    return (
        <div className={styles.smsStatus}>
            <div className={styles.statusCotainer}>
                <div className={styles.header}>SMS CARRIER STATUS</div>
                <div className={styles.status}>{summary.carrier_status?.status}</div>
            </div>
            <div className={styles.date}>{summary.carrier_status?.since}</div>
        </div>
    )
}
