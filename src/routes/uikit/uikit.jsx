import Icon_Edge from '../../component/icon/edge.jsx';
import Icon_Pocket from '../../component/icon/pocket';

export default function Uikit() {
    return (
        <div className={'uikit'}>
            <div className="uikit_block">
                <div className="uikit_title">Иконки</div>
                <div className={'uikit_icon'}>
                        <Icon_Edge />
                        <Icon_Pocket />
                </div>
            </div>

            <div className="uikit_block">
                <div className="uikit_title">Текст</div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, esse harum in, itaque natus nisi obcaecati possimus, praesentium saepe similique sunt totam velit? Accusantium autem distinctio eaque error explicabo laborum similique suscipit vero! Blanditiis consequuntur ipsum nemo numquam provident quasi?
            </div>
        </div>
    );
}
