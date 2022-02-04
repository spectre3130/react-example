import React from 'react';
import styled from 'styled-components';
import NewItem from './NewItem';
import axios from 'axios';
import usePromise from '../lib/hooks/usePromise';

const NewListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=45de0672931c47789334fe2f46190f0f`,
    );
  }, [category]);

  if (loading) {
    return <NewListBlock>대기 중...</NewListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewListBlock>에러 발생!</NewListBlock>;
  }

  const { articles } = response.data;
  return (
    <NewListBlock>
      {articles.map((article) => (
        <NewItem key={article.url} article={article} />
      ))}
    </NewListBlock>
  );
};

export default NewList;
