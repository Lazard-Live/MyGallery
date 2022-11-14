import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={'error-page'}>
            <h1>Ой... тут пусто....</h1>
            <p>Прости, я еще не придумал что тут должно быть =) </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
