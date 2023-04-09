import { useEffect, useState } from "react";
import styles from "./errorsTable.module.scss";
import Spinner from "./spinner/Spinner";


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
                !showTable ? <Spinner />
                    : <div >No Items</div>
            }


        </div>

    )
}
