import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component',()=>{

    //smoke test
    it('renders without crashing', () => {    
        const div = document.createElement('div');
        ReactDOM.render(<List header='List 1' cards={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    }); //fails because of cards.map -> how to pass props to test?
    
    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List header='List 1' cards={[]}  />) //not sure what to put here
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });

});

