import styles from './ErrorMessage.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


function ErrorMessage({message}) {


    return (
        <p
            className={styles.error}
        >
            <FontAwesomeIcon
                icon={faTimes}
                className={styles.faTimes}
            />

            {message}

        </p>
    )
}

export default ErrorMessage;