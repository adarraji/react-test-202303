import styles from "./header.module.scss";
import { UserImage } from "./userImage/UserImage";
import { UserInfo } from "./userInfo/UserInfo";
import { CommActivity } from "./commActivity/CommActivity";
import { SmsStatus } from "./smsStatus/SmsStatus";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks"
import { fetchSummary } from "./headerSlice";


export const Header = () => {

    const [openLoader, setOpenLoader] = useState(false);

    const dispatch = useAppDispatch()
    // const summary = useAppSelector(state => state.header.summary)

    useEffect(() => {
        dispatch(fetchSummary())
    }, [dispatch])

    return (
        <div className={styles.header}>
            {
                openLoader && <div className={styles.laoder}>
                    <div className={styles.close}>
                        <i onClick={() => setOpenLoader(false)} className="fal fa-times" ></i>
                    </div>
                    <div className={styles.loading}>
                        <i className="fal fa-circle-notch fa-spin" ></i>
                    </div>
                </div>
            }
            <div className={styles.top}>
                <div className={styles.user}>
                    <i className="fal fa-star"></i>
                    <span>Joseph Smith</span>
                </div>
                <button onClick={() => setOpenLoader(true)}>New Order</button>
            </div>
            <div className={styles.bottom}>
                <UserImage />
                <UserInfo />
                <CommActivity />
                <SmsStatus />
            </div>
        </div >
    )

}