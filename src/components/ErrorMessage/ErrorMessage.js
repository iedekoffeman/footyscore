import styles from './ErrorMessage.module.css';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ErrorMessage(props) {


    return (
        <p
            className={styles.error}
        >
            <FontAwesomeIcon
                icon={faTimes}
                className={styles.faTimes}
            />

            {props.message}

        </p>
    )
}

export default ErrorMessage;