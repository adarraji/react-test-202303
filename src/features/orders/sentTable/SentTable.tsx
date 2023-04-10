import styles from "./sentTable.module.scss";
import { useAppSelector } from "../../../app/hooks"
import { useCallback, useState } from "react";

export const SentTable = () => {

    const data = useAppSelector(state => state.order.orders.orders_AAA.sent)

    type Data = typeof data
    type SortKeys = keyof Data[0]
    type SortOrder = "asc" | "desc"

    const [sortKey, setSortkey] = useState<SortKeys>("id")
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc")

    const sortedData = useCallback(() => {

        const sortData = ({ tableData, sortKey, reverse, }: {
            tableData: Data;
            sortKey: SortKeys;
            reverse: boolean;
        }) => {
            if (!sortKey) return tableData;

            const sortedData = [...data].sort((a, b) => {
                return a[sortKey] > b[sortKey] ? 1 : -1;
            });

            if (reverse) {
                return sortedData.reverse();
            }

            return sortedData;
        }

        return sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" })

    }, [data, sortKey, sortOrder])

    const headers: { key: SortKeys; label: string }[] = [
        { key: "sent_dt", label: "DATE & TIME" },
        { key: "subject", label: "SUBJECT" },
        { key: "type", label: "COMMUNICATION TYPE" },
        { key: "order_id", label: "ORDER #" },
    ]

    const changeSort = (key: SortKeys) => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        setSortkey(key)
    }


    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        {
                            headers.map(row => {
                                return <td key={row.key} onClick={() => changeSort(row.key)}>{row.label}</td>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedData().map((order, i) => {
                            return (
                                <tr key={i}>
                                    <td >
                                        <div>
                                            <div className={styles.date}>{order.sent_dt}</div>
                                            <div>{order.sent_tm}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div >
                                            <div className={styles.title}>{order.subject.title}</div>
                                            <div> {order.subject.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {order.type}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {order.order_id}
                                        </div>
                                    </td>
                                    <td>
                                        <button>RESEND</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
