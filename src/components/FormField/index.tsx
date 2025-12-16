import { Link } from 'react-router-dom';
import ButtonForm from '../ButtonForm';
import './styles.css';

export default function FormField() {

    return(
            <div className='rh-container rh-form-container'>
                <div>
                    <h2>Encontre um perfil Github</h2>
                </div>
                <div className='rh-mb30'>
                    <input 
                    type="text" 
                    placeholder='Usuário Github' />
                </div>
                <div>
                    <Link to='/'>
                        <ButtonForm text='Encontrar' />
                    </Link>
                </div>
            </div>
    );
}