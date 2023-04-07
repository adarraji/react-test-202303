import axios from "axios";
import { Table } from "./sentTable/SentTable";
import styles from "./orders.module.scss";
import { useEffect, useState } from "react";
import Tabs from "./tabs/Tabs";
import { TabPane } from "./tabs/tabPane/TabPane";
import { ErrorsTable } from "./errorsTable/ErrorsTable";


type OrdersData = {
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


export const Orders = () => {
    const [orders, setOrders] = useState<OrdersData | null>(null);

    useEffect(() => {
        getOrders()


    }, [])


    const getOrders = async () => {
        try {
            const response = await axios("https://evoteam-verasoft.github.io/data/orders.json");
            const data = await response.data;
            setOrders(data)

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className={styles.orders}>
            <Tabs tabType={"tabs"} preSelectedTabIndex={2}>
                <TabPane title="Orders A">
                </TabPane>
                <TabPane title="Orders AA">

                </TabPane>
                <TabPane title="Orders AAA">
                    <Tabs tabType={"subTabs"} preSelectedTabIndex={0}>
                        <TabPane title="SENT">
                            <Table data={orders?.orders_AAA?.sent ? orders.orders_AAA.sent : []} />
                        </TabPane>
                        <TabPane title="ERRORS">
                            <ErrorsTable />
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane title="Orders B">

                </TabPane>
                <TabPane title="Orders C">

                </TabPane>
            </Tabs>
        </div>
    )
}
