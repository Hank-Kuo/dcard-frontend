import React from 'react';
import { withRouter } from 'react-router-dom';

import { S } from './styles';

import { SPOTS_ITMES } from '../../../core/unit/spot';

export default withRouter(function (props) {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Item>
          <S.Text
            href="/scenicSpot"
            active={props.history.location.pathname === '/scenicSpot'}
          >
            首頁
          </S.Text>
        </S.Item>
        <S.Item>
          <S.Text active={props.history.location.pathname !== '/scenicSpot'}>
            縣市
          </S.Text>
          <S.Dropdown>
            {SPOTS_ITMES.map((values) => {
              return (
                <div key={values.en_name}>
                  <S.DropdownItem
                    href={`/scenicSpot/${values.en_name}`}
                    active={
                      props.history.location.pathname ===
                      `/scenicSpot/${values.en_name}`
                    }
                  >
                    {values.zh_name}
                  </S.DropdownItem>
                </div>
              );
            })}
          </S.Dropdown>
        </S.Item>
      </S.Box>
    </S.Wrapper>
  );
});
