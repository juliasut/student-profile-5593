import './Card.css';

export default function Card(props) {
  const { student } = props;
  const handleAverageGrade = (arr) => {
    let total = arr.reduce((acc, curr) => acc + Number(curr), 0);
    let avg = total / arr.length;
    return avg;
  };

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={student.pic} alt="student" className="image" />
      </div>
      <div className="info-container">
        <h2>
          <strong>{student.firstName}</strong> {student.lastName}
        </h2>
        <div className="info-details">
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {handleAverageGrade(student.grades)}%</p>
        </div>
      </div>
    </div>
  );
}
