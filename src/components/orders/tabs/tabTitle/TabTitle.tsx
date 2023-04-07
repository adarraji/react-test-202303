import { useCallback } from "react"
import styles from "./tabTitle.module.scss"

export type TabTitleProps = {
    title: string
    index: number
    setSelectedTab: (index: number) => void
    isActive?: boolean
    tabType: "tabs" | "subTabs"
}

export const TabTitle = (props: TabTitleProps) => {
    const { title, index, setSelectedTab, isActive, tabType } = props;

    const handleClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index])

    return (
        <div >
            <li className={`${styles.title} ${isActive && styles.active} ${tabType === "subTabs" && styles.subTab}`}>
                <button onClick={handleClick}>{title}</button>
            </li>

        </div>
    )
}



