import styles from "./tabs.module.scss";

type TabsProps = {
    orders: {
        id: number
        order_id: number
        sent_dt: string
        sent_tm: string
        subject: {
            title: string
            email: string
        }
        type: string
    }[]
}

export const Tabs = (props: TabsProps) => {
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
