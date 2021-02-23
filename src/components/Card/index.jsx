import React from 'react';

import { S } from './styles';

export default function Card(props) {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>{props.name}</S.Title>
        <S.InnerBox>
          <S.Item>
            <S.Name>地區：</S.Name>
            <S.Text>{props.city}</S.Text>
          </S.Item>
          <S.Item>
            <S.Name>地點：</S.Name>
            <S.Text>{props.address}</S.Text>
          </S.Item>
          <S.Item>
            <S.Name>簡述：</S.Name>
            <S.Text>{props.description}</S.Text>
          </S.Item>
        </S.InnerBox>
      </S.Box>
    </S.Wrapper>
  );
}
