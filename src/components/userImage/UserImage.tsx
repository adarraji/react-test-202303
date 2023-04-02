import styles from "./userImage.module.scss";


export const UserImage = () => {
    return (
        <div className={styles.userImage}>
            <i className="fal fa-light fa-user"></i> 
            <span>MALE - 33</span>
        </div>
    )
}
