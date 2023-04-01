import { faStar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Header = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faStar} />
            <span>Joseph Smith</span>
            <button>New Order</button>
        </div >
    )
}
