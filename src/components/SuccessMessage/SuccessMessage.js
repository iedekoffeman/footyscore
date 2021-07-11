import styles from './SuccessMessage.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'


function SuccessMessage({message}) {


    return (
        <p
            className={styles.success}
        >
            <FontAwesomeIcon
                icon={faCheckCircle}
                className={styles.CheckCircle}
            />

            {message}

        </p>
    )
}

export default SuccessMessage;
