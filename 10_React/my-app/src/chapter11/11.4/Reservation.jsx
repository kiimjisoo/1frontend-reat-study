import React, { useState } from 'react';

// 교재 코드
function Reservation(props) {
  // 여러개의 입력 제어하기 => 여러개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [roomType, setRoomType] = useState('SINGLE');

  const [genderOfGuest, setGenderOfGuest] = useState('GIRL');

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  };
  const handleGuestsChange = (e) => {
    setNumberOfGuests(e.target.value);
  };
  const handleRoomChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleGenderGuestsChange = (e) => {
    setGenderOfGuest(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}, 룸 타입: ${roomType}, 성별: ${genderOfGuest}`)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식여부:
        <input
          type="checkbox"
          // checked 속성은 checkebox랑 radio 타입에 존재하고 boolean값
          checked={breakfast}
          onChange={handleBreakfastChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input
          type="number" 
          value={numberOfGuests}
          onChange={handleGuestsChange}
          />
      </label>
      <button type='submit'>제출</button>      
      <br />

{/* 추가예제 */}
      룸 타입:
      <label>
        <input 
          type="radio"
          name="rommType"
          value="SINGLE"
          checked={roomType === 'SINGLE'}
          onChange={handleRoomChange}
          />
          싱글
      </label>
      <label>
        <input 
          type="radio"
          name="rommType"
          value="TWIN"
          checked={roomType === 'TWIN'}
          onChange={handleRoomChange}
          />
          트윈        
      </label>
      <label>
        <input 
          type="radio"
          name="rommType"
          value="DOUBLE"
          checked={roomType === 'DOUBLE'}
          onChange={handleRoomChange}
          />
          더블
      </label>
    <br />


      <label>
        <input 
          type="radio"
          name='gender'
          value="girl"
          checked={genderOfGuest=== 'GIRL'}
          onChange={handleGenderGuestsChange}
          />여자
          </label>

          <label>
        <input 
          type="radio"
          name='gender'
          value="boy"
          checked={genderOfGuest=== 'BOY'}
          onChange={handleGenderGuestsChange}
          />남자
      </label>

    </form>
  );
}

export default Reservation;