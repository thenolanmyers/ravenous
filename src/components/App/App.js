import React from 'react';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>This is Nolan's Ravenous Search</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
