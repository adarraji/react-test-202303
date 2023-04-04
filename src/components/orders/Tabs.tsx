import styles from "./tabs.module.scss";

type TabsProps = {
    orders: {} | {
        orders_A: []
        orders_AA: []
        orders_AAA: {
            sent: {
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
        orders_B: []
        orders_C: []
    }
}

export const Tabs = (props: TabsProps) => {
    const keys = Object.keys(props.orders);
    console.log(keys)
    return (
        <div className={styles.tabs}>
            <div className={styles.tabsContainer}>
                {/* {
                    keys.map((key, i) => {
                        return <div key={i}>{key}</div>
                    })
                } */}
                <div>ORDERS A</div>
                <div>ORDERS AA</div>
                <div>ORDERS AAA</div>
                <div>ORDERS B</div>
                <div>ORDERS C</div>
            </div>
        </div>
    )
}
