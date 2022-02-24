import './CardList.css';
import Card from '../Card/Card';

export default function CardList(props) {
  const { students, addTagsToStudents } = props;

  return (
    <div className="card-list">
      {students.map((student) => (
        <Card
          key={student.id}
          student={student}
          addTagsToStudents={addTagsToStudents}
        />
      ))}
    </div>
  );
}
