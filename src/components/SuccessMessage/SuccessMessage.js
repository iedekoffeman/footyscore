import styles from './SuccessMessage.module.css';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SuccessMessage(props) {


    return (
        <p
            className={styles.success}
        >
            <FontAwesomeIcon
                icon={faCheckCircle}
                className={styles.CheckCircle}
            />

            Your account registration was successfully submitted

        </p>
    )
}

export default SuccessMessage;
