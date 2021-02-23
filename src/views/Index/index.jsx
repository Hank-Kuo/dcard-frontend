import React, { useEffect, useState, useRef, useCallback } from 'react';

import Card from '../../components/Card';
import { S } from './styles';

import { spotAPI } from '../../api';

export default function Index(props) {
  // initial state
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  // call api
  useEffect(() => {
    if (props.match.params.city) {
      spotAPI.get(props.match.params.city, pageNumber).then((values) => {
        setData(values);
        setLoading(false);
        setHasMore(values.length > 0);
      });
    } else {
      spotAPI.fetch(pageNumber).then((values) => {
        setData(values);
        setLoading(false);
        setHasMore(values.length > 0);
      });
    }
  }, [hasMore, pageNumber]);

  // ref
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoading(true);
          setTimeout(() => {
            setPageNumber((prev) => prev + 1);
          }, 700);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore],
  );

  // render UI
  return (
    <S.Wrapper>
      <S.Title>Dcard Frontend Demo</S.Title>
      <S.Box>
        {data.map((values, index) => {
          if (data.length === index + 1) {
            return (
              <div key={values.ID} ref={lastElementRef}>
                <Card
                  name={values.Name}
                  city={values.City}
                  address={values.Address}
                  description={values.Description}
                />
              </div>
            );
          } else {
            return (
              <Card
                key={values.ID}
                name={values.Name}
                city={values.City}
                address={values.Address}
                description={values.Description}
              />
            );
          }
        })}
      </S.Box>
      <S.Loading>{loading && 'Loading...'}</S.Loading>
    </S.Wrapper>
  );
}
