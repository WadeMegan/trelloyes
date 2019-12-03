import React,{Component} from 'react'; //whats the component
import List from './List';
import './App.css'

class App extends Component {
  static defaultProps = { //what's going on here //static is variable type
    store: {
      lists: [],
      allCards: {},
    }
  }

  render() {
    const { store } = this.props  //destructuring //store gets stored in this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])} 
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
