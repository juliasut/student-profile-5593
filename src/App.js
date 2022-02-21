import { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Search from './components/search/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
      .then((responce) => responce.json())
      .then(({ students }) => this.setState({ students }));
  }

  render() {
    const { students, searchField } = this.state;
    const filteredStudents = students.filter(({ firstName, lastName }) =>
      (firstName + lastName).toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <Search
          placeholder="Search by name"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList students={filteredStudents} />
      </div>
    );
  }
}

export default App;
