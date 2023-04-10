import { useEffect, useState } from "react";
import styles from "./errorsTable.module.scss";


export const ErrorsTable = () => {
    const [showTable, setShowTable] = useState(false)
    useEffect(() => {
        let timer = setTimeout(() => setShowTable(true), 2000);
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <div className={styles.table}>
            {
                !showTable ? <i className="fal fa-circle-notch fa-spin" ></i>
                    : <div >No Items</div>
            }


        </div>

    )
}
