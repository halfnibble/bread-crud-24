const React = require('react');
const Default = require('./layouts/Default');

const Show = ({ bread }) => {
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it
                {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            {bread.baker && <p>Baked by {bread.baker}</p>}

            <li>
                <a href='/breads'>Go home.</a>
            </li>
            <a className='button button-primary' href={`/breads/${bread.id}/edit`}>
                Edit
            </a>
            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE' />
            </form>
        </Default>
    );
};

module.exports = Show;
