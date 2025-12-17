import type { UserDTO } from '../../models/user';
import './styles.css';

type Props = {
    user: UserDTO
}

export default function UserDetailsCard({ user } : Props) {
    return(
        <div className='rh-container rh-user-container'>
            <div className='rh-user-container-left'>
                <img src={user.avatar_url} alt="Avatar" />
            </div>
            <div className='rh-user-container-right'>
                <h3>Informações</h3>
                <div className='rh-user-container-right-items'>
                    <div className='rh-user-container-right-item'>
                        <h4>Perfil: </h4>
                        <a href={user.url}>{user.url}</a>
                    </div>
                    <div className='rh-user-container-right-item'>
                        <h4>Seguidores: </h4>
                        <p>{user.followers}</p>
                    </div>
                    <div className='rh-user-container-right-item'>
                        <h4>Localidade: </h4>
                        <p>{user.location}</p>
                    </div>
                    <div className='rh-user-container-right-item'>
                        <h4>Nome: </h4>
                        <p>{user.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
