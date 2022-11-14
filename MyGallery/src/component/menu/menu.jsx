import { Link } from 'react-router-dom';
import { Component } from 'react';

export class Menu extends Component {
    render() {
        return (
            <div className={'menu'}>
                <nav>
                    <ul className={'menu_list'}>
                        <li className={'menu_item'}>
                            <Link to={`about`} className={'menu_link'}>
                                About me
                            </Link>
                        </li>
                        <li className={'menu_item'}>
                            <Link to={`works`} className={'menu_link'}>
                                Works
                            </Link>
                        </li>
                        <li className={'menu_item'}>
                            <Link to={`contacts`} className={'menu_link'}>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
