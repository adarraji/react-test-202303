import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./userImage.module.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const UserImage = () => {
    return (
        <div className={styles.userImage}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <span>MALE - 33</span>
        </div>
    )
}
