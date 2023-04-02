import styles from "./commActivity.module.scss";

export const CommActivity = () => {
    return (
        <div className={styles.commActivity}>
            <div className={styles.header}>
                <span>90-Day COMMUNICATION ACTIVITY</span>
            </div>
            <div className={styles.info}>
                <div className={styles.activityCotainer}>
                    <div className={styles.number}>6</div>
                    <div className={styles.activity}>SMS</div>
                </div>
                <div className={styles.activityCotainer}>
                    <div className={styles.number}>4</div>
                    <div className={styles.activity}>EMAIL</div>
                </div>
                <div className={styles.activityCotainer}>
                    <div className={styles.number}>1</div>
                    <div className={styles.activity}>ORDERS</div>
                </div>
            </div>

        </div>
    )
}
