import styles from "./table.module.scss"

export const Table = () => {

    const data = [
        {
            "id": 1,
            "order_id": 12345546,
            "sent_dt": "2018-04-14",
            "sent_tm": "16:19:00",
            "subject": {
                "title": "Thank You Bonus",
                "email": "joe.smith@testemail.com"
            },
            "type": "Promotion Email"
        },
        {
            "id": 2,
            "order_id": 12345546,
            "sent_dt": "2018-04-14",
            "sent_tm": "16:19:00",
            "subject": {
                "title": "Receipt #12345546",
                "email": "joe.smith@testemail.com"
            },
            "type": "Order Receipt Email"
        }
    ]

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
                        data.map((order, i) => {
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
