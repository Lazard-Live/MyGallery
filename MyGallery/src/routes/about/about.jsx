export default function info() {
    const info = {
        first: 'Богдан',
        last: 'Дорецкий',
        avatar: 'https://imgholder.ru/200x200/374051/adb9ca&text=Заглушка&font=kelson',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad animi aspernatur blanditiis consectetur consequuntur distinctio dolor doloremque eligendi error eum, facere facilis inventore ipsum iure labore laudantium libero nesciunt nihil odio odit officiis optio pariatur perferendis possimus quam quas quis quo repellendus reprehenderit repudiandae ullam veniam veritatis voluptatibus!',
        favorite: true,
    };

    return (
        <div className={'about'}>
            <div className={'about_img-wrap'}>
                <img key={info.avatar} src={info.avatar || null} />
            </div>

            <div>
                <h1 className={'about_title'}>{info.first + ' ' + info.last}</h1>
                {info.notes && <p>{info.notes}</p>}
            </div>
        </div>
    );
}
