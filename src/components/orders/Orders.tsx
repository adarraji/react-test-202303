import { SubTabs } from "./SubTabs";
import { Table } from "./Table";
import { Tabs } from "./Tabs";
import styles from "./orders.module.scss";

export const Orders = () => {

    const data = [
        {
            "id": 1,
            "order_id": 12345546,
            "sent_dt": "2018-04-14",
            "sent_tm": "16:19:00",
            "subject": {
                "title": "Thank You Bonus",
                "email": "joe.smith@testemail.com"
            },
            "type": "Promotion Email"
        },
        {
            "id": 2,
            "order_id": 12345546,
            "sent_dt": "2018-04-14",
            "sent_tm": "16:19:00",
            "subject": {
                "title": "Receipt #12345546",
                "email": "joe.smith@testemail.com"
            },
            "type": "Order Receipt Email"
        }
    ]

    return (
        <div className={styles.orders}>
            <Tabs orders={data} />
            <SubTabs />
            <Table />
        </div>
    )
}
