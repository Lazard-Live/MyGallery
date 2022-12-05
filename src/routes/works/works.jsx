export default function Works() {
    const DataWorks = {
        Work1: {
            url: './img/works/1.jpg',
            alt: 'StartUp',
            title: 'StartUp',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic pariatur ratione soluta, tenetur voluptates.',
            git: 'https://github.com/Lazard-Live/Startup',
            page: 'https://lazard-live.github.io/Startup/'
        },
        Work2: {
            url: './img/works/2.jpg',
            alt: 'Интенсив по вёрстке "Ботаника"',
            title: 'Магазин цветов "Ботаника"',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic pariatur ratione soluta, tenetur voluptates.',
            git: 'https://github.com/Lazard-Live/Edu2021',
            page: 'https://lazard-live.github.io/Edu2021-page/'
        },
        Work3: {
            url: './img/works/3.jpg',
            alt: 'Учебный проект "Sedona"',
            title: 'Учебный проект "Sedona"',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic pariatur ratione soluta, tenetur voluptates.',
            git: 'https://github.com/Lazard-Live/edu-htmlacademy-sedona',
            page: 'https://lazard-live.github.io/edu-htmlacademy-sedona'
        },
        Work4: {
            url: './img/works/4.jpg',
            alt: 'ToDo на Vue',
            title: 'ToDo (изучение Vue)',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic pariatur ratione soluta, tenetur voluptates.',
            git: 'https://github.com/Lazard-Live/mvue3edu',
            page: 'https://lazard-live.github.io/mvue3edu/'
        },
        Work5: {
            url: './img/works/5.jpg',
            alt: 'Интенсив Angular iTLogia',
            title: 'Cars',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic pariatur ratione soluta, tenetur voluptates.',
            git: 'https://github.com/Lazard-Live/itlogia_4_angular',
            page: 'https://lazard-live.github.io/cars-app/'
        },
    };

    return (
        <div className="works">
            <div className="row works__row works__row_content-center">
                <div className="works__col col-12 col-lg-6">
                    <div className="works__wrap">
                        <img src={DataWorks.Work1.url} alt={DataWorks.Work1.alt} className="works__img"></img>
                    </div>
                </div>
                <div className="works__col col-12 col-lg-6">
                    <div className="works__info">
                        <div className="works__title">{DataWorks.Work1.title}</div>
                        <div className="works__text">{DataWorks.Work1.text}</div>
                        <a className="works__link" href={DataWorks.Work1.git}>
                            Git
                        </a>
                        <a className="works__link" href={DataWorks.Work1.page}>
                            Page
                        </a>
                    </div>
                </div>

                <div className="works__col col-12 col-lg-6">
                    <div className="works__wrap">
                        <img src={DataWorks.Work2.url} alt={DataWorks.Work2.alt} className="works__img"></img>
                    </div>
                </div>
                <div className="works__col col-12 col-lg-6">
                    {' '}
                    <div className="works__info">
                        <div className="works__title">{DataWorks.Work2.title}</div>
                        <div className="works__text">{DataWorks.Work2.text}</div>
                        <a className="works__link" href={DataWorks.Work2.git}>
                            Git
                        </a>
                        <a className="works__link" href={DataWorks.Work2.page}>
                            Page
                        </a>
                    </div>
                </div>

                <div className="works__col col-12 col-lg-6">
                    <div className="works__wrap">
                        <img src={DataWorks.Work3.url} alt={DataWorks.Work3.alt} className="works__img"></img>
                    </div>
                </div>
                <div className="works__col col-12 col-lg-6">
                    {' '}
                    <div className="works__info">
                        <div className="works__title">{DataWorks.Work3.title}</div>
                        <div className="works__text">{DataWorks.Work3.text}</div>
                        <a className="works__link" href={DataWorks.Work3.git}>
                            Git
                        </a>
                        <a className="works__link" href={DataWorks.Work3.page}>
                            Page
                        </a>
                    </div>
                </div>

                <div className="works__col col-12 col-lg-6">
                    <div className="works__wrap">
                        <img src={DataWorks.Work4.url} alt={DataWorks.Work4.alt} className="works__img"></img>
                    </div>
                </div>
                <div className="works__col col-12 col-lg-6">
                    {' '}
                    <div className="works__info">
                        <div className="works__title">{DataWorks.Work4.title}</div>
                        <div className="works__text">{DataWorks.Work4.text}</div>
                        <a className="works__link" href={DataWorks.Work4.git}>
                            Git
                        </a>
                        <a className="works__link" href={DataWorks.Work4.page}>
                            Page
                        </a>
                    </div>
                </div>

                <div className="works__col col-12 col-lg-6">
                    <div className="works__wrap">
                        <img src={DataWorks.Work5.url} alt={DataWorks.Work5.alt} className="works__img"></img>
                    </div>
                </div>
                <div className="works__col col-12 col-lg-6">
                    {' '}
                    <div className="works__info">
                        <div className="works__title">{DataWorks.Work5.title}</div>
                        <div className="works__text">{DataWorks.Work5.text}</div>
                        <a className="works__link" href={DataWorks.Work5.git}>
                            Git
                        </a>
                        <a className="works__link" href={DataWorks.Work5.page}>
                            Page
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
