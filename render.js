require('@babel/register')({
    presets: ['@babel/preset-react'],
});

const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const render = (viewName, props) => {
    const componentPath = path.join(__dirname, 'views', viewName);
    const Component = require(componentPath);

    return ReactDOMServer.renderToString(React.createElement(Component, props));
};

module.exports = render;
