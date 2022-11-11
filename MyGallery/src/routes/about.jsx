export default function Contact() {
    const contact = {
        first: 'Богдан',
        last: 'Дорецкий',
        avatar: 'https://imgholder.ru/200x300/8493a8/adb9ca&text=Заглушка&font=kelson',
        notes: 'Красавчик =)',
        favorite: true,
    };

    return (
        <div id="contact">
            <div>
                <img key={contact.avatar} src={contact.avatar || null} />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{' '}
                </h1>

                {contact.notes && <p>{contact.notes}</p>}
            </div>
        </div>
    );
}
