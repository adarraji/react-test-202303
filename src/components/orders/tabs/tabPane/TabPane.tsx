import { ReactElement } from "react"

export type TabPaneProps = {
    title: string
    children: ReactElement | ReactElement[]
}

export const TabPane = (props: TabPaneProps): JSX.Element => {
    return (
        <div>{props.children}</div>
    )
}
