import { useEffect, useState } from 'react';
import FeedList from '../../components/FeedList/FeedList';

const FeedContainer = () => {
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://my-json-server.typicode.com/JoseLuisFriedrich/coder-react.js-2020-11-13-clone-instagram/feeds';

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setFeeds(response);
          setLoading(false);
        });
    }, 3000);
  }, []);

  return <div id='FeedContainer'>{loading ? <h1>Loading</h1> : <FeedList feeds={feeds} />}</div>;
};

export default FeedContainer;
