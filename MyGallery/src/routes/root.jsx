import About from './about.jsx';
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to={`about`}>About me</Link>
                        </li>
                        <li>
                            <Link to={`works`}>Works</Link>
                        </li>
                        <li>
                            <Link to={`contacts`}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
