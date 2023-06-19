import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewList';

function NewsPage(props) {
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
}

export default NewsPage;