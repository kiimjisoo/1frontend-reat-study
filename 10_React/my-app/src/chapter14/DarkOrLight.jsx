import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import MainContent from './MainContent';

const themeList = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#fffff',
    background: '#222222'
  },
}

function DarkOrLight(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light')
    }
  };


  return (
    // ThemeContext의 값을 하위 컴포넌트들이 쓸 수 있게끔 broadcast해줌
    <ThemeContext.Provider value={{ theme, themeList, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;