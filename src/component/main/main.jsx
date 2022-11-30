import { Component } from 'react';
import { Outlet } from 'react-router-dom';

export class Main extends Component {
    render() {
        return (
            <div className={'main'}>
                <div className="container">
                    <Outlet />
                </div>
            </div>
        );
    }
}
