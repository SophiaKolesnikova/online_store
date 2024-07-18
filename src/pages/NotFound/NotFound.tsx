import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.description}>
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
            </p>
            <Link to={'/'}>
                <a className={styles.link}>Go back to the home page</a>
            </Link>
        </div>
    );
};

export default NotFound;
