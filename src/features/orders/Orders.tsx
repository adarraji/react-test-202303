import styles from "./orders.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks"
import { fetchOrders } from './ordersSlice'

import Tabs from "./tabs/Tabs";
import { TabPane } from "./tabs/tabPane/TabPane";
import { SentTable } from "./sentTable/SentTable";
import { ErrorsTable } from "./errorsTable/ErrorsTable";



export const Orders = () => {
    const dispatch = useAppDispatch()
   

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])


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
                            <SentTable/>
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
