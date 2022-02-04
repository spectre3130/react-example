import React from 'react';
import Categories from '../components/Categories';
import NewList from '../components/NewList';
import { useParams } from 'react-router-dom';

const NewPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <>
      <Categories />
      <NewList category={category} />
    </>
  );
};

export default NewPage;
