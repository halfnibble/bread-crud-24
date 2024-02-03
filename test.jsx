export default function TodoList() {
    listItems = ['one', 'two', 'three'];

    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img src='https://i.imgur.com/yXOvdOSs.jpg' alt='Hedy Lamarr' className='photo' />
            <ul>
                {listItems.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </>
    );
}
