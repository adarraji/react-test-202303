import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.scss";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                <span>Joseph Smith</span>
                <button>New Order</button>
            </div>
            
        </div>
    )

}