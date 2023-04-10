import styles from "./orders.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchOrders } from './ordersSlice'

import Tabs from "./tabs/Tabs";
import { TabPane } from "./tabs/tabPane/TabPane";
import { SentTable } from "./sentTable/SentTable";
import { ErrorsTable } from "./errorsTable/ErrorsTable";




export const Orders = () => {
    const dispatch = useAppDispatch()
    const orders = useAppSelector(state => state.order.orders)


    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])


    return (
        <div className={styles.orders}>
            <Tabs tabType={"tabs"} preSelectedTabIndex={2}>
                <TabPane title="Orders A">
                    <Tabs tabType={"subTabs"} preSelectedTabIndex={0}>
                        <TabPane title="SENT">
                            <SentTable data={orders.orders_A} />
                        </TabPane>
                        <TabPane title="ERRORS">
                            <ErrorsTable />
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane title="Orders AA">
                    <Tabs tabType={"subTabs"} preSelectedTabIndex={0}>
                        <TabPane title="SENT">
                            <SentTable data={orders.orders_AA} />
                        </TabPane>
                        <TabPane title="ERRORS">
                            <ErrorsTable />
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane title="Orders AAA">
                    <Tabs tabType={"subTabs"} preSelectedTabIndex={0}>
                        <TabPane title="SENT">
                            <SentTable data={orders.orders_AAA.sent} />
                        </TabPane>
                        <TabPane title="ERRORS">
                            <ErrorsTable />
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane title="Orders B">
                    <Tabs tabType={"subTabs"} preSelectedTabIndex={0}>
                        <TabPane title="SENT">
                            <SentTable data={orders.orders_B} />
                        </TabPane>
                        <TabPane title="ERRORS">
                            <ErrorsTable />
                        </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane title="Orders C">
                    <Tabs tabType={"subTabs"} preSelectedTabIndex={0}>
                        <TabPane title="SENT">
                            <SentTable data={orders.orders_C} />
                        </TabPane>
                        <TabPane title="ERRORS">
                            <ErrorsTable />
                        </TabPane>
                    </Tabs>
                </TabPane>
            </Tabs>
        </div>
    )
}
