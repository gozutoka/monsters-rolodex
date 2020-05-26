import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
  };
};

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json())
      .then (users => this.setState({monsters : users}));
  };

  handleChange = e => {
    this.setState({searchField : e.target.value});
  };

  render() {
    const {monsters, searchField} = this.state; // destructure the object
    const filteredMonsters = monsters.filter ( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())    //use toLowerCase() to get rid off the case sensitivity
    );
    return (
      <div className="App">
        <h1>MonsterS Rolodex</h1>
        <SearchBox 
          placeholder = {'search monsters'} 
          handleChange = {this.handleChange}
        />
        <CardList 
          monsters = {filteredMonsters} 
        />
      </div>
    );

  };
;
}

export default App;
