import React, { useState } from 'react';

function ListKey(props) {
  const [list, setList] = useState(['과제하기', '복습하기']);
  const [value, setValue] = useState('');

  const addToList = () => {
    setList(prevList => [value, ...prevList]); 
    // setList(prevList => [...prevList, value]); // index테스트용
    setValue('');
  };

  // key값이 없을때 
  // 추가된 아이템뿐만 아니라 전체가 다 DOM에 업데이트 됨 (비효율적)
  // 각 아이템에 key를 추가하지 않았기 때문에 리액트는 어떤 항목이 업데이트 됐는지 알지 못함
  // 모든 항목을 전부 업데이트 시킴
  // 고유한값이 아니면 중복시 전체 업데이트 함 
  return (
    <>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type='button' onClick={addToList}>추가</button>
      <ul>
        {list.map((item, index) => {
          // return <li>{item}</li>
          // return <li key={item}>{item}</li>;
          return <li key={index}>{item}</li>; // 지양함 index순번 밀려서 전체 업데이트함
        })}
      </ul>
    </>
  );
}

export default ListKey;