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
                        <td>Header 1</td>
                        <td>Header 2</td>
                        <td>Header 3</td>
                        <td>Header 4</td>
                        <td>Header 5</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>row 11</td>
                        <td>row 12</td>
                        <td>row 13</td>
                        <td>row 14</td>
                        <td>row 15</td>
                    </tr>
                    <tr>
                        <td>row 21</td>
                        <td>row 22</td>
                        <td>row 23</td>
                        <td>row 24</td>
                        <td>row 25</td>
                    </tr>
                    <tr>
                        <td>row 31</td>
                        <td>row 32</td>
                        <td>row 33</td>
                        <td>row 34</td>
                        <td>row 35</td>
                    </tr>



                </tbody>
            </table>
        </div>
    )
}
