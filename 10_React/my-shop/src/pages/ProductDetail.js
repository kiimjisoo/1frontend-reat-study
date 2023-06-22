import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { useDispatch, useSelector } from 'react-redux';
import { getMoreProducts, getSelectedProducts, selectSelectedProduct } from '../features/product/productSlice';
import { toast } from 'react-toastify';
import TabContents from '../component/TabContents';

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용 from = 0% to = 100%
const highlight = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #e8f7fa; }
  to { background-color: #cff4fc; }
`;

// 컴포넌트에 스타일 넣을려면 ()사용
const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;

function ProductDetail() {
// URL 파라미터 가져오기
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);

  const [showInfo, setShowInfo] = useState(true); // Info Alert 창 상태
  const [orderCount, setOrderCount] = useState(1); // 주문 수량 상태
  const [showTabIndex, setShowTabIndex] = useState(0); /// 탭 상태
  const [showTab, setShowTab] = useState('detail'); /// 탭 상태

// 숫자 포맷 적용
  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });

  // 처음 마운트 됐을때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에서 특정 상품의 데이터를 가져오는 작업을 했다고 가정
    // ...api call...
    const foundProduct = data.find((product) => {
        return product.id === productId;
    });
    if (!foundProduct) return;
    dispatch(getSelectedProducts(foundProduct));
    // dispatch(getMoreProducts(foundProduct));

  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
        setShowInfo(false);
    }, 3000);
    // 불필요하게 타이머가 계속 생기는 것을 정리
    return () => {
        clearTimeout(timeout);
    };
  }, []);

  // js 기본 제공 함수isNaN 문자 들어가면 true 숫자는 false 반환
  const handleChangeOrderCount = (e) => {
    if(isNaN(e.target.value)) {
      toast.error('숫자만 입력하세요');
      return;
    }
    setOrderCount(Number(e.target.value));
  };

  if(!product) {
    // return null; // 아무것도 렌더링 하지 않음
    return <div>상품이 존재하지 않습니다.</div>;
  }


    

  return (
    <Container className='pt-3'>
      {/* Quiz: Alert을 띄우고 3초 뒤에 사라지게 만들기
        (힌트: 처음 렌더링 됐을때 setTimeout으로 타이머 설정)
      */}
      {showInfo &&
        <StyledAlert variant='info' onClose={() => setShowInfo(false)} dismissible>
          현재 34명이 이 상품을 보고 있습니다.
        </StyledAlert>
      }

      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product?.imagePath} width="80%" />  
        </Col>
        <Col md={6}>
          <h4 className='pt-5'>{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{formatter.format(product?.price)}원</p>

          {/* 주문수량 입력 UI */}
          {/* m-auto = margin auto mb=margin bottom*/}
          <Col md={1} className='m-auto mb-3'>
            <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
          </Col>

          <Button variant='primary'>주문하기</Button>
        </Col>
      </Row>

      {/* 탭 UI 만들기 */}
      {/* defaultActiveKey: 기본으로 active할 탭 */}
      <Nav variant="tabs" defaultActiveKey="link-0" className='my-3'>
      <Nav.Item>
        {/* <Nav.Link eventKey="link-0" onClick={() => setShowTabIndex(0)}>상세정보</Nav.Link> */}
        <Nav.Link eventKey="link-0" onClick={() => setShowTab('detail')}>상세정보</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* <Nav.Link eventKey="link-1" onClick={() => setShowTabIndex(1)}>리뷰</Nav.Link> */}
        <Nav.Link eventKey="link-1" onClick={() => setShowTab('review')}>상세정보</Nav.Link>

      </Nav.Item>
      <Nav.Item>
        {/* <Nav.Link eventKey="link-2" onClick={() => setShowTabIndex(2)}>Q&amp;A</Nav.Link> */}
        <Nav.Link eventKey="link-2" onClick={() => setShowTab('qa')}>상세정보</Nav.Link>

      </Nav.Item>
      <Nav.Item>
        {/* <Nav.Link eventKey="link-3" onClick={() => setShowTabIndex(3)}>반품/교환정보</Nav.Link> */}
        <Nav.Link eventKey="link-3" onClick={() => setShowTab('exchange')}>상세정보</Nav.Link>
      </Nav.Item>
    </Nav>

    {/* 탭의 내용을 다 만들어 놓고 조건부 렌더링하면 됨 */}
    {/* 방법1. 삼항 연산자 사용(비효율적) */}
    {/* {showTabIndex === 0
      ? <div>탭 내용1</div>
      : showTabIndex === 1
        ? <div>탭 내용2</div>
        : showTabIndex === 2
          ? <div>탭 내용3</div>
          : showTabIndex === 3
            ? <div>탭 내용4</div>
            : null
    } */}

    {/* 방법2. 컴포넌트로 추출 */}
    {/* <TabContents showTabIndex={showTabIndex} /> */}

    {/* 방법3. 배열이나 객체 형태로 만들어서 조건부 렌더링(편법) */}
    {/* 배열 형태 */}
    {/* {
      [
        <div>탭 내용1</div>,
        <div>탭 내용2</div>,
        <div>탭 내용3</div>,
        <div>탭 내용4</div>
      ][showTabIndex]
    } */}

    {/* 객체 형태 */}
    {
      {
        'detail': <div>탭 내용1</div>,
        'review': <div>탭 내용2</div>,
        'qa': <div>탭 내용3</div>,
        'exchange': <div>탭 내용4</div>,
      }[showTab]
    }



    
    </Container>
  );
}
export default ProductDetail;