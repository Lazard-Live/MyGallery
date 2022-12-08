import { Link } from 'react-router-dom';
import { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <nav>
                    <ul className={'header_list'}>
                        <li className={'header_item'}>
                            <Link to={`about`} className={'header_link'}>
                                Обо мне
                            </Link>
                        </li>
                        <li className={'header_item'}>
                            <Link to={`works`} className={'header_link'}>
                                Мои работы
                            </Link>
                        </li>
                        <li className={'header_item'}>
                            <Link to={`contacts`} className={'header_link'}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
