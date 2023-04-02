import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.scss";
import { UserImage } from "../userImage/UserImage";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <div className={styles.user}>
                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                    <span>Joseph Smith</span>
                </div>
                <button>New Order</button>
            </div>
            <div className={styles.bottom}>
                <UserImage />
            </div>
        </div >
    )

}