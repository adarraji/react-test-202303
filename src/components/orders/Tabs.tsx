import { useState } from "react"
import styles from "./tabs.module.scss"
import { TabTitle, TabTitleProps } from "./tabTitle/TabTitle"
import { TabPaneProps } from "./tabPane/TabPane"

type TabProps = {
    children: React.ReactElement<TabPaneProps>[]
    preSelectedTabIndex?: number
}

const Tabs = (props: TabProps): JSX.Element => {
    const { children, preSelectedTabIndex } = props

    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0)

    return (
        <div className={styles.tabs}>
            <ul>
                {
                    children.map((item, index) => (
                        < TabTitle
                            key={item.props.title}
                            title={item.props.title}
                            index={index}
                            isActive={index === selectedTabIndex}
                            setSelectedTab={setSelectedTabIndex}
                        />
                    ))
                }
            </ul>

            {children[selectedTabIndex]}
        </div>
    )
}

export default Tabs