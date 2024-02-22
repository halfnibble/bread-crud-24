const React = require('react');
const Default = require('./layouts/Default');

const Index = ({ breads, bakers, pageName = 'Index' }) => {
    return (
        <Default>
            <h2>{pageName} page</h2>
            <div className='row'>
                <div className='one-half column'>
                    <h3>Breads</h3>
                    <ul>
                        {breads.map((bread) => (
                            <li key={bread.id}>
                                <a href={`/breads/${bread.id}`}>{bread.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='newButton'>
                        <a href='/breads/new'>
                            <button>Add a new bread</button>
                        </a>
                    </div>
                </div>
                <div className='one-half column'>
                    <h3>Bakers</h3>

                    <ul>
                        {bakers.map((baker) => (
                            <li key={baker.id}>
                                <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Default>
    );
};

module.exports = Index;
