import './styles.css';
import { Link } from 'react-router-dom';

export type Props = {
    text: string;
    param: string;
}

export default function Button({ text, param } : Props) {
    return(
        <Link to={`/users/${param}`} >
            <button className='rh-btn'>{text}</button>
        </Link>
    );
}