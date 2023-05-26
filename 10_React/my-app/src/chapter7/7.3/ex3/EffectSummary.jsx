import { useEffect, useState } from "react";

function EffectSummary() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // (공통사한)
  // useEffect는 마운트 시에는 무조건 실행됨!!
  // useEffect의 return 되는 함수는 언마운트 시에는 무조건 실행됨!!

  // 렌더링 될때마다(마운트 + 업데이트) 매번 실행됨
  useEffect(() => {
    console.log('나는 매번 실행됨');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
    console.log('%c매번 실행전/언마운트', 'color: green; background: #c2ffcc');

    };
  }); 

  // count가 변할때 마다 실행됨
  useEffect(() => {
    console.log('%ccount가 변함', 'color: red; background: #fdd6d6');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
      console.log('%ccount가 실행 전/언마운트', 'color: red; background: #000000');

    };
  }, [count, name]); 
  
  // name이 변할때 마다 실행됨
  useEffect(() => {
    console.log('%cname이 변함', 'color: blue; background: #e2d6fd');
    
    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  }, [name]); 
  
  // 마운트 될때만 실행됨
  useEffect(() => {
    console.log('%c마운트 될 때만 실행', 'color: yellow; background: black');

    return () => {
      // 언마운트 될때만 실행됨
      console.log('%c언마운트 될 때만 실행', 'color: red; background: black');
    };
  }, []);
  
  
  return (
    <div>
      <p>카운트: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>카운트 +1</button>
      <p>이름:{name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
export default EffectSummary;