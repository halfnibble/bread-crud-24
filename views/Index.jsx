const React = require('react');
const Default = require('./layouts/Default');

const Index = ({ breads }) => {
    return (
        <Default>
            <h2>Index page</h2>
            <ul>
                {breads.map((bread) => (
                    <li key={bread.name}>
                        <a href={`/breads/${bread.id}`}>{bread.name}</a>
                    </li>
                ))}
            </ul>
            <div className='newButton'>
                <a href='/breads/new'>
                    <button>Add a new bread</button>
                </a>
            </div>
        </Default>
    );
};

module.exports = Index;
