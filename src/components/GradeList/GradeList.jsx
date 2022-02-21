import './GradeList.css';

export default function Grades(props) {
  const { grades } = props;

  return (
    <div className="grade-list-container">
      {grades.map((grade, i) => (
        <div key={i} className="grade-list">
          <div className="grade-info">Test {i + 1}:</div>
          <div>{grade}%</div>
        </div>
      ))}
    </div>
  );
}
