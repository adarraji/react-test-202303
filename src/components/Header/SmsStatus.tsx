import styles from "./smsStatus.module.scss";

export const SmsStatus = () => {
    return (
        <div className={styles.smsStatus}>
            <div className={styles.statusCotainer}>
                <div className={styles.header}>SMS CARRIER STATUS</div>
                <div className={styles.status}>IN</div>
            </div>
            <div className={styles.date}>SINCE JUN 3,2016</div>
        </div>
    )
}
