import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addproduct } from './productSlice';
import { useState } from 'react';

function ProductList(props) {
  const productLists = useSelector(selectProductList);
  const dispatch = useDispatch();

  const [textAmount, setTextAmount] = useState('');
  console.log(productLists);
  return (
    <>
      <div>
        상품추가: 
        <input 
          type='text'
          value={textAmount}
          onChange={(e) => setTextAmount(e.target.value)}
        />
        <button
          type='button'
          onClick={() => {dispatch(addproduct(textAmount))}}
        >
          추가
        </button>

      </div>
      <div>
        <ul>상품 목록: 
          <li>{
          // productLists.map(())
          }
          </li>
        </ul>        
      </div>
    </>
  );
}

export default ProductList;