import { SubTabs } from "./SubTabs";
import { Tabs } from "./Tabs";
import styles from "./orders.module.scss";

export const Orders = () => {
    return (
        <div className={styles.orders}>
            <Tabs />
            <SubTabs />
        </div>
    )
}
