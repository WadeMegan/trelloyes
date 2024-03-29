import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component',()=>{

    //smoke test
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title="First card" content="Lorem ipsum"/>, div);
    ReactDOM.unmountComponentAtNode(div);
    }); //passes

    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card title="First card" content="Lorem ipsum"/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });

});