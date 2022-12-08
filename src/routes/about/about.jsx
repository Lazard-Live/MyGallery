export default function info() {
    const info = {
        firstName: 'Богдан',
        lastName: 'Дорецкий',
        avatarImg: './img/about/face.jpg',
        notes: 'Я начинающий Frontend разработчик из г.Мурманск (Россия). Попал в iT более 10 лет назад. Прошёл путь от "эникейщика" до системного администратора. Хочу изучить JS и сопутствующие фреймворки для релокации в другие города и профессионального роста.',
    };

    return (
        <div className='about'>
            <div className='about__info'>
                <img className='about__img' src={info.avatarImg} alt='Моя фотография'/>{' '}
                <h1 className='about__title'>{info.firstName + ' ' + info.lastName}</h1>
                <p className='about__text'>{info.notes}</p>
            </div>
        </div>
    );
}
