import { Outlet } from 'react-router-dom';
import { Menu } from '../../component/menu/menu.jsx';

export default function Root() {
    return (
        <>
            <Menu />
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
