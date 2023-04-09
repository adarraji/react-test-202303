import styles from "./sentTable.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"

export const SentTable = () => {
    // const dispatch = useAppDispatch()
    const sent = useAppSelector(state => state.order.orders.orders_AAA?.sent)

    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        <td >DATE & TIME</td>
                        <td>SUBJECT</td>
                        <td>COMMUNICATION TYPE</td>
                        <td>ORDER #</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        sent &&
                        sent.map((order, i) => {
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
