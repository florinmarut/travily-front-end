import { Link } from "react-router-dom";
import { UserMiniCard } from "./UserMiniCard";

export const PostCard = ({postId, showUser, userId, content, createDate, updateDate, votes, location }) => {
    return (
        <div>
            {showUser && <UserMiniCard userId={userId}/>}
            <Link to={{
            pathname: `/post/${postId}`
          }}>
            <p>Location: {location}</p>
            <p>Content: {content}</p>
            <p>Created at: {createDate}</p>
            <p>Updated at: {updateDate}</p>
            <p>Votes: {votes}</p>
            </Link>
        </div>
    )
}

export default PostCard;