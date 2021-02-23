import styled from 'styled-components';

import { device } from '../../core/unit/device';

export const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    max-width: 500px;
    border: 1px solid coral;
    background: antiquewhite;

    @media ${device.XS} {
      max-width: 250px;
      width: 250px;
    }
  `,
  Box: styled.div`
    padding: 10px 25px;
  `,
  InnerBox: styled.div``,
  Title: styled.h2`
    font-size: 25px;
    margin: 8px 0;
    font-weight: bold;
    line-height: 1.5;
  `,
  Name: styled.span`
    font-weight: bold;
    font-size: 18px;
  `,
  Text: styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 75ch;
    line-height: 1.5;
  `,
  Item: styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 5px 0;
  `,
};
