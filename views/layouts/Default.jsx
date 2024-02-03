const React = require('react');

const Default = (html) => {
    return (
        <html>
            <head>
                <title>Breads App</title>
            </head>
            <body>
                <h1>HTML renderd</h1>
                <div className='container'>{html.children}</div>
            </body>
        </html>
    );
};

module.exports = Default;
