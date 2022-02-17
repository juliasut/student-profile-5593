export default function Card(props) {
  const { student } = props;
  const handleAverageGrade = (arr) => {
    let total = arr.reduce((acc, curr) => acc + Number(curr), 0);
    let avg = total / arr.length;
    return avg;
  };

  return (
    <div>
      <img src={student.pic} alt="student" />
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>Email: {student.email}</p>
      <p>Company: {student.company}</p>
      <p>Skill: {student.skill}</p>
      <p>Average: {handleAverageGrade(student.grades)}%</p>
    </div>
  );
}
