import axios from "axios";
import { SubTabs } from "./SubTabs";
import { Table } from "./Table";
import { Tabs } from "./Tabs";
import styles from "./orders.module.scss";
import { useEffect, useState } from "react";

export const Orders = () => {    

    const [orders, setOrders] = useState({});

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = async () => {
        try {
            const response = await axios("https://evoteam-verasoft.github.io/data/orders.json");
            const orders = await response.data;
            setOrders(orders)
            console.log(orders)

        } catch (err) {
            console.log(err);
        }

    }



    return (
        <div className={styles.orders}>
            <Tabs orders={orders} />
            <SubTabs />
            <Table />
        </div>
    )
}
