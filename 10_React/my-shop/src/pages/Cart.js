import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from '../features/cart/cartSlice';

function Cart(props) {
  // 인자값으로 미리 만들어 둔 함수 를 변수에 저장 (배열 가져옴)
  const cartList = useSelector(selectCartList);
  const dispatch = useDispatch();

  console.log(dispatch);

  const formatter = new Intl.NumberFormat('ko-KR')

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000원</td>
          </tr> */}
          {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩하기 */}
          {cartList && 
            cartList.map((cart, index) => 
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cart.title}</td>
                <td>
                  <button onClick={() => {dispatch(decreaseCount(cart.id)) }}>-</button>
                  {cart.count}
                  <button onClick={() => {dispatch(increaseCount(cart.id)) }}>+</button>
                </td>
                <td>{formatter.format(cart.price * cart.count)}원</td>
                <td>
                  <Button variant="outline-danger"
                    onClick={() => {dispatch(removeItemFromCart(cart.id))}}>x</Button>
                </td>
              </tr>
          )}
          

        </tbody>
    </Table>
    </div>
  );
}

export default Cart;