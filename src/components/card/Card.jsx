import { useState } from 'react';
import './Card.css';

import Button from '../Button/Button';
import GradeList from '../GradeList/GradeList';
import Input from '../Input/Input';

export default function Card(props) {
  const { student, addTagsToStudents } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState([]);

  const handleAverageGrade = (arr) => {
    let total = arr.reduce((acc, curr) => acc + Number(curr), 0);
    let averageGrade = total / arr.length;
    return averageGrade;
  };

  const handleClick = function () {
    setIsOpen(!isOpen);
  };

  const handleAddTags = function (e) {
    e.preventDefault();
    const val = e.target.value;

    if (e.key === 'Enter' && val.length) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        e.target.value = '';
        return;
      }
      setTags([...tags, val]);
      addTagsToStudents([...tags, val], student.id);
      e.target.value = '';
    }
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
          {isOpen && <GradeList grades={student.grades} />}
          {student.tags && (
            <div>
              <ul>
                {student.tags.map((tag, i) => (
                  <li key={i} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Input placeholder="Add a tag" handleAddTags={handleAddTags} />
        </div>
      </div>
      <Button isOpen={isOpen} handleClick={handleClick} />
    </div>
  );
}
