export default function info() {
    const info = {
        firstName: 'Богдан',
        lastName: 'Дорецкий',
        avatarImg: './img/about/face.jpg',
        notes: 'Попал в ИТ более 10 лет назад. Прошёл путь от "эникейщика" до системного администратора. Хочу изучить JS и сопутствующие фреймворки для релокации в другие города и профессионального роста. Имею опыт обучения и организации работы персонала. Настойчиво двигаюсь к поставленной цели. Самостоятельно ищу и изучаю необходимую информацию. Имею опыт обучения и организации работы персонала.',
    };

    return (
        <div className="about">
            <div className="about__info">
                <img className="about__img" src={info.avatarImg} alt="Моя фотография" />
                <h1 className="about__title">{info.firstName + ' ' + info.lastName}</h1>
                <p className="about__text">{info.notes}</p>
            </div>
        </div>
    );
}
