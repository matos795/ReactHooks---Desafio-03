import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <div>
                <Link to='/'>
                    <h2>Github API</h2>
                </Link>
            </div>
        </header>
    );
}