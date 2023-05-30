import React, { useState } from 'react';

// Quiz2: 배열의 각 요소(객체 데이터)에 id 속성을 추가하고 배열 렌더링시 key값 추가해보기
const students = [
  {
    name: '김지수',
    id: 'kim',
  },
  {
    name: '유재석',
    id: 'yu',
  },
  {
    name: '유연석',
    id: 'yuu',
  },
  {
    name: '조정석',
    id: 'jo',
  },
  {
    name: '정경호',
    id: 'jung',
  },
];

// 출석부 이름 출력하기
function AttendanceBook(props) {
  
  return (
    <ul>
      {/* Quiz1: 학생 이름을 반복 렌더링 해보기 */}
      {students.map((student, index) => {
        return <li key={student.id}>{student.name}, {student.id}</li>;
      })}
      {/* {students.map(student => <li key={student.id}>{student.name}</li>)} */}
    </ul>
  );
}

export default AttendanceBook;