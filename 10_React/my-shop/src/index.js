import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './app/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // App 컴포넌트와 그 하위 자식들은 리덕스 store 접근 가능하고 
    // 저장된 state를 마음대로 꺼내 쓸 수 있음
    <Provider store={store}>
        <BrowserRouter>
            <App />    
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
