import { useState } from 'react';
import './Card.css';

import Button from '../Button/Button';
import GradeList from '../GradeList/GradeList';

export default function Card(props) {
  const { student } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleAverageGrade = (arr) => {
    let total = arr.reduce((acc, curr) => acc + Number(curr), 0);
    let avg = total / arr.length;
    return avg;
  };
  const handleClick = function () {
    setIsOpen(!isOpen);
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
        </div>
      </div>
      <Button isOpen={isOpen} handleClick={handleClick} />
    </div>
  );
}
