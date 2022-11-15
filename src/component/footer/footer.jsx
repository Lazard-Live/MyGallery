import { Component } from 'react';

// иконки
import Icon_Edge from '../icon/edge.jsx';
import Icon_Pocket from "../icon/pocket.jsx";

export class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
                <div className={'footer_icon-wrap'}>
                    <Icon_Pocket/>
                </div>
                <div className={'footer_text'}>2022 г.</div>
                <div className={'footer_icon-wrap'}>
                    <Icon_Edge />
                </div>
            </div>
        );
    }
}
