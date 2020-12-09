import Icon from '../Icon/Icon';
import './Post.scss';

// caption: "Me gustan los hooks, snippet y emmets"
// media_url: "https://raw.githubusercontent.com/JoseLuisFriedrich/coder-after-2020-11-13/master/public/images/01.jpg"
// timestamp: "2019-12-16T23:55:36+0000"
// username: "José Luis"

const Post = ({ post }) => {
  return (
    <div id='Post'>
      <div>
        <img src={post.media_url} alt={post.username} />
        <p>{post.username}</p>
        <p>{new Date(post.timestamp).toDateString()}</p>
      </div>

      <img src={post.media_url} alt={post.username} />
      <Icon iconName='heart' />
      <Icon iconName='comments' />
      <Icon iconName='paper-plane' />

      <p>{post.caption}</p>
    </div>
  );
};

export default Post;
