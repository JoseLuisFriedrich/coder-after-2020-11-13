import { useEffect, useState } from 'react';
import FeedList from '../../components/FeedList/FeedList';
import useFetch from '../../customHooks/useFetch';

const FeedContainerExtra = () => {
  const url = 'https://my-json-server.typicode.com/JoseLuisFriedrich/coder-after-2020-11-13/feeds';
  const [feeds, loading] = useFetch([], url);

  return <div id='FeedContainer'>{loading ? <h1>Loading</h1> : <FeedList feeds={feeds} />}</div>;
};

export default FeedContainerExtra;
