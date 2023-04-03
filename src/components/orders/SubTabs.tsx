import styles from "./subTabs.module.scss"

export const SubTabs = () => {
    return (
        <div className={styles.subTabs}>

            <button className={styles.sent}>SENT</button>
            <button className={styles.errors}>ERRORS</button>
            <div className={styles.header}>RECENT ORDERS</div>
        </div>
    )
}
