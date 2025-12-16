import { Outlet } from 'react-router-dom';
import FormField from '../../../components/FormField';

export default function UsersIndex() {
    return(
        <>
            <main>
                <FormField />
                <Outlet />
            </main>
        </>
    );
}