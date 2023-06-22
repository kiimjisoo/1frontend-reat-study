부트스트랩은 breakpoint 다 나눠둠
<Col md={4}> 화면을 12등분해서 4칸씩 차지
md외에 sm 등 많음
부트스트랩을 이용한 반응형 작업
md => 768px 이상에서 전체 12등분 중 4:4:4로 보여줌

리덕스 사용

전역 저장소 생성
store.js

configureStore 임포트

스토어 만든거 리액트에 제공하기위해 export 필요 (index에서 받음)
productSlice.actions 안의 액션 생성 함수들어있음 export함


1. 반복적인 상품 아이템을 src/components/ProductListItem 컴포넌트로 만들기
2. productList 배열을 반복하여 ProductListItem을 렌더링하기
3. 상품 정보를 props로 넘겨서 데이터 바인딩 하기

react-toastify
공홈가면 테스트 가능
npm install --save react-toastify
app.js에 import
import 'react-toastify/dist/ReactToastify.min.css';
<ToastContainer />만 써주면 뜸
pauseOnFocusLoss={false} 다른 페이지로 포커스 옮기면 일시정지하는 동작 멈춤
띄울 창에서 toast.error('멘트');_type은 공홈에서 주워옴

react-spinners -- 로딩중 아이콘 갖다 쓸 수 있음 


더보기 리팩토링 및 api 만들어 쓰기
react-toastify 사용해 경고창 띄우기
input박스로 수량 입력받기 및 
글자 입력시 react-spinners 사용해 로딩 아이콘
탭 ui및 렌더링 방법 3가지

