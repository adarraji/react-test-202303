import { useState } from "react"
import styles from "./tabs.module.scss"
import { TabTitle } from "./tabTitle/TabTitle"
import { TabPaneProps } from "./tabPane/TabPane"

type TabProps = {
    children: React.ReactElement<TabPaneProps>[]
    preSelectedTabIndex?: number
    tabType: "tabs" | "subTabs"
}

const Tabs = (props: TabProps): JSX.Element => {
    const { children, preSelectedTabIndex, tabType } = props

    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0)

    return (
        <div className={tabType === "tabs" ? styles.tabs : (tabType === "subTabs" ? styles.subTabs : "")}>
            <div className={styles.listContainer}>
                <ul>
                    {
                        children.map((item, index) => (
                            < TabTitle
                                key={item.props.title}
                                title={item.props.title}
                                index={index}
                                isActive={index === selectedTabIndex}
                                setSelectedTab={setSelectedTabIndex}
                                tabType={tabType}
                            />
                        ))
                    }
                </ul>
                {
                    tabType === "subTabs"
                    && <div className={styles.header}>
                        RECENT ORDERS
                    </div>
                }
            </div>

            {children[selectedTabIndex]}
        </div>
    )
}

export default Tabs