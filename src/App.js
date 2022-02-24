import { Component } from 'react';
import './App.css';

import CardList from './components/CardList/CardList';
import Search from './components/search/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      searchStringByName: '',
      searchStringByTag: '',
    };
  }

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
      .then((responce) => responce.json())
      .then(({ students }) =>
        this.setState({
          students: students.map((student) => ({
            ...student,
            tags: [],
          })),
        })
      );
  }

  render() {
    const { students, searchStringByName, searchStringByTag } = this.state;

    const studentsByName = students.filter(({ firstName, lastName }) =>
      (firstName + lastName)
        .toLowerCase()
        .includes(searchStringByName.toLowerCase())
    );

    const filteredStudents = studentsByName.filter((student) =>
      searchStringByTag.length
        ? student.tags.find((element) =>
            element.toLowerCase().includes(searchStringByTag.toLowerCase())
          )
        : studentsByName
    );

    const addTagsToStudents = (tags, id) => {
      let studentToTag = filteredStudents.find((student) => student.id === id);
      studentToTag.tags = tags;
      return;
    };

    return (
      <div>
        <Search
          placeholder="Search by name"
          handleChange={(e) =>
            this.setState({ searchStringByName: e.target.value })
          }
        />
        <Search
          placeholder="Search by tag"
          handleChange={(e) =>
            this.setState({ searchStringByTag: e.target.value })
          }
        />
        <CardList
          students={filteredStudents}
          addTagsToStudents={addTagsToStudents}
        />
      </div>
    );
  }
}

export default App;
