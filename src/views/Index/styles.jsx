import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    margin: 8rem auto 8rem;
    max-width: 1200px;
  `,
  Title: styled.h1`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.5;
  `,
  Box: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
    row-gap: 50px;
  `,
  Loading: styled.p`
    margin-top: 10px;
    text-align: center;
  `,
};
