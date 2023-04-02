import styles from "./header.module.scss";
import { UserImage } from "../userImage/UserImage";
import { UserInfo } from "../userInfo/UserInfo";
import { CommActivity } from "../commActivity/CommActivity";

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
            </div>
        </div >
    )

}