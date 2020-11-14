import Post from '../Post/Post';

const FeedList = ({ feeds }) => {
  return (
    <div id='FeedList'>
      {feeds.map((feed, idx) => {
        return <Post key={idx} post={feed} />;
      })}
    </div>
  );
};

export default FeedList;
