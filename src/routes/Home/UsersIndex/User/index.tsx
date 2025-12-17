import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as userService from '../../../../services/user-service'
import type { UserDTO } from '../../../../models/user';
import UserDetailsCard from '../../../../components/UserDetailsCard';
import './styles.css';

export default function User() {

    const params = useParams();

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findByUsername(String(params.userName))
        .then(response => {
            setUser(response.data);
        })
  });

    return(
        <div>
            {
                user
                ? <UserDetailsCard user={user} />
                : <h2>Erro ao buscar usuário</h2>
            }
        </div>
    );
}