import styles from "./header.module.scss";
import { UserImage } from "./UserImage";
import { UserInfo } from "./UserInfo";
import { CommActivity } from "./CommActivity";
import { SmsStatus } from "./SmsStatus";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <div className={styles.user}>
                    <i className="fal fa-light fa-star"></i>
                    <span>Joseph Smith</span>
                </div>
                <button>New Order</button>
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