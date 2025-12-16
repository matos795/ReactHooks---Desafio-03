import { useState } from 'react';
import ButtonForm from '../ButtonForm';
import './styles.css';

type FormData = {
    username: string;
}

export default function FormField() {

    const [formData, setFormData] = useState<FormData>({
        username: ''
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value})
  }

    return(
            <form className='rh-container rh-form-container'>
                <div>
                    <h2>Encontre um perfil Github</h2>
                </div>
                <div className='rh-mb30'>
                    <input 
                    onChange={handleInputChange}
                    name="username"
                    type="text" 
                    value={formData.username}
                    placeholder='Usuário Github' />
                </div>
                <div>
                    <ButtonForm text='Encontrar' param={formData.username} />
                </div>
            </form>
    );
}