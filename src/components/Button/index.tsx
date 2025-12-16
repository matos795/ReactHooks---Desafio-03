import './styles.css';
import { Link } from 'react-router-dom';

export type Props = {
    text: string;
}

export default function Button({ text } : Props) {
    return(
        <Link to='/users'>
            <button className='rh-btn'>{text}</button>
        </Link>
    );
}