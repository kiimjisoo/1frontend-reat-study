import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer() {
  const [isVisible, setIsVisible] = useState(true);
  
  
  return (
    <div>
      <button type="button" onClick={() => setIsVisible(true)}>나타남</button>
      <button type="button" onClick={() => setIsVisible(false)}>사라짐</button>
      {isVisible && <EffectSummary />}
      {/* 논리 연산자의 short-circuit을 이용한 조건부 렌더링 */}
    </div>
  );
}
export default EffectContainer;