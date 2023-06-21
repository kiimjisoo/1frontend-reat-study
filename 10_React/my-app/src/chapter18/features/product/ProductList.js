import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToProductList, selectProductList } from './productSlice';
import { useState } from 'react';

function ProductList(props) {
  const dispatch = useDispatch();
  // const productList = useSelector(state => state.product.productList);
  const productList = useSelector(selectProductList);

  const [productName, setProductName] = useState('');

  // const [textAmount, setTextAmount] = useState('');
  const handleAddProduct = () => {
    dispatch(addToProductList(productName));
    setProductName('');
  };

  return (
    <>
      <p>
        상품 추가:
        <input 
          type='text' 
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button 
          type='button'
          onClick={handleAddProduct}
        >
          추가
        </button>
      </p>
      <p>상품 목록</p>
      <ul>
        {productList && 
          productList.map((product, index) => <li key={index}>{product}</li>)}
      </ul>
    </>
  );
}

export default ProductList;