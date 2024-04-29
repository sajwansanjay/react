const container = React.createElement('div', {
    id: "outerContainer"
}, [
    React.createElement('div', {
        class: 'd-flex align-items-center'
    }, [React.createElement('h1', {}, "Hello this is a Heading 1"),
        React.createElement('h2', {class: 'h-2'}, "Hello this is a heading 2")
    ]),React.createElement('div', {
        class: 'd-flex align-items-center'
    }, [React.createElement('h3', {}, "Hello this is a Heading 3"),
        React.createElement('h4', {class: 'h-2'}, "Hello this is a heading 4")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
