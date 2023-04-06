import { useCallback } from "react"
import styles from "./tabTitle.module.scss"

export type TabTitleProps = {
    title: string
    index: number
    setSelectedTab: (index: number) => void
    isActive?: boolean
}

export const TabTitle = (props: TabTitleProps) => {
    const { title, index, setSelectedTab, isActive } = props;

    const handleClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index])

    return (
        <div>
            <li className={`${styles.title} ${isActive ? 'active' : ''}`}>
                <button onClick={handleClick}>{title}</button>
            </li>
        </div>
    )
}
