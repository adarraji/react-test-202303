import styles from "./tabs.module.scss"

export const Tabs = () => {
    return (
        <div className={styles.tabs}>
            <div className={styles.tabsContainer}>
                <div>ORDERS A</div>
                <div>ORDERS AA</div>
                <div>ORDERS AAA</div>
                <div>ORDERS B</div>
                <div>ORDERS C</div>
            </div>
        </div>
    )
}
