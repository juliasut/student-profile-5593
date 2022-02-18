import { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
      .then((responce) => responce.json())
      .then(({ students }) => this.setState({ students: students }));
  }

  render() {
    const { students } = this.state;

    console.log(students[0]);
    return (
      <div>
        <CardList students={students} />
      </div>
    );
  }
}

export default App;
