import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
    height: 80px;
    position: fixed;
    top: 0;
    width: 100%;
    background: burlywood;
    box-shadow: 1px;
    box-shadow: 1px 2px 3px 1px #cccccc;
  `,
  Box: styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
  `,
  Item: styled.div`
    padding: 0px 20px;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    :hover {
      > div {
        display: grid;
      }
    }
  `,
  Text: styled.a`
    display: block;
    text-decoration: none;
    color: black;
    font-weight: ${(props) => (props.active ? 'bold' : 'none')};
    font-size: 20px;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  `,
  Dropdown: styled.div`
    display: none;
    min-width: max-content;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    top: 80px;
    padding: 5px 10px;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  `,
  DropdownItem: styled.a`
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    :hover {
      background: lightgrey;
    }
    background: ${(props) => (props.active ? 'lightgrey' : 'none')};
  `,
};
