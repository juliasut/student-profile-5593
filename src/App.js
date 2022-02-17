import { Component } from 'react';
import './App.css';

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
    const handleAverageGrade = (arr) => {
      let total = arr.reduce((acc, curr) => acc + Number(curr), 0);
      let avg = total / arr.length;
      return avg;
    };

    console.log(students[0]);
    return (
      <div>
        {students.map(
          ({ id, pic, firstName, lastName, email, company, skill, grades }) => (
            <div key={id}>
              <img src={pic} alt="student" />
              <h2 key={id}>
                {firstName} {lastName}
              </h2>
              <p>Email: {email}</p>
              <p>Company: {company}</p>
              <p>Skill: {skill}</p>
              <p>Average: {handleAverageGrade(grades)}%</p>
            </div>
          )
        )}
      </div>
    );
  }
}

export default App;
