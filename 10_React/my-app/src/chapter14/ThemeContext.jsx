import { createContext } from "react";

const ThemeContext = createContext('light');
ThemeContext.displayName = 'ThemeContext'; //리액트 개발자 도구에서 보면 컨텍스트 이름 설정

export default ThemeContext;