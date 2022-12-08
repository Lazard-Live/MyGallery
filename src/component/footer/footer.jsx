import { Component } from 'react';

// иконки
import Icon_Edge from '../icon/edge.jsx';
import Icon_Pocket from "../icon/pocket.jsx";
import dayjs from "dayjs";

export class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
                <div className={'footer_icon-wrap'}>
                    <Icon_Pocket/>
                </div>
                <div className={'footer_text'}>{dayjs().format("YYYY") + " г."} </div>
                <div className={'footer_icon-wrap footer_icon-wrap__rotate-reverse'}>
                    <Icon_Edge />
                </div>
            </div>
        );
    }
}
