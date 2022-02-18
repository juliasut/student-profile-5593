import './CardList.css';
import Card from './card/Card';

export default function CardList(props) {
  const { students } = props;

  return (
    <div className="card-list">
      {students.map((student) => (
        <Card key={student.id} student={student} />
      ))}
    </div>
  );
}
