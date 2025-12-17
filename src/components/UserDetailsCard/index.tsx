import type { UserDTO } from '../../models/user';
import './styles.css';

type Props = {
    user: UserDTO
}

export default function UserDetailsCard({ user } : Props) {
    return(
        <div>
            {user.avatar_url}
            <br />
            {user.name}
            <br />
            {user.location}
            <br />
            {user.url}
            <br />
            {user.followers}
        </div>
    );
}
